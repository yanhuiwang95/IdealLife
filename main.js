document.addEventListener("DOMContentLoaded", function () {

  /* ============================================================
     Inject Global CSS
     - All shared styles live here
     - Themed via CSS custom properties (--accent, etc.)
     - Page-type styles scoped under body.index / body.category / body.article
  ============================================================ */
  const style = document.createElement("style");
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Noto+Serif:wght@400;600&display=swap');

    /* ---------- Design tokens ---------- */
    :root {
      --accent: #1f4f7f;
      --text-dark: #1a1a1a;
      --text-body: #333;
      --text-mute: #555;
      --text-soft: #777;
      --text-faint: #888;
      --text-faintest: #999;
      --bg-page: #f5f5f5;
      --bg-card: #ffffff;
      --border-soft: #e0e0e0;
      --shadow-sm: 0 2px 6px rgba(0,0,0,0.06);
      --shadow-md: 0 2px 8px rgba(0,0,0,0.07);
      --shadow-hover: 0 4px 16px rgba(0,0,0,0.12);
      --radius: 8px;
      --max-narrow: 880px;
      --max-wide: 1200px;
    }

    /* Theme overrides — apply via <body class="theme-warm"> etc. */
    body.theme-warm  { --accent: #d4a373; }
    body.theme-philo { --accent: #4a5568; }

    /* ---------- Reset & base ---------- */
    * { box-sizing: border-box; margin: 0; padding: 0; }

    a, a:visited, a:hover, a:active { text-decoration: none !important; }

    body {
      font-family: "Noto Serif", serif;
      font-size: 18px;
      line-height: 1.85;
      color: var(--text-body);
      background-color: var(--bg-page);
    }

    h1, h2, h3 {
      font-family: "Caveat", cursive;
      letter-spacing: 0.5px;
    }

    /* ============================================================
       HEADER
    ============================================================ */
    header {
      background: #000;
      border-bottom: 1px solid #222;
      position: sticky;
      top: 0;
      z-index: 1000;
      padding: 0;
    }

    .nav-container {
      max-width: var(--max-wide);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 70px;
    }

    .site-logo { height: 70px; width: auto; display: block; }

    .logo-link { display: flex; align-items: center; }

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

    nav li a:hover { color: #ddd; border-bottom-color: #ddd; }

    header nav ul li::before { content: none !important; }

    /* ---------- Mobile menu ---------- */
    .menu-toggle {
      display: none;
      font-size: 32px;
      cursor: pointer;
      user-select: none;
      color: #fff;
      margin-left: auto;
    }

    @media (max-width: 750px) {
      .menu-toggle { display: block; }

      nav ul {
        display: flex;
        flex-direction: column;
        background: #000;
        padding: 20px;
        border-radius: var(--radius);
        position: fixed;
        top: 70px;
        right: -260px;
        width: 220px;
        transition: right 0.35s ease;
        box-shadow: 0 4px 12px rgba(255,255,255,0.15);
        align-items: flex-start !important;
        text-align: left !important;
        justify-content: flex-start !important;
      }

      nav ul.open { right: 20px; }
      nav li a { color: #fff; }
    }

    .menu-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0);
      z-index: 900;
    }

    /* ============================================================
       HERO (every page)
    ============================================================ */
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
    .hero p  { font-size: 22px; margin-bottom: 24px; }

    /* ============================================================
       INDEX PAGE
    ============================================================ */
    body.index main {
      max-width: var(--max-narrow);
      margin: 0 auto;
      padding: 0 20px 60px;
    }

    /* Trip cards (top three principles) */
    body.index .trip-grid {
      max-width: var(--max-wide);
      margin: 40px auto;
      padding: 0 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }

    @media (max-width: 900px) {
      body.index .trip-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) {
      body.index .trip-grid { grid-template-columns: 1fr; padding: 0 16px; }
    }

    .trip-card {
      background: var(--bg-card);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 6px rgba(0,0,0,0.08);
      transition: box-shadow 0.2s ease;
      text-align: left;
      display: block;
    }

    .trip-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.18); }

    .trip-card .img-wrap { position: relative; overflow: hidden; }

    .trip-card .img-wrap::after {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0);
      transition: background 0.25s ease;
    }

    .trip-card:hover .img-wrap::after { background: rgba(0, 0, 0, 0.28); }

    .trip-card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      display: block;
    }

    .trip-card h3 {
      font-size: 26px;
      margin: 16px 0 8px;
      color: var(--accent);
      padding: 0 16px;
    }

    .trip-card p {
      font-size: 15px;
      color: var(--text-mute);
      padding: 0 16px 20px;
    }

    /* About-me block (index) */
    body.index .about-section {
      margin: 48px 0 0;
      padding: 36px 32px;
      background: var(--bg-card);
      border-radius: var(--radius);
      box-shadow: var(--shadow-sm);
    }

    body.index .about-section h2 {
      font-size: 32px;
      color: var(--accent);
      margin-bottom: 20px;
    }

    body.index .about-section p {
      font-size: 17px;
      color: var(--text-mute);
      line-height: 1.9;
      margin-bottom: 14px;
    }

    body.index .about-section p:last-child { margin-bottom: 0; }

    body.index .about-divider {
      border: none;
      border-top: 1px solid #eee;
      margin: 28px 0;
    }

    body.index .about-en {
      color: var(--text-faint) !important;
      font-size: 15px !important;
    }

    /* Three-pillar nav cards (index) */
    body.index .nav-section { margin: 48px 0 0; }

    body.index .nav-section-title {
      font-family: "Caveat", cursive;
      font-size: 26px;
      color: var(--text-faint);
      margin-bottom: 20px;
      padding-left: 2px;
    }

    body.index .nav-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    @media (max-width: 700px) {
      body.index .nav-grid { grid-template-columns: 1fr; }
    }

    body.index .nav-card {
      display: block;
      padding: 26px 24px;
      background: var(--bg-card);
      border-radius: var(--radius);
      box-shadow: var(--shadow-sm);
      border-top: 4px solid var(--accent);
      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }

    body.index .nav-card:hover {
      box-shadow: 0 6px 16px rgba(0,0,0,0.10);
      transform: translateY(-3px);
    }

    body.index .nav-card-emoji {
      font-size: 32px;
      display: block;
      margin-bottom: 12px;
    }

    body.index .nav-card h3 {
      font-size: 28px;
      color: var(--accent);
      margin-bottom: 10px;
    }

    body.index .nav-card p {
      font-size: 14px;
      color: var(--text-faint);
      line-height: 1.65;
    }

    body.index .nav-card-tags {
      margin-top: 14px;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    body.index .nav-card-tag {
      font-size: 12px;
      color: var(--text-faintest);
      background: #f5f5f5;
      padding: 3px 10px;
      border-radius: 20px;
    }

    /* ============================================================
       CATEGORY LANDING PAGES (should / like / life-purpose)
       Theme accent via body.theme-warm / body.theme-philo
       Column count via body.cols-4 (default is 3)
    ============================================================ */
    body.category .section-intro {
      max-width: var(--max-narrow);
      margin: 32px auto 0;
      padding: 0 20px;
      text-align: center;
    }

    body.category .section-intro p {
      font-size: 18px;
      color: var(--text-mute);
      line-height: 1.9;
    }

    body.category .featured-grid {
      max-width: var(--max-wide);
      margin: 36px auto 0;
      padding: 0 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    @media (max-width: 900px) {
      body.category .featured-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) {
      body.category .featured-grid { grid-template-columns: 1fr; padding: 0 16px; }
    }

    body.category .featured-card {
      background: var(--bg-card);
      border-radius: 10px;
      padding: 22px 22px 20px;
      box-shadow: var(--shadow-md);
      border-left: 4px solid var(--accent);
      display: block;
      transition: box-shadow 0.2s ease;
    }

    body.category .featured-card:hover { box-shadow: var(--shadow-hover); }

    body.category .featured-label {
      font-size: 12px;
      font-weight: 700;
      color: var(--accent);
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    body.category .featured-card h3 {
      font-size: 22px;
      color: var(--text-dark);
      margin-bottom: 8px;
      line-height: 1.3;
    }

    body.category .featured-card p {
      font-size: 14px;
      color: var(--text-soft);
      line-height: 1.65;
      margin: 0;
    }

    body.category .section-label {
      max-width: var(--max-wide);
      margin: 48px auto 0;
      padding: 0 20px;
      display: flex;
      align-items: center;
      gap: 16px;
    }

    body.category .section-label span {
      font-family: "Caveat", cursive;
      font-size: 24px;
      color: var(--text-mute);
      white-space: nowrap;
    }

    body.category .section-label::after {
      content: "";
      flex: 1;
      height: 1px;
      background: var(--border-soft);
    }

    body.category .category-grid {
      max-width: var(--max-wide);
      margin: 24px auto 60px;
      padding: 0 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }

    body.category.cols-4 .category-grid {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1100px) {
      body.category .category-grid,
      body.category.cols-4 .category-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 650px) {
      body.category .category-grid,
      body.category.cols-4 .category-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
    }

    body.category .category h3 {
      font-size: 26px;
      margin-bottom: 6px;
      color: var(--text-dark);
    }

    body.category .category .category-desc {
      font-size: 13px;
      color: var(--text-faintest);
      margin-bottom: 14px;
      line-height: 1.5;
    }

    body.category .category ul { padding-left: 20px; }

    body.category .category ul li {
      margin-bottom: 6px;
      font-size: 15px;
      line-height: 1.6;
    }

    /* ============================================================
       ARTICLE PAGE
    ============================================================ */
    body.article main {
      max-width: var(--max-narrow);
      margin: 40px auto;
      padding: 0 20px 60px;
    }

    body.article article {
      background: var(--bg-card);
      padding: 28px 26px;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
      margin-bottom: 40px;
    }

    .article-meta {
      font-size: 14px;
      color: var(--text-faint);
      margin-bottom: 20px;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 24px auto;
      border-radius: var(--radius);
    }

    /* ---------- Tables — desktop ---------- */
    .table-wrapper {
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin: 24px 0;
      border-radius: var(--radius);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: var(--bg-card);
      border-radius: var(--radius);
      overflow: hidden;
      table-layout: auto;
    }

    table td, table th {
      padding: 14px 18px;
      border: 1px solid #ddd;
      font-size: 16px;
      vertical-align: top;
      word-break: break-word;
    }

    table tr:nth-child(even) { background: #fafafa; }

    table td:first-child, table th:first-child {
      white-space: nowrap;
      width: 1%;
    }

    /* ---------- Tables — mobile cards ---------- */
    @media (max-width: 650px) {
      .table-wrapper { overflow-x: visible; border-radius: 0; }

      table {
        display: block;
        border-radius: var(--radius);
        overflow: hidden;
      }

      table thead { display: none; }
      table tbody { display: block; }

      table tr {
        display: block;
        margin-bottom: 14px;
        border: 1px solid #ddd;
        border-radius: var(--radius);
        overflow: hidden;
        background: var(--bg-card);
      }

      table tr:nth-child(even) { background: var(--bg-card); }

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

      table td:last-child { border-bottom: none; }

      table td::before {
        content: attr(data-label);
        font-weight: 600;
        min-width: 72px;
        flex-shrink: 0;
        color: var(--text-mute);
        font-size: 14px;
        padding-top: 1px;
      }

      table td[data-label=""]::before { display: none; min-width: 0; }
    }

    /* ---------- Video ---------- */
    .video-container {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      border-radius: var(--radius);
      margin: 24px 0;
    }

    .video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    /* ---------- Lists (article) ---------- */
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
      color: var(--text-faint);
      font-size: 0.9em;
    }

    body.article ol li::marker {
      font-family: "Caveat", cursive;
      font-size: 1.2em;
      color: var(--accent);
    }

    /* ---------- Details / accordion ---------- */
    details, details * {
      background: #000 !important;
      color: #fff !important;
      font-style: normal !important;
    }

    details {
      border-radius: var(--radius) !important;
      padding: 16px 20px !important;
      margin: 24px 0 !important;
      border: none !important;
      overflow: hidden;
      transition: max-height 0.35s ease;
      max-height: 48px;
    }

    details summary {
      cursor: pointer !important;
      font-weight: 700 !important;
      font-size: 18px !important;
      color: #fff !important;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    details summary::-webkit-details-marker { display: none; }

    details summary::after {
      content: "+";
      font-weight: 700;
      margin-left: 12px;
      transition: transform 0.2s ease;
    }

    details[open] summary::after { content: "−"; }

    /* ---------- Footer ---------- */
    footer {
      text-align: center;
      padding: 20px;
      font-size: 14px;
      color: var(--text-soft);
      border-top: 1px solid #e5e5e5;
      background: var(--bg-card);
      margin-top: 40px;
    }

    /* ============================================================
       MOBILE REFINEMENTS (≤ 600px)
       Single consolidated block — keep it last so it overrides
    ============================================================ */
    @media (max-width: 600px) {
      body { font-size: 16px; line-height: 1.8; }

      /* Hero — shorter, tighter typography */
      .hero { padding: 80px 20px 70px; margin-bottom: 28px; }
      .hero h1 { font-size: 38px; margin-bottom: 12px; }
      .hero p  { font-size: 17px; margin-bottom: 16px; line-height: 1.55; }

      /* Index — about + nav cards */
      body.index main { padding: 0 16px 40px; }
      body.index .about-section { padding: 24px 20px; margin-top: 32px; }
      body.index .about-section h2 { font-size: 26px; margin-bottom: 14px; }
      body.index .about-section p { font-size: 15px; line-height: 1.8; }
      body.index .about-en { font-size: 14px !important; }
      body.index .about-divider { margin: 20px 0; }
      body.index .nav-section { margin-top: 32px; }
      body.index .nav-section-title { font-size: 22px; margin-bottom: 14px; }
      body.index .nav-card { padding: 22px 20px; }
      body.index .nav-card-emoji { font-size: 28px; margin-bottom: 10px; }
      body.index .nav-card h3 { font-size: 24px; }
      body.index .nav-card p { font-size: 13px; }
      .trip-card h3 { font-size: 22px; margin: 14px 0 6px; }
      .trip-card p  { font-size: 14px; padding: 0 16px 16px; }

      /* Category */
      body.category .section-intro { margin-top: 24px; padding: 0 16px; }
      body.category .section-intro p { font-size: 15px; line-height: 1.8; }
      body.category .featured-grid { margin-top: 24px; gap: 14px; }
      body.category .featured-card { padding: 18px 18px 16px; }
      body.category .featured-card h3 { font-size: 19px; }
      body.category .featured-card p  { font-size: 13px; }
      body.category .section-label { margin-top: 32px; padding: 0 16px; }
      body.category .section-label span { font-size: 20px; }
      body.category .category-grid { margin: 20px auto 40px; padding: 0 16px; }
      body.category .category h3 { font-size: 22px; }
      body.category .category .category-desc { font-size: 12px; }

      /* Article */
      body.article main { margin: 24px auto; padding: 0 12px 40px; }
      body.article article { padding: 22px 18px; }
      body.article ol, body.article ul { padding-left: 22px; margin: 14px 0; }
      body.article li { font-size: 16px; padding-left: 12px; }

      /* Details accordion */
      details { padding: 12px 16px !important; margin: 18px 0 !important; max-height: 44px; }
      details summary { font-size: 16px !important; }
      details p { font-size: 14px !important; line-height: 1.7 !important; }

      /* Footer */
      footer { padding: 16px; font-size: 13px; margin-top: 28px; }
    }
  `;
  document.head.appendChild(style);


  /* ============================================================
     Detect Page Type
     - Respects any existing index/category/article class
     - Otherwise, infers from URL
  ============================================================ */
  const path = window.location.pathname;
  const fname = (path.split("/").pop() || "").toLowerCase();
  const categoryFiles = ["should.html", "like.html", "life-purpose.html"];

  const alreadyTyped =
    document.body.classList.contains("index") ||
    document.body.classList.contains("category") ||
    document.body.classList.contains("article");

  if (!alreadyTyped) {
    if (fname === "" || fname === "index.html" || path === "/") {
      document.body.classList.add("index");
    } else if (categoryFiles.includes(fname)) {
      document.body.classList.add("category");
    } else {
      document.body.classList.add("article");
    }
  }


  /* ============================================================
     Insert Header (sticky top nav)
  ============================================================ */
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


  /* ============================================================
     Insert Hero from <div data-hero data-title data-subtitle>
  ============================================================ */
  const heroDiv = document.querySelector("[data-hero]");
  if (heroDiv) {
    const heroImage = heroDiv.getAttribute("data-hero");
    const title = heroDiv.getAttribute("data-title") || "";
    const subtitle = heroDiv.getAttribute("data-subtitle") || "";

    heroDiv.insertAdjacentHTML("afterend", `
      <section class="hero" style="background-image: url('${heroImage}')">
        <div class="hero-content">
          <h1>${title}</h1>
          <p>${subtitle}</p>
        </div>
      </section>
    `);
    heroDiv.remove();
  }


  /* ============================================================
     Trip Card: wrap img in .img-wrap for hover darkening
  ============================================================ */
  document.querySelectorAll(".trip-card img").forEach(img => {
    if (!img.parentElement.classList.contains("img-wrap")) {
      const wrap = document.createElement("div");
      wrap.className = "img-wrap";
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);
    }
  });


  /* ============================================================
     YouTube responsive (auto-wrap bare iframes)
  ============================================================ */
  document.querySelectorAll("iframe").forEach(iframe => {
    const src = iframe.getAttribute("src") || "";
    if (src.includes("youtube.com") && !iframe.closest(".video-container")) {
      const wrapper = document.createElement("div");
      wrapper.className = "video-container";
      iframe.parentNode.insertBefore(wrapper, iframe);
      wrapper.appendChild(iframe);
    }
  });


  /* ============================================================
     Tables: wrap + auto data-label for mobile card view
  ============================================================ */
  document.querySelectorAll("table").forEach(table => {
    if (!table.parentElement.classList.contains("table-wrapper")) {
      const wrapper = document.createElement("div");
      wrapper.className = "table-wrapper";
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }

    const headers = [];
    const headerCells = table.querySelectorAll("thead th, thead td");

    if (headerCells.length > 0) {
      headerCells.forEach(cell => headers.push(cell.innerText.trim()));
    } else {
      const firstRow = table.querySelector("tr");
      if (firstRow) {
        firstRow.querySelectorAll("td").forEach(cell => {
          headers.push(cell.innerText.trim());
        });
      }
    }

    const dataRows = headerCells.length > 0
      ? table.querySelectorAll("tbody tr")
      : table.querySelectorAll("tr:not(:first-child)");

    dataRows.forEach(row => {
      row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headers[i] || "");
      });
    });
  });


  /* ============================================================
     Details: legacy "+" cleanup + smooth height animation
  ============================================================ */
  document.querySelectorAll("details summary").forEach(s => {
    // Strip legacy trailing "+" (CSS now handles open/close indicator)
    const html = s.innerHTML.trimEnd();
    if (html.endsWith("+")) {
      s.innerHTML = html.replace(/[：:]?\s*\+\s*$/, "");
    }
  });

  document.querySelectorAll("details").forEach(d => {
    d.addEventListener("toggle", () => {
      if (d.open) {
        d.style.maxHeight = d.scrollHeight + "px";
      } else {
        d.style.maxHeight = "48px";
      }
    });
  });


  /* ============================================================
     Mobile menu toggle + auto-close
  ============================================================ */
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav ul");

  function closeMenu() {
    if (!menu) return;
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
      if (menu.classList.contains("open")) closeMenu();
      else openMenu();
    });
  }

  window.addEventListener("scroll", closeMenu);


  /* ============================================================
     Auto-load category lists
     Markup: <ul data-folder="diet"></ul>
     Fetches: diet/index.json  →  [{ "title": "...", "file": "..." }, ...]
  ============================================================ */
  document.querySelectorAll("ul[data-folder]").forEach(async (ul) => {
    const folder = ul.getAttribute("data-folder");
    try {
      const res = await fetch(`${folder}/index.json`);
      const articles = await res.json();
      ul.innerHTML = "";
      articles.forEach(a => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${folder}/${a.file}">${a.title}</a>`;
        ul.appendChild(li);
      });
    } catch (e) {
      ul.innerHTML = "<li>（暂无文章）</li>";
    }
  });


  /* ============================================================
     Footer
  ============================================================ */
  document.body.insertAdjacentHTML("beforeend", `
    <footer>
      © ${new Date().getFullYear()} 我的人生旅程 · 记录、思考、热爱
    </footer>
  `);

});
