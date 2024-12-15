document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("game-board");
    const colors = ["red", "blue", "green", "yellow", "purple"];

    // Créer les cubes
    for (let i = 0; i < 25; i++) {
        const cube = document.createElement("div");
        cube.classList.add("cube");
        cube.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        cube.addEventListener("click", () => {
            cube.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        });
        gameBoard.appendChild(cube);
    }
});
