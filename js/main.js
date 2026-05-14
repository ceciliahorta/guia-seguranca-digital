(function () {
  var allPages = [].concat(
    CHAPTER0_PAGES,
    CHAPTER1_PAGES,
    CHAPTER2_PAGES,
    CHAPTER3_PAGES,
    CHAPTER4_PAGES,
    CHAPTER5_PAGES,
    CHAPTER6_PAGES
  );

  var main = document.getElementById('mainContent');

  allPages.forEach(function (page, index) {
    var tpl = document.createElement('template');
    tpl.innerHTML = page.html.trim();
    var el = tpl.content.firstElementChild;
    if (index > 0) el.classList.add('hidden');
    main.appendChild(el);
  });

  openAccordion('apresentacao');

  document.querySelectorAll('.nav-sub:not([data-page])').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        var el = document.getElementById(href.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
