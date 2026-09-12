# -*- coding: utf-8 -*-
"""
捷链供应链独立站 — 每日安全巡检脚本
检查：可用性(HTTP 200)、被篡改/挂马(可疑脚本/外链)、死链(关键资源 404)、CNAME/证书。
结果追加写入 security-log，并打印摘要。无异常时静默（仅记日志）。
"""
import json, os, re, ssl, socket, sys
import urllib.request

BASE = "https://www.jieliansupply.com"
SITE_DIR = os.path.dirname(os.path.abspath(__file__))
LOG = os.path.join(SITE_DIR, "security-log", "daily-check.log")

# 需要检查的页面
PAGES = [
    "/",
    "/index.html",
    "/tile-catalog.html",
    "/tools-catalog.html",
    "/lights-catalog.html",
    "/sanitary-catalog.html",
]

# 本地关键资源（相对仓库根），用于比对线上是否存在（防死链）
LOCAL_ASSETS = [
    "css/styles.css", "css/catalog.css", "css/tile-catalog.css",
    "js/data.js", "js/main.js",
    "images/hero-service.jpg", "images/about-warehouse.jpg",
    "robots.txt", "sitemap.xml",
]

# 疑似挂马/恶意脚本的特征
SUSPICIOUS_PATTERNS = [
    r"<script[^>]*src=[\"']https?://(?!www\.jieliansupply\.com)[^\"']+",  # 外部第三方脚本
    r"eval\s*\(\s*unescape",        # 常见混淆
    r"document\.write\s*\(\s*unescape",
    r"fromCharCode",                # 常见恶意混淆
    r"\.php\?",                     # 静态站不应有 php 接口
    r"href=[\"']javascript:",       # 可疑 js 协议
    r"iframe[^>]*src=[\"'][^\"']*", # 可疑 iframe 注入
    r"<script[^>]*src=[\"']data:",  # data 协议脚本
]

def fetch(url, timeout=20):
    req = urllib.request.Request(url, headers={"User-Agent": "Jielian-Security-Check/1.0"})
    ctx = ssl.create_default_context()
    with urllib.request.urlopen(req, timeout=timeout, context=ctx) as r:
        return r.status, r.read().decode("utf-8", "ignore"), dict(r.headers)

def check_cname():
    """DNS 解析 + 证书有效性"""
    try:
        ip = socket.gethostbyname("www.jieliansupply.com")
        return {"resolve_ok": True, "ip": ip}
    except Exception as e:
        return {"resolve_ok": False, "error": str(e)}

def main():
    results = []
    issues = []
    ok = True

    # 1. 页面可用性
    for p in PAGES:
        url = BASE + p
        try:
            code, body, headers = fetch(url)
            results.append(f"[页面] {p} -> HTTP {code}")
            if code != 200:
                ok = False
                issues.append(f"页面异常 {p}: HTTP {code}")
            # 2. 篡改检查：只对首页和目录页做
            for pat in SUSPICIOUS_PATTERNS:
                m = re.search(pat, body, re.IGNORECASE)
                if m:
                    ok = False
                    issues.append(f"疑似篡改 {p}: 命中特征 {pat!r} -> {m.group(0)[:80]}")
        except Exception as e:
            ok = False
            issues.append(f"无法访问 {p}: {e}")

    # 3. 关键资源死链检查
    for a in LOCAL_ASSETS:
        url = BASE + "/" + a
        try:
            code, _, _ = fetch(url)
            if code != 200:
                ok = False
                issues.append(f"资源缺失 {a}: HTTP {code}")
        except Exception as e:
            ok = False
            issues.append(f"资源异常 {a}: {e}")

    # 4. CNAME/解析
    dns = check_cname()
    if not dns.get("resolve_ok"):
        ok = False
        issues.append(f"DNS 解析失败: {dns.get('error')}")

    # 写日志
    os.makedirs(os.path.dirname(LOG), exist_ok=True)
    import datetime
    ts = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    status = "OK" if ok else "ISSUES"
    lines = [f"[{ts}] 巡检结果: {status}"]
    lines += results
    if issues:
        lines.append("--- 异常项 ---")
        lines += ["  " + i for i in issues]
    lines.append("")
    with open(LOG, "a", encoding="utf-8") as f:
        f.write("\n".join(lines))

    # 打印摘要
    print(f"[{ts}] 每日安全巡检: {status}")
    for r in results:
        print("  " + r)
    if issues:
        print("异常项:")
        for i in issues:
            print("  - " + i)
    else:
        print("无异常。")
    sys.exit(0 if ok else 1)

if __name__ == "__main__":
    main()
