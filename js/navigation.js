var pageAccordion = {
  'apresentacao':    'apresentacao',
  'fundamentos':     'fundamentos',
  'fundamentos-11':  'fundamentos',
  'fundamentos-12':  'fundamentos',
  'fundamentos-13':  'fundamentos',
  'fundamentos-14':  'fundamentos',
  'beneficios':      'beneficios',
  'beneficios-21':   'beneficios',
  'beneficios-22':   'beneficios',
  'beneficios-23':   'beneficios',
  'riscos':          'riscos',
  'riscos-31':       'riscos',
  'riscos-32':       'riscos',
  'riscos-33':       'riscos',
  'privacidade':     'privacidade',
  'privacidade-41':  'privacidade',
  'privacidade-42':  'privacidade',
  'privacidade-43':  'privacidade',
  'uso-saudavel':    'uso-saudavel',
  'uso-saudavel-51': 'uso-saudavel',
  'uso-saudavel-52': 'uso-saudavel',
  'uso-saudavel-53': 'uso-saudavel',
  'papel-pais':      'papel-pais',
  'papel-pais-61':   'papel-pais',
  'papel-pais-62':   'papel-pais',
  'papel-pais-63':   'papel-pais',
};

function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.add('hidden'); });

  var target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  var accKey = pageAccordion[pageId] || pageId;
  openAccordion(accKey);

  document.querySelectorAll('.nav-sub').forEach(function(s) { s.classList.remove('active-sub'); });
  var activeSub = document.querySelector('.nav-sub[data-page="' + pageId + '"]');
  if (activeSub) activeSub.classList.add('active-sub');

  if (window.innerWidth <= 768) closeSidebar();
}

function toggleAccordion(key) {
  var el = document.getElementById('acc-' + key);
  if (!el) return;
  var isOpen = el.classList.contains('open');
  document.querySelectorAll('.nav-accordion').forEach(function(a) { a.classList.remove('open'); });
  if (!isOpen) el.classList.add('open');
}

function openAccordion(key) {
  document.querySelectorAll('.nav-accordion').forEach(function(a) { a.classList.remove('open'); });
  var el = document.getElementById('acc-' + key);
  if (el) el.classList.add('open');
}
