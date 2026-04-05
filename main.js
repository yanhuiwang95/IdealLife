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

    .hero h1 { font-size: 40px; margin-bottom: 16px; }
    .hero p { font-size: 18px; margin-bottom: 24px; }

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
  `;
  document.head.appendChild(style);


  /* ------------------------------------
     2. Insert Header
  ------------------------------------ */
  const headerHTML = `
    <header>
      <div class="nav-container">
        <div class="logo">理想生活</div>
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
     3. Insert Hero (image comes from page)
  ------------------------------------ */
  const heroDiv = document.querySelector("[data-hero]");
  if (heroDiv) {
    const heroImage = heroDiv.getAttribute("data-hero");

    const heroHTML = `
      <section class="hero" style="background-image: url('${heroImage}')">
        <div class="hero-content">
          <h1>简单性原则</h1>
          <p>让人生变轻盈的第一条法则</p>
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
