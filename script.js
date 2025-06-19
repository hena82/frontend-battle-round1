// Loader Fade Out
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 600); 
  }, 3000); 
});

// Light/Dark Mode Toggle
const toggleButton = document.getElementById('modeToggle');
const icon = toggleButton.querySelector('i');

// Load theme preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  icon.classList.replace('fa-moon', 'fa-sun');
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Change icon
  if (document.body.classList.contains('dark')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});
