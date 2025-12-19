import './style.css'
import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { About } from './components/About.js'
import { Services } from './components/Services.js'
import { Gallery } from './components/Gallery.js'
import { News } from './components/News.js'
import { Company } from './components/Company.js'
import { Contact } from './components/Contact.js'
import { Footer } from './components/Footer.js'
import { Loader } from './components/Loader.js'
import { Reviews } from './components/Reviews.js'
import { CeoMessage } from './components/CeoMessage.js'
import { Facilities } from './components/Facilities.js'
import { StickyFooter } from './components/StickyFooter.js'
import { CtaSection } from './components/CtaSection.js'

document.querySelector('#app').innerHTML = `
  ${Loader()}
  ${Header()}
  <main>
    ${Hero()}
    ${About()}
    ${CtaSection()}
    ${Services()}
    ${Facilities()}
    ${Gallery()}
    ${News()}
    ${Reviews()}
    ${CeoMessage()}
    ${Company()}
    ${Contact()}
  </main>
  ${Footer()}
  ${StickyFooter()}
`

// Mobile Menu Logic
const menuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Gallery Tabs Logic
const galleryTabs = document.querySelectorAll('.gallery-tab');
if (galleryTabs.length > 0) {
  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      galleryTabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');

      // Hide all panels
      document.querySelectorAll('.gallery-panel').forEach(panel => {
        panel.classList.remove('active');
      });

      // Show target panel
      const targetId = tab.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

// Scroll Animation Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-in, .fade-up, .fade-left, .fade-right, .zoom-in, .reveal-image').forEach(el => {
  observer.observe(el);
});

// Loading Screen Logic
// Loading Screen Logic
const removeLoader = () => {
  const loader = document.getElementById('loader');
  if (loader) {
    // Add fade-out class after a longer delay to show the loading animation
    setTimeout(() => {
      loader.classList.add('fade-out');

      // Remove loader from DOM after fade-out animation completes
      setTimeout(() => {
        loader.remove();
      }, 800); // Match the CSS transition duration
    }, 1500); // Longer delay to enjoy the loading animation
  }
};

if (document.readyState === 'complete') {
  removeLoader();
} else {
  window.addEventListener('load', removeLoader);
}
