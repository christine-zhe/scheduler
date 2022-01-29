// Displays Date at the top
var currentDateEl = new Date();
var finalDate = currentDateEl.toLocaleString();
document.getElementById("currentDay").textContent = finalDate;
var currentHour = 
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
$(".time-block").each(function() {
    var timeBlockTime = $(this).data("id");
    if(currentHour  > timeBlockTime) {
        $(this).addClass("past")
    }

    else if (currentHour = timeBlockTime) {
        $(this).addClass("present")
    }
});


// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist