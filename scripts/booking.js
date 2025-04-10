/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

/********* create variables *********/

// Cost per day for full and half days
const FULL_DAY_RATE = 35;
const HALF_DAY_RATE = 20;

// Selected days and rate
let selectedDays = [];
let dailyRate = FULL_DAY_RATE;

// Get elements from the contact page
const dayButtons = document.querySelectorAll('.day-selector li');
const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const calculatedCostElement = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');

// Initialize the page
function initializePage() {
    selectedDays = [];
    dailyRate = FULL_DAY_RATE;

    dayButtons.forEach(function(button) {
        button.classList.remove('clicked');
    });
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculatedCostElement.textContent = '0';
}

// Call initializePage when the page loads
initializePage();



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

/********* colour change days of week *********/

// Add event listeners to each day button
dayButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            selectedDays.push(button.id);
        } else {
            button.classList.remove('clicked');
            selectedDays = selectedDays.filter(function(day) {
                return day !== button.id;
            });
        }
        calculateTotalCost();
    });
});

// Function to calculate the total cost
function calculateTotalCost() {
    const totalCost = selectedDays.length * dailyRate;
    calculatedCostElement.textContent = totalCost;
}



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

/********* clear days *********/

// Add an event listener to the clear button
clearButton.addEventListener('click', function() {
    dayButtons.forEach(function(button) {
        button.classList.remove('clicked');
    });
    selectedDays = [];
    calculatedCostElement.textContent = '0';
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

/********* change rate *********/

// Add an event listener to the half-day button
halfDayButton.addEventListener('click', function() {
    dailyRate = HALF_DAY_RATE;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateTotalCost();
});

// Add an event listener to the full-day button
fullDayButton.addEventListener('click', function() {
    dailyRate = FULL_DAY_RATE;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateTotalCost();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

/********* calculate *********/

// Function to calculate the total cost
function calculateTotalCost() {
    const totalCost = selectedDays.length * dailyRate;
    calculatedCostElement.textContent = totalCost;
}
