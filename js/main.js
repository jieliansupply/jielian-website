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

  /* ---------- 恢复上次语言选择 ---------- */
  let savedLang = null;
  try { savedLang = localStorage.getItem("jielian_lang"); } catch (e) {}
  if (savedLang === "zh" || savedLang === "en") {
    applyLang(savedLang);
  } else {
    applyLang("en");
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

  /* ---------- 联系表单（前端原型：本地提示，不真正提交） ---------- */
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const message = form.querySelector("#message").value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = window.I18N && window.I18N[document.documentElement.lang]
          ? window.I18N[document.documentElement.lang].form_fill : "请填写所有必填字段";
        formStatus.style.color = "#cf2e2e";
        return;
      }
      // 前端原型：仅展示成功提示，不发送真实邮件
      formStatus.textContent = window.I18N && window.I18N[document.documentElement.lang]
        ? window.I18N[document.documentElement.lang].form_ok : "感谢您的留言，我们会尽快与您联系！";
      formStatus.style.color = "#0f9d58";
      form.reset();
    });
  }

  /* ---------- 页脚年份 ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
