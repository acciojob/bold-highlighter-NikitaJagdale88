function highlight() {
    var boldWords = document.querySelectorAll("strong");

    for (var i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = "green";
    }
}

function return_normal() {
    var boldWords = document.querySelectorAll("strong");

    for (var i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = "black";
    }
}

var highlightLink = document.getElementById("highlightLink");

highlightLink.addEventListener("mouseover", highlight);
highlightLink.addEventListener("mouseout", return_normal);


function return_normal() {
    //Write your code here

    
}
