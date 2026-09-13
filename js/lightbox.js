/* ==========================================================================
   捷链供应链 - 产品图灯箱（点击放大单独展示）
   通用组件：监听 .tile-img img 点击，弹出浮层放大查看
   支持：点击放大 / 左右切换同分类图片 / ESC & 点击遮罩关闭 / 移动端手势
   ========================================================================== */
(function () {
  "use strict";

  // 只初始化一次
  if (window.__jielianLightbox) return;
  window.__jielianLightbox = true;

  var overlay = null;
  var figure = null;
  var imgEl = null;
  var captionEl = null;
  var counterEl = null;
  var prevBtn = null;
  var nextBtn = null;

  // 当前可浏览的图片列表 + 索引
  var list = [];
  var index = 0;

  function build() {
    if (overlay) return;

    overlay = document.createElement("div");
    overlay.className = "lb-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Image viewer");

    overlay.innerHTML =
      '<button class="lb-close" type="button" aria-label="Close">&#10005;</button>' +
      '<button class="lb-nav lb-prev" type="button" aria-label="Previous">&#10094;</button>' +
      '<button class="lb-nav lb-next" type="button" aria-label="Next">&#10095;</button>' +
      '<figure class="lb-figure">' +
        '<div class="lb-imgwrap"><img class="lb-img" alt=""></div>' +
        '<figcaption class="lb-caption"></figcaption>' +
      '</figure>' +
      '<div class="lb-counter"></div>';

    document.body.appendChild(overlay);

    figure = overlay.querySelector(".lb-figure");
    imgEl = overlay.querySelector(".lb-img");
    captionEl = overlay.querySelector(".lb-caption");
    counterEl = overlay.querySelector(".lb-counter");
    prevBtn = overlay.querySelector(".lb-prev");
    nextBtn = overlay.querySelector(".lb-next");

    overlay.querySelector(".lb-close").addEventListener("click", close);
    prevBtn.addEventListener("click", function (e) { e.stopPropagation(); show(index - 1); });
    nextBtn.addEventListener("click", function (e) { e.stopPropagation(); show(index + 1); });

    // 点击遮罩（非图片区域）关闭
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target.classList.contains("lb-imgwrap")) close();
    });

    // 键盘
    document.addEventListener("keydown", function (e) {
      if (!overlay || overlay.style.display !== "flex") return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(index - 1);
      else if (e.key === "ArrowRight") show(index + 1);
    });

    // 移动端左右滑动
    var touchX = null;
    overlay.addEventListener("touchstart", function (e) {
      touchX = e.changedTouches[0].clientX;
    }, { passive: true });
    overlay.addEventListener("touchend", function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) {
        if (dx < 0) show(index + 1);
        else show(index - 1);
      }
      touchX = null;
    }, { passive: true });
  }

  function show(i) {
    if (!list.length) return;
    index = (i + list.length) % list.length;
    var item = list[index];

    imgEl.src = item.src;
    imgEl.alt = item.alt || "";
    captionEl.textContent = item.caption || "";
    counterEl.textContent = (index + 1) + " / " + list.length;

    prevBtn.style.display = list.length > 1 ? "flex" : "none";
    nextBtn.style.display = list.length > 1 ? "flex" : "none";

    overlay.style.display = "flex";
    document.body.classList.add("lb-open");
  }

  function close() {
    if (overlay) overlay.style.display = "none";
    document.body.classList.remove("lb-open");
    // 释放图片引用，避免后台继续加载
    if (imgEl) imgEl.removeAttribute("src");
  }

  function open(src, alt, caption) {
    build();
    list = [{ src: src, alt: alt, caption: caption }];
    index = 0;
    show(0);
  }

  // 收集同一卡片墙内的所有图片，支持左右切换
  function openWithContext(img) {
    build();
    var group = [];
    var all = document.querySelectorAll(".tile-img img");
    all.forEach(function (im) {
      if (im.getAttribute("src")) {
        group.push({
          src: im.getAttribute("src"),
          alt: im.getAttribute("alt") || "",
          caption: im.getAttribute("alt") || ""
        });
      }
    });
    list = group;
    var idx = group.findIndex(function (g) { return g.src === img.getAttribute("src"); });
    index = idx >= 0 ? idx : 0;
    show(index);
  }

  // 事件委托：点击产品图放大
  document.addEventListener("click", function (e) {
    var img = e.target.closest ? e.target.closest(".tile-img img") : null;
    if (!img || !img.getAttribute("src")) return;
    e.preventDefault();
    openWithContext(img);
  });

  // 暴露 API（供需要手动触发的地方使用）
  window.jielianLightbox = {
    open: open,
    close: close
  };
})();
