'use strict';

/* Toggle navbar in mobile */

const /* {NodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /* {NodeElement} */ $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));




/* Header scroll state */

const /* {NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});




/* Toggle Add to favourites button */

const /* {NodeList} * */ $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener("click", () => {
        $toggleBtn.classList.toggle("active");
    });
});




// Modals

let modal = document.getElementById('myModal'); // Gets the modal from HTML

let btn = document.getElementById('myBtn'); // Gets the button from HTML

let span = document.getElementsByClassName('close') [0]; // Gets span from HTML

        btn.onclick = function() {
            modal.style.display = 'block'; // User clicks on button, it opens modal
        }

        span.onclick = function() {
            modal.style.display = 'none'; // User clicks the span (X), it closes modal
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none'; // Any click outside of modal will close it
            }
        }