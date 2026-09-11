/* ==========================================================================
   捷链卫浴 - 产品目录页渲染与交互
   ========================================================================== */
(function () {
  "use strict";

  var CAT = window.CATALOG || [];

  /* ---------- 目录页双语字典 ---------- */
  var I18N = {
    zh: {
      hero_title: "卫浴产品目录",
      hero_sub: "全系列陶瓷卫浴洁具 — 坐便器、洗手盆、蹲便器、小便器，支持定制与 OEM/ODM。",
      model: "型号",
      size: "规格 (mm)",
      gallery: "图册页"
    },
    en: {
      hero_title: "Sanitary Ware Catalog",
      hero_sub: "Full range of ceramic sanitary ware — toilets, basins, squatting pans and urinals, with OEM/ODM support.",
      model: "Model",
      size: "Size (mm)",
      gallery: "Catalog page"
    }
  };

  var lang = "zh";

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

  /* ---------- 渲染目录主体 ---------- */
  function renderContent() {
    var box = document.getElementById("catalogContent");
    if (!box) return;
    box.innerHTML = "";

    CAT.forEach(function (cat) {
      var section = document.createElement("section");
      section.className = "cat-section";
      section.id = cat.id;

      // 分类标题
      var head = document.createElement("div");
      head.className = "cat-section-head";
      head.innerHTML =
        '<h2>' + (cat.name[lang] || cat.name.zh) + "</h2>" +
        '<p class="cat-desc">' + (cat.desc[lang] || cat.desc.zh) + "</p>";
      section.appendChild(head);

      // 图册配图
      if (cat.image) {
        var fig = document.createElement("figure");
        fig.className = "cat-figure";
        fig.innerHTML =
          '<img src="' + cat.image + '" alt="' + (cat.name[lang] || cat.name.zh) + '" loading="lazy">' +
          '<figcaption>' + (I18N[lang].gallery || "图册页") + "</figcaption>";
        section.appendChild(fig);
      }

      // 分组
      (cat.groups || []).forEach(function (g) {
        var group = document.createElement("div");
        group.className = "cat-group";

        var gh = document.createElement("div");
        gh.className = "cat-group-head";
        gh.innerHTML =
          '<h3>' + (g.name[lang] || g.name.zh) + "</h3>" +
          (g.note ? '<span class="cat-group-note">' + (g.note[lang] || g.note.zh) + "</span>" : "");
        group.appendChild(gh);

        // 型号表格
        var table = document.createElement("table");
        table.className = "cat-table";
        var thead = document.createElement("thead");
        thead.innerHTML =
          "<tr><th>" + (I18N[lang].model || "型号") + "</th>" +
          "<th>" + (I18N[lang].size || "规格") + "</th>" +
          (g.items.some(function (it) { return it.note; }) ? "<th></th>" : "") +
          "</tr>";
        table.appendChild(thead);

        var tbody = document.createElement("tbody");
        g.items.forEach(function (it) {
          var tr = document.createElement("tr");
          var tdModel = document.createElement("td");
          tdModel.className = "model";
          tdModel.textContent = it.model;
          tr.appendChild(tdModel);

          var tdSize = document.createElement("td");
          tdSize.className = "size";
          tdSize.textContent = it.size;
          tr.appendChild(tdSize);

          if (g.items.some(function (x) { return x.note; })) {
            var tdNote = document.createElement("td");
            tdNote.className = "note";
            tdNote.textContent = it.note ? (it.note[lang] || it.note.zh) : "";
            tr.appendChild(tdNote);
          }

          tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        group.appendChild(table);
        section.appendChild(group);
      });

      box.appendChild(section);
    });
  }

  /* ---------- 语言切换 ---------- */
  function applyLang(l) {
    lang = l;
    document.documentElement.setAttribute("lang", l === "zh" ? "zh-CN" : "en");

    // 静态 data-cat 文案
    document.querySelectorAll("[data-cat]").forEach(function (el) {
      var k = el.getAttribute("data-cat");
      if (I18N[l] && I18N[l][k] !== undefined) el.textContent = I18N[l][k];
    });

    // 切换按钮状态
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === l);
    });

    // 重绘 tabs 和内容
    renderTabs();
    renderContent();

    try { localStorage.setItem("jielian_lang", l); } catch (e) {}
  }

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang-btn"));
    });
  });

  /* ---------- 移动端导航开关 ---------- */
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
