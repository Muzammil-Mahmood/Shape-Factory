'use strict';


const Button = document.querySelector("button");
const box = document.getElementsById("box");

Button.addEventListener("click", AddNew);

function AddNew() {
    const newDiv = document.createElement("div");

    console.log("add");
    newDiv.classList.add("div-shadow");

    document.getElementById('box').appendChild(newDiv);
}


