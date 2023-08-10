var final_date = new Date("Aug 13, 2023 10:00:00").getTime();
var x = setInterval(function () {
    var tod_date = new Date().getTime();

    var diff = final_date - tod_date;
    var days = Math.floor(diff / (1000 * 24 * 60 * 60));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    document.getElementById("hello").innerHTML = days + "d, " + hours + "hrs: " + minutes + "min: " + seconds + "sec"
}, 1000);