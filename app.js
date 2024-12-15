document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("game-board");
    const colors = ["red", "blue", "green", "yellow", "purple"];

   
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

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    // Empêcher l'affichage automatique de l'invite
    event.preventDefault();
    deferredPrompt = event;

    // Afficher un bouton d'installation personnalisé
    const installBtn = document.createElement("button");
    installBtn.textContent = "Installer le jeu";
    installBtn.id = "install-btn";
    document.body.appendChild(installBtn);

    // Gérer le clic sur le bouton
    installBtn.addEventListener("click", () => {
        deferredPrompt.prompt(); // Afficher la boîte de dialogue d'installation

        deferredPrompt.userChoice.then((choice) => {
            if (choice.outcome === "accepted") {
                console.log("L'application a été installée !");
            } else {
                console.log("L'installation a été refusée.");
            }
            deferredPrompt = null; // Réinitialiser
            installBtn.remove(); // Supprimer le bouton
        });
    });
});
window.addEventListener("appinstalled", () => {
    console.log("Application installée avec succès !");
    const icon = document.createElement("img");
    icon.src = "./images/icon-cube.jpg";
    icon.alt = "Icône du jeu";
    document.body.appendChild(icon);
});
