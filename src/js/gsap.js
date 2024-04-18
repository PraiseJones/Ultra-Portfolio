const menuButton = document.getElementById('menubtn');
const closeButton = document.getElementById('closebtn');
const menuSection = document.getElementById('menu-sect');
const navLinks = document.querySelectorAll('#menu-sect ul li');

// Function to toggle menu visibility
function toggleMenu(e) {
    e.preventDefault();
  menuSection.classList.toggle('hidden');

}

// Event listeners for menu button and close button
menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
