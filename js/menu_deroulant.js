/* Sélection des éléments HTML */
let link = document.getElementById('link');
let burger = document.getElementById('burger');
let ul = document.querySelector('ul');
let nav = document.querySelector('nav');
/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function(e) {
  e.preventDefault()
  nav.classList.toggle('open');
  burger.classList.toggle('open');
  ul.classList.toggle('open');
})