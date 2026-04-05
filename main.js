// -----------------------------
// 1. Insert shared navigation
// -----------------------------
document.addEventListener("DOMContentLoaded", function () {
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
});

// -----------------------------
// 2. Insert shared footer
// -----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
    <footer class="global-footer">
      © ${new Date().getFullYear()} 我的人生旅程 · 记录、思考、热爱
    </footer>
  `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});

// -----------------------------
// 3. Make all YouTube iframes responsive
// -----------------------------
document.addEventListener("DOMContentLoaded", function () {
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
});

// -----------------------------
// 4. Inject shared CSS styles
// -----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const style = document.createElement("style");
  style.innerHTML = `
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    header {
      border-bottom: 1px solid #eee;
      padding-bottom: 20px;
      margin-bottom: 30px;
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

    /* Footer */
    .global-footer {
      border-top: 1px solid #eee;
      padding-top: 20px;
      margin-top: 40px;
      text-align: center;
      color: #666;
      font-size: 0.9em;
    }

    /* -----------------------------
       5. DETAILS (视频看点速览) 样式
       ----------------------------- */

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

    details[open] {
      padding-bottom: 16px;
    }

    details p {
      margin-top: 12px;
      color: #fff;
      font-style: italic;
    }
  `;
  document.head.appendChild(style);
});
