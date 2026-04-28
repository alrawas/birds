(function () {
  const searchInput = document.getElementById("search");
  const results = document.getElementById("results");
  const empty = document.getElementById("empty");

  const PLACEHOLDER =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180">
         <rect width="320" height="180" fill="#dbe7e0"/>
         <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
               font-family="sans-serif" font-size="48" fill="#74c69d">🐦</text>
       </svg>`
    );

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
    return (
      bird.name.toLowerCase().includes(q) ||
      bird.scientific.toLowerCase().includes(q) ||
      bird.family.toLowerCase().includes(q) ||
      bird.habitat.toLowerCase().includes(q) ||
      bird.description.toLowerCase().includes(q)
    );
  }

  function render(query) {
    const filtered = BIRDS.filter((b) => matches(b, query));
    results.innerHTML = filtered
      .map(
        (b) => `
        <article class="card">
          <img src="${PLACEHOLDER}" data-wiki="${escapeHtml(b.wiki)}"
               alt="${escapeHtml(b.name)}" loading="lazy" />
          <div class="card-body">
            <h2>${highlight(b.name, query)}</h2>
            <p class="scientific">${highlight(b.scientific, query)}</p>
            <p class="meta"><strong>Family:</strong> ${highlight(b.family, query)}</p>
            <p class="meta"><strong>Habitat:</strong> ${highlight(b.habitat, query)}</p>
            <p class="desc">${highlight(b.description, query)}</p>
          </div>
        </article>`
      )
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

  render("");
})();
