
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const menuItems = document.querySelectorAll('.navbar a');
menuItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('hovered');
  });
  item.addEventListener('mouseleave', () => {
    item.classList.remove('hovered');
  });
});
