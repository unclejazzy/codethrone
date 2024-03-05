let linkbtn = document.querySelector(".explore");
let link = document.querySelector(".link");
let card = document.querySelector(".cards");

linkbtn.addEventListener("click",() => {
  setTimeout(function() {
    link.style.display = 'none';
    card.style.display = 'flex';
    card.style.flexwrap = "wrap";
    card.style.opacity = 1;
}, 2000);
  
});

linkbtn.addEventListener("click", () => {
  let link = document.querySelector('.link');
  let card = document.querySelector('.card');
  link.style.opacity = 0;
});

document.addEventListener("DOMContentLoaded", function() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if(isLoggedIn) {
    document.getElementById("log").style.display = 'none';
    document.getElementById("sign").style.display = 'none';
    document.getElementById("userlogo").style.display = 'block';
  }
});