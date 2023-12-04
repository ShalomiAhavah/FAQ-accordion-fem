var question = document.querySelector("details");
var icon = document.querySelector(".icon");
var button = document.querySelector("#button");

//question.open;

function changeIcon() {

    if (question.open) {
        // toggle close
        question.open = false;
        icon.src = "assets/images/icon-plus.svg"
        } else if(question.open = true){
            icon.src = "assets/images/icon-minus.svg"
        }
}

question.addEventListener("click", changeIcon());