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
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const message = form.querySelector("#message").value.trim();
      const phone = form.querySelector("#phone").value.trim();
      const country = form.querySelector("#country").value.trim();

      const t = function (k, fallback) {
        return window.I18N && window.I18N[document.documentElement.lang]
          ? (window.I18N[document.documentElement.lang][k] || fallback) : fallback;
      };

      if (!name || !message) {
        formStatus.textContent = t("form_fill", "请填写姓名与需求描述");
        formStatus.style.color = "#cf2e2e";
        return;
      }

      // 组装 WhatsApp 消息内容
      const lines = [];
      lines.push(t("wa_greet", "询盘（来自捷链供应链官网）"));
      lines.push(t("wa_name", "姓名") + ": " + name);
      if (email) lines.push(t("wa_email", "邮箱") + ": " + email);
      if (phone) lines.push(t("wa_phone", "电话") + ": " + phone);
      if (country) lines.push(t("wa_country", "国家/地区") + ": " + country);
      lines.push("");
      lines.push(t("wa_req", "需求描述") + ": " + message);

      const text = lines.join("\n");
      const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);

      // 新窗口打开 WhatsApp
      window.open(url, "_blank", "noopener");
      formStatus.textContent = t("form_ok", "已为您打开 WhatsApp，发送即可联系我们！");
      formStatus.style.color = "#0f9d58";
    });
  }

  /* ---------- 页脚年份 ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
