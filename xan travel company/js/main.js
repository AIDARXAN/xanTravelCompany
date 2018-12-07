window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
        document.getElementById("up").style.display = "block";
    } else {
        document.getElementById("up").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 1500); // Change image every 1.5 seconds
}

$("displayInline").ready(function () {
    $("#flip1").click(function () {
        $("#panel1").slideToggle("slow");
    });
    $("#flip2").click(function () {
        $("#panel2").slideToggle("slow");
    });
    $("#flip3").click(function () {
        $("#panel3").slideToggle("slow");
    });
    $("#flip4").click(function () {
        $("#panel4").slideToggle("slow");
    });
    $("#flip5").click(function () {
        $("#panel5").slideToggle("slow");
    });
    $("#flip6").click(function () {
        $("#panel6").slideToggle("slow");
    });
    $("#flip7").click(function () {
        $("#panel7").slideToggle("slow");
    });
    $("#flip8").click(function () {
        $("#panel8").slideToggle("slow");
    });
});

AOS.init();