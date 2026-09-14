/* ============================================================
   全局联系组件（所有页面通用）
   - 解码 base64 邮箱链接（修复目录页邮箱死链接）
   - 注入浮动联系按钮（WhatsApp / 邮箱 / 电话）
   不依赖 main.js，可独立引入
   ============================================================ */
(function () {
  "use strict";

  var CONTACT = {
    phone: "+8618565728237",
    phoneDisplay: "+86 185 6572 8237",
    whatsapp: "8618565728237",
    email: "postmaster@jieliansupply.com",
    emailB64: "cG9zdG1hc3RlckBqaWVsaWFuc3VwcGx5LmNvbQ=="
  };

  function decodeEmail(b64) {
    try { return atob(b64); } catch (e) { return null; }
  }

  /* ---------- 1. 解码所有 base64 邮箱链接 ---------- */
  var mailEls = document.querySelectorAll("[data-mail]");
  for (var i = 0; i < mailEls.length; i++) {
    var el = mailEls[i];
    var email = decodeEmail(el.getAttribute("data-mail")) || CONTACT.email;
    el.href = "mailto:" + email;
    var prefix = el.textContent.trim();
    if (prefix === "✉️" || prefix === "✉" || prefix === "") {
      el.textContent = "✉️ " + email;
    }
  }

  /* ---------- 2. 注入浮动联系按钮 ---------- */
  var fab = document.createElement("div");
  fab.className = "contact-fab";
  fab.setAttribute("aria-label", "联系我们");
  fab.innerHTML =
    '<a class="fab-btn fab-wa" href="https://wa.me/' + CONTACT.whatsapp +
      '?text=' + encodeURIComponent("您好，我想咨询产品。") + '" target="_blank" rel="noopener" aria-label="WhatsApp 联系">' +
      '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"/><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z"/></svg>' +
      '<span class="fab-label">WhatsApp</span>' +
    '</a>' +
    '<a class="fab-btn fab-mail" href="mailto:' + CONTACT.email + '" aria-label="邮箱联系">' +
      '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>' +
      '<span class="fab-label">' + CONTACT.email + '</span>' +
    '</a>' +
    '<a class="fab-btn fab-tel" href="tel:' + CONTACT.phone + '" aria-label="电话联系">' +
      '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
      '<span class="fab-label">' + CONTACT.phoneDisplay + '</span>' +
    '</a>';

  document.body.appendChild(fab);
})();
