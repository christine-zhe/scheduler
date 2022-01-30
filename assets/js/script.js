// Displays Date at the top
var currentDateEl = new Date();
var finalDate = currentDateEl.toLocaleString();
document.getElementById("currentDay").textContent = finalDate;
var currentHour = currentDateEl.getHours();
// console.log(currentHour);
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
$(".time-block").each(function() {
    var blockTime = parseInt($(this).attr("id"));
    if(currentHour  > blockTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");

    }

    else if (currentHour === blockTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }

    else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
});


$(".saveBtn").on("click", function (){
    var taskDescription= $(this).siblings('.description').val();
    
    var hourTime = $(this).parent().attr('id')

    localStorage.setItem(hourTime, taskDescription)
});

// WHEN I click into a time block
// THEN I can enter an event

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));