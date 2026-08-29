function submitFormViaAjax(form, callback) {
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { Accept: 'application/json' }
  }).then(function (res) {
    callback(res.ok);
  }).catch(function () {
    callback(false);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Newsletter subscribe (footer) - submits to directors@trekkmobility.com
  document.querySelectorAll('.footer-subscribe').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var btn = form.querySelector('button');
      if (!input || !input.value) return;
      var originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Sending…';
      submitFormViaAjax(form, function (ok) {
        btn.disabled = false;
        btn.textContent = ok ? 'Subscribed!' : 'Try again';
        if (ok) form.reset();
        setTimeout(function () { btn.textContent = originalText; }, 3000);
      });
    });
  });

  // Contact / demo form - submits to directors@trekkmobility.com
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      var original = btn.innerHTML;
      btn.disabled = true;
      btn.textContent = 'Sending…';
      submitFormViaAjax(contactForm, function (ok) {
        btn.disabled = false;
        btn.textContent = ok
          ? 'Message sent — we’ll be in touch'
          : 'Something went wrong — email us directly';
        if (ok) contactForm.reset();
        setTimeout(function () { btn.innerHTML = original; }, 4000);
      });
    });
  }

  // Services page - interactive service list / detail panel
  var serviceList = document.querySelector('.service-list');
  var highlight = document.querySelector('.service-highlight');
  if (serviceList && highlight) {
    var buttons = Array.prototype.slice.call(serviceList.querySelectorAll('button'));

    function selectService(btn) {
      buttons.forEach(function (b) {
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        b.tabIndex = b === btn ? 0 : -1;
      });
      highlight.querySelector('h3').textContent = btn.dataset.title;
      highlight.querySelector('p').textContent = btn.dataset.desc;
      var list = highlight.querySelector('ul');
      list.innerHTML = '';
      btn.dataset.points.split('|').forEach(function (point) {
        var li = document.createElement('li');
        li.textContent = point;
        list.appendChild(li);
      });
    }

    buttons.forEach(function (btn, i) {
      btn.addEventListener('click', function () { selectService(btn); });
      btn.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = buttons[(i + 1) % buttons.length];
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = buttons[(i - 1 + buttons.length) % buttons.length];
        if (next) { e.preventDefault(); next.focus(); selectService(next); }
      });
    });
  }
});
