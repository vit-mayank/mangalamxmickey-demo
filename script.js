// script.js

/* ---------- IMAGE CONFIG: replace these URLs with your own photos ---------- */
const IMAGES = {
  heroWedding: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
  heroParty:   "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=80",
  w1: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1400&q=80",
  w2: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
  w3: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=80",
  p1: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80",
  p2: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80",
  p3: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80",
  sig:   "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=2000&q=80",
  about: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80"
};

/* Apply images */
document.querySelectorAll("[data-img]").forEach(el => {
  const url = IMAGES[el.dataset.img];
  if (url) el.style.backgroundImage = `url("${url}")`;
});

/* Nav: solid on scroll, mobile menu */
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const links = document.getElementById("links");

const onScroll = () => nav.classList.toggle("solid", window.scrollY > 60);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const setMenu = open => {
  burger.setAttribute("aria-expanded", open);
  links.classList.toggle("open", open);
  nav.classList.toggle("menu", open);
  document.body.style.overflow = open ? "hidden" : "";
};
burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));

/* Reveal on scroll */
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 90}ms`;
  io.observe(el);
});