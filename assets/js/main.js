document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  var header = document.querySelector('.site-header');

  if (toggle) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
    });
  }

  document.addEventListener('click', function (e) {
    if (!header.contains(e.target) && nav.classList.contains('open')) {
      toggle.classList.remove('active');
      nav.classList.remove('open');
    }
  });

  var onScroll = function () {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
