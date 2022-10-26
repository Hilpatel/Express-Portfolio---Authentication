// Name: Hil Patel
// id: 301215094
// fileName: app.js
// Date: October 26, 2022


// toggle for menu bars to cross
let menu = document.querySelector("#menu-bars");

let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    header.classList.remove('active');
  };
  

