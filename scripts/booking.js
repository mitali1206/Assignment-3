/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
document.addEventListener('DOMContentLoaded', function () {
    const costPerDay = 20; 
    let totalCost = 0; 
    let selectedDays = []; 

    
    const daySelectors = document.querySelectorAll('.day-selector');
    const clearButton = document.querySelector('.clear-days');
    const totalCostDisplay = document.querySelector('.total-cost');
    const halfDayButton = document.querySelector('.half-day-button');
    const fullDayButton = document.querySelector('.full-day-button');
    const calculateButton = document.querySelector('.calculate-button');
    const calculatedCostDisplay = document.querySelector('.calculated-cost');

    function updateTotalCost() {
        totalCostDisplay.textContent = `Total Cost: $${totalCost}`;
    }

    
    function resetSelection() {
        selectedDays = [];
        totalCost = 0;
        updateTotalCost();
        daySelectors.forEach(day => day.classList.remove('clicked'));
    }

    
});




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

    
    daySelectors.forEach(day => {
        day.addEventListener('click', function () {
            if (!day.classList.contains('clicked')) {
                day.classList.add('clicked');
                selectedDays.push(day);
                totalCost += costPerDay;
            } else {
                day.classList.remove('clicked');
                selectedDays = selectedDays.filter(selectedDay => selectedDay !== day);
                totalCost -= costPerDay;
            }
            updateTotalCost();
        });
    });




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


    
    clearButton.addEventListener('click', function () {
        resetSelection();
    });




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

    halfDayButton.addEventListener('click', function () {
        costPerDay = 20;
        totalCost = selectedDays.length * costPerDay;
        updateTotalCost();
        halfDayButton.classList.add('clicked');
        fullDayButton.classList.remove('clicked');
    });

    // Rate change logic
    fullDayButton.addEventListener('click', function () {
        costPerDay = 35;
        totalCost = selectedDays.length * costPerDay;
        updateTotalCost();
        fullDayButton.classList.add('clicked');
        halfDayButton.classList.remove('clicked');
    });



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.



fullDayButton.addEventListener('click', function () {
    costPerDay = 35;
    totalCost = selectedDays.length * costPerDay;
    updateTotalCost();
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

    //Calculate total cost
    calculateButton.addEventListener('click', function () {
        const calculatedCost = selectedDays.length * costPerDay;
        calculatedCostDisplay.innerHTML = `Calculated Cost: $${calculatedCost}`;
    });

