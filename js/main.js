// ==================== 捷链认养 · 交互逻辑 ====================

// 中英文文案映射
const I18N = {
  zh: {
    top_tagline: '🌱 认养一只土鸡 · 云监控全程可溯源',
    nav_home: '首页',
    nav_about: '为什么认养',
    nav_product: '认养土鸡',
    nav_live: '云监控',
    nav_flow: '认养流程',
    nav_farm: '我们的农场',
    nav_order: '立即认养',
    hero_badge: '🐔 认养一只属于自己的土鸡',
    hero_title: '认养一只林下散养土鸡<br>专属直播间随时看鸡',
    hero_lead: '认养一只正宗林下散养土鸡，农户全程代养，绑定专属直播间随时视频看鸡，出栏后宰杀冷链直送到家。全程可溯源，吃得放心。',
    hero_cta1: '认养一只土鸡',
    hero_cta2: '看看云监控直播',
    hero_live: 'LIVE · 云农场实时画面',
    stat1: '认养一只/季',
    stat2: '专属直播看鸡',
    stat3: '宰杀直送到家',
    stat4: '全程可追溯',
    about_eyebrow: 'Why Adopt',
    about_title: '为什么认养一只土鸡？',
    about_sub: '不是买一只鸡，而是全程参与它的成长，吃得明白、吃得放心。',
    f1_t: '专属直播间',
    f1_d: '绑定专属摄像头，24 小时随时视频看鸡，看到它吃粮、散步、长大。',
    f2_t: '林下散养',
    f2_d: '正宗林下散养，粮食喂养，不催肥、不打激素，肉质紧实鲜美。',
    f3_t: '冷链直送',
    f3_d: '出栏后现宰现发，冷链锁鲜配送到家，新鲜到舌头。',
    f4_t: '全程溯源',
    f4_d: '从认养到餐桌，每一只鸡都有档案，成长节点清晰可见。',
    prod_eyebrow: 'Adopt Now',
    prod_title: '认养一只林下散养土鸡',
    prod_sub: '正宗清远林下散养土鸡，农户全程代养，专属直播间随时看鸡。',
    prod_hot: '🔥 热销认养',
    prod_tag1: '专属直播间',
    prod_tag2: '全程散养',
    prod_tag3: '半年认养',
    prod_name: '林下散养土鸡 · 认养',
    prod_desc: '认养一只正宗林下散养土鸡，农户全程代养，绑定专属直播间随时视频看鸡，出栏后宰杀冷链直送到家。',
    prod_unit: '/ 只 · 一季',
    prod_stock: '库存 120 只',
    prod_cta: '立即认养这只土鸡',
    meta_farm: '农场',
    meta_loc: '产地',
    meta_loc_v: '广东清远',
    meta_sold: '已认养',
    live_eyebrow: 'Cloud Monitor',
    live_title: '云监控 · 专属直播间',
    live_sub: '认养后绑定专属摄像头，24 小时实时看鸡，看得见的放心。',
    live1_t: '专属鸡棚直播',
    live1_d: '每只认养的鸡都绑定专属摄像头，随时看到它在鸡棚里的实时画面。',
    live2_t: '云农场全景',
    live2_d: '总直播看整个农场全景，感受真实的林下散养环境。',
    live3_t: '成长节点提醒',
    live3_d: '出栏、配送等关键节点主动提醒，成长进度一目了然。',
    flow_eyebrow: 'How It Works',
    flow_title: '认养流程',
    flow_sub: '四步轻松认养，坐等土鸡长大送到家。',
    step1_t: '下单认养',
    step1_d: '选择认养数量，提交认养意向，完成支付。',
    step2_t: '绑定直播间',
    step2_d: '系统自动分配专属摄像头，随时视频看鸡。',
    step3_t: '农户代养',
    step3_d: '农户粮食喂养，林下散养，全程可溯源。',
    step4_t: '冷链到家',
    step4_d: '出栏现宰现发，冷链锁鲜直送到家。',
    farm_title: '王叔生态农场',
    farm_p1: '位于广东清远，返乡创业 8 年，专做林下散养土鸡，坚持粮食喂养，不催肥、不打激素。',
    farm_p2: '农场配备专属直播间与云监控系统，每一只认养的鸡都能被认养人实时看到，让「看得见的放心」成为现实。',
    farm_pt1: '金牌农场认证',
    farm_pt2: '林下散养 8 年',
    farm_pt3: '专属直播间 + 云监控',
    farm_badge: '农场评分<br>328 单认养',
    order_eyebrow: 'Order Now',
    order_title: '认养一只土鸡',
    order_sub: '填写认养意向，我们的客服会尽快联系您完成认养。',
    sum_title: '您认养的',
    prod_name2: '林下散养土鸡 · 认养',
    sum_note: '认养后可绑定专属直播间，出栏冷链直送到家。',
    f_name: '您的姓名 *',
    f_phone: '联系电话 *',
    f_count: '认养数量',
    f_city: '所在城市',
    f_msg: '备注（可选）',
    f_btn: '提交认养意向',
    foot_desc: '捷链供应链管理（广东）有限公司旗下认养平台，认养一只土鸡，看得见的放心。',
    foot_links: '快速链接',
    foot_contact: '联系方式',
    foot_addr: '广州市海珠区江南大道中路173号六楼',
    foot_copyright: '捷链供应链管理（广东）有限公司 · Jielian Supply Chain Management (Guangdong) Co., Ltd.',
  },
  en: {
    top_tagline: '🌱 Adopt a chicken · Cloud-monitored, fully traceable',
    nav_home: 'Home',
    nav_about: 'Why Adopt',
    nav_product: 'Adopt a Chicken',
    nav_live: 'Cloud Monitor',
    nav_flow: 'How It Works',
    nav_farm: 'Our Farm',
    nav_order: 'Adopt Now',
    hero_badge: '🐔 Adopt a chicken of your own',
    hero_title: 'Adopt a Free-range Chicken<br>Watch it live anytime',
    hero_lead: 'Adopt an authentic free-range chicken. Our farmers raise it for you, bound to a private live stream so you can watch it grow. Slaughtered and cold-chain delivered to your door at maturity.',
    hero_cta1: 'Adopt a Chicken',
    hero_cta2: 'View Live Stream',
    hero_live: 'LIVE · Cloud farm real-time feed',
    stat1: 'Per chicken/season',
    stat2: 'Private live stream',
    stat3: 'Cold-chain delivery',
    stat4: 'Fully traceable',
    about_eyebrow: 'Why Adopt',
    about_title: 'Why adopt a chicken?',
    about_sub: 'Not just buying a chicken — you participate in its growth, knowing exactly what you eat.',
    f1_t: 'Private Live Stream',
    f1_d: 'Bound to a private camera, watch your chicken eat, roam and grow 24/7.',
    f2_t: 'Free-range',
    f2_d: 'Authentic forest free-range, grain-fed, no hormones, firm and flavorful meat.',
    f3_t: 'Cold-chain Delivery',
    f3_d: 'Slaughtered and shipped fresh at maturity, cold-chain sealed to your door.',
    f4_t: 'Full Traceability',
    f4_d: 'Every chicken has a record from adoption to table, with clear growth milestones.',
    prod_eyebrow: 'Adopt Now',
    prod_title: 'Adopt a Free-range Chicken',
    prod_sub: 'Authentic Qingyuan forest free-range chicken, farmer-raised with a private live stream.',
    prod_hot: '🔥 Best Seller',
    prod_tag1: 'Private live stream',
    prod_tag2: 'Free-range',
    prod_tag3: 'Half-year adoption',
    prod_name: 'Free-range Chicken · Adoption',
    prod_desc: 'Adopt an authentic forest free-range chicken. Farmers raise it, bound to a private live stream, slaughtered and cold-chain delivered at maturity.',
    prod_unit: '/ chicken · season',
    prod_stock: '120 in stock',
    prod_cta: 'Adopt This Chicken Now',
    meta_farm: 'Farm',
    meta_loc: 'Origin',
    meta_loc_v: 'Qingyuan, Guangdong',
    meta_sold: 'Adopted',
    live_eyebrow: 'Cloud Monitor',
    live_title: 'Cloud Monitor · Private Live Stream',
    live_sub: 'Bound to a private camera after adoption — 24/7 real-time view, visible peace of mind.',
    live1_t: 'Private Coop Stream',
    live1_d: 'Each adopted chicken is bound to a private camera, watch its real-time feed anytime.',
    live2_t: 'Cloud Farm Panorama',
    live2_d: 'A general stream shows the whole farm, experiencing the real free-range environment.',
    live3_t: 'Milestone Reminders',
    live3_d: 'Proactive reminders at key stages like maturity and delivery — progress at a glance.',
    flow_eyebrow: 'How It Works',
    flow_title: 'Adoption Process',
    flow_sub: 'Four easy steps — sit back and wait for your chicken to arrive.',
    step1_t: 'Place Order',
    step1_d: 'Choose quantity, submit your adoption intent, complete payment.',
    step2_t: 'Bind Live Stream',
    step2_d: 'System auto-assigns a private camera to watch your chicken.',
    step3_t: 'Farmer Raises',
    step3_d: 'Grain-fed, forest free-range, fully traceable.',
    step4_t: 'Cold-chain Delivery',
    step4_d: 'Slaughtered fresh at maturity, cold-chain delivered to your door.',
    farm_title: 'Uncle Wang Eco Farm',
    farm_p1: 'Located in Qingyuan, Guangdong. 8 years of returning-home entrepreneurship, specializing in forest free-range chickens, grain-fed with no hormones.',
    farm_p2: 'The farm is equipped with private live streams and a cloud monitoring system — every adopted chicken is visible in real time, making "visible peace of mind" a reality.',
    farm_pt1: 'Gold Farm Certification',
    farm_pt2: '8 Years Free-range',
    farm_pt3: 'Private live stream + cloud monitor',
    farm_badge: 'Farm rating<br>328 adoptions',
    order_eyebrow: 'Order Now',
    order_title: 'Adopt a Chicken',
    order_sub: 'Fill in your adoption intent, our team will contact you shortly.',
    sum_title: 'Your adoption',
    prod_name2: 'Free-range Chicken · Adoption',
    sum_note: 'Bound to a private live stream after adoption, cold-chain delivered at maturity.',
    f_name: 'Your Name *',
    f_phone: 'Phone *',
    f_count: 'Quantity',
    f_city: 'City',
    f_msg: 'Notes (optional)',
    f_btn: 'Submit Adoption Intent',
    foot_desc: 'An adoption platform under Jielian Supply Chain Management (Guangdong) Co., Ltd. Adopt a chicken, visible peace of mind.',
    foot_links: 'Quick Links',
    foot_contact: 'Contact',
    foot_addr: '6/F, No. 173, Middle Jiangnan Avenue, Haizhu District, Guangzhou',
    foot_copyright: 'Jielian Supply Chain Management (Guangdong) Co., Ltd.',
  },
};

let currentLang = 'zh';

// 语言切换
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key] !== undefined) {
      el.innerHTML = I18N[lang][key];
    }
  });
  // 语言按钮高亮
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  // 更新 html lang
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  localStorage.setItem('jielian_lang', lang);
}

// 移动端菜单
function initMenu() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }
}

// 下单表单
function initOrderForm() {
  const form = document.getElementById('orderForm');
  const status = document.getElementById('formStatus');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    if (!name || !phone) {
      status.className = 'form-note error';
      status.textContent = currentLang === 'zh'
        ? '请填写姓名和联系电话'
        : 'Please fill in your name and phone';
      return;
    }
    // 拼接认养意向，跳转微信/短信或直接提示（无后端时引导拨打电话）
    const count = document.getElementById('count').value;
    const city = document.getElementById('city').value.trim();
    const msg = document.getElementById('message').value.trim();
    const summary = `认养意向：${count} 只土鸡\n姓名：${name}\n电话：${phone}${city ? '\n城市：' + city : ''}${msg ? '\n备注：' + msg : ''}`;
    status.className = 'form-note';
    status.textContent = currentLang === 'zh'
      ? '✅ 已记录您的认养意向，客服将尽快联系您！也可直接拨打 185 6572 8237'
      : '✅ Your adoption intent is recorded, we will contact you soon! Or call 185 6572 8237';
    console.log(summary);
    form.reset();
  });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('jielian_lang');
  setLang(saved === 'en' ? 'en' : 'zh');
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });
  initMenu();
  initOrderForm();
  document.getElementById('year').textContent = new Date().getFullYear();
});
