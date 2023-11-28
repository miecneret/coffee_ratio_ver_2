let currentStep = 1;
let countdown;


function selectCoffee() {
    document.getElementById('waterInput').style.display = 'none';
    document.getElementById('coffeeInput').style.display = 'block';
}

function selectWater() {
    document.getElementById('waterInput').style.display = 'block';
    document.getElementById('coffeeInput').style.display = 'none';
}

function calculateAmount() {
    // Get values from input fields
    let waterAmount = document.getElementById('waterAmount').value;
    let coffeeAmount = document.getElementById('coffeeAmount').value; // Store the coffee amount

    // Check if at least one value is entered
    if (!waterAmount && !coffeeAmount) {
        alert('Please enter the amount of coffee or water.');
        return;
    }

    // Display the result for the current step
    const resultElement = document.getElementById('result');

    if (waterAmount) {
        const calculatedCoffeeAmount = (20 / 300) * waterAmount; // 15g coffee per 250ml water
        resultElement.innerHTML += `<p>Use approximately ${calculatedCoffeeAmount.toFixed(1)} grams of coffee for ${waterAmount} ml of water.</p>`;
    } else {
        const calculatedWaterAmount = (300 / 20) * coffeeAmount; // 250ml water per 15g coffee
        resultElement.innerHTML += `<p>Use approximately ${calculatedWaterAmount.toFixed(0)} ml of water for ${coffeeAmount} grams of coffee.</p>`;
    }

    // If it's the first step, show step 2 and hide step 1
    if (currentStep === 1) {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
        currentStep = 2;
    } else {
        // If it's the second step, show timer and start the countdown
        document.getElementById('timer').style.display = 'block';
        startTimer();
    }
}

function startTimer() {
    // Get values from input field
    const brewingTime = document.getElementById('brewingTime').value;

    // Check if brewing time is entered
    if (!brewingTime) {
        alert('Please enter the brewing time.');
        return;
    }

    // Display the result for the timer
    const resultElement = document.getElementById('result');
    resultElement.innerHTML += `<p>Brew Time set for ${brewingTime} seconds.</p>`;

    // Start the countdown timer with configurable time
    let seconds = brewingTime;
    countdown = setInterval(() => {
        document.getElementById('timer').innerHTML = `Time remaining: ${formatTime(seconds)}`;
        seconds--;

        if (seconds < 0) {
            clearInterval(countdown);
            document.getElementById('timer').innerHTML = 'Brewing time is up!';
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
