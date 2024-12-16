// Select the necessary elements
const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.menu-links');
const menuBarIcon = document.querySelector('.menuBar');
const closeMenuIcon = document.querySelector('.closeMenu');

closeMenuIcon.style.display = 'none';


function toggleMenu() {
  
  if (menuLinks.style.display === 'flex') {

    menuLinks.style.display = 'none';
    menuBarIcon.style.display = 'block'; 
    closeMenuIcon.style.display = 'none'; 
  } else {
    
    menuLinks.style.display = 'flex';
    menuBarIcon.style.display = 'none'; 
    closeMenuIcon.style.display = 'block'; 
  }
}

hamburger.addEventListener('click', toggleMenu);
