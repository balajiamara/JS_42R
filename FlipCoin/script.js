function flipCoin() {
            let coin = document.getElementById("coin");
            let resultText = document.getElementById("result");

            resultText.textContent = "";

            // Generate a random number of spins (to make it more realistic)
            let spins = Math.floor(Math.random() * 4) + 3; // 3 to 6 spins
            // let spins = 6

            // Randomly decide Heads or Tails
            let isHeads = Math.random() < 0.5;

            // Final rotation: multiple full spins + either 0deg (Heads) or 180deg (Tails)
            let finalRotation = spins * 360 + (isHeads ? 0 : 180);

            // Apply rotation
            coin.style.transform = `rotateY(${finalRotation}deg)`;

            // Show result after animation ends
            setTimeout(() => {
                resultText.textContent = isHeads ? "Heads 🎯" : "Tails 🎯";
            }, 1000); // match transition time
        }