function toggleTheme() {
  var body = document.body;
  var label = document.getElementById('toggleLabel');
  var icon = document.querySelector('.toggle-icon');
  if (body.classList.contains('light-mode')) {
    body.classList.replace('light-mode', 'dark-mode');
    if (label) label.textContent = 'Escuro';
    if (icon) icon.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark-mode', 'light-mode');
    if (label) label.textContent = 'Claro';
    if (icon) icon.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  }
}

(function restoreTheme() {
  var saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.replace('light-mode', 'dark-mode');
    var label = document.getElementById('toggleLabel');
    var icon = document.querySelector('.toggle-icon');
    if (label) label.textContent = 'Escuro';
    if (icon) icon.textContent = '🌙';
  }
})();
