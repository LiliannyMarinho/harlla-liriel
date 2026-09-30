/* =========================================================
   HARLLA LIRIEL
   JavaScript do site
   ========================================================= */


// =========================================================
// MENU MOBILE
// =========================================================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");


// Abrir e fechar menu
menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// =========================================================
// FECHAR MENU AO CLICAR EM UM LINK
// =========================================================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// =========================================================
// FECHAR MENU AO CLICAR FORA DELE
// =========================================================

document.addEventListener("click", (event) => {

    const clicouNoMenu =
        nav.contains(event.target);

    const clicouNoBotao =
        menuButton.contains(event.target);


    if (!clicouNoMenu && !clicouNoBotao) {

        nav.classList.remove("active");

    }

});