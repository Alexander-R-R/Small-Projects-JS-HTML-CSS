
let countEl = document.getElementById("count-el");
let savedEl = document.getElementById("save-el");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    savedEl.textContent += countStr;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}

