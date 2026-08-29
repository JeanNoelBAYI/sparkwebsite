/* Product Showcase carousels — dashboard (laptop) and rider app (iPhone).
   Edit these two arrays to add/remove/reorder screens; the carousel
   renders and paginates automatically for any number of entries. */

var dashboardScreens = [
  { image: 'assets/dashboard/analytics.png', alt: 'Trekk Mobility dashboard overview — rides, riders, vehicles, and revenue' },
  { image: 'assets/dashboard/map.png', alt: 'Trekk Mobility live fleet map with real-time vehicle locations' },
  { image: 'assets/dashboard/fleet-management.png', alt: 'Trekk Mobility geofencing and service area management' },
  { image: 'assets/dashboard/vehicle-command.png', alt: 'Trekk Mobility executed vehicle commands log' },
  { image: 'assets/dashboard/promos.png', alt: 'Trekk Mobility promo code and campaign management' }
];

var mobileScreens = [
  { image: 'assets/mobile/home.png', alt: 'Trekk rider app home screen with live scooter map' },
  { image: 'assets/mobile/menu.png', alt: 'Trekk rider app account menu' },
  { image: 'assets/mobile/wallet.png', alt: 'Trekk rider app wallet and payment methods' },
  { image: 'assets/mobile/payment-history.png', alt: 'Trekk rider app payment history' },
  { image: 'assets/mobile/vehicles.png', alt: 'Trekk rider app vehicle type selector' }
];

(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function createCarousel(root, dotsRoot, screens, intervalMs) {
    if (!root || !dotsRoot || !screens || !screens.length) return;

    var track = document.createElement('div');
    track.className = 'carousel-track';

    var slides = screens.map(function (screen, i) {
      var slide = document.createElement('div');
      slide.className = 'carousel-slide' + (i === 0 ? ' is-active' : '');
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', 'slide');
      slide.setAttribute('aria-label', (i + 1) + ' of ' + screens.length);
      slide.setAttribute('aria-hidden', i === 0 ? 'false' : 'true');

      var img = document.createElement('img');
      img.src = screen.image;
      img.alt = screen.alt || '';
      img.loading = 'eager';
      if (i === 0) img.setAttribute('fetchpriority', 'high');

      slide.appendChild(img);
      track.appendChild(slide);
      return slide;
    });

    root.appendChild(track);

    var dots = screens.map(function (screen, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      dot.setAttribute('aria-label', 'Show screen ' + (i + 1) + ' of ' + screens.length);
      dot.tabIndex = i === 0 ? 0 : -1;
      dotsRoot.appendChild(dot);
      return dot;
    });

    var current = 0;
    var timer = null;

    function goTo(index) {
      var next = (index + screens.length) % screens.length;
      if (next === current) return;
      slides[current].classList.remove('is-active');
      slides[current].setAttribute('aria-hidden', 'true');
      dots[current].classList.remove('is-active');
      dots[current].setAttribute('aria-selected', 'false');
      dots[current].tabIndex = -1;

      current = next;

      slides[current].classList.add('is-active');
      slides[current].setAttribute('aria-hidden', 'false');
      dots[current].classList.add('is-active');
      dots[current].setAttribute('aria-selected', 'true');
      dots[current].tabIndex = 0;
    }

    function start() {
      if (reduceMotion || timer) return;
      timer = setInterval(function () { goTo(current + 1); }, intervalMs);
    }
    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }
    function restart() {
      stop();
      start();
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goTo(i);
        restart();
      });
    });

    dotsRoot.addEventListener('keydown', function (e) {
      var idx = dots.indexOf(document.activeElement);
      if (idx === -1) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        var n = (idx + 1) % dots.length;
        goTo(n); dots[n].focus(); restart();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        var p = (idx - 1 + dots.length) % dots.length;
        goTo(p); dots[p].focus(); restart();
      }
    });

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);
    dotsRoot.addEventListener('mouseenter', stop);
    dotsRoot.addEventListener('mouseleave', start);

    start();
  }

  document.addEventListener('DOMContentLoaded', function () {
    createCarousel(
      document.querySelector('[data-carousel="dashboard"]'),
      document.querySelector('[data-dots="dashboard"]'),
      dashboardScreens,
      4500
    );
    createCarousel(
      document.querySelector('[data-carousel="mobile"]'),
      document.querySelector('[data-dots="mobile"]'),
      mobileScreens,
      5000
    );
  });
})();
