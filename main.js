document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const toggleSwitch = document.querySelector('nav input');
  const navLinks = document.querySelectorAll('.overlay-content a');
  const hamburgerIcon = document.querySelector('.hamburger-menu');
  const overlay = document.querySelector('.overlay');
  const sunIcon = document.querySelector('nav .icon-sun');
  const moonIcon = document.querySelector('nav .icon-moon');
  const openMenu = () => {
    body.classList.toggle('overflow-el');
    hamburgerIcon.classList.toggle('open');
    overlay.classList.toggle('open');
  };
  const switchThemes = (event) => {
    const theme = {};
    if (toggleSwitch.checked) {
      theme.dark = true;
      localStorage.setItem('theme', JSON.stringify(theme));
      document.documentElement.setAttribute('data-theme', 'dark');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline';
    } else {
      theme.dark = false;
      localStorage.setItem('theme', JSON.stringify(theme));
      document.documentElement.setAttribute('data-theme', 'light');
      sunIcon.style.display = 'inline';
      moonIcon.style.display = 'none';
    }
  };
  hamburgerIcon.addEventListener('click', openMenu);
  toggleSwitch.addEventListener('change', switchThemes);
  navLinks.forEach((link) => {
    link.addEventListener('click', openMenu);
  });
  const theme = JSON.parse(localStorage.getItem('theme'));
  if (theme) {
    if (!theme.dark) {
      toggleSwitch.checked = false;
      switchThemes();
      return;
    }
  }
});
