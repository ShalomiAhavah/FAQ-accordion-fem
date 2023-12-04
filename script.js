var question = document.querySelector("details");
var icon = document.querySelector(".icon");
var button = document.querySelector("#button");

var tie = document.querySelectorAll('.details*:not(:active)');
console.log(tie);
tie.addEventListener("click", function(){
    question.style.color = "red";
});