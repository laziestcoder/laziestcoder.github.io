$(document).ready(function yearOfExp() {

    var joiningDate = "January, 1, 2018";

    var careerStarted = new Date(joiningDate);
    var today = new Date();

    var currentYear = new Date().getFullYear();
    var yearOfExp = parseInt(DateDiff.inMonths(careerStarted, today) / 12);
    var monthOfExp = parseInt((DateDiff.inMonths(careerStarted, today) + 1) % 12);
    yearOfExp += monthOfExp/12;
    monthOfExp = monthOfExp%12;
    // console.log(currentYear);
    // console.log(monthOfExp);
    // console.log(yearOfExp);
    var totalExperience = parseInt(yearOfExp) + "Y " + monthOfExp + "M ";
    $("#currentYear").html(currentYear);
    $("#totalExperience").html(totalExperience);

});


var DateDiff = {

    inDays: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2 - t1) / (24 * 3600 * 1000));
    },

    inWeeks: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
    },

    inMonths: function (d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
    },

    inYears: function (d1, d2) {
        return d2.getFullYear() - d1.getFullYear();
    }
}

function includeHTML(fileName) {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute(fileName);
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute(fileName);
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}