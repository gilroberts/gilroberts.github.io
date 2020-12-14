//cart stuff
var total= 0;
var cartC= ["Your cart contains "];
document.getElementById("cartContent").innerHTML = cartC;
document.getElementById("total").innerHTML = total;


// variables to keep track of the prices
var sCost = 15;
var s2Cost = 25;
var pCost = 18;
var dCost= 20;
// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var cart = document.getElementById("myCart");
// code for getting the image elements
var shirt1 = document.getElementById("shirt1");
var shirt2 = document.getElementById("shirt2");
var shirt3 = document.getElementById("shirt3");
var shirt4 = document.getElementById("shirt4");
var shirt5 = document.getElementById("shirt5");
var pant1 = document.getElementById("pants1");
var pant2 = document.getElementById("pants2");
var dressy1 = document.getElementById("dress1");
var dressy2 = document.getElementById("dress2");

var clickCount1 = 0;
var clickCount2 = 0;
var clickCount3 = 0;
var clickCount4 = 0;
var clickCount5 = 0;
var clickCount6 = 0;
var clickCount7 = 0;
var clickCount8 = 0;
var clickCount9 = 0;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
//code for each event listener
cart.addEventListener('click', showModal2);

shirt1.addEventListener('click',showModal);
shirt1.addEventListener('click',shirts1);

shirt2.addEventListener('click',showModal);
shirt2.addEventListener('click',shirts2);

shirt3.addEventListener('click',showModal);
shirt3.addEventListener('click',shirts3);

shirt4.addEventListener('click',showModal);
shirt4.addEventListener('click',shirts4);

shirt5.addEventListener('click',showModal);
shirt5.addEventListener('click',shirts5);

pant1.addEventListener('click',showModal);
pant1.addEventListener('click',pants1);

pant2.addEventListener('click', showModal);
pant2.addEventListener('click',pants2);

dressy1.addEventListener('click',showModal);
dressy1.addEventListener('click',dress1);

dressy2.addEventListener('click',showModal);
dressy2.addEventListener('click',dress2);




// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


function showModal(){
  modal.style.display = "block";
}
function showModal2(){
  modal2.style.display = "block";
}

function shirts1(){
    clickCount1++;
      shirt1.removeEventListener('click', shirts1);
      shirt1.removeEventListener('click', showModal);
      cartC.push("Vintage Top ... $15");
      document.getElementById("cartContent").innerHTML = cartC;
      total= total+ sCost;
      document.getElementById("total").innerHTML = "$" + total;
}

function shirts2(){

    clickCount2++;
    shirt2.removeEventListener('click', shirts2);
    shirt2.removeEventListener('click', showModal);
    cartC.push("Tommy Hilfiger Jumper ... $15");
    document.getElementById("cartContent").innerHTML = cartC;
    total = total+sCost;
    document.getElementById("total").innerHTML = "$" +total;
}
function shirts3(){

  clickCount3++;
  shirt3.removeEventListener('click', shirts3);
  shirt3.removeEventListener('click', showModal);
  cartC.push("Sweater ... $25");
    document.getElementById("cartContent").innerHTML = cartC;
    total = total+s2Cost;
    document.getElementById("total").innerHTML = "$" +total;
}

function shirts4(){

  clickCount4++;
  shirt4.removeEventListener('click', shirts4);
  shirt4.removeEventListener('click', showModal);
  cartC.push("Sweater ... $25");
    document.getElementById("cartContent").innerHTML = cartC;
    total= total+s2Cost;
    document.getElementById("total").innerHTML = "$" +total;
}

function shirts5(){

  clickCount5++;
  shirt5.removeEventListener('click', shirts5);
  shirt5.removeEventListener('click', showModal);
  cartC.push("Zara Top ... $15");
    document.getElementById("cartContent").innerHTML = cartC;
    total= total+sCost;
    document.getElementById("total").innerHTML = "$" +total;
  
}

function pants1(){

    clickCount6++;
    pant1.removeEventListener('click', pants1);
    pant1.removeEventListener('click', showModal);
    cartC.push("Urban Outfitters Pants ... $18");
    document.getElementById("cartContent").innerHTML = cartC;
    total= total +pCost;
    document.getElementById("total").innerHTML = "$" +total;
}

function pants2(){

  clickCount7++;
  pant2.removeEventListener('click', pants2);
  pant2.removeEventListener('click', showModal);
  cartC.push("Free People Pants ... $18");
    document.getElementById("cartContent").innerHTML = cartC;
    total= total+pCost;
    document.getElementById("total").innerHTML = "$" +total;
}

function dress1(){
   
    clickCount8++;
    dressy1.removeEventListener('click', dress1);
    dressy1.removeEventListener('click', showModal);
    cartC.push("Zara Dress ... $20");
    document.getElementById("cartContent").innerHTML = cartC;
    total= total+dCost;
    document.getElementById("total").innerHTML = "$" +total;
}

function dress2(){
  clickCount9++;
  dressy2.removeEventListener('click', dress2);
  dressy2.removeEventListener('click', showModal);
  cartC.push("Urban Outfitters Overalls ... $20");
    document.getElementById("cartContent").innerHTML = cartC;
    total= total+dCost;
    document.getElementById("total").innerHTML = "$" +total;
}
