/* ==========================================================================
   捷链供应链 - 产品数据 + 中英双语字典
   ========================================================================== */

/* ---------- 产品分类（11 大类，参照建材供应商行业结构） ---------- */
window.PRODUCTS = [
  {
    key: "sanitary",
    icon: "bath",
    zh: { name: "卫浴洁具", desc: "浴室五金配件、花洒、洗手盆、浴缸、地漏、厨房龙头等全系列卫浴产品。", tags: ["花洒", "洗手盆", "龙头", "马桶", "浴缸"] },
    en: { name: "Plumbing & Sanitary", desc: "Bathroom fittings, shower accessories, wash basins, baths, floor drains, kitchen faucets and more.", tags: ["Showers", "Basins", "Faucets", "WC", "Bathtubs"] }
  },
  {
    key: "hardware",
    icon: "tool",
    zh: { name: "五金紧固件", desc: "不锈钢/碳钢/镀锌紧固件，螺栓、螺母、螺钉、弹簧垫圈、螺纹杆、膨胀螺栓等。", tags: ["螺栓", "螺母", "螺钉", "垫圈", "螺纹杆"] },
    en: { name: "Hardware & Fasteners", desc: "SS, MS & GI fasteners — bolts, nuts, screws, spring washers, threaded rods, anchor bolts and more.", tags: ["Bolts", "Nuts", "Screws", "Washers", "Rods"] }
  },
  {
    key: "cables",
    icon: "cable",
    zh: { name: "电缆电线", desc: "铠装电缆、单芯/多芯电线、PVC 软电缆、控制电缆、建筑电线、同轴电缆等。", tags: ["铠装电缆", "多芯线", "控制线", "网线", "同轴"] },
    en: { name: "Cables & Wires", desc: "Armored cables, single & multi-core wires, PVC flexible cables, control, building & coaxial cables.", tags: ["Armored", "Multi-core", "Control", "Coaxial"] }
  },
  {
    key: "electrical",
    icon: "bolt",
    zh: { name: "配电与开关", desc: "配电箱、MCB/MCCB/RCCB、隔离开关、继电器、定时器、开关插座等电气产品。", tags: ["配电箱", "断路器", "隔离开关", "继电器", "插座"] },
    en: { name: "Distribution & Switchgear", desc: "Distribution boards, MCB/MCCB/RCCB, isolators, relays, timers, switches & sockets.", tags: ["MDB", "MCB", "Isolators", "Relays", "Sockets"] }
  },
  {
    key: "lights",
    icon: "bulb",
    zh: { name: "灯具照明", desc: "室内外照明、工业/防水/水下照明、LED 灯具、调光器及灯具配件等。", tags: ["LED", "工业照明", "防水灯", "户外灯", "调光"] },
    en: { name: "Lights & Fittings", desc: "Indoor & outdoor, industrial, weatherproof & underwater lighting, LED modules and dimmers.", tags: ["LED", "Industrial", "Waterproof", "Outdoor"] }
  },
  {
    key: "cablemgmt",
    icon: "layout",
    zh: { name: "线缆管理系统", desc: "PVC/GI 线管、线槽及配件、电缆桥架、母线槽、格兰头、接线鼻等。", tags: ["线管", "线槽", "桥架", "母线", "格兰头"] },
    en: { name: "Cable Management", desc: "PVC & GI conduits, trunking & fittings, cable trays, busbars, glands and lugs.", tags: ["Conduits", "Trunking", "Trays", "Busbars", "Glands"] }
  },
  {
    key: "enclosures",
    icon: "box",
    zh: { name: "外壳箱体", desc: "金属外壳、可扩展外壳、端子箱、工业箱、防风雨外壳、PVC/GRP 外壳、机柜等。", tags: ["金属箱", "端子箱", "防雨箱", "机柜", "PVC箱"] },
    en: { name: "Enclosures", desc: "Metal, extendable & industrial enclosures, terminal boxes, weatherproof, PVC/GRP enclosures.", tags: ["Metal", "Terminal", "Weatherproof", "Cabinets"] }
  },
  {
    key: "earthing",
    icon: "shield",
    zh: { name: "接地设备", desc: "接地棒、接地电极、接地排/夹、接地配件、联轴器、接地坑等。", tags: ["接地棒", "接地电极", "接地夹", "接地排"] },
    en: { name: "Earthing Equipment", desc: "Earth rods & bars, electrodes, bonds & clamps, earthing accessories, couplers, earth pits.", tags: ["Rods", "Electrodes", "Clamps", "Bonds"] }
  },
  {
    key: "hvac",
    icon: "wind",
    zh: { name: "HVAC 通风", desc: "暖通空调产品、金属风管、接头、通风系统、风机等。", tags: ["风管", "风机", "通风", "接头"] },
    en: { name: "HVAC & Ventilation", desc: "General HVAC products, metal pipes, fittings, ventilation systems, fans and more.", tags: ["Ducts", "Fans", "Ventilation", "Fittings"] }
  },
  {
    key: "safety",
    icon: "hardhat",
    zh: { name: "安全与吊装", desc: "安全连体服、安全鞋、安全帽、耳塞、护目镜、吊装设备及各类安全材料。", tags: ["安全鞋", "安全帽", "护目镜", "吊装", "劳保"] },
    en: { name: "Safety & Lifting", desc: "Safety coveralls, shoes, helmets, ear protectors, goggles, lifting equipment and materials.", tags: ["Shoes", "Helmets", "Goggles", "Lifting"] }
  },
  {
    key: "tools",
    icon: "wrench",
    zh: { name: "机械与工具", desc: "水暖工具、电动/手动工具、测量工具、螺丝刀、钳子、锤子、锯片等。", tags: ["电动工具", "手动工具", "测量", "钳子", "锯片"] },
    en: { name: "Machinery & Tools", desc: "Plumbing tools, power & hand tools, measuring tools, screwdrivers, cutters, pliers, hammers.", tags: ["Power tools", "Hand tools", "Measuring", "Pliers"] }
  }
];

/* ---------- 中英双语字典 ---------- */
window.I18N = {
  zh: {
    logo_sub: "JIELIAN SUPPLY CHAIN",
    nav_home: "首页",
    nav_about: "关于我们",
    nav_products: "产品",
    nav_services: "服务",
    nav_contact: "联系我们",

    hero_badge: "✅ 中国优质工厂 · 一站式采购",
    hero_title: "综合建材供应与一站式采购服务",
    hero_lead: "捷链供应链管理（广东）有限公司，专业供应建筑、电气、水暖卫浴、五金、钢材、油漆、紧固件、安全与机械工具等全品类建材，面向承包商、开发商及工业客户，提供从选品、验厂到物流的一站式解决方案。",
    hero_cta1: "浏览产品范围",
    hero_cta2: "获取报价",
    hero_card1: "产品大类",
    hero_card2: "合作工厂",
    hero_card3: "出口国家",
    hero_card4: "快速响应",
    hero_stat1: "建材供应",
    hero_stat2: "品质把关",
    hero_stat3: "成本优化",
    hero_stat4: "OEM / ODM",

    about_title: "关于捷链供应链",
    about_p1: "捷链供应链管理（广东）有限公司是一家专业的建材综合库存商与供应商，服务遍及中国及全球市场的大小工程项目。我们以品质、可靠与客户满意为核心，为承包商、开发商和工业客户提供一站式建材解决方案。",
    about_p2: "我们的产品组合涵盖建筑材料、电气设备、水暖卫浴、钢材产品、油漆、螺丝紧固件、安全用品以及机械工具。所有产品均源自经过严格筛选的优质制造商，确保符合行业标准，并在每一个项目中保持稳定表现。",
    about_pt1_t: "多品类综合供应",
    about_pt1_d: "建材、电气、卫浴、五金、工具……一站式配齐",
    about_pt2_t: "源头工厂直供",
    about_pt2_d: "对接中国优质工厂，验厂把关、压价采购",
    about_pt3_t: "定制与 OEM/ODM",
    about_pt3_d: "按需定制、贴牌生产，满足差异化需求",
    about_img: "产品示意图\n（可替换为仓库 / 产品实拍图）",
    about_badge: "年行业经验\n专业团队",

    prod_eyebrow: "我们的产品",
    prod_title: "我们的产品范围",
    prod_sub: "专业供应完整建材品类：建筑、电气、水暖卫浴、钢材、油漆、紧固件、安全用品及机械工具等。",

    svc_eyebrow: "我们的服务",
    svc_title: "一站式采购服务",
    svc_sub: "不只是供应商，更是您的采购合作伙伴——从选品到交付，全程省心。",
    svc1_t: "选品采购",
    svc1_d: "根据需求精准匹配最优供应商与产品",
    svc2_t: "验厂质检",
    svc2_d: "实地验厂、严格质检，确保品质合规",
    svc3_t: "议价压价",
    svc3_d: "批量集采、源头议价，帮您降低采购成本",
    svc4_t: "物流交付",
    svc4_d: "国际物流、报关清关，门到门安全送达",

    ct_title: "联系我们",
    ct_sub: "欢迎垂询，我们的团队将尽快回复您。",
    ct_phone: "电话 / WhatsApp",
    ct_email: "邮箱",
    ct_addr: "地址",
    ct_addr_v: "广州市海珠区江南大道中路173号六楼",

    form_title: "发送询盘",
    form_sub: "填写以下信息，我们会尽快与您联系。",
    form_name: "您的姓名 *",
    form_email: "邮箱 *",
    form_phone: "电话",
    form_country: "国家/地区",
    form_msg: "需求描述 *",
    form_btn: "提交询盘",
    form_fill: "请填写所有必填字段",
    form_ok: "感谢您的留言，我们会尽快与您联系！",
    form_err: "发送失败，请稍后重试或直接邮件联系我们。",

    foot_desc: "Jielian Supply Chain Management (Guangdong) Co., Ltd. — 综合建材供应与一站式采购服务，连接中国优质工厂与全球客户。",
    foot_links: "快速链接",
    foot_prod: "产品",
    foot_p1: "卫浴洁具",
    foot_p2: "五金紧固件",
    foot_p3: "电气设备",
    foot_p4: "水暖管道",
    foot_contact: "联系方式"
  },

  en: {
    logo_sub: "JIELIAN SUPPLY CHAIN",
    nav_home: "Home",
    nav_about: "About Us",
    nav_products: "Products",
    nav_services: "Services",
    nav_contact: "Contact",

    hero_badge: "✅ Quality Chinese Factories · One-stop Sourcing",
    hero_title: "Comprehensive Building Materials & One-stop Sourcing",
    hero_lead: "Jielian Supply Chain Management (Guangdong) Co., Ltd. supplies a full range of building materials — construction, electrical, plumbing & sanitary, hardware, steel, paints, fasteners, safety and machinery & tools — offering contractors, developers and industrial clients a one-stop solution from sourcing and factory audit to logistics.",
    hero_cta1: "Browse Products",
    hero_cta2: "Get a Quote",
    hero_card1: "Product Categories",
    hero_card2: "Partner Factories",
    hero_card3: "Export Countries",
    hero_card4: "Fast Response",
    hero_stat1: "Materials Supply",
    hero_stat2: "Quality Control",
    hero_stat3: "Cost Saving",
    hero_stat4: "OEM / ODM",

    about_title: "About Jielian Supply Chain",
    about_p1: "Jielian Supply Chain Management (Guangdong) Co., Ltd. is a specialized stockist and supplier of building materials, serving projects of all sizes across China and global markets. With a strong commitment to quality, reliability and customer satisfaction, we offer contractors, developers and industrial clients complete building material solutions under one roof.",
    about_p2: "Our portfolio covers construction materials, electrical supplies, plumbing and sanitary ware, steel products, paints, screws and fasteners, safety products, and machinery and tools. All products are sourced from carefully vetted manufacturers to ensure industry-standard compliance and consistent performance on every project.",
    about_pt1_t: "Multi-category Supply",
    about_pt1_d: "Building, electrical, sanitary, hardware, tools — all in one place",
    about_pt2_t: "Direct Factory Sourcing",
    about_pt2_d: "Vetted Chinese factories, factory audit and price negotiation",
    about_pt3_t: "Custom & OEM/ODM",
    about_pt3_d: "Customization and private labeling to meet your needs",
    about_img: "Product Visual\n(Replace with warehouse / product photos)",,
    about_badge: "Years of Industry\nExperience",

    prod_eyebrow: "Our Products",
    prod_title: "Our Product Range",
    prod_sub: "Specialized supplier of the complete building materials range: construction, electrical, plumbing & sanitary, steel, paints, fasteners, safety and machinery & tools.",

    svc_eyebrow: "Our Services",
    svc_title: "One-stop Sourcing Service",
    svc_sub: "More than a supplier — your sourcing partner, from selection to delivery.",

    svc1_t: "Product Sourcing",
    svc1_d: "Match the best suppliers and products to your needs",
    svc2_t: "Factory Audit & QC",
    svc2_d: "On-site audit and strict quality inspection",
    svc3_t: "Price Negotiation",
    svc3_d: "Bulk sourcing and direct pricing to cut your costs",
    svc4_t: "Logistics & Delivery",
    svc4_d: "International shipping, customs clearance, door-to-door",

    ct_title: "Contact Us",
    ct_sub: "Get in touch — our team will respond promptly.",
    ct_phone: "Phone / WhatsApp",
    ct_email: "Email",
    ct_addr: "Address",
    ct_addr_v: "6/F, No. 173, Middle Jiangnan Avenue, Haizhu District, Guangzhou, China",

    form_title: "Send an Inquiry",
    form_sub: "Fill in the form and we will get back to you shortly.",
    form_name: "Your Name *",
    form_email: "Email *",
    form_phone: "Phone",
    form_country: "Country / Region",
    form_msg: "Your Requirements *",
    form_btn: "Submit Inquiry",
    form_fill: "Please fill in all required fields",
    form_ok: "Thank you! We will contact you soon.",
    form_err: "Failed to send. Please try again or email us directly.",,

    foot_desc: "Jielian Supply Chain Management (Guangdong) Co., Ltd. — comprehensive building materials supply and one-stop sourcing, connecting quality Chinese factories with global customers.",
    foot_links: "Quick Links",
    foot_prod: "Products",
    foot_p1: "Sanitary Ware",
    foot_p2: "Hardware & Fasteners",
    foot_p3: "Electrical",
    foot_p4: "Plumbing",
    foot_contact: "Contact"
  }
};

/* ---------- 渲染产品分类卡片 ---------- */
(function () {
  var grid = document.getElementById("catGrid");
  if (!grid || !window.PRODUCTS) return;

  var iconSvg = {
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

  var lang = document.documentElement.getAttribute("lang") || "en";

  var render = function () {
    grid.innerHTML = "";
    window.PRODUCTS.forEach(function (p) {
      var card = document.createElement("div");
      card.className = "cat-card";
      card.setAttribute("data-reveal", "");
      var txt = p[lang] || p.en;
      var tags = (txt.tags || []).map(function (t) { return "<span>" + t + "</span>"; }).join("");
      card.innerHTML =
        '<span class="ic">' + (iconSvg[p.icon] || iconSvg.box) + "</span>" +
        "<h3>" + txt.name + "</h3>" +
        "<p>" + txt.desc + "</p>" +
        '<div class="tags">' + tags + "</div>";
      grid.appendChild(card);
    });
    // 重新触发 reveal 观察
    if (window.__revealRefresh) window.__revealRefresh();
  };

  render();

  // 语言切换后重绘产品卡片
  document.addEventListener("langchanged", function (e) {
    lang = e.detail || lang;
    render();
  });
})();
