(function () {
  const searchInput = document.getElementById("search");
  const results = document.getElementById("results");
  const empty = document.getElementById("empty");
  const langToggle = document.getElementById("lang-toggle");
  const titleEl = document.getElementById("title");
  const taglineEl = document.getElementById("tagline");
  const footerEl = document.getElementById("footer-text");

  const PLACEHOLDER =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180">
         <rect width="320" height="180" fill="#dbe7e0"/>
         <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
               font-family="sans-serif" font-size="48" fill="#74c69d">🐦</text>
       </svg>`
    );

  let lang = localStorage.getItem("birds.lang") === "ar" ? "ar" : "en";

  const imageCache = new Map();

  async function fetchImage(wikiTitle) {
    if (imageCache.has(wikiTitle)) return imageCache.get(wikiTitle);
    const promise = (async () => {
      try {
        const res = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`
        );
        if (!res.ok) return null;
        const data = await res.json();
        return (
          (data.thumbnail && data.thumbnail.source) ||
          (data.originalimage && data.originalimage.source) ||
          null
        );
      } catch (e) {
        return null;
      }
    })();
    imageCache.set(wikiTitle, promise);
    return promise;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function highlight(text, query) {
    const safe = escapeHtml(text);
    if (!query) return safe;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp(escaped, "gi"), (m) => `<mark>${m}</mark>`);
  }

  function matches(bird, query) {
    if (!query) return true;
    const q = query.toLowerCase();
    const t = bird[lang];
    return (
      t.name.toLowerCase().includes(q) ||
      bird.scientific.toLowerCase().includes(q) ||
      t.family.toLowerCase().includes(q) ||
      t.habitat.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q)
    );
  }

  function applyChrome() {
    const t = I18N[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t.title;
    titleEl.textContent = t.title;
    taglineEl.textContent = t.tagline;
    searchInput.placeholder = t.placeholder;
    empty.textContent = t.empty;
    footerEl.textContent = t.footer;
    langToggle.textContent = t.toggleTo;
  }

  function render(query) {
    const t = I18N[lang];
    const filtered = BIRDS.filter((b) => matches(b, query));
    results.innerHTML = filtered
      .map((b) => {
        const d = b[lang];
        return `
        <article class="card">
          <img src="${PLACEHOLDER}" data-wiki="${escapeHtml(b.wiki)}"
               alt="${escapeHtml(d.name)}" loading="lazy" />
          <div class="card-body">
            <h2>${highlight(d.name, query)}</h2>
            <p class="scientific">${highlight(b.scientific, query)}</p>
            <p class="meta"><strong>${t.family}:</strong> ${highlight(d.family, query)}</p>
            <p class="meta"><strong>${t.habitat}:</strong> ${highlight(d.habitat, query)}</p>
            <p class="desc">${highlight(d.description, query)}</p>
          </div>
        </article>`;
      })
      .join("");
    empty.hidden = filtered.length !== 0;
    loadImages();
  }

  function loadImages() {
    results.querySelectorAll("img[data-wiki]").forEach(async (img) => {
      const title = img.dataset.wiki;
      const url = await fetchImage(title);
      if (url) img.src = url;
    });
  }

  let timer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(timer);
    const value = e.target.value.trim();
    timer = setTimeout(() => render(value), 80);
  });

  langToggle.addEventListener("click", () => {
    lang = lang === "en" ? "ar" : "en";
    localStorage.setItem("birds.lang", lang);
    applyChrome();
    render(searchInput.value.trim());
  });

  applyChrome();
  render("");
})();
