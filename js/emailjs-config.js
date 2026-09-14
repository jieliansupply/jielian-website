/* ============================================================
   EmailJS 配置（邮箱后端直发）
   在 https://www.emailjs.com 注册并绑定收件邮箱后，
   把下面三个值填进去即可启用邮箱直发功能。

   1. publicKey   —— EmailJS 账户设置 → Account → Public Key
   2. serviceId   —— Email Services → 创建服务（选 Gmail/自定义）后得到的 Service ID
   3. templateId  —— Email Templates → 创建模板后得到的 Template ID

   模板变量（template_params）需包含：
     name / email / phone / country / message
   收件邮箱建议设为：postmaster@jieliansupply.com
   ============================================================ */
window.EMAILJS = {
  publicKey: "",   // TODO: 填入你的 Public Key
  serviceId: "",   // TODO: 填入 Service ID
  templateId: ""   // TODO: 填入 Template ID
};
