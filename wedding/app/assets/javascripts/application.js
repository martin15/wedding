// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

$(document).ready(function() {
    // set the date we're counting down to
    var target_date = new Date('Oct, 14, 2017').getTime();

    // variables for time units
    var days, hours, minutes, seconds;

    // get tag element
    var countdown = document.getElementById('countdown');

    // update the tag with id "countdown" every 1 second
    setInterval(function () {

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        // format countdown string + set tag value
        countdown.innerHTML = '<div class="col-xs-3">\n\
                                 <span class="col-xs-12 val no-padding-lr">' + days +  ' </span>\n\
                                 <span class="col-xs-12 var no-padding-lr">Days</span>\n\
                               </div> \n\
                               <div class="col-xs-3">\n\
                                 <span class="col-xs-12 val no-padding-lr">' + hours +  ' </span>\n\
                                 <span class="col-xs-12 var no-padding-lr">Hours</span>\n\
                               </div> \n\
                               <div class="col-xs-3">\n\
                                 <span class="col-xs-12 val no-padding-lr">' + minutes +  ' </span>\n\
                                 <span class="col-xs-12 var no-padding-lr">Minutes</span>\n\
                               </div>\n\
                               <div class="col-xs-3">\n\
                                 <span class="col-xs-12 val no-padding-lr">' + seconds +  ' </span>\n\
                                 <span class="col-xs-12 var no-padding-lr">Seconds</span>\n\
                               </div> \n\
                               ';

    }, 1000);
});