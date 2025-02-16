const offerBar = document.querySelector(".offer-bar");
const offerCloseButton = document.getElementById("offer-close");

offerCloseButton.addEventListener("click", () => {
    offerBar.style.display = "none";
});
