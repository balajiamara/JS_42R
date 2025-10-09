let players = [
    { name: 'SATISH  ', color: 'blue', score: 0 },
    { name: 'SRINU  ', color: 'red', score: 0 },
    { name: 'SUBBU  ', color: 'yellow', score: 0 },
    { name: 'NARASIMHHA ', color: 'green', score: 0 },
];

let h1_element = document.createElement('h1');
h1_element.textContent = 'Snake And Ladder';
h1_element.classList = 'heading';
document.body.appendChild(h1_element);

// Game board container
let container = document.createElement('div');
container.classList = 'container';
document.body.appendChild(container);

// Create 100 cells (100 to 1)
for (let i = 100; i >= 1; i--) {
    let div_ele = document.createElement('div');
    div_ele.classList = 'cell';
    div_ele.id = `cell${i}`;
    div_ele.textContent = i;
    container.appendChild(div_ele);
}

// Game state
let currentTurn = 0;
let gameOver = false;
let playerButtons = [];

// Create button wrapper
let buttonWrapper = document.createElement('div');
buttonWrapper.classList = 'buttons';
document.body.appendChild(buttonWrapper);


// Create player buttons
for (let i = 0; i < players.length; i++) {
    let btn = document.createElement('button');
    btn.classList = 'btn';
    btn.style.backgroundColor = players[i].color;
    btn.innerHTML = `<sup>${players[i].name}</sup>${players[i].score}`;
    playerButtons.push(btn);

    btn.onclick = function () {
        if (gameOver) return;

        if (currentTurn !== i) {
            alert(`It's ${players[currentTurn].name}'s turn!`);
            return;
        }

        let dice = Math.ceil(Math.random() * 6);

        // Remove old token if exists
        let oldToken = document.getElementById(`person${players[i].score}`);
        if (oldToken) oldToken.remove();

        let newScore = players[i].score + dice;
        if (newScore <= 100) {
            players[i].score = newScore;
        }

        // Update button text
        btn.innerHTML = `<sup>${players[i].name}</sup> ${players[i].score}`;

        // Add token to new cell
        let person = document.createElement('div');
        person.classList = 'person';
        person.id = `person${players[i].score}`;
        person.style.backgroundColor = players[i].color;

        let cell = document.getElementById(`cell${players[i].score}`);
        cell.appendChild(person);

        // Check win
        if (players[i].score === 100) {
            alert(`${players[i].name} wins the game! 🎉`);
            gameOver = true;
            for (let b of playerButtons) b.disabled = true;
            return;
        }

        // Next player's turn
        currentTurn = (currentTurn + 1) % players.length;
    };

    // document.body.appendChild(btn);
    buttonWrapper.appendChild(btn);

}
