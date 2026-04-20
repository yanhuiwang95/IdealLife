document.addEventListener("DOMContentLoaded", function () {

  /* ------------------------------------
     Inject Global CSS
  ------------------------------------ */
  const style = document.createElement("style");
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Noto+Serif:wght@400;600&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

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
       HEADER
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
       MOBILE MENU + SLIDE ANIMATION
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
        display: flex;
        flex-direction: column;
        background: #000;
        padding: 20px;
        border-radius: 8px;
        position: fixed;
        top: 70px;
        right: -260px; /* 初始隐藏在右侧 */
        width: 220px;
        transition: right 0.35s ease; /* 滑入动画 */
        box-shadow: 0 4px 12px rgba(255,255,255,0.15);

        align-items: flex-start !important;
        text-align: left !important;
        justify-content: flex-start !important;
      }

      nav ul.open {
        right: 20px; /* 滑入位置 */
      }

      nav li a {
        color: #fff;
      }
    }

    /* 遮罩层 */
    .menu-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0);
      z-index: 900;
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
       INDEX
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
      transition: box-shadow 0.2s ease;
      text-align: left;
      display: block;
    }

    .trip-card:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.18);
    }

    /* 图片容器：用于叠加遮罩 */
    .trip-card .img-wrap {
      position: relative;
      overflow: hidden;
    }

    .trip-card .img-wrap::after {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0);
      transition: background 0.25s ease;
    }

    .trip-card:hover .img-wrap::after {
      background: rgba(0, 0, 0, 0.28);
    }

    .trip-card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      display: block;
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
       ARTICLE PAGE
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

    /* ------------------------------------
       TABLE — 桌面版
    ------------------------------------ */
    .table-wrapper {
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin: 24px 0;
      border-radius: 8px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      table-layout: auto; /* 按内容自动分配列宽 */
    }

    table td,
    table th {
      padding: 14px 18px;
      border: 1px solid #ddd;
      font-size: 16px;
      vertical-align: top;
      word-break: break-word;
    }

    table tr:nth-child(even) {
      background: #fafafa;
    }

    /* 第一列（名称/标签列）收窄，不换行 */
    table td:first-child,
    table th:first-child {
      white-space: nowrap;
      width: 1%;
    }

    /* ------------------------------------
       TABLE — 手机卡片式重排
    ------------------------------------ */
    @media (max-width: 650px) {

      .table-wrapper {
        overflow-x: visible;
        border-radius: 0;
      }

      table {
        display: block;
        border-radius: 8px;
        overflow: hidden;
      }

      table thead {
        display: none; /* 隐藏原始表头，改用 data-label */
      }

      table tbody {
        display: block;
      }

      table tr {
        display: block;
        margin-bottom: 14px;
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        background: #fff;
      }

      table tr:nth-child(even) {
        background: #fff; /* 手机卡片模式取消斑马纹 */
      }

      table td {
        display: flex;
        gap: 10px;
        border: none;
        border-bottom: 1px solid #eee;
        font-size: 15px;
        padding: 10px 14px;
        white-space: normal;
        width: auto;
      }

      table td:last-child {
        border-bottom: none;
      }

      /* data-label 作为每格的列标题 */
      table td::before {
        content: attr(data-label);
        font-weight: 600;
        min-width: 72px;
        flex-shrink: 0;
        color: #555;
        font-size: 14px;
        padding-top: 1px;
      }

      /* 没有 data-label 的格（如第一行数据本身就是标题）不显示伪元素 */
      table td[data-label=""]::before {
        display: none;
        min-width: 0;
      }
    }

    /* ------------------------------------
       VIDEO
    ------------------------------------ */
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

    /* ------------------------------------
       LIST STYLES
    ------------------------------------ */
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

    /* ------------------------------------
       DETAILS / ACCORDION
    ------------------------------------ */
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

    /* ------------------------------------
       FOOTER
    ------------------------------------ */
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

        <a href="/index.html" class="logo-link">
          <img src="https://raw.githubusercontent.com/yanhuiwang95/images-repo/main/logo.png" class="site-logo" alt="logo">
        </a>

        <div class="menu-toggle">☰</div>

        <nav>
          <ul>
            <li><a href="/should.html">应该做</a></li>
            <li><a href="/like.html">喜欢做</a></li>
            <li><a href="/life-purpose.html">人生意义</a></li>
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
     Trip Card: wrap img in .img-wrap for hover darkening
  ------------------------------------ */
  document.querySelectorAll(".trip-card img").forEach(img => {
    if (!img.parentElement.classList.contains("img-wrap")) {
      const wrap = document.createElement("div");
      wrap.className = "img-wrap";
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);
    }
  });


  /* ------------------------------------
     YouTube Responsive
  ------------------------------------ */
  const iframes = document.querySelectorAll("iframe");
  iframes.forEach(iframe => {
    const src = iframe.getAttribute("src");
    if (src && src.includes("youtube.com")) {
      if (!iframe.closest(".video-container")) {
        const wrapper = document.createElement("div");
        wrapper.className = "video-container";
        iframe.parentNode.insertBefore(wrapper, iframe);
        wrapper.appendChild(iframe);
      }
    }
  });


  /* ------------------------------------
     Table: 外包 wrapper + 自动打 data-label
     手机端卡片式重排依赖 data-label 显示列标题
  ------------------------------------ */
  document.querySelectorAll("table").forEach(table => {

    // 外包 wrapper（避免重复包裹）
    if (!table.parentElement.classList.contains("table-wrapper")) {
      const wrapper = document.createElement("div");
      wrapper.className = "table-wrapper";
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }

    // 读取表头（支持 <thead><th> 或 tbody 第一行的 <td><strong>）
    const headers = [];
    const headerCells = table.querySelectorAll("thead th, thead td");

    if (headerCells.length > 0) {
      // 标准 thead
      headerCells.forEach(cell => headers.push(cell.innerText.trim()));
    } else {
      // 没有 thead，用 tbody 第一行
      const firstRow = table.querySelector("tr");
      if (firstRow) {
        firstRow.querySelectorAll("td").forEach(cell => {
          headers.push(cell.innerText.trim());
        });
      }
    }

    // 给数据行的每个 td 打 data-label
    const dataRows = headerCells.length > 0
      ? table.querySelectorAll("tbody tr")
      : table.querySelectorAll("tr:not(:first-child)");

    dataRows.forEach(row => {
      row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headers[i] || "");
      });
    });
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
     Mobile menu toggle + auto close
  ------------------------------------ */
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav ul");

  function closeMenu() {
    menu.classList.remove("open");
    const overlay = document.querySelector(".menu-overlay");
    if (overlay) overlay.remove();
  }

  function openMenu() {
    menu.classList.add("open");

    const overlay = document.createElement("div");
    overlay.className = "menu-overlay";
    document.body.appendChild(overlay);

    overlay.addEventListener("click", closeMenu);
  }

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      if (menu.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  window.addEventListener("scroll", closeMenu);


  /* ------------------------------------
     Footer
  ------------------------------------ */
  document.body.insertAdjacentHTML("beforeend", `
    <footer>
      © ${new Date().getFullYear()} 我的人生旅程 · 记录、思考、热爱
    </footer>
  `);

});
