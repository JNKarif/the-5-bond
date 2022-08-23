document.getElementById('calc-btn').addEventListener('click', function () {
    const playerNumberElement = document.getElementById('selected-number');
    const playerNumberString = playerNumberElement.innerText;
    const playerNumber = parseFloat(playerNumberString);


    const playerInputField = document.getElementById('player-input');
    const playerInputFieldString = playerInputField.value;
    const perPlayerCost = parseFloat(playerInputFieldString);


    const playerCostTextElement = document.getElementById('player-cost');
    const playerCostTextElementString = playerCostTextElement.innerText;
    const playerCostTextTotal = parseFloat(playerCostTextElementString);

    const newPlayerCostTotal = perPlayerCost * playerNumber;

    // playerCostTextElement.innerText = newPlayerCostTotal;
    // console.log(typeof newPlayerCostTotal)
    setTextElementValueById('player-cost', newPlayerCostTotal);
    return newPlayerCostTotal;
})


document.getElementById('calc-btn-total').addEventListener('click', function () {
    // let newPlayerCostTotal;
    const managerInputField = document.getElementById('manager-cost');
    const managerInputFieldString = managerInputField.value;
    const managerCost = parseFloat(managerInputFieldString);


    const coachInputField = document.getElementById('coach-cost');
    const coachInputFieldString = coachInputField.value;
    const coachCost = parseFloat(coachInputFieldString);


    const totalTextInputField = document.getElementById('total-cost');
    const totalTextInputFieldString = totalTextInputField.innerText;
    const totalCost = parseFloat(totalTextInputFieldString);

    const newPlayerCostTotal1 = document.getElementById('player-cost');
    const newPlayerCostTotalString = newPlayerCostTotal1.innerText;
    const newPlayerCostTotal = parseFloat(newPlayerCostTotalString);


    const finalCost = managerCost + coachCost + newPlayerCostTotal;

    // totalTextInputField.innerText = finalCost;
    setTextElementValueById('total-cost', finalCost);


})




