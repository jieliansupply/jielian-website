/* ==========================================================================
   捷链卫浴 - 产品目录页渲染与交互（卡片墙）
   ========================================================================== */
(function () {
  "use strict";

  var CAT = window.SANITARY_CATALOG || [];

  var I18N = {
    zh: {
      nav_home: "首页",
      nav_about: "关于我们",
      nav_tiles: "瓷砖目录",
      nav_tools: "锂电工具",
      nav_lights: "灯具照明",
      nav_sanitary: "卫浴洁具",
      nav_security: "安防监控",
      nav_electrical: "开关插座",
      nav_services: "服务",
      nav_contact: "联系我们",
      hero_title: "卫浴洁具产品目录",
      hero_sub: "厨房 / 面盆 / 浴缸龙头、淋浴花洒套装、连体 / 挂墙 / 智能座便器 — 不锈钢龙头五金与陶瓷洁具，支持 OEM/ODM。",
      model: "型号",
      name: "产品名称",
      type: "类型",
      size: "尺寸",
      trap: "坑距",
      material: "材质",
      feature: "特点",
      color: "颜色",
      inquiry: "咨询这款"
    },
    en: {
      nav_home: "Home",
      nav_about: "About Us",
      nav_tiles: "Tile Catalog",
      nav_tools: "Cordless Tools",
      nav_lights: "Lights & Fittings",
      nav_sanitary: "Sanitary Ware",
      nav_security: "Security",
      nav_electrical: "Switches & Sockets",
      nav_services: "Services",
      nav_contact: "Contact",
      hero_title: "Sanitary Ware Catalog",
      hero_sub: "Kitchen / basin / bathtub faucets, shower sets, one-piece / wall-hung / smart toilets — stainless steel faucets and ceramic sanitary ware, OEM/ODM available.",
      model: "Model",
      name: "Product",
      type: "Type",
      size: "Size",
      trap: "Roughing-in",
      material: "Material",
      feature: "Feature",
      color: "Color",
      inquiry: "Inquire"
    }
  };

  var lang = "zh";
  var WHATSAPP = "https://wa.me/8618565728237";

  var FIELD_ORDER = ["type", "size", "trap", "material", "feature", "color"];

  function renderTabs() {
    var tabs = document.getElementById("catTabs");
    if (!tabs) return;
    tabs.innerHTML = "";
    CAT.forEach(function (cat) {
      var a = document.createElement("a");
      a.href = "#" + cat.id;
      a.textContent = cat.name[lang] || cat.name.zh;
      tabs.appendChild(a);
    });
  }

  function renderContent() {
    var box = document.getElementById("catalogContent");
    if (!box) return;
    box.innerHTML = "";

    CAT.forEach(function (cat) {
      var section = document.createElement("section");
      section.className = "cat-section";
      section.id = cat.id;

      var head = document.createElement("div");
      head.className = "cat-section-head";
      head.innerHTML =
        '<h2>' + (cat.name[lang] || cat.name.zh) + "</h2>" +
        '<p class="cat-desc">' + (cat.desc[lang] || cat.desc.zh) + "</p>";
      section.appendChild(head);

      var grid = document.createElement("div");
      grid.className = "tile-grid";

      cat.items.forEach(function (it) {
        var card = document.createElement("article");
        card.className = "tile-card";

        var productName = (it.name && (it.name[lang] || it.name.zh)) || "";

        var waText = "Hello, I'm interested in your sanitary ware model " + it.model +
          (productName ? " (" + productName + ")" : "") + ". Please send more details.";

        var rows = [];
        rows.push([I18N[lang].model, it.model]);
        FIELD_ORDER.forEach(function (f) {
          if (it[f]) rows.push([I18N[lang][f], it[f]]);
        });

        var rowsHtml = rows.map(function (r) {
          return '<div class="spec-row"><span class="k">' + r[0] + '</span><span class="v">' + r[1] + '</span></div>';
        }).join("");

        card.innerHTML =
          '<div class="tile-img">' +
            '<img src="' + it.image + '" alt="' + it.model + '" loading="lazy">' +
            '<span class="tile-model">' + it.model + '</span>' +
          '</div>' +
          '<div class="tile-body">' +
            '<h3>' + it.model + (productName ? ' · ' + productName : '') + '</h3>' +
            '<div class="spec-list">' + rowsHtml + '</div>' +
            '<a class="btn btn-green tile-cta" href="#" data-wa="' + waText.replace(/"/g, '&quot;') + '">' +
              (I18N[lang].inquiry || "咨询这款") +
            '</a>' +
          '</div>';

        grid.appendChild(card);
      });

      section.appendChild(grid);
      box.appendChild(section);
    });
  }

  function applyLang(l) {
    lang = l;
    document.documentElement.setAttribute("lang", l === "zh" ? "zh-CN" : "en");

    document.querySelectorAll("[data-cat]").forEach(function (el) {
      var k = el.getAttribute("data-cat");
      if (I18N[l] && I18N[l][k] !== undefined) el.textContent = I18N[l][k];
    });

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === l);
    });

    renderTabs();
    renderContent();

    try { localStorage.setItem("jielian_lang", l); } catch (e) {}
  }

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang-btn"));
    });
  });

  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    });
  }

  var saved = null;
  try { saved = localStorage.getItem("jielian_lang"); } catch (e) {}
  if (saved === "zh" || saved === "en") {
    applyLang(saved);
  } else {
    var nav = (navigator.language || navigator.userLanguage || "zh").toLowerCase();
    applyLang(nav.indexOf("zh") === 0 ? "zh" : "en");
  }

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  /* ---------- 「咨询这款」按钮：弹出 WhatsApp 引导层（复制号码+内容，不跳转 wa.me） ---------- */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".tile-cta[data-wa]");
    if (!btn) return;
    e.preventDefault();
    var text = btn.getAttribute("data-wa") || "";
    if (window.showWaGuide) {
      window.showWaGuide(text);
    }
  });
})();