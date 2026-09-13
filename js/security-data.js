/* ==========================================================================
   捷链安防监控 - 产品目录数据（品牌归捷链，型号保留原型号）
   来源：幻境盒子 SeeBox（摄像头 PDF）+ 深圳极科源 Jikeyuan（网络机 xlsx）
   说明：源文件为价格表，同外观型号共用一张图。按"外观去重"上架，
   每个外观取一个代表型号，规格标注该系列支持的多种配置。
   ========================================================================== */

window.SECURITY_CATALOG = [
  /* ============ 幻境盒子 · 小球机 ============ */
  {
    id: "hj-dome-mini",
    name: { zh: "幻境盒子 · 小球机", en: "SeeBox · Mini Dome Cameras" },
    desc: {
      zh: "2寸 / 2.5寸室外小球机，WiFi 双频或 4G 终身免流，支持手机 APP「幻境盒子」远程监控，五年质保、多国语言、可定制 logo。",
      en: "2-inch / 2.5-inch outdoor mini dome cameras with WiFi dual-band or lifetime-free 4G, remote monitoring via the SeeBox app, 5-year warranty, multilingual and custom logo."
    },
    items: [
      { model: "XQ1-W45", name: { zh: "2寸球机（WiFi双频）", en: "2-inch Dome (WiFi Dual-band)" }, spec: "12V · 400万 · 2寸球机", resolution: "4MP", network: "WiFi 蓝牙双频", feature: "APP幻境盒子 / 五年质保", image: "images/security/XQ1-W45.png" },
      { model: "XQ2-W10", name: { zh: "2寸球机（WiFi蓝牙）", en: "2-inch Dome (WiFi BT)" }, spec: "5V · 100万 · 2寸球机", resolution: "720P", network: "WiFi 蓝牙", feature: "APP幻境盒子 / 五年质保", image: "images/security/XQ2-W10.png" },
      { model: "Q25-W45", name: { zh: "2.5寸球机（WiFi双频）", en: "2.5-inch Dome (WiFi Dual-band)" }, spec: "12V · 400万 · 2.5寸球机", resolution: "4MP", network: "WiFi 蓝牙双频", feature: "APP幻境盒子 / 五年质保", image: "images/security/Q25-W45.png" }
    ]
  },

  /* ============ 幻境盒子 · 摇头机 ============ */
  {
    id: "hj-pan-tilt",
    name: { zh: "幻境盒子 · 摇头机", en: "SeeBox · Pan-tilt Cameras" },
    desc: {
      zh: "室内摇头机系列，100万 / 200万 / 300万 / 400万像素可选，WiFi 蓝牙或 4G 终身免流，部分带电源、红外模式，支持手机远程监控。",
      en: "Indoor pan-tilt camera series with 1MP / 2MP / 3MP / 4MP options, WiFi Bluetooth or lifetime-free 4G, some with power adapter and infrared mode, remote monitoring supported."
    },
    items: [
      { model: "Y1-W13", name: { zh: "摇头机（台式白款）", en: "Pan-tilt (Desktop White)" }, spec: "100万~400万 · 带电源", resolution: "1080P", network: "WiFi 蓝牙", feature: "红外 / 可定制", image: "images/security/Y1-W10-HY.png" },
      { model: "Y2-W10-HY", name: { zh: "摇头机（台式黑款）", en: "Pan-tilt (Desktop Black)" }, spec: "100万 · 带电源", resolution: "720P", network: "WiFi", feature: "红外模式", image: "images/security/Y2-W10-HY.png" },
      { model: "Y3-W10-HY", name: { zh: "摇头机（双天线壁挂）", en: "Pan-tilt (Dual-antenna Wall)" }, spec: "100万~300万 · 带电源", resolution: "720P", network: "WiFi 蓝牙", feature: "红外 / 可定制", image: "images/security/Y3-W10-HY.png" },
      { model: "Y4-W10-HY", name: { zh: "摇头机（灯座式白款）", en: "Pan-tilt (Lamp-socket White)" }, spec: "100万~300万 · 带电源", resolution: "720P", network: "WiFi 蓝牙", feature: "红外 / 可定制", image: "images/security/Y4-W10-HY.png" },
      { model: "Y4H-W10-HY", name: { zh: "摇头机（灯座式黑款）", en: "Pan-tilt (Lamp-socket Black)" }, spec: "100万~300万 · 带电源", resolution: "720P", network: "WiFi 蓝牙", feature: "红外 / 可定制", image: "images/security/Y4H-W10-HY.png" },
      { model: "Y5-W10-HY", name: { zh: "摇头机（蛋形款）", en: "Pan-tilt (Egg-shaped)" }, spec: "100万~300万 · 带电源", resolution: "720P", network: "WiFi 蓝牙", feature: "红外 / 可定制", image: "images/security/Y5-W10-HY.png" },
      { model: "Y6-W10-HY", name: { zh: "摇头机（球座台式）", en: "Pan-tilt (Ball-base Desktop)" }, spec: "100万~300万 · 带电源", resolution: "720P", network: "WiFi 蓝牙", feature: "红外 / 可定制", image: "images/security/Y6-W10-HY.png" },
      { model: "Y7-W10-HY", name: { zh: "摇头机（立柱款）", en: "Pan-tilt (Column)" }, spec: "100万~300万 · 带电源", resolution: "720P", network: "WiFi 蓝牙", feature: "红外 / 可定制", image: "images/security/Y7-W10-HY.png" },
      { model: "Y8-W10-HY", name: { zh: "摇头机（立式蛋形）", en: "Pan-tilt (Upright Egg)" }, spec: "100万~300万 · 带电源", resolution: "720P", network: "WiFi 蓝牙", feature: "红外 / 可定制", image: "images/security/Y8-W10-HY.png" },
      { model: "Y9-W10-HY", name: { zh: "摇头机（支架款）", en: "Pan-tilt (Bracket)" }, spec: "100万~300万 · 带电源", resolution: "720P", network: "WiFi 蓝牙", feature: "红外 / 可定制", image: "images/security/Y9-W10-HY.png" }
    ]
  },

  /* ============ 幻境盒子 · 大球机 ============ */
  {
    id: "hj-dome-large",
    name: { zh: "幻境盒子 · 大球机", en: "SeeBox · Large Dome Cameras" },
    desc: {
      zh: "6寸室外大球机，400万像素，WiFi 蓝牙双频或 4G 免流，外置喇叭或报警灯，适合户外安防。",
      en: "6-inch outdoor large dome cameras, 4MP, WiFi dual-band or data-free 4G, with external speaker or alarm light for outdoor security."
    },
    items: [
      { model: "YH5C-W45", name: { zh: "6寸大球机（外置喇叭）", en: "6-inch Dome (Speaker)" }, spec: "12V · 400万 · 6寸球机", resolution: "4MP", network: "WiFi 蓝牙双频", feature: "外置喇叭 / 4G可选", image: "images/security/YH5C-W45.png" },
      { model: "DQ1-W45", name: { zh: "6寸大球机（报警灯）", en: "6-inch Dome (Alarm Light)" }, spec: "12V · 400万 · 6寸球机", resolution: "4MP", network: "WiFi 蓝牙双频", feature: "报警灯 / 4G可选", image: "images/security/DQ1-W45.png" }
    ]
  },

  /* ============ 幻境盒子 · 半球枪机 ============ */
  {
    id: "hj-bullet",
    name: { zh: "幻境盒子 · 半球 / 枪机", en: "SeeBox · Dome & Bullet" },
    desc: {
      zh: "半球、磁吸支架枪机、卡片机等多种形态，WiFi 或 4G 免流，IP66 防水，适配室内外多种安装场景。",
      en: "Dome, magnetic-mount bullet and card cameras, WiFi or data-free 4G, IP66 waterproof, for indoor and outdoor installation."
    },
    items: [
      { model: "BQ4-W45", name: { zh: "WiFi半球（蓝牙双频）", en: "WiFi Hemisphere (Dual-band)" }, spec: "400万 · WiFi半球", resolution: "4MP", network: "WiFi 蓝牙双频", feature: "4G免流可选", image: "images/security/BQ4-W45.png" },
      { model: "MQ-W45", name: { zh: "磁吸支架枪机（WiFi）", en: "Magnetic Bullet (WiFi)" }, spec: "400万 · 60mm磁吸支架", resolution: "4MP", network: "WiFi", feature: "IP66防水 / 4G可选", image: "images/security/MQ-W45.png" },
      { model: "KP-W10-HY", name: { zh: "WiFi卡片机（红外）", en: "WiFi Card Camera (IR)" }, spec: "100万~300万 · 卡片机", resolution: "720P", network: "WiFi", feature: "红外模式 / 带电源", image: "images/security/KP-W10-HY.png" }
    ]
  },

  /* ============ 幻境盒子 · 宅智联 AOV ============ */
  {
    id: "hj-aov",
    name: { zh: "幻境盒子 · 宅智联 AOV", en: "SeeBox · AOV Solar" },
    desc: {
      zh: "太阳能 AoV 双光源电池摄像机，支持 4G 免流，APP「宅智联 / OmniEye」。",
      en: "Solar-powered AOV dual-light battery camera with data-free 4G, via the OmniEye app."
    },
    items: [
      { model: "DGH1-YL1", name: { zh: "太阳能AoV双光源摄像机", en: "Solar AOV Dual-light Camera" }, spec: "200万 · 太阳能AoV", resolution: "1080P", network: "4G免流", feature: "APP宅智联 / 可定制", image: "images/security/DGH1-YL1.png" }
    ]
  },

  /* ============ 幻境盒子 · 太阳能系列 ============ */
  {
    id: "hj-solar",
    name: { zh: "幻境盒子 · 太阳能系列", en: "SeeBox · Solar Series" },
    desc: {
      zh: "4G 球机套装（太阳能供电 + 4G 免流卡 + 含 32G 内存卡）与太阳能板带电池，续航 3~15 天。",
      en: "4G camera kits (solar power + data-free SIM + 32GB card) and solar panels with battery, 3-15 days endurance."
    },
    items: [
      { model: "YH5C-4G6cun12X", name: { zh: "4G球机太阳能套装（12X）", en: "4G Solar Kit (12X)" }, spec: "40W12AX · 含32G卡", resolution: "4MP", network: "4G免流", feature: "太阳能续航3天", image: "images/security/YH5C-4G6cun12X.png" },
      { model: "40W12AX", name: { zh: "太阳能板带电池（40W12AX）", en: "Solar Panel w/ Battery (40W12AX)" }, spec: "40W12AX · A级单晶面板", resolution: "-", network: "-", feature: "DC接口 · 续航约2.5天", image: "images/security/40W12AX.png" }
    ]
  },

  /* ============ 极科源 · 网络摄像机 ============ */
  {
    id: "jk-ipc",
    name: { zh: "网络摄像机", en: "Network Cameras" },
    desc: {
      zh: "双光全彩 POE 网络摄像机，400万 / 500万像素，支持 ONVIF、H.265、宽动态、人形侦测，内置音频。",
      en: "Dual-light full-color POE IP cameras, 4MP / 5MP, ONVIF, H.265, WDR, human detection and built-in audio."
    },
    items: [
      { model: "B4A42", name: { zh: "双光源POE网络摄像机", en: "Dual-light POE IP Camera" }, spec: "双光源 · POE", resolution: "4MP", feature: "ONVIF / H.265 / 人形侦测 / 内置音频", image: "images/security/B4A42.png" },
      { model: "Q4A42", name: { zh: "双光源POE网络摄像机", en: "Dual-light POE IP Camera" }, spec: "双光源 · POE", resolution: "4MP", feature: "ONVIF / H.265 / 人形侦测 / 内置音频", image: "images/security/Q4A42.png" },
      { model: "YHBQ4A42", name: { zh: "双光源POE网络摄像机", en: "Dual-light POE IP Camera" }, spec: "双光源 · POE", resolution: "4MP", feature: "ONVIF / H.265 / 宽动态 / 内置音频", image: "images/security/YHBQ4A42.png" },
      { model: "SLK21A42", name: { zh: "双光源POE网络摄像机", en: "Dual-light POE IP Camera" }, spec: "双光源 · POE", resolution: "4MP", feature: "ONVIF / H.265 / 人形侦测 / 内置音频", image: "images/security/SLK21A42.png" },
      { model: "AD6A42", name: { zh: "全金属60mm网络摄像机", en: "Full-metal 60mm IP Camera" }, spec: "全金属 · 60mm带支架", resolution: "4MP", feature: "ONVIF / 双光全彩 / 人形侦测", image: "images/security/AD6A42.png" },
      { model: "AD6A42-panorama", name: { zh: "全金属60mm全景摄像机", en: "Full-metal 60mm Panorama" }, spec: "全金属 · 60mm全景视角", resolution: "4MP", feature: "ONVIF / 双光全彩 / 人形侦测", image: "images/security/AD6A42-panorama.png" },
      { model: "YC3-A42", name: { zh: "60mm支架网络摄像机", en: "60mm Bracket IP Camera" }, spec: "60mm支架 · 自研400万模组", resolution: "4MP", feature: "ONVIF / 双光全彩 / 人形侦测", image: "images/security/YC3-A42.png" },
      { model: "YC60DA42", name: { zh: "全金属60mm网络摄像机", en: "Full-metal 60mm IP Camera" }, spec: "全金属 · 60mm带支架", resolution: "4MP", feature: "ONVIF / 双光全彩 / 人形侦测", image: "images/security/YC60DA42.png" },
      { model: "overall-perspective", name: { zh: "全景网络摄像机", en: "Panoramic IP Camera" }, spec: "全景视角 · 自研500万模组", resolution: "5MP", feature: "ONVIF / 双光全彩 / 人形侦测", image: "images/security/overall-perspective.png" },
      { model: "Anti-phenomenon", name: { zh: "防爆枪型摄像机", en: "Explosion-proof Camera" }, spec: "防爆 EXD I Mb · 304不锈钢", resolution: "4MP", feature: "防爆认证 / CCC认证 / 12kg", image: "images/security/Anti-phenomenon.png" },
      { model: "NZ360", name: { zh: "6寸500万双光球机", en: "6-inch 5MP Dual-light Dome" }, spec: "6寸 · 500万双光", resolution: "5MP", feature: "150米探测 / 半金属外壳 / 防水防雷", image: "images/security/NZ360.png" }
    ]
  },

  /* ============ 极科源 · 硬盘录像机 NVR ============ */
  {
    id: "jk-nvr",
    name: { zh: "硬盘录像机 NVR", en: "Network Video Recorders" },
    desc: {
      zh: "智能硬盘录像机与 POE NVR，支持 4K、H.265/H.264 解码、手机监控、人车侦测、GB28181 协议，多盘位可选。",
      en: "Intelligent NVRs and POE NVRs with 4K, H.265/H.264 decoding, mobile monitoring, human/vehicle detection, GB28181 and multiple bays."
    },
    items: [
      { model: "NZ10-Route-4K", name: { zh: "10路智能录像机", en: "10-channel NVR" }, spec: "10路 · 4K", feature: "1盘位 · 行为分析 / 人车侦测 / GB28181", image: "images/security/NZ10-Route-4K.png" },
      { model: "NZ36-NVR", name: { zh: "36路NVR", en: "36-channel NVR" }, spec: "36路 · 4K", feature: "4盘位 · H.265/H.264三流解码 / 手机监控", image: "images/security/NZ36-NVR.png" },
      { model: "NZ128-NVR", name: { zh: "128路NVR", en: "128-channel NVR" }, spec: "128路 · 4K", feature: "16盘位 · 三流解码 / 64分割 / GB28181", image: "images/security/NZ128-NVR.png" },
      { model: "NZ-4ch-POE-NVR", name: { zh: "4路POE NVR", en: "4-channel POE NVR" }, spec: "4路 · POE", feature: "1盘位 · 5MP/8MP / ONVIF / 手机监控", image: "images/security/NZ-4ch-POE-NVR.jpg" },
      { model: "NZ-8ch-POE-NVR", name: { zh: "8路POE NVR", en: "8-channel POE NVR" }, spec: "8路 · POE", feature: "1盘位 · 5MP/8MP / ONVIF / 手机监控", image: "images/security/NZ-8ch-POE-NVR.jpg" },
      { model: "2U-9bay-VMS", name: { zh: "2U集中监控平台", en: "2U Central VMS" }, spec: "1024/2048路", feature: "9盘位 · 8K输出 / 多屏异构 / 800Mbps", image: "images/security/2U-9bay-VMS.png" }
    ]
  },

  /* ============ 极科源 · 监控周边配件 ============ */
  {
    id: "jk-accessory",
    name: { zh: "监控周边配件", en: "Monitoring Accessories" },
    desc: {
      zh: "监控支架、电源、POE 交换机、网线、无线网桥、防水盒等配套设备。",
      en: "Brackets, power supplies, POE switches, network cables, wireless bridges, waterproof boxes and more."
    },
    items: [
      { model: "Bracket-804", name: { zh: "监控支架（804）", en: "Bracket (804)" }, spec: "804 · 180mm高", feature: "监控专用支架", image: "images/security/Bracket-804.png" },
      { model: "Bracket-1298", name: { zh: "监控支架（1298）", en: "Bracket (1298)" }, spec: "1298 · 槽钢支架", feature: "200x72x72 · 含螺丝包", image: "images/security/Bracket-1298.png" },
      { model: "Power-12V2A", name: { zh: "监控电源（12V2A）", en: "Power Supply (12V2A)" }, spec: "12V 2A", feature: "工厂直供 · 两年换新", image: "images/security/Power-12V2A.png" },
      { model: "POE-switch-4", name: { zh: "POE交换机（4口）", en: "POE Switch (4-port)" }, spec: "4口百兆 · 国标", feature: "国标4+2", image: "images/security/POE-switch-4.png" },
      { model: "POE-switch-8", name: { zh: "POE交换机（8口）", en: "POE Switch (8-port)" }, spec: "8口百兆 · 国标", feature: "国标8+2", image: "images/security/POE-switch-8.png" },
      { model: "POE-switch-16", name: { zh: "全千兆POE交换机（16口）", en: "Gigabit POE Switch (16-port)" }, spec: "16口全千兆 + 2+1", feature: "国标16口机架式", image: "images/security/POE-switch-16.png" },
      { model: "POE-switch-24", name: { zh: "全千兆POE交换机（24口）", en: "Gigabit POE Switch (24-port)" }, spec: "24口全千兆 + 2+2光口", feature: "总功率300W · 110-240V", image: "images/security/POE-switch-24.png" },
      { model: "cable-EP480-indoor", name: { zh: "室内无氧铜网线（EP480）", en: "Indoor Copper Cable (EP480)" }, spec: "8芯无氧铜 · 超五类", feature: "0.48 · 300米/卷", image: "images/security/cable-EP480-indoor.png" },
      { model: "cable-EP480-outdoor", name: { zh: "室外无氧铜网线（EP480）", en: "Outdoor Copper Cable (EP480)" }, spec: "8芯无氧铜 · 超五类", feature: "0.48 · 300米/卷", image: "images/security/cable-EP480-outdoor.jpg" },
      { model: "cat6-cable", name: { zh: "六类网线（Cat6）", en: "Cat6 Ethernet Cable" }, spec: "8芯无氧铜 · 六类", feature: "300米/卷 · 整箱四卷", image: "images/security/cat6-cable.png" },
      { model: "wireless-bridge", name: { zh: "5.8GHz无线网桥", en: "5.8GHz Wireless Bridge" }, spec: "GE450 · 450Mbps", feature: "10km传输 / IP65防水 / 电梯场景", image: "images/security/wireless-bridge.jpg" },
      { model: "waterproof-box", name: { zh: "防水盒（200U）", en: "Waterproof Box (200U)" }, spec: "200U", feature: "户外防水 · 摄像头/电源/接头", image: "images/security/waterproof-box.png" }
    ]
  }
];
