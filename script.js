const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const customTipInput = document.getElementById('custom-tip');
const tipButtons = document.querySelectorAll('.tip-btn');
const tipPerPersonDisplay = document.getElementById('tip-per-person');
const totalPerPersonDisplay = document.getElementById('total-per-person');
const resetButton = document.getElementById('reset-btn');
const errorMsg = document.getElementById('error-msg');

let billAmount = 0.0;
let tipPercentage = 15; //by default
let numberOfPeople = 0;

billInput.addEventListener('input', handleBillInput);
peopleInput.addEventListener('input', handlePeopleInput);
customTipInput.addEventListener('input', handleCustomTipInput);
resetButton.addEventListener('click', resetCalculator);

tipButtons.forEach(button => {
    button.addEventListener('click', handleTipButtonClick);
});

function handleBillInput(event) {
    billAmount = parseFloat(event.target.value) || 0;
    calculate();
}

function handlePeopleInput(event) {
    numberOfPeople = parseInt(event.target.value) || 0;
    
    // Error handling for zero people
    if (numberOfPeople === 0) {
        errorMsg.style.display = 'inline';
        peopleInput.classList.add('error-border');
    } else {
        errorMsg.style.display = 'none';
        peopleInput.classList.remove('error-border');
    }
    calculate();
}

function handleTipButtonClick(event) {
    // Remove active class from all buttons
    tipButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    event.target.classList.add('active');

    // Clear custom tip input
    customTipInput.value = '';

    tipPercentage = parseInt(event.target.innerText.replace('%', ''));
    calculate();
}

function handleCustomTipInput(event) {
    // Remove active class from all preset buttons
    tipButtons.forEach(btn => btn.classList.remove('active'));

    tipPercentage = parseFloat(event.target.value) || 0;
    calculate();
}

// --- Main Functions ---
function calculate() {
    // Enable the reset button as soon as any input is given
    if (billAmount > 0 || numberOfPeople > 0 || tipPercentage > 0) {
        resetButton.disabled = false;
    } else {
        resetButton.disabled = true;
    }

    if (numberOfPeople > 0) {
        const tipAmount = billAmount * (tipPercentage / 100);
        const totalAmount = billAmount + tipAmount;
        
        const tipPerPerson = tipAmount / numberOfPeople;
        const totalPerPerson = totalAmount / numberOfPeople;
        
        updateDisplay(tipPerPerson, totalPerPerson);
    } else {
        // If no people, display $0.00
        updateDisplay(0, 0);
    }
}

function updateDisplay(tipPerPerson, totalPerPerson) {
    tipPerPersonDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalPerPersonDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
}

function resetCalculator() {
    // Reset state variables
    billAmount = 0.0;
    tipPercentage = 15;
    numberOfPeople = 0;

    // Reset input fields
    billInput.value = '';
    peopleInput.value = '';
    customTipInput.value = '';
    
    // Reset display
    updateDisplay(0, 0);

    // Reset tip buttons to default active state
    tipButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('.tip-btn:nth-child(3)').classList.add('active'); // Set 15% as active

    // Reset error message and border
    errorMsg.style.display = 'none';
    peopleInput.classList.remove('error-border');

    // Disable the reset button
    resetButton.disabled = true;
}

resetCalculator(); 
