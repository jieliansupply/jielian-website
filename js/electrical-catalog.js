/* ==========================================================================
   捷链开关插座 - 产品目录页渲染与交互（卡片墙）
   ========================================================================== */
(function () {
  "use strict";

  var CAT = window.ELECTRICAL_CATALOG || [];

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
      hero_title: "开关插座产品目录",
      hero_sub: "欧式 / 英式标准墙壁开关插座（超薄 · 窄框 · 玻璃 · 肤感 · 纹理多系列）+ 轨道插座，多国标准插孔，支持 OEM/ODM。",
      model: "系列",
      name: "产品名称",
      type: "规格",
      material: "材质",
      feature: "功能",
      color: "颜色",
      models: "型号范围",
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
      hero_title: "Switches & Sockets Catalog",
      hero_sub: "European / British standard wall switches & sockets (ultra-thin · narrow-frame · glass · skin-touch · texture series) + power track sockets, multi-country sockets, OEM/ODM available.",
      model: "Series",
      name: "Product",
      type: "Spec",
      material: "Material",
      feature: "Feature",
      color: "Color",
      models: "Model Range",
      inquiry: "Inquire"
    }
  };

  var lang = "zh";
  var WHATSAPP = "https://wa.me/8618565728237";

  var FIELD_ORDER = ["type", "material", "feature", "color", "models"];

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

        var waText = encodeURIComponent(
          "Hello, I'm interested in your switches & sockets series " + it.model +
          (productName ? " (" + productName + ")" : "") + ". Please send more details."
        );
        var waLink = WHATSAPP + "?text=" + waText;

        var rows = [];
        rows.push([I18N[lang].model, it.model]);
        FIELD_ORDER.forEach(function (f) {
          if (it[f]) rows.push([I18N[lang][f], it[f]]);
        });

        var rowsHtml = rows.map(function (r) {
          return '<div class="spec-row"><span class="k">' + r[0] + '</span><span class="v">' + r[1] + '</span></div>';
        }).join("");

        var imgHtml = it.image
          ? '<img src="' + it.image + '" alt="' + it.model + '" loading="lazy">'
          : '<div class="tile-noimg">' + it.model + '</div>';

        card.innerHTML =
          '<div class="tile-img">' +
            imgHtml +
            '<span class="tile-model">' + it.model + '</span>' +
          '</div>' +
          '<div class="tile-body">' +
            '<h3>' + it.model + (productName ? ' · ' + productName : '') + '</h3>' +
            '<div class="spec-list">' + rowsHtml + '</div>' +
            '<a class="btn btn-green tile-cta" href="' + waLink + '" target="_blank" rel="noopener">' +
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
})();
