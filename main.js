document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.querySelector('nav input');
  const sunIcon = document.querySelector('nav .icon-sun');
  const moonIcon = document.querySelector('nav .icon-moon');
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
  toggleSwitch.addEventListener('change', switchThemes);
  const theme = JSON.parse(localStorage.getItem('theme'));
  if (theme) {
    if (!theme.dark) {
      toggleSwitch.checked = false;
      switchThemes();
    }
  }
});
