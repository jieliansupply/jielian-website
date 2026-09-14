/* ==========================================================================
   捷链供应链 - 前端交互脚本
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- 移动端导航开关 ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    // 点击导航项后收起
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    });
  }

  /* ---------- 语言切换（中英） ---------- */
  const langButtons = document.querySelectorAll(".lang-switch button");
  const applyLang = function (lang) {
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-lang]").forEach(function (el) {
      const key = el.getAttribute("data-lang");
      if (window.I18N && window.I18N[lang] && window.I18N[lang][key] !== undefined) {
        el.textContent = window.I18N[lang][key];
      }
    });
    langButtons.forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });
    try {
      localStorage.setItem("jielian_lang", lang);
    } catch (e) {}
    // 通知 data.js 刷新产品卡片
    document.dispatchEvent(new CustomEvent("langchanged", { detail: lang }));
  };

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang-btn"));
    });
  });

  /* ---------- 恢复上次语言选择 / 自动判断浏览器语言 ---------- */
  let savedLang = null;
  try { savedLang = localStorage.getItem("jielian_lang"); } catch (e) {}
  if (savedLang === "zh" || savedLang === "en") {
    applyLang(savedLang);
  } else {
    // 根据浏览器语言自动判断：中文环境默认中文，否则英文
    const nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    applyLang(nav.indexOf("zh") === 0 ? "zh" : "en");
  }

  /* ---------- 滚动高亮当前导航 ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
  const scrollSpy = function () {
    let current = "";
    sections.forEach(function (sec) {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.id;
    });
    navAnchors.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  };
  window.addEventListener("scroll", scrollSpy, { passive: true });
  scrollSpy();

  /* ---------- 滚动进入视口动画 ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("revealed"); });
  }

  /* ---------- 联系表单（跳转 WhatsApp 发送询盘） ---------- */
  const WHATSAPP_NUMBER = "8618565728237"; // 不带 + 号
  const CONTACT_EMAIL = "postmaster@jieliansupply.com";
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  if (form) {
    const t = function (k, fallback) {
      return window.I18N && window.I18N[document.documentElement.lang]
        ? (window.I18N[document.documentElement.lang][k] || fallback) : fallback;
    };

    // 校验并读取表单字段
    function readForm() {
      return {
        name: form.querySelector("#name").value.trim(),
        email: form.querySelector("#email").value.trim(),
        message: form.querySelector("#message").value.trim(),
        phone: form.querySelector("#phone").value.trim(),
        country: form.querySelector("#country").value.trim()
      };
    }

    // 组装询盘正文（邮箱 / WhatsApp 共用）
    function buildBody(f) {
      const lines = [];
      lines.push(t("wa_greet", "询盘（来自捷链供应链官网）"));
      lines.push(t("wa_name", "姓名") + ": " + f.name);
      if (f.email) lines.push(t("wa_email", "邮箱") + ": " + f.email);
      if (f.phone) lines.push(t("wa_phone", "电话") + ": " + f.phone);
      if (f.country) lines.push(t("wa_country", "国家/地区") + ": " + f.country);
      lines.push("");
      lines.push(t("wa_req", "需求描述") + ": " + f.message);
      return lines.join("\n");
    }

    function validate(f) {
      if (!f.name || !f.message) {
        formStatus.textContent = t("form_fill", "请填写姓名与需求描述");
        formStatus.style.color = "#cf2e2e";
        return false;
      }
      return true;
    }

    // 通过邮箱发送（mailto 打开客户邮件客户端）
    function sendByEmail(f) {
      const subject = t("wa_greet", "询盘（来自捷链供应链官网）");
      const body = buildBody(f);
      const url = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      window.location.href = url;
      formStatus.textContent = t("form_ok_email", "已为您打开邮件客户端，发送即可联系我们！");
      formStatus.style.color = "#0f9d58";
    }

    // 通过 WhatsApp 发送
    function sendByWhatsApp(f) {
      const body = buildBody(f);
      const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(body);
      window.open(url, "_blank", "noopener");
      formStatus.textContent = t("form_ok", "已为您打开 WhatsApp，发送即可联系我们！");
      formStatus.style.color = "#0f9d58";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const f = readForm();
      if (!validate(f)) return;
      const via = e.submitter && e.submitter.getAttribute("data-via");
      if (via === "email") {
        sendByEmail(f);
      } else {
        sendByWhatsApp(f);
      }
    });
  }

  /* ---------- 邮箱防爬（base64 解码，避免爬虫抓取明文） ---------- */
  document.querySelectorAll("[data-mail]").forEach(function (el) {
    try {
      const email = atob(el.getAttribute("data-mail"));
      el.href = "mailto:" + email;
      const prefix = el.textContent.trim();
      el.textContent = prefix ? prefix + " " + email : email;
    } catch (e) {}
  });

  /* ---------- 页脚年份 ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ==========================================================================
     首页产品搜索框（指引客户搜感兴趣的产品并直接展示）
     ========================================================================== */
  const psInput = document.getElementById("psInput");
  if (psInput) {
    const psClear = document.getElementById("psClear");
    const psResults = document.getElementById("psResults");
    const psChips = document.getElementById("psChips");

    // 复用 data.js 里的图标（映射与 data.js 保持一致）
    const PS_ICON = {
      bath: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M6 12V5a2 2 0 0 1 2-2h1.5M21 12V8"/></svg>',
      tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2-2z"/></svg>',
      cable: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3c4 8 12 8 16 0"/><path d="M4 9c4 6 12 6 16 0"/><path d="M4 15c4 4 12 4 16 0"/></svg>',
      bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>',
      bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z"/></svg>',
      layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
      box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',
      shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      wind: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2M17.5 8a2.5 2.5 0 1 1 2.4 3H2"/></svg>',
      hardhat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/><path d="M10 15V6a2 2 0 1 1 4 0v9"/><path d="M2 15a10 10 0 0 1 20 0"/></svg>',
      wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2-2z"/></svg>'
    };

    const currentLang = function () {
      const l = document.documentElement.getAttribute("lang") || "en";
      return l === "zh" ? "zh" : "en";
    };

    const applyPlaceholder = function () {
      const l = currentLang();
      psInput.placeholder = psInput.getAttribute(l === "zh" ? "data-ph-zh" : "data-ph-en");
    };

    // 快捷分类 chips：取前几个有代表性的分类（有目录页的优先 + 常用）
    const CHIP_KEYS = ["sanitary", "tiles", "powertools", "lights", "hardware", "cables", "electrical"];
    const renderChips = function () {
      const l = currentLang();
      psChips.innerHTML = "";
      CHIP_KEYS.forEach(function (k) {
        const p = (window.PRODUCTS || []).find(function (x) { return x.key === k; });
        if (!p) return;
        const txt = p[l] || p.en;
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "ps-chip";
        chip.textContent = txt.name;
        chip.addEventListener("click", function () {
          psInput.value = txt.name;
          runSearch(txt.name);
        });
        psChips.appendChild(chip);
      });
    };

    const runSearch = function (q) {
      const l = currentLang();
      q = (q || "").trim().toLowerCase();
      psClear.classList.toggle("show", !!q);
      if (!q) {
        psResults.hidden = true;
        psResults.innerHTML = "";
        return;
      }
      const list = window.PRODUCTS || [];
      const matches = [];
      list.forEach(function (p) {
        const zh = p.zh || {};
        const en = p.en || {};
        const haystack = [
          zh.name, zh.desc, (zh.tags || []).join(" "),
          en.name, en.desc, (en.tags || []).join(" ")
        ].join(" ").toLowerCase();
        if (haystack.indexOf(q) !== -1) matches.push(p);
      });

      psResults.innerHTML = "";
      if (matches.length === 0) {
        psResults.innerHTML = '<div class="ps-empty">' +
          (l === "zh" ? "没有找到匹配的产品，试试其他关键词，或直接联系我们获取更多产品。" : "No matching products. Try another keyword, or contact us for more.") +
          "</div>";
      } else {
        matches.forEach(function (p) {
          const txt = p[l] || p.en;
          const go = l === "zh" ? "查看 →" : "View →";
          const row = document.createElement("div");
          row.className = "ps-result";
          row.innerHTML =
            '<span class="ic">' + (PS_ICON[p.icon] || PS_ICON.box) + "</span>" +
            '<span class="t"><span class="n">' + txt.name + '</span><span class="d">' + txt.desc + "</span></span>" +
            '<span class="go">' + go + "</span>";
          row.addEventListener("click", function () {
            if (p.link) { window.location.href = p.link; }
            else {
              document.getElementById("products").scrollIntoView({ behavior: "smooth" });
              hideResults();
            }
          });
          psResults.appendChild(row);
        });
      }
      psResults.hidden = false;
    };

    const hideResults = function () {
      psResults.hidden = true;
    };

    psInput.addEventListener("input", function () { runSearch(psInput.value); });
    psInput.addEventListener("focus", function () { if (psInput.value.trim()) runSearch(psInput.value); });
    psClear.addEventListener("click", function () {
      psInput.value = "";
      runSearch("");
      psInput.focus();
    });

    // 点击搜索框外关闭结果
    document.addEventListener("click", function (e) {
      const box = document.getElementById("productSearch");
      if (box && !box.contains(e.target)) hideResults();
    });

    // 语言切换时重绘 chips / placeholder / 结果
    document.addEventListener("langchanged", function () {
      applyPlaceholder();
      renderChips();
      if (psInput.value.trim()) runSearch(psInput.value);
    });

    applyPlaceholder();
    renderChips();
  }
})();
