// Study Care - Interactive & Responsive Scripts

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Navigation Toggle & Drawer
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  const navOverlay = document.getElementById('navOverlay');
  const navCloseBtn = document.getElementById('navCloseBtn');

  function openMobileMenu() {
    if (primaryNav) primaryNav.classList.add('open');
    if (navOverlay) navOverlay.classList.add('active');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Close navigation menu');
    }
    document.body.classList.add('menu-open', 'nav-open');
  }

  function closeMobileMenu() {
    if (primaryNav) primaryNav.classList.remove('open');
    if (navOverlay) navOverlay.classList.remove('active');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation menu');
    }
    document.body.classList.remove('menu-open', 'nav-open');
  }

  if (navToggle) {
    navToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = primaryNav && primaryNav.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (navCloseBtn) {
    navCloseBtn.addEventListener('click', closeMobileMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu when clicking any nav link
  if (primaryNav) {
    const navLinks = primaryNav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMobileMenu();
      });
    });
  }

  // Close on Escape key press
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && primaryNav && primaryNav.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // Automatically close mobile menu if screen resized to desktop width
  window.addEventListener('resize', function () {
    if (window.innerWidth > 960 && primaryNav && primaryNav.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // 2. Admission Enquiry Form Submission to WhatsApp
  const form = document.querySelector('#form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const nameEl = document.querySelector('#name');
      const phoneEl = document.querySelector('#phone');
      const courseEl = document.querySelector('#course');
      const msgEl = document.querySelector('#msg');

      const name = nameEl ? nameEl.value.trim() : '';
      const phone = phoneEl ? phoneEl.value.trim() : '';
      const course = courseEl ? courseEl.value : '';
      const msg = msgEl ? msgEl.value.trim() : '';

      const text = `Study Care Enquiry%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ACourse: ${encodeURIComponent(course)}%0AEnquiry: ${encodeURIComponent(msg)}`;
      window.open('https://wa.me/919400941937?text=' + text, '_blank');
    });
  }
});
