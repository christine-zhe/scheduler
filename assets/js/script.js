// Displays Date at the top
var currentDateEl = new Date();
var finalDate = currentDateEl.toLocaleString();
document.getElementById("currentDay").textContent = finalDate;
var currentHour = currentDateEl.getHours();
// console.log(currentHour);

// Color-coded for time blocks
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

// saves to local storage
$(".saveBtn").on("click", function (){
    var taskDescription= $(this).siblings('.description').val();
    
    var hourTime = $(this).parent().attr('id')

    localStorage.setItem(hourTime, taskDescription)
});

// keeps the items to show even after refreshing

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));