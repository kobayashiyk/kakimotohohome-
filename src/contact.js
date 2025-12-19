import './style.css'
import { Header } from './components/Header.js'
import { Contact } from './components/Contact.js'
import { Footer } from './components/Footer.js'
import { Loader } from './components/Loader.js'
import { StickyFooter } from './components/StickyFooter.js'

document.querySelector('#app').innerHTML = `
  ${Loader()}
  ${Header()}
  <main class="page-contact">
    <div class="page-header">
      <div class="container">
        <h1>お問い合わせ</h1>
        <p>Contact</p>
      </div>
    </div>
    ${Contact()}
  </main>
  ${Footer()}
  ${StickyFooter()}
`

// Reuse logic from main.js/gallery.js
// Mobile Menu Logic
const menuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// Loading Screen Logic
// Loading Screen Logic
const removeLoader = () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.remove();
      }, 800);
    }, 500);
  }
};

if (document.readyState === 'complete') {
  removeLoader();
} else {
  window.addEventListener('load', removeLoader);
}

// Fade Animation Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-up').forEach(el => {
  observer.observe(el);
});

// Add page specific styles
const style = document.createElement('style');
style.textContent = `
  .page-header {
    background-color: var(--color-bg-secondary);
    padding: 120px 0 60px;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
  }
  
  .page-header p {
    color: var(--color-text-secondary);
    font-family: var(--font-serif);
    letter-spacing: 0.2em;
  }
`;
document.head.appendChild(style);
