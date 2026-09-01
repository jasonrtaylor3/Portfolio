// Progressive-enhancement interactions. Every effect here is additive and
// gated so a slow network, disabled JS, or a touch device just falls back to
// the plain static layout — nothing here is load-bearing for content.

function initSpotlight() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!canHover) return;

  const spotlight = document.querySelector<HTMLElement>("[data-spotlight]");
  if (spotlight) {
    window.addEventListener(
      "pointermove",
      (e) => {
        spotlight.style.setProperty("--spot-x", `${e.clientX}px`);
        spotlight.style.setProperty("--spot-y", `${e.clientY}px`);
        spotlight.classList.add("is-active");
      },
      { passive: true }
    );
  }

  const cards = document.querySelectorAll<HTMLElement>(".spotlight-card");
  cards.forEach((card) => {
    card.addEventListener(
      "pointermove",
      (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      },
      { passive: true }
    );
  });
}

function initActiveNav() {
  const links = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");
  if (!links.length) return;

  const sections = Array.from(links)
    .map((link) => document.getElementById(link.dataset.navLink ?? ""))
    .filter((el): el is HTMLElement => el !== null);

  if (!sections.length) return;

  const setActive = (id: string) => {
    links.forEach((link) => {
      link.setAttribute("aria-current", String(link.dataset.navLink === id));
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  sections.forEach((section) => observer.observe(section));
}

initSpotlight();
initActiveNav();
