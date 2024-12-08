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
    const cipherDiv = document.getElementById("cipher");
    const ritualDiv = document.getElementById("ritual");

    if (userAnswer === correctAnswer) {
        cipherDiv.style.display = "none";
        ritualDiv.style.display = "block";
    } else {
        const responseDiv = document.getElementById("response");
        responseDiv.innerHTML = "<p style='color: red;'>Resposta incorreta. Tente novamente!</p>";
    }
}

function iniciarAnimacao() {
    const animationOverlay = document.getElementById("animationOverlay");

    animationOverlay.style.display = "flex";
    animationOverlay.innerHTML = "<p>Absorvendo conhecimento...</p>";

    setTimeout(() => {
        animationOverlay.innerHTML = "<p>Ritual aprendido!</p>";
        setTimeout(() => {
            window.close();
        }, 2000);
    }, 3000);
}
