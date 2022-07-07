const container = document.querySelector(".container");
const num = parseInt(prompt("How many squares per side?"));
container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

for (let i = 0; i < num ** 2; i++) {
    const gridDivs = document.createElement("div");
    gridDivs.classList.add("gridDiv");
    container.appendChild(gridDivs);
}

let mouseDown = 0;
document.body.onmousedown = function() { 
    mouseDown = 1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}

const gridDivs = document.querySelectorAll(".gridDiv");
gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mousemove", (e) => {
        console.log(mouseDown);
        if (mouseDown == 1) gridDiv.style.backgroundColor = "black";
    });
});
