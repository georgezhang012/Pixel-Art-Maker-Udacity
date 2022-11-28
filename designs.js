
const INPUT_HEIGHT = document.querySelector("#inputHeight");
const INPUT_WIDTH = document.querySelector("#inputWidth");
const SUBMIT = document.querySelector("input[type=submit]");
const INPUT_COLOR = document.querySelector("#colorPicker");
const SIZE_PICKER = document.getElementById("sizePicker");


let color="#000000";
let height=1;
let width=1;

INPUT_COLOR.addEventListener("change", function(event) {
    color=event.target.value;
});

INPUT_HEIGHT.addEventListener("change", function(event) {
    height=event.target.value;
});

INPUT_WIDTH.addEventListener("change", function(event) {
    width=event.target.value;
});


function makeGrid() {
    const body = document.getElementsByTagName("body")[0];
    const canvas = document.querySelector("#pixelCanvas");
    const tableBody = document.createElement("tbody");


    while (canvas.firstChild) {
        canvas.firstChild.remove();
    };

    
    for (let i = 0; i < height; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < width; j++) {
            const cell = document.createElement("td");
            row.appendChild(cell);
        };

        tableBody.appendChild(row);
    };

    canvas.appendChild(tableBody);
    body.appendChild(canvas);

    const td = document.getElementsByTagName("td");

    for (let i = 0; i < td.length; i++) {
        let cell=td[i];
        cell.addEventListener("click", function(){
            this.style.backgroundColor=color;

        } )
    };
}

SIZE_PICKER.addEventListener("submit", function(event) {
    event.preventDefault();
});

SUBMIT.addEventListener("click", makeGrid, false);