document.addEventListener("DOMContentLoaded", function () {

  /* ------------------------------------
     1. Inject Global CSS
  ------------------------------------ */
  const style = document.createElement("style");
  style.innerHTML = `
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

    /* 黄金阅读宽度 */
    main {
      max-width: 760px;
      margin: 40px auto;
      padding: 0 20px 60px;
    }

    main section, article {
      background: #ffffff;
      padding: 28px 26px;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
      margin-bottom: 40px;
    }

    /* 图片自动缩放 */
    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 20px auto;
      border-radius: 8px;
    }

    /* 表格优化 */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      background: #fff;
    }

    table td, table th {
      padding: 12px 16px;
      border: 1px solid #ddd;
      font-size: 16px;
    }

    table tr:nth-child(even) {
      background: #fafafa;
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

    /* Details（黑底白字，无斜体） */
    details,
    details * {
      background: #000 !important;
      color: #fff !important;
      font-style: normal !important;
    }

    details {
      border-radius: 8px !important;
      padding: 14px 18px !important;
      margin: 20px 0 !important;
      border: none !important;
    }

    details summary {
      cursor: pointer !important;
      font-weight: 700 !important;
      font-size: 18px !important;
      color: #fff !important;
    }

    details p {
      margin-top: 12px !important;
      font-size: 16px !important;
      line-height: 1.8 !important;
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
     3. Insert Hero（支持 data-title / data-subtitle）
  ------------------------------------ */
  const heroDiv = document.querySelector("[data-hero]");
  if (heroDiv) {
    const heroImage = heroDiv.getAttribute("data-hero");
    const title = heroDiv.getAttribute("data-title") || "我的人生旅程";
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
