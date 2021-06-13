let shareButton = document.getElementById("button");
let popUp = document.getElementById("pop-up");

shareButton.onclick = function() {
    popUp.classList.toggle("active");
    popUp.classList.toggle("opacity");
    shareButton.classList.toggle('grey-button')
    shareButton.classList.toggle("dark-button");
};