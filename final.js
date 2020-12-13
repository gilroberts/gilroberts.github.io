
//var cartC= ["Your cart is currently empty."];
//document.getElementById("cart").innerHTML = cartC;

// Get the modal
var modal = document.getElementById("myModal");

// code for getting the image elements
var shirt1 = document.getElementById("shirt1");
var shirt2 = document.getElementById("shirt2");
var shirt3 = document.getElementById("shirt3");
var shirt4 = document.getElementById("shirt4");
var shirt5 = document.getElementById("shirt5");
var pants1 = document.getElementById("pants1");
var pants2 = document.getElementById("pants2");
var dress1 = document.getElementById("dress1");
var dress2 = document.getElementById("dress2");

// variables to keep track of the prices
var sCost = 15;
var s2Cost = 25;
var pCost = 18;
var dCost= 20;
var total= 0;
//document.getElementById("total").innerHTML = total;
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//code for each event listener
shirt1.addEventListener('click',showModal);
//shirt1.addEventListener('click',shirts1);
/*
shirt2.addEventListener('click',showModal);
shirt2.addEventListener('click',shirts2);
shirt3.addEventListener('click',showModal);
shirt3.addEventListener('click',shirts3);
shirt4.addEventListener('click',showModal);
shirt4.addEventListener('click',shirts4);
shirt5.addEventListener('click',showModal);
shirt5.addEventListener('click',shirts5);
pants1.addEventListener('click',showModal);
pants1.addEventListener('click',pants1);
pants2.addEventListener('click', showModal);
pants2.addEventListener('click',pants2);
dress1.addEventListener('click',showModal);
dress1.addEventListener('click',dress1);
dress2.addEventListener('click',showModal);
dress2.addEventListener('click',dress2);
*/

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function showModal(){
    modal.style.display = "block";
}

function shirts1(){
    total = total + sCost;
    //shirt1.removeEventListener('click', shirts1);
    //shirt1.removeEventListener('click', showModal);
    cartC.push("Vintage Top ... $15");
    document.getElementById("cart").innerHTML = cartC;
}
/*
function shirts2(){
    total = total + sCost;
    shirt2.removeEventListener('click', shirts2);
    shirt2.removeEventListener('click', showModal);
    cart.push("Tommy Hilfiger Jumper ... $15");
    document.getElementById("cart").innerHTML = cart;
}
function shirts3(){
  total = total + s2Cost;
  shirt3.removeEventListener('click', shirt3);
  shirt3.removeEventListener('click', showModal);
  cart.push("Sweater ... $25");
  document.getElementById("cart").innerHTML = cart;
}

function shirts4(){
  total = total + s2Cost;
  shirt4.removeEventListener('click', shirt4);
  shirt4.removeEventListener('click', showModal);
  cart.push("Sweater ... $25");
  document.getElementById("cart").innerHTML = cart;
}

function shirts5(){
  total = total + sCost;
  shirt5.removeEventListener('click', shirts5);
  shirt5.removeEventListener('click', showModal);
  cart.push("Zara Top ... $15");
  document.getElementById("cart").innerHTML = cart;
}

function pants1(){
    total = total + pCost;
    pants1.removeEventListener('click', pants1);
    pants1.removeEventListener('click', showModal);
    cart.push("Urban Outfitters Pants ... $18");
    document.getElementById("cart").innerHTML = cart;
}

function pants2(){
  total = total + pCost;
  pants2.removeEventListener('click', pants2);
  pants2.removeEventListener('click', showModal);
  cart.push("Free People Pants ... $18");
  document.getElementById("cart").innerHTML = cart;
}

function dress1(){
    total = total + dCost;
    dress1.removeEventListener('click', dress1);
    dress1.removeEventListener('click', showModal);
    cart.push("Zara Dress ... $20");
    document.getElementById("cart").innerHTML = cart;
}

function dress2(){
  total = total + dCost;
  dress2.removeEventListener('click', dress2);
  dress2.removeEventListener('click', showModal);
  cart.push("Urban Outfitters Overalls ... $20");
  document.getElementById("cart").innerHTML = cart;
}
*/