const dps = [
    {name: 'Soldier 76', role: 'offense'},
    {name: 'Symmetra', role: 'defense'},
    {name: 'Torbjorn', role: 'defense'},
    {name: 'Reaper', role: 'offense'},
    {name: 'Hanzo', role: 'defense'},
    {name: 'Bastion', role: 'defense'},
    {name: 'Pharah', role: 'offense'},
    {name: 'McCree', role: 'offense'},
    {name: 'Genji', role: 'offense'},
    {name: 'Mei', role: 'defense'},
    {name: 'Sombra', role: 'offense'},
    {name: 'Junkrat', role: 'defense'},
    {name: 'Tracer', role: 'offense'},
    {name: 'Widowmaker', role: 'defense'},
    {name: 'Ashe', role: 'defense'},
    {name: 'Echo', role: 'offense'},
    {name: 'Sojourn', role: 'offense'},
]

let defenseDpsList = []
let offenseDpsList = []

const defenseDps = arr => {
    for (let i=0; i<arr.length; i++) {
        if (arr[i].role === 'defense') {
            defenseDpsList.push(arr[i].name);
        }
    }
}

const offenseDps = arr => {
    for (let i=0; i<arr.length; i++) {
        if (arr[i].role === 'offense') {
            offenseDpsList.push(arr[i].name);
        }
    }
}

defenseDps(dps);
offenseDps(dps);

console.log('Defense DPS heroes: ' + defenseDpsList.join(', '));
console.log('Offense DPS heroes: ' + offenseDpsList.join(', '));

// Web integratrion code

let offenseButton = document.getElementById('offense-button');
let defenseButton = document.getElementById('defense-button');
let textBox = document.getElementById('text-box');

function showOffenseText() {
    textBox.innerHTML = offenseDpsList.join(', ');
}

function showDefenseText() {
    textBox.innerHTML = defenseDpsList.join(', ');
}

offenseButton.onclick = showOffenseText;
defenseButton.onclick = showDefenseText;