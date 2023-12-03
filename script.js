var element = document.getElementsByClassName("question");
var hidden = document.getElementsByClassName("hiddenP");
var icon = document.getElementsByClassName("icon");

var i;




for (i=0; i<element.length; i++) {
    element[i].addEventListener("click", function() {
        this.classList.toggle("hiddenP");
        element.style.height = "auto";
    })
}


