function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('sidebarOverlay');
  if (sidebar.classList.contains('open')) {
    closeSidebar();
  } else {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeSidebar() {
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function toggleSidebarCollapse() {
  if (window.innerWidth <= 768) return;
  var sidebar = document.getElementById('sidebar');
  var btn = document.getElementById('sidebarCollapseBtn');
  var isCollapsed = sidebar.classList.contains('collapsed');

  if (isCollapsed) {
    sidebar.classList.remove('collapsed');
    if (btn) { btn.textContent = '‹'; btn.setAttribute('aria-label', 'Recolher menu lateral'); btn.title = 'Recolher menu lateral'; }
    try { localStorage.setItem('sidebarCollapsed', 'false'); } catch(e) {}
  } else {
    sidebar.classList.add('collapsed');
    if (btn) { btn.textContent = '›'; btn.setAttribute('aria-label', 'Expandir menu lateral'); btn.title = 'Expandir menu lateral'; }
    try { localStorage.setItem('sidebarCollapsed', 'true'); } catch(e) {}
  }
}

document.addEventListener('DOMContentLoaded', function() {
  try {
    if (localStorage.getItem('sidebarCollapsed') === 'true' && window.innerWidth > 768) {
      var sidebar = document.getElementById('sidebar');
      var btn = document.getElementById('sidebarCollapseBtn');
      sidebar.classList.add('collapsed');
      if (btn) { btn.textContent = '›'; btn.setAttribute('aria-label', 'Expandir menu lateral'); btn.title = 'Expandir menu lateral'; }
    }
  } catch(e) {}
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeSidebar();
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    closeSidebar();
  } else {
    var sidebar = document.getElementById('sidebar');
    var btn = document.getElementById('sidebarCollapseBtn');
    sidebar.classList.remove('collapsed');
    if (btn) { btn.textContent = '‹'; btn.setAttribute('aria-label', 'Recolher menu lateral'); btn.title = 'Recolher menu lateral'; }
  }
});
