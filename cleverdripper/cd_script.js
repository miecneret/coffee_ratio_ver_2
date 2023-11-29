let currentStep = 1;
let countdown;


function selectCoffee() {
    document.getElementById("waterInput").style.display = "none";
    document.getElementById("coffeeInput").style.display = "block";
}

function selectWater() {
    document.getElementById("waterInput").style.display = "block";
    document.getElementById("coffeeInput").style.display = "none";
}

function calculateAmount() {
   
    let waterAmount = document.getElementById("waterAmount").value;
    let coffeeAmount = document.getElementById("coffeeAmount").value;

    if (!waterAmount && !coffeeAmount) {
        alert("Please enter the amount of coffee or water.");
        return;
    }

    const resultElement = document.getElementById("result");

    if (waterAmount) {
        const calculatedCoffeeAmount = (15 / 250) * waterAmount; // 15g coffee per 250ml water
        resultElement.innerHTML += `<p>Use approximately ${calculatedCoffeeAmount.toFixed(1)} grams of coffee for ${waterAmount} ml of water.</p>`;
    } else {
        const calculatedWaterAmount = (250 / 15) * coffeeAmount; // 250ml water per 15g coffee
        resultElement.innerHTML += `<p>Use approximately ${calculatedWaterAmount.toFixed(0)} ml of water for ${coffeeAmount} grams of coffee.</p>`;
    }

    if (currentStep === 1) {
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
        currentStep = 2;
    } else {
        document.getElementById("timer").style.display = "block";
        startTimer();
    }
}

function startTimer() {
    const brewingTime = document.getElementById("brewingTime").value;

    if (!brewingTime) {
        alert("Please enter the brewing time.");
        return;
    }

    const resultElement = document.getElementById("brewtime");
    resultElement.innerHTML += `<p>Brew time set for ${brewingTime} seconds.</p>`;

    let seconds = brewingTime;
    countdown = setInterval(() => {
        document.getElementById("timer").innerHTML = `Time remaining: ${formatTime(seconds)}`;
        seconds--;

        if (seconds < 0) {
            clearInterval(countdown);
            document.getElementById("timer").innerHTML = "Brewing time is up!";
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}
