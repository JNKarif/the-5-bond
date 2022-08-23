

document.getElementById('calc-btn').addEventListener('click', function () {

    // function 1 applied
    const perPlayerCost = getInputFieldValueById('player-input');

    // function 2 applied
    const playerNumber = getTextFieldById('selected-number')

    // function 3 applied
    const playerCostTextTotal = getTextFieldById('player-cost')

    // total calculation
    const newPlayerCostTotal = perPlayerCost * playerNumber;

    // function 3 applied (set the value)
    setTextElementValueById('player-cost', newPlayerCostTotal);
    return newPlayerCostTotal;
})


document.getElementById('calc-btn-total').addEventListener('click', function () {

    //function 1 applied
    const managerCost = getInputFieldValueById('manager-cost');

    // function 1 applied
    const coachCost = getInputFieldValueById('coach-cost');

    // function 2 applied
    const totalCost = getTextFieldById('total-cost');

    // function 2 applied
    const newPlayerCostTotal = getTextFieldById('player-cost');

    // final cost calculation
    const finalCost = managerCost + coachCost + newPlayerCostTotal;

    // function 3 applied (set the value)
    setTextElementValueById('total-cost', finalCost);


})







