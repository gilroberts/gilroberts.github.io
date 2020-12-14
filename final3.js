var cartC= ["Your cart is currently empty."];
document.getElementById("cartContent").innerHTML = cartC;
document.getElementById("total").innerHTML = total;
// variables to keep track of the prices
var sCost = 15;
var s2Cost = 25;
var pCost = 18;
var dCost= 20;
var total= 0;

function shirt1(){
    cartC.push("Vintage Top ... $15");
    document.getElementById("cartContent").innerHTML = cartC;
    total= total+ sCost;
    document.getElementById("total").innerHTML = total;
}

function shirt2(){
    cart.push("Tommy Hilfiger Jumper ... $15");
    document.getElementById("cartContent").innerHTML = cart;
    total = total+sCost;
    document.getElementById("total").innerHTML = total;
}

function shirt3(){
    cart.push("Sweater ... $25");
    document.getElementById("cartContent").innerHTML = cart;
    total = total+s2Cost;
    document.getElementById("total").innerHTML = total;
}

function shirt4(){
    cart.push("Sweater ... $25");
    document.getElementById("cartContent").innerHTML = cart;
    total= total+s2Cost;
    document.getElementById("total").innerHTML = total;
}

function shirt5(){
    cart.push("Zara Top ... $15");
    document.getElementById("cartContent").innerHTML = cart;
    total= total+sCost;
    document.getElementById("total").innerHTML = total;
}

function pant1(){
    cart.push("Urban Outfitters Pants ... $18");
    document.getElementById("cartContent").innerHTML = cart;
    total= total +pCost;
    document.getElementById("total").innerHTML = total;
}

function pant2(){
    cart.push("Free People Pants ... $18");
    document.getElementById("cartContent").innerHTML = cart;
    total= total+pCost;
    document.getElementById("total").innerHTML = total;
}

function dressy1(){
    cart.push("Zara Dress ... $20");
    document.getElementById("cartContent").innerHTML = cart;
    total= total+dCost;
    document.getElementById("total").innerHTML = total;
}

function dressy2(){
    cart.push("Urban Outfitters Overalls ... $20");
    document.getElementById("cartContent").innerHTML = cart;
    total= total+dCost;
    document.getElementById("total").innerHTML = total;
}