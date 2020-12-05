window.addEventListener('DOMContentLoaded', (event) => {
  const links = document.querySelectorAll('.menu a');
  const input = document.querySelector('.menu-wrap input ');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      if (input.checked) {
        input.checked = false;
      }
    });
  }
  //   this hides the overlay shown by clickin the  hamburger menu
});
