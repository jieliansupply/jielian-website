/* ==========================================================================
   捷链开关插座 - 产品目录数据（品牌归入捷链，型号保留原厂系列）
   来源：狮麦 S-HIMAI 欧式标准插座画册 + 欧式图册（S5/S6 窄框）+ 英式图册
         （T5/F10/L10/T8/T9）+ CANMR 轨道插座
   结构：三大子类 → 每个系列一个卡片（含系列名、规格、颜色、型号范围）
   ========================================================================== */

window.ELECTRICAL_CATALOG = [
  /* ==================== 一、欧式标准插座 ==================== */
  {
    id: "european-sockets",
    name: { zh: "欧式标准插座开关", en: "European Standard Switches & Sockets" },
    desc: {
      zh: "S-HIMAI 狮麦欧式标准墙壁开关插座，超薄 / 窄框设计，含俄式、法式、德式、意大利式插座，多联开关、调光调速、弱电（TV/电话/网络/SAT）及 USB+Type-C 快充插座，多色可定制。",
      en: "S-HIMAI European standard wall switches & sockets, ultra-thin / narrow-frame design, including Russian / French / German / Italian sockets, multi-gang switches, dimmers, weak-current (TV / tel / network / SAT) and USB+Type-C fast-charging sockets, customizable colors."
    },
    items: [
      {
        model: "B1 超薄系列",
        name: { zh: "B1 超薄系列（86 型）", en: "B1 Ultra-Thin Series (86-type)" },
        type: "86型 / 模块72mm",
        material: "PC 阻燃面板 · 不锈钢钩脚",
        feature: "单控/双控/多控开关、门铃、调光调速、俄/法/德/意插座、TV/电话/网络/SAT、USB+Type-C",
        color: "金 / 灰 / 白 / 黑",
        models: "B1-86-1~32 · B1-72-1~27",
        image: "images/electrical/b1.jpg"
      },
      {
        model: "B2 超薄系列",
        name: { zh: "B2 超薄系列（82 型）", en: "B2 Ultra-Thin Series (82-type)" },
        type: "82型 / 模块68mm",
        material: "PC 阻燃面板",
        feature: "开关、俄/法/德/意插座（含 USB+Type-C）、弱电插座、调光调速、空白面板",
        color: "金 / 灰 / 白 / 黑",
        models: "B2-86-1~31 · B2-82-1~28",
        image: "images/electrical/b2.jpg"
      },
      {
        model: "B5 超薄系列",
        name: { zh: "B5 超薄系列（86 型）", en: "B5 Ultra-Thin Series (86-type)" },
        type: "86型 / 模块72mm",
        material: "PC 阻燃面板 · 不锈钢钩脚",
        feature: "开关、俄/法/德/意插座（含 USB+Type-C）、弱电插座、调光调速、出线插座",
        color: "金 / 灰 / 白 / 黑",
        models: "B5-86-1~32 · B5-82-1~29",
        image: "images/electrical/b5.jpg"
      },
      {
        model: "S5 窄框系列",
        name: { zh: "S5 窄框系列", en: "S5 Narrow-Frame Series" },
        type: "窄边框 · 方形",
        material: "PC 阻燃面板",
        feature: "开关、窗帘/门铃/调光调速、俄/德/法插座、TV/电话/网络/SAT/HDMI、USB+Type-C、1~5 联面框",
        color: "钢琴黑 / 星尘灰 / 月光白 / 香槟金",
        models: "S5-001~044（W/B/S/G 四色）",
        image: "images/electrical/s5.jpg"
      },
      {
        model: "S6 窄框系列",
        name: { zh: "S6 窄框系列", en: "S6 Narrow-Frame Series" },
        type: "窄边框 · 方形",
        material: "PC 阻燃面板",
        feature: "同 S5 品类，窄边设计，多联拼装效果更佳",
        color: "钢琴黑 / 星尘灰 / 月光白 / 香槟金",
        models: "S6 系列（W/B/S/G 四色）",
        image: "images/electrical/s6.jpg"
      }
    ]
  },

  /* ==================== 二、英式标准插座 ==================== */
  {
    id: "british-sockets",
    name: { zh: "英式标准插座开关", en: "British Standard Switches & Sockets" },
    desc: {
      zh: "英式 BS 标准墙壁开关插座，86 型 / 146 型，含 13A 英式插座（带开关带指示灯、带 USB/Type-C）、多功能插座、15A/20A/45A 大功率开关、弱电插座与厨灶单元，多系列多色可选。",
      en: "British BS standard wall switches & sockets, 86 / 146 type, including 13A British sockets (with switch & neon indicator, USB/Type-C), multifunction sockets, 15A/20A/45A high-current switches, weak-current sockets and cooker units."
    },
    items: [
      {
        model: "T5 玻璃系列",
        name: { zh: "T5 玻璃系列", en: "T5 Glass Series" },
        type: "玻璃面板 · 超薄",
        material: "钢化玻璃面板",
        feature: "开关、13A 英式插座（带开关/USB）、多功能插座、大功率开关、弱电、厨灶单元",
        color: "白 / 灰 / 金 / 黑 / 蓝",
        models: "T5-01~70",
        image: "images/electrical/t5.jpg"
      },
      {
        model: "T3 超薄系列",
        name: { zh: "T3 超薄系列", en: "T3 Ultra-Thin Series" },
        type: "超薄 · 无边框",
        material: "PC 面板",
        feature: "开关、13A 英式插座、多功能插座、USB/Type-C、大功率开关、弱电、厨灶单元",
        color: "白 / 金 / 灰 / 黑",
        models: "T3-01~70",
        image: "images/electrical/t3.jpg"
      },
      {
        model: "F10 系列",
        name: { zh: "F10 系列", en: "F10 Series" },
        type: "多纹理面板（拉丝 / 西瓜纹 / 纯色）",
        material: "PC 面板",
        feature: "开关、13A 英式插座、多功能插座、USB/Type-C、大功率开关、弱电、厨灶单元",
        color: "白 / 金 / 灰 / 黑",
        models: "F10-01~70",
        image: "images/electrical/f10.jpg"
      },
      {
        model: "L10 大圆角系列",
        name: { zh: "L10 大圆角系列", en: "L10 Large-Radius Series" },
        type: "大圆角面板",
        material: "PC 哑光面板",
        feature: "开关、13A 英式插座、多功能插座、USB/Type-C、大功率开关、弱电、厨灶单元",
        color: "纯白",
        models: "L10-01~70",
        image: "images/electrical/l10.jpg"
      },
      {
        model: "T8 肤感系列",
        name: { zh: "T8 肤感系列", en: "T8 Skin-Touch Series" },
        type: "超薄 · 无边框",
        material: "肤感 PMMA 面板",
        feature: "开关、13A 英式插座、多功能插座、USB/Type-C、大功率开关、弱电、厨灶单元",
        color: "白 / 金 / 灰 / 黑",
        models: "T8-01~70",
        image: "images/electrical/t8.jpg"
      },
      {
        model: "T9 纹理系列",
        name: { zh: "T9 纹理系列", en: "T9 Texture Series" },
        type: "超薄 · 金边纹理",
        material: "纹理面板 + 金边装饰",
        feature: "开关、13A 英式插座、多功能插座、USB/Type-C、大功率开关、弱电、厨灶单元",
        color: "灰 / 黑 / 咖啡 / 金",
        models: "T9-01~70",
        image: "images/electrical/t9.jpg"
      }
    ]
  },

  /* ==================== 三、轨道插座 ==================== */
  {
    id: "track-sockets",
    name: { zh: "轨道插座", en: "Power Track Sockets" },
    desc: {
      zh: "CANMR 电力轨道插座，32A / 8000W 高功率，模块化设计、适配器沿轨道自由滑动，单适配器最高 2500W，多国标准适配器（俄/法/德/意/英/美/澳/巴西等），带氛围灯带与感应灯，适用于厨房、办公、工作室等场景。",
      en: "CANMR power track sockets, 32A / 8000W high power, modular design with adapters sliding freely along the track, up to 2500W per adapter, multi-country standard adapters (RU/FR/DE/IT/UK/US/AU/BR etc.), ambient light strip and sensor lamp, ideal for kitchen, office and studio."
    },
    items: [
      {
        model: "A2 系列轨道",
        name: { zh: "A2 系列方形轨道（向下灯带）", en: "A2 Square Track (Downward Light Strip)" },
        type: "明装轨道",
        material: "铝合金轨道 · 加厚铜芯",
        feature: "32A / 8000W，向下氛围灯带，IP20",
        color: "白 / 灰 / 黑",
        models: "300~1000mm 多尺寸",
        image: "images/electrical/track-a2.jpg"
      },
      {
        model: "A3 系列轨道",
        name: { zh: "A3 系列方形轨道（上下灯带）", en: "A3 Square Track (Up & Down Light Strip)" },
        type: "明装轨道",
        material: "铝合金轨道 · 加厚铜芯",
        feature: "32A / 8000W，上下双氛围灯带，IP20",
        color: "白 / 灰 / 黑",
        models: "400~1000mm 多尺寸",
        image: "images/electrical/track-a3.jpg"
      },
      {
        model: "M1 系列轨道",
        name: { zh: "M1 系列方形轨道（表面感应灯）", en: "M1 Square Track (Surface Sensor Lamp)" },
        type: "明装轨道",
        material: "铝合金轨道 · 加厚铜芯",
        feature: "32A / 8000W，表面感应灯，挥手感应，IP20",
        color: "白 / 灰 / 黑",
        models: "300~2000mm 多尺寸",
        image: "images/electrical/track-m1.jpg"
      },
      {
        model: "K1 烤漆适配器",
        name: { zh: "K1 烤漆适配器（表面发光）", en: "K1 Paint-Baking Adapter (Surface Light)" },
        type: "轨道适配器",
        material: "烤漆 · 蓝光指示灯",
        feature: "10~16A / 2500W，表面发光，多国标准插孔",
        color: "白 / 灰 / 黑",
        models: "K1-SK/XWK/WK/QK/MF/EU/FR/UK/US/…（多国）",
        image: "images/electrical/adapter-k1.jpg"
      },
      {
        model: "K2 铝环适配器",
        name: { zh: "K2 铝环适配器（底部发光）", en: "K2 Aluminum-Ring Adapter (Bottom Light)" },
        type: "轨道适配器",
        material: "铝环 · 底部发光",
        feature: "10~16A / 2500W，底部发光，多国标准插孔",
        color: "白 / 灰 / 黑",
        models: "K2 系列（多国标准）",
        image: "images/electrical/adapter-k2.jpg"
      },
      {
        model: "K-1S 铝环适配器",
        name: { zh: "K-1S 铝环适配器（悬浮光）", en: "K-1S Aluminum-Ring Adapter (Suspended Light)" },
        type: "轨道适配器",
        material: "铝环 · 悬浮光",
        feature: "10~16A / 2500W，悬浮光效果，多国标准插孔",
        color: "白 / 灰 / 黑",
        models: "K-1S 系列（多国标准）",
        image: "images/electrical/adapter-k1s.jpg"
      }
    ]
  }
];
