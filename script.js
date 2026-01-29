// ======= helpers
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// ======= year
$("#year").textContent = new Date().getFullYear();

// ======= mobile nav
const toggleBtn = $(".nav__toggle");
const navMenu = $("#navMenu");

function setMenu(open) {
  navMenu.classList.toggle("open", open);
  toggleBtn.setAttribute("aria-expanded", String(open));
}

toggleBtn?.addEventListener("click", () => {
  const isOpen = navMenu.classList.contains("open");
  setMenu(!isOpen);
});

$$(".nav__link").forEach(a => {
  a.addEventListener("click", () => setMenu(false));
});

document.addEventListener("click", (e) => {
  if (!navMenu) return;
  const within = navMenu.contains(e.target) || toggleBtn.contains(e.target);
  if (!within) setMenu(false);
});

// ======= theme toggle (light/dark)
const themeBtn = $(".themeToggle");
const root = document.documentElement;

function applyTheme(theme) {
  if (theme === "light") root.setAttribute("data-theme", "light");
  else root.removeAttribute("data-theme");

  const icon = $(".themeToggle__icon");
  if (icon) icon.textContent = theme === "light" ? "☀️" : "🌙";
}

const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  applyTheme(storedTheme);
} else {
  // default: dark; you can change to prefer-color-scheme if you want
  applyTheme("dark");
}

themeBtn?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
  const next = current === "light" ? "dark" : "light";
  localStorage.setItem("theme", next);
  applyTheme(next);
});

// ======= scroll reveal
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReduced) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.15 });

  $$(".reveal").forEach(el => io.observe(el));
} else {
  $$(".reveal").forEach(el => el.classList.add("is-visible"));
}

// ======= active section highlighting
const sections = ["services", "about", "team", "faq", "contact"]
  .map(id => document.getElementById(id))
  .filter(Boolean);

const navLinks = $$(".nav__link")
  .filter(a => a.getAttribute("href")?.startsWith("#"));

const linkById = new Map(
  navLinks.map(a => [a.getAttribute("href").slice(1), a])
);

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.classList.remove("active"));
    const link = linkById.get(entry.target.id);
    link?.classList.add("active");
  });
}, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });

sections.forEach(s => spy.observe(s));

// ======= FAQ: only one open at a time (optional)
const accRoot = document.querySelector("[data-accordion]");
if (accRoot) {
  const details = $$("details", accRoot);
  details.forEach(d => d.addEventListener("toggle", () => {
    if (!d.open) return;
    details.forEach(other => { if (other !== d) other.open = false; });
  }));
}