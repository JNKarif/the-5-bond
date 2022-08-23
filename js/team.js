
const playerArray = [];

function playerList(player) {
    const listBody = document.getElementById('select-container');
    listBody.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        // let i=0; i<player.lenght; i++
        const name = playerArray[i].playerName;

        // create element >>> li
        const li = document.createElement('li');
        li.innerText = name;
        listBody.appendChild(li);

        // if (player.length === 6) {
        //     break;

        // user input validation 
        if (player.length > 5) {
            alert('player can not be selected more than 5')
        }
    }
}

function addToList(element) {
    const playerName = element.parentNode.children[0].innerText;

    const playerObject = {
        playerName: playerName
    }

    playerArray.push(playerObject);

    // disabled attribute added
    element.disabled = true;

    document.getElementById('selected-number').innerText = playerArray.length;

    playerList(playerArray);
}





// this button disable method disables all input field with buttons because of event.target.disabled
// let buttons = document.getElementsByClassName('button-class');
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function (event) {
//         event.target.disabled = true;
//     })
// }

