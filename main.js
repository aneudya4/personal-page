const toggleSwitch = document.querySelector('nav input');
const sunIcon = document.querySelector('nav .icon-sun');
const moonIcon = document.querySelector('nav .icon-moon');

const switchThemes = (event) => {
  if (toggleSwitch.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
  }
};

toggleSwitch.addEventListener('change', switchThemes);

document.addEventListener('DOMContentLoaded', switchThemes);
