let shareButton = document.getElementById("button");
let popUp = document.getElementById("pop-up");
let closer = document.querySelector("#closer-div");
closer.addEventListener("click", function(){
    popUp.classList.toggle("active");
    popUp.classList.toggle("opacity");
    shareButton.classList.toggle('grey-button');
    shareButton.classList.toggle("dark-button");
    closer.classList.toggle("active");

});

shareButton.onclick = function() {
    popUp.classList.toggle("active");
    popUp.classList.toggle("opacity");
    closer.classList.toggle("active");
    shareButton.classList.toggle('grey-button');
    shareButton.classList.toggle("dark-button");
};