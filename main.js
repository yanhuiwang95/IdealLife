document.addEventListener("DOMContentLoaded", function () {

  /* ------------------------------------
     Inject Global CSS
  ------------------------------------ */
  const style = document.createElement("style");
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Noto+Serif:wght@400;600&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    /* 全局去掉所有链接下划线 */
    a, a:visited, a:hover, a:active {
      text-decoration: none !important;
    }

    body {
      font-family: "Noto Serif", serif;
      font-size: 18px;
      line-height: 1.85;
      color: #333;
      background-color: #f5f5f5;
    }

    h1, h2, h3 {
      font-family: "Caveat", cursive;
      letter-spacing: 0.5px;
    }

    /* ------------------------------------
       HEADER（黑色背景 + 白色菜单）
    ------------------------------------ */
    header {
      background: #000;
      border-bottom: 1px solid #222;
      position: sticky;
      top: 0;
      z-index: 1000;
      padding: 0;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 70px;
    }

    .site-logo {
      height: 70px;
      width: auto;
      display: block;
    }

    .logo-link {
      display: flex;
      align-items: center;
    }

    /* Desktop menu */
    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
      justify-content: flex-end;
      align-items: center;
    }

    nav li a {
      font-size: 16px;
      color: #fff;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;
    }

    nav li a:hover {
      color: #ddd;
      border-bottom-color: #ddd;
    }

    /* 移除所有页面导航菜单的竖线 */
    header nav ul li::before {
      content: none !important;
    }

    /* ------------------------------------
       MOBILE MENU
    ------------------------------------ */
    .menu-toggle {
      display: none;
      font-size: 32px;
      cursor: pointer;
      user-select: none;
      color: #fff;
      margin-left: auto;
    }

    @media (max-width: 750px) {

      .menu-toggle {
        display: block;
      }

      nav ul {
        display: none;
        flex-direction: column;
        background: #000;
        padding: 20px;
        border-radius: 8px;
        position: absolute;
        top: 70px;
        right: 20px;

        /* 左对齐 */
        align-items: flex-start !important;
        text-align: left !important;
        justify-content: flex-start !important;

        width: 200px;
        box-shadow: 0 4px 12px rgba(255,255,255,0.15);
      }

      nav ul.open {
        display: flex;
      }

      nav li a {
        color: #fff;
      }
    }

    /* ------------------------------------
       HERO
    ------------------------------------ */
    .hero {
      color: #fff;
      text-align: center;
      padding: 120px 20px;
      position: relative;
      margin-bottom: 40px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .hero::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
    }

    .hero-content {
      position: relative;
      max-width: 720px;
      margin: 0 auto;
    }

    .hero h1 { font-size: 52px; margin-bottom: 16px; }
    .hero p { font-size: 22px; margin-bottom: 24px; }

    /* ------------------------------------
       INDEX 内容居中 + 响应式
    ------------------------------------ */
    body.index .content-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    body.index .trip-grid {
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }

    @media (max-width: 900px) {
      body.index .trip-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      body.index .trip-grid {
        grid-template-columns: 1fr;
        padding: 0 16px;
      }
    }

    .trip-card {
      background: #ffffff;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 6px rgba(0,0,0,0.08);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      text-align: left;
      display: block;
    }

    .trip-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.12);
    }

    .trip-card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    .trip-card h3 {
      font-size: 26px;
      margin: 16px 0 8px;
      color: #1f4f7f;
      padding: 0 16px;
    }

    .trip-card p {
      font-size: 15px;
      color: #555;
      padding: 0 16px 20px;
    }

    /* ------------------------------------
       主内容 + sidebar 居中
    ------------------------------------ */
    body.index main {
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 20px;
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 40px;
    }

    @media (max-width: 900px) {
      body.index main {
        grid-template-columns: 1fr;
      }
    }

    .sidebar-box {
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    }

    /* ------------------------------------
       文章页（黄金阅读宽度）
    ------------------------------------ */
    body.article main {
      max-width: 880px;
      margin: 40px auto;
      padding: 0 20px 60px;
    }

    body.article article {
      background: #ffffff;
      padding: 28px 26px;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
      margin-bottom: 40px;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 24px auto;
      border-radius: 8px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 24px 0;
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
    }

    table td, 
    table th {
      padding: 14px 18px;
      border: 1px solid #ddd;
      font-size: 16px;
      vertical-align: top;
    }

    table tr:nth-child(even) {
      background: #fafafa;
    }

    .video-container {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      border-radius: 8px;
      margin: 24px 0;
    }

    .video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    /* Notion 风格列表 */
    body.article ol,
    body.article ul {
      padding-left: 32px;
      margin: 18px 0;
    }

    body.article li {
      margin-bottom: 10px;
      line-height: 1.75;
      position: relative;
      padding-left: 14px;
    }

    body.article li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 6px;
      bottom: 6px;
      width: 3px;
      background: #e0e0e0;
      border-radius: 2px;
    }

    body.article ul li::marker {
      color: #888;
      font-size: 0.9em;
    }

    body.article ol li::marker {
      font-family: "Caveat", cursive;
      font-size: 1.2em;
      color: #1f4f7f;
    }

    /* details */
    details,
    details * {
      background: #000 !important;
      color: #fff !important;
      font-style: normal !important;
    }

    details {
      border-radius: 8px !important;
      padding: 16px 20px !important;
      margin: 24px 0 !important;
      border: none !important;
      overflow: hidden;
      transition: max-height 0.35s ease;
      max-height: 48px;
    }

    details[open] {
      max-height: 2000px;
    }

    details summary {
      cursor: pointer !important;
      font-weight: 700 !important;
      font-size: 18px !important;
      color: #fff !important;
    }

    footer {
      text-align: center;
      padding: 20px;
      font-size: 14px;
      color: #777;
      border-top: 1px solid #e5e5e5;
      background: #ffffff;
      margin-top: 40px;
    }
  `;
  document.head.appendChild(style);


  /* ------------------------------------
     Detect Page Type
  ------------------------------------ */
  const path = window.location.pathname;

  if (path.includes("index") || path === "/" || path === "") {
    document.body.classList.add("index");
  } else {
    document.body.classList.add("article");
  }


  /* ------------------------------------
     Insert Header
  ------------------------------------ */
  document.body.insertAdjacentHTML("afterbegin", `
    <header>
      <div class="nav-container">

        <a href="index.html" class="logo-link">
          <img src="https://raw.githubusercontent.com/yanhuiwang95/images-repo/main/logo.png" class="site-logo" alt="logo">
        </a>

        <div class="menu-toggle">☰</div>

        <nav>
          <ul>
            <li><a href="should.html">应该做</a></li>
            <li><a href="like.html">喜欢做</a></li>
            <li><a href="meaning.html">人生意义</a></li>
            <li><a href="memories.html">时光留影</a></li>
          </ul>
        </nav>

      </div>
    </header>
  `);


  /* ------------------------------------
     Insert Hero
  ------------------------------------ */
  const heroDiv = document.querySelector("[data-hero]");
  if (heroDiv) {
    const heroImage = heroDiv.getAttribute("data-hero");
    const title = heroDiv.getAttribute("data-title") || "";
    const subtitle = heroDiv.getAttribute("data-subtitle") || "";

    const heroHTML = `
      <section class="hero" style="background-image: url('${heroImage}')">
        <div class="hero-content">
          <h1>${title}</h1>
          <p>${subtitle}</p>
        </div>
      </section>
    `;

    heroDiv.insertAdjacentHTML("afterend", heroHTML);
    heroDiv.remove();
  }


  /* ------------------------------------
     YouTube Responsive
  ------------------------------------ */
  const iframes = document.querySelectorAll("iframe");
  iframes.forEach(iframe => {
    const src = iframe.getAttribute("src");
    if (src && src.includes("youtube.com")) {
      const wrapper = document.createElement("div");
      wrapper.className = "video-container";
      iframe.parentNode.insertBefore(wrapper, iframe);
      wrapper.appendChild(iframe);
    }
  });


  /* ------------------------------------
     details smooth animation
  ------------------------------------ */
  document.querySelectorAll("details").forEach(d => {
    d.addEventListener("toggle", () => {
      if (d.open) {
        d.style.maxHeight = d.scrollHeight + "px";
      } else {
        d.style.maxHeight = "48px";
      }
    });
  });


  /* ------------------------------------
     Mobile menu toggle
  ------------------------------------ */
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav ul");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  /* 自动关闭菜单：滑动页面 */
  window.addEventListener("scroll", () => {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    }
  });

  /* 自动关闭菜单：点击其它区域 */
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove("open");
    }
  });


  /* ------------------------------------
     Footer
  ------------------------------------ */
  document.body.insertAdjacentHTML("beforeend", `
    <footer>
      © ${new Date().getFullYear()} 我的人生旅程 · 记录、思考、热爱
    </footer>
  `);

});
