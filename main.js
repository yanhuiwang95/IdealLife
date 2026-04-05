document.addEventListener("DOMContentLoaded", function () {

  /* ------------------------------------
     1. Inject Global CSS
  ------------------------------------ */
  const style = document.createElement("style");
  style.innerHTML = `
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "PingFang SC", "Microsoft YaHei", sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
      max-width: 1200px;
      margin: 0 auto;
    }

    a { text-decoration: none; color: inherit; }

    /* Header */
    header {
      background: #ffffff;
      border-bottom: 1px solid #e5e5e5;
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .nav-container {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
    }

    .logo {
      font-size: 22px;
      font-weight: 700;
      color: #1f4f7f;
      letter-spacing: 1px;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }

    nav li a {
      font-size: 15px;
      color: #555;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;
    }

    nav li a:hover {
      color: #1f4f7f;
      border-bottom-color: #1f4f7f;
    }

    /* Hero（通用样式，图片由 data-hero 决定） */
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
      max-width: 700px;
      margin: 0 auto;
    }

    .hero h1 { font-size: 40px; margin-bottom: 16px; }
    .hero p { font-size: 18px; margin-bottom: 24px; }

    .hero .btn {
      display: inline-block;
      padding: 10px 22px;
      background: #ffb400;
      color: #222;
      border-radius: 4px;
      font-weight: 600;
      font-size: 15px;
    }

    .hero .btn:hover { background: #ff9a00; }

    /* 三列区块（index 用） */
    .trip-planning {
      max-width: 1100px;
      margin: 60px auto;
      padding: 0 20px;
      text-align: center;
    }

    .section-title {
      font-size: 28px;
      color: #1f4f7f;
      margin-bottom: 10px;
    }

    .section-subtitle {
      font-size: 16px;
      color: #555;
      margin-bottom: 30px;
    }

    .trip-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }

    .trip-card {
      background: #ffffff;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 6px rgba(0,0,0,0.08);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      text-align: left;
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
      font-size: 20px;
      margin: 16px 0 8px;
      color: #1f4f7f;
      padding: 0 16px;
    }

    .trip-card p {
      font-size: 14px;
      color: #555;
      padding: 0 16px 20px;
    }

    /* 主内容区两列布局（index 用） */
    main {
      max-width: 1100px;
      margin: 40px auto;
      padding: 0 20px 60px;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 30px;
    }

    main section {
      margin-bottom: 40px;
      background: #ffffff;
      padding: 24px 22px;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
    }

    main section h2 {
      font-size: 22px;
      margin-bottom: 12px;
      color: #1f4f7f;
    }

    main section p {
      font-size: 15px;
      color: #444;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .sidebar-box {
      background: #ffffff;
      padding: 20px 18px;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
    }

    .sidebar-box h3 {
      font-size: 18px;
      margin-bottom: 10px;
      color: #1f4f7f;
    }

    .sidebar-box p {
      font-size: 14px;
      color: #555;
    }

    /* Responsive YouTube */
    .video-container {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      border-radius: 8px;
      margin: 20px 0;
    }

    .video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    /* Details (视频看点速览) */
    details {
      background: #000;
      color: #fff;
      font-style: italic;
      padding: 12px 16px;
      border-radius: 8px;
      margin: 20px 0;
    }

    details summary {
      cursor: pointer;
      font-weight: bold;
      font-style: normal;
      color: #fff;
    }

    details p {
      margin-top: 12px;
      color: #fff;
      font-style: italic;
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 20px;
      font-size: 13px;
      color: #777;
      border-top: 1px solid #e5e5e5;
      background: #ffffff;
      margin-top: 40px;
    }

    /* 响应式 */
    @media (max-width: 800px) {
      .trip-grid { grid-template-columns: 1fr; }
      main { grid-template-columns: 1fr; }
      .nav-container { flex-direction: column; gap: 10px; }
      nav ul { flex-wrap: wrap; justify-content: center; }
      .hero { padding: 80px 20px; }
      .hero h1 { font-size: 30px; }
    }
  `;
  document.head.appendChild(style);


  /* ------------------------------------
     2. Insert Header
  ------------------------------------ */
  const headerHTML = `
    <header>
      <div class="nav-container">
        <div class="logo">我的人生旅程</div>
        <nav>
          <ul>
            <li><a href="index.html">关于</a></li>
            <li><a href="should.html">应该做</a></li>
            <li><a href="like.html">喜欢做</a></li>
            <li><a href="meaning.html">人生意义</a></li>
            <li><a href="memories.html">时光留影</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);


  /* ------------------------------------
     3. Insert Hero（从 data-hero 读取图片）
  ------------------------------------ */
  const heroDiv = document.querySelector("[data-hero]");
  if (heroDiv) {
    const heroImage = heroDiv.getAttribute("data-hero") || "";
    const isIndex = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/") || window.location.pathname === "";

    const title = isIndex ? "用心走完这一生的旅程" : "简单性原则";
    const subtitle = isIndex
      ? "记录我是谁、我在做什么、我想成为什么样的人，以及那些不想忘记的时光。"
      : "让人生变轻盈的第一条法则";

    const heroHTML = `
      <section class="hero" style="background-image: url('${heroImage}')">
        <div class="hero-content">
          <h1>${title}</h1>
          <p>${subtitle}</p>
          ${isIndex ? '<a href="index.html" class="btn">从「关于」开始</a>' : ""}
        </div>
      </section>
    `;

    heroDiv.insertAdjacentHTML("afterend", heroHTML);
    heroDiv.remove();
  }


  /* ------------------------------------
     4. Make YouTube iframes responsive
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
     5. Insert Footer
  ------------------------------------ */
  const footerHTML = `
    <footer>
      © ${new Date().getFullYear()} 我的人生旅程 · 记录、思考、热爱
    </footer>
  `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);

});
