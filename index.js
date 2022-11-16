let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let db = document.querySelector('.db');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

function a() {
   if (db.textContent === "Light Mode") {
      db.textContent = "Dark Mode";
    } else {
      db.textContent = "Light Mode";
    }
   var element = document.body;
   element.classList.toggle("Light-theme");
   
}
