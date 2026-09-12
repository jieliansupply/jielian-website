/* ==========================================================================
   捷链瓷砖 - 产品目录页渲染与交互（卡片墙形式）
   ========================================================================== */
(function () {
  "use strict";

  var CAT = window.TILE_CATALOG || [];

  var I18N = {
    zh: {
      nav_home: "首页",
      nav_about: "关于我们",
      nav_tiles: "瓷砖目录",
      nav_tools: "锂电工具",
      nav_lights: "灯具照明",
      nav_sanitary: "卫浴洁具",
      nav_services: "服务",
      nav_contact: "联系我们",
      hero_title: "瓷砖产品目录",
      hero_sub: "通体大理石瓷砖 — 亮面 / 天鹅绒柔光面，800×800mm，无限连纹，支持 OEM/ODM。",
      model: "型号",
      color: "花色",
      finish: "表面工艺",
      size: "规格",
      pattern: "纹理",
      gallery: "品类配图",
      inquiry: "咨询这款"
    },
    en: {
      nav_home: "Home",
      nav_about: "About Us",
      nav_tiles: "Tile Catalog",
      nav_tools: "Cordless Tools",
      nav_lights: "Lights & Fittings",
      nav_sanitary: "Sanitary Ware",
      nav_services: "Services",
      nav_contact: "Contact",
      hero_title: "Tile Catalog",
      hero_sub: "Full-body marble tiles — glossy / velvet soft finish, 800×800mm, continuous vein, OEM/ODM available.",
      model: "Model",
      color: "Color",
      finish: "Finish",
      size: "Size",
      pattern: "Pattern",
      gallery: "Category image",
      inquiry: "Inquire"
    }
  };

  var lang = "zh";
  var WHATSAPP = "https://wa.me/8618565728237";

  /* ---------- 渲染分类 Tab ---------- */
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

  /* ---------- 渲染卡片墙 ---------- */
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

      // 品类配图
      if (cat.image) {
        var fig = document.createElement("figure");
        fig.className = "cat-figure";
        fig.innerHTML =
          '<img src="' + cat.image + '" alt="' + (cat.name[lang] || cat.name.zh) + '" loading="lazy">' +
          '<figcaption>' + (I18N[lang].gallery || "品类配图") + "</figcaption>";
        section.appendChild(fig);
      }

      // 产品卡片墙
      var grid = document.createElement("div");
      grid.className = "tile-grid";

      cat.items.forEach(function (it) {
        var card = document.createElement("article");
        card.className = "tile-card";

        // 产品名称/花色（兼容 name 与 color 两种字段）
        var productName = (it.name && (it.name[lang] || it.name.zh)) ||
                          (it.color && (it.color[lang] || it.color.zh)) || "";

        var waText = encodeURIComponent(
          "Hello, I'm interested in your tile model " + it.model +
          (productName ? " (" + productName + ")" : "") + ". Please send more details."
        );
        var waLink = WHATSAPP + "?text=" + waText;

        // 动态拼装规格行（跳过不存在的字段）
        var rows = [];
        rows.push([I18N[lang].model, it.model]);
        if (it.name) rows.push([I18N[lang].color, it.name[lang] || it.name.zh]);
        if (it.color) rows.push([I18N[lang].color, it.color[lang] || it.color.zh]);
        if (it.finish) rows.push([I18N[lang].finish, it.finish[lang] || it.finish.zh]);
        if (it.size) rows.push([I18N[lang].size, it.size]);
        if (it.pattern) rows.push([I18N[lang].pattern, it.pattern[lang] || it.pattern.zh]);

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

  /* ---------- 语言切换 ---------- */
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

  /* ---------- 移动端导航 ---------- */
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

  /* ---------- 初始化语言 ---------- */
  var saved = null;
  try { saved = localStorage.getItem("jielian_lang"); } catch (e) {}
  if (saved === "zh" || saved === "en") {
    applyLang(saved);
  } else {
    var nav = (navigator.language || navigator.userLanguage || "zh").toLowerCase();
    applyLang(nav.indexOf("zh") === 0 ? "zh" : "en");
  }

  /* ---------- 页脚年份 ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
