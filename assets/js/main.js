// CET138 ePortfolio — main.js

// ── Year ──
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Mobile nav toggle ──
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  // Close on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// ── Modal functionality ──
const exploreBtn = document.getElementById('exploreBtn');
const sectionsModal = document.getElementById('sectionsModal');
const closeModal = document.getElementById('closeModal');

if (exploreBtn && sectionsModal) {
  exploreBtn.addEventListener('click', () => {
    sectionsModal.classList.add('active');
  });
}

if (closeModal && sectionsModal) {
  closeModal.addEventListener('click', () => {
    sectionsModal.classList.remove('active');
  });
}

// Close modal when clicking outside
if (sectionsModal) {
  sectionsModal.addEventListener('click', (e) => {
    if (e.target === sectionsModal) {
      sectionsModal.classList.remove('active');
    }
  });
}

// ── Scroll reveal ──
const reveals = document.querySelectorAll('.section-header, .two-col, .info-grid, .demo-cta-card, .demo-grid, .stack-diagram');
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
reveals.forEach(el => observer.observe(el));

// ── Active nav highlight ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
  });
}, { passive: true });
