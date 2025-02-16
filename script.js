const offerBar = document.querySelector(".offer-bar");
const offerCloseButton = document.getElementById("offer-close");

offerCloseButton.addEventListener("click", () => {
    offerBar.style.display = "none";
});


const sliderLeftButton = document.getElementById("slider-left-activate");
const sliderRightButton = document.getElementById("slider-right-activate");
const sliderImage = document.querySelector(".slider-image-container");
let sliderMargin = 0;

const updateSlider = (newMargin) => {
    sliderMargin = newMargin;
    sliderImage.style.marginLeft = `-${sliderMargin}vw`;
};

sliderRightButton.addEventListener("click", () => {
    sliderMargin = (sliderMargin + 100) % 300;
    updateSlider(sliderMargin);
});

sliderLeftButton.addEventListener("click", () => {
    sliderMargin = (sliderMargin - 100 + 300) % 300;
    updateSlider(sliderMargin);
});
