const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const nav = document.querySelector('.nav-wrap');
const updateNav = () => nav?.classList.toggle('scrolled', window.scrollY > 12);
updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

const items = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
items.forEach((item) => observer.observe(item));
