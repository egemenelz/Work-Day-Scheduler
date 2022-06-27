const saveButton = $('.saveBtn');

// Getting current date with help of moment and formatting the date with format() method.
$('#currentDay').text(moment().format('dddd MMMM Do YYYY'));

/**
 * EventListener for when the user clicks on the save button
 * After the user clicks on the save button, saves time and what the user enters as plan to the LocalStorage
 */
saveButton.on('click', function () {
    var time = $(this).siblings('.hour').text();
    var plan = $(this).siblings('.plan').val();

    localStorage.setItem(time, plan);
});



function workDaySchedule() {
    var hour = moment().hours();
/**
 * This loop will determine if the time on the scheduler
 * greater than is future and addClass as 'future'
 * less than is past and add as 'past'
 * if equal to present add as 'present'
 * and this class will help us determine colors on the scheduler.
 */
    $('.time-block').each(function () {
        var currentHour = parseInt($(this).attr('id'));

        if (currentHour > hour) {
            $(this).addClass('future');
        } else if (currentHour < hour) {
            $(this).addClass('past');
        } else {
            $(this).addClass('present');
        }
    });

    // This method gets current hour and gets values from localStorage.
    $('.hour').each(function () {
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

        if (currentPlan !== null) {
            $(this).siblings('.plan').val(currentPlan);
        }
    });
};


workDaySchedule();


