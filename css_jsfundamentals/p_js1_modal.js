var openmodalBtn = document.getElementById("open-modal");
var closemodalBtn = document.getElementById("close-modal");

openmodalBtn.addEventListener("click", function(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
})

closemodalBtn.addEventListener("click", function(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
})

