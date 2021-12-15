import {createDiv, createInput, createLabel} from "./HTML.js"

const result = document.getElementById('result')

let newDiv = createDiv('Mon nouveau div');
result.appendChild(newDiv);

let newLabel = createLabel("input", "Email :");
result.appendChild(newLabel);

let newInput = createInput('email', "value", "input");
result.appendChild(newInput);

let newLabel2 = createLabel("input2", "Password :");
result.appendChild(newLabel2);

let newInput2 = createInput('password', "value", "input2");
result.appendChild(newInput2);

