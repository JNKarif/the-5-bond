// function setTextElementValueById(elementId, NewValue) {
//     const textElement = document.getElementById(elementId);
//     textElement.innerText = NewValue;

// };



// function 1
function getInputFieldValueById(inputFieldId) {
    const playerInputField = document.getElementById(inputFieldId);
    const playerInputFieldString = playerInputField.value;
    const perPlayerCost = parseFloat(playerInputFieldString);
    return perPlayerCost;
}

// function 2
function getTextFieldById(textFieldId) {
    const playerNumberElement = document.getElementById(textFieldId);
    const playerNumberString = playerNumberElement.innerText;
    const playerNumber = parseFloat(playerNumberString);
    return playerNumber;
}



// function 3
function setTextElementValueById(elementId, NewValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = NewValue;

};