let count = 1;

const plus = document.getElementById("plus");

const minus = document.getElementById("minus");

const countDisplay = document.getElementById("count");

const cartBtn = document.getElementById("cart-btn");

const message = document.getElementById("message");


plus.addEventListener("click", () => {

count++;

countDisplay.textContent = count;

});


minus.addEventListener("click", () => {

if(count > 1){

count--;

countDisplay.textContent = count;

}

});


cartBtn.addEventListener("click", () => {

message.textContent = `${count} item(s) added to cart`;

});