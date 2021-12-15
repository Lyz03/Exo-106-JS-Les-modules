export {createDiv, createInput, createLabel}

function createDiv(innerText) {
    let div = document.createElement('div');
    div.innerText = innerText
    return div
}

function createInput(inputType, inputValue, inputId) {
    let input = document.createElement('input');
    input.type = inputType;
    input.value = inputValue
    input.id = inputId;
    return input

}

function createLabel(labelFor, labelValue) {
    let label = document.createElement('label');
    label.for = labelFor;
    label.innerHTML = labelValue;
    return label
}