function startEnigma() {
    const userInput = document.getElementById("initialInput").value.trim().toLowerCase();
    const correctStart = "doom";
    const initialStepDiv = document.getElementById("initialStep");
    const cipherDiv = document.getElementById("cipher");

    if (userInput === correctStart) {
        initialStepDiv.style.display = "none";
        cipherDiv.style.display = "block";
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = "maldição";
    const responseDiv = document.getElementById("response");
    const ritualSection = document.getElementById("ritualSection");

    if (userAnswer === correctAnswer) {
        responseDiv.innerHTML = "<p style='color: green;'>Resposta correta! A imagem do ritual será exibida.</p>";
        setTimeout(() => {
            responseDiv.style.display = "none";
            ritualSection.style.display = "block";
        }, 1000);
    } else {
        responseDiv.innerHTML = "<p style='color: red;'>Resposta incorreta. Tente novamente!</p>";
    }
}

function absorbRitual() {
    const animationOverlay = document.getElementById("animationOverlay");

    // Mostrar a animação
    animationOverlay.style.display = "block";
    animationOverlay.innerHTML = "<div class='animation'>Absorvendo o conhecimento...</div>";

    // Finalizar a animação e fechar o site
    setTimeout(() => {
        animationOverlay.innerHTML = "<div class='animation'>Conhecimento absorvido!</div>";
        setTimeout(() => {
            window.close();
        }, 2000);
    }, 3000);
}
