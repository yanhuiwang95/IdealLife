document.addEventListener("DOMContentLoaded", function () {

  /* ------------------------------------
     1. Inject Global CSS (Golden Reading Width + Handwriting Titles)
  ------------------------------------ */
  const style = document.createElement("style");
  style.innerHTML = `
    /* Import Handwriting + Reading Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Noto+Serif:wght@400;600&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

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
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
    }

    .logo {
      font-size: 26px;
      font-family: "Caveat", cursive;
      font-weight: 600;
      color: #1f4f7f;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }

    nav li a {
      font-size: 16px;
      color: #555;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;
    }

    nav li a:hover {
      color: #1f4f7f;
      border-bottom-color: #1f4f7f;
    }

    /* Hero */
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

    .hero h1 { font-size: 52px; margin-bottom: 16px; }
    .hero p { font-size: 22px; margin-bottom: 24px; }

    .hero .btn {
      display: inline-block;
      padding: 10px 22px;
      background: #ffb400;
      color: #222;
      border-radius: 4px;
      font-weight: 600;
      font-size: 16px;
    }

    /* 三列区块（保持全宽） */
    .trip-planning {
      max-width: 1200px;
      margin: 60px auto;
      padding: 0 20px;
      text-align: center;
    }

    .section-title {
      font-size: 36px;
      color: #1f4f7f;
      margin-bottom: 10px;
    }

    .section-subtitle {
      font-size: 18px;
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

    /* 黄金阅读宽度内容区 */
    main {
      max-width: 760px;
      margin: 40px auto;
      padding: 0 20px 60px;
    }

    main section {
      margin-bottom: 40px;
      background: #ffffff;
      padding: 28px 26px;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
      font-size: 18px;
    }

    main section h2 {
      font-size: 36px;
      margin-bottom: 16px;
      color: #1f4f7f;
    }

    /* Sidebar 下移 */
    .sidebar {
      margin-top: 40px;
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

    /* Details（白底、无斜体） */
    details {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 14px 18px;
      margin: 20px 0;
      font-style: normal;
      color: #333;
    }

    details summary {
      cursor: pointer;
      font-weight: 600;
      font-size: 18px;
      color: #1f4f7f;
    }

    details p {
      margin-top: 12px;
      font-size: 16px;
      line-height: 1.8;
    }

    /* Footer */
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
     2. Insert Header
  ------------------------------------ */
  document.body.insertAdjacentHTML("afterbegin", `
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
  `);


  /* ------------------------------------
     3. Insert Hero（从 data-hero 读取）
  ------------------------------------ */
  const heroDiv = document.querySelector("[data-hero]");
  if (heroDiv) {
    const heroImage = heroDiv.getAttribute("data-hero");

    const isIndex =
      window.location.pathname.endsWith("index.html") ||
      window.location.pathname === "/" ||
      window.location.pathname === "";

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
     4. Make YouTube responsive
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
  document.body.insertAdjacentHTML("beforeend", `
    <footer>
      © ${new Date().getFullYear()} 我的人生旅程 · 记录、思考、热爱
    </footer>
  `);

});
