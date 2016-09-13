$(document).ready(function(){
    $('.toggle-button').on('click', function(){
        $('#wrapper').toggleClass('open');
    });
});
var modelPrice = 0;
var basicModelPrice = 699.99;
var advanceModelPrice = 1699.99;
var supercomputerPrice = 11999.99;

// determine price the user pays based on model type
function setPrice() {
    var menuValue = document.getElementById("computerModel").value;

    if (menuValue == "basicModel") {
        modelPrice = parseFloat(basicModelPrice);
    } else if (menuValue == "advancedModel") {
        modelPrice = parseFloat(advanceModelPrice);
    } else if (menuValue == "supercomputer") {
        modelPrice = parseFloat(supercomputerPrice);
    } else if (menuValue == "none") {
        modelPrice = 0;
    }

    document.getElementById("total").innerHTML = "Total: $" + modelPrice;
}

// $('body').animate({
////            'left': "200px"
////        }, 600);