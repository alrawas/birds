(function () {
  const searchInput = document.getElementById("search");
  const results = document.getElementById("results");
  const empty = document.getElementById("empty");

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
          <img src="${b.image}" alt="${escapeHtml(b.name)}" loading="lazy" />
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
  }

  let timer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(timer);
    const value = e.target.value.trim();
    timer = setTimeout(() => render(value), 80);
  });

  render("");
})();
