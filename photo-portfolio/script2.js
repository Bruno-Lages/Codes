/////////////////////////////////////hamburguer menu script////////////////////////////////////////////
const hamburguer = document.getElementById("hamburguer"); //gets the hamburguer icon
hamburguer.addEventListener("click",()=>{ //when clicked, turns into an "X" icon and show the menu
    const line1 = document.querySelector("#line1"); //gets the lines
    const line2 = document.querySelector("#line2");
    const line3 = document.querySelector("#line3");
    line1.classList.toggle("line1X"); //rotate the line
    line2.classList.toggle("line2X"); //hide the line
    line3.classList.toggle("line3X"); //rotate the line
    const linksList = document.querySelector(".links"); //gets the menu class
    linksList.classList.toggle("linksOn"); // toggle to show/hide the menu
})