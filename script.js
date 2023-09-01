function play(id) {
    let sound = new Audio('./audios/' + id);
	sound.play();
}

function update() {
    let sounds = [
        'Cavalo.mp3',
        'Danca gatinho.mp3',
        'Ui.mp3'
    ];

    const players = document.getElementById('players');
    
    // Delete players
    var delChild = players.lastChild;
    while (delChild) {
        players.removeChild(delChild);
        delChild = players.lastChild;
    }

    sounds.forEach(sound => {
        div = document.createElement('div');
        div.innerText = sound.split(".")[0];
        div.classList.add('player')
        div.setAttribute("onclick","play('" + sound + "');");

        players.appendChild(div);
    })
}

update();