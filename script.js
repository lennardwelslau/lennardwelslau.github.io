/* Lennard Welslau - site behaviour. No dependencies.
   Abstracts are <details> elements, so they work without this file. */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var nav      = document.querySelector('nav');
    var toggle   = document.getElementById('menu-icon');
    var drawer   = document.querySelector('.nav-links-container');
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));

    /* --- shade the bar once the page has moved ------------------------- */
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* --- mobile drawer ------------------------------------------------- */
    var closeMenu = function () {
      drawer.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    };

    if (toggle && drawer) {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = drawer.classList.toggle('show');
        toggle.setAttribute('aria-expanded', String(open));
      });

      document.addEventListener('click', function (e) {
        if (drawer.classList.contains('show') && !drawer.contains(e.target)) closeMenu();
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer.classList.contains('show')) {
          closeMenu();
          toggle.focus();
        }
      });

      navLinks.forEach(function (a) { a.addEventListener('click', closeMenu); });
    }

    /* --- the whole publication line is the abstract toggle -------------
       Links live inside that <summary>, so a click on one would open the
       abstract as well. Let the link win. Without JS the abstract simply
       opens too, which is harmless. */
    document.querySelectorAll('.pub > summary a').forEach(function (a) {
      a.addEventListener('click', function (e) { e.stopPropagation(); });
    });

    /* --- highlight the section currently in view ----------------------- */
    if ('IntersectionObserver' in window) {
      var byId = {};
      var sections = [];

      navLinks.forEach(function (a) {
        var el = document.querySelector(a.getAttribute('href'));
        if (el) { byId[el.id] = a; sections.push(el); }
      });

      var visible = {};

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          visible[entry.target.id] = entry.isIntersecting;
        });

        // topmost section that is currently on screen wins
        var current = null;
        for (var i = 0; i < sections.length; i++) {
          if (visible[sections[i].id]) { current = sections[i].id; break; }
        }

        navLinks.forEach(function (a) { a.classList.remove('active'); });
        if (current && byId[current]) byId[current].classList.add('active');
      }, { rootMargin: '-55px 0px -65% 0px', threshold: 0 });

      sections.forEach(function (s) { observer.observe(s); });
    }
  });
})();
