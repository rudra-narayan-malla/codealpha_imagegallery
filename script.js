const galleryItems = document.querySelectorAll(".gallery-item");
const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

/* Open Lightbox */

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    });

});


/* Show Image */

function showImage() {

    lightboxImg.src = images[currentIndex].src;

}


/* Next Button */

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();

});


/* Previous Button */

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();

});


/* Close Lightbox */

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});


/* Close when clicking outside image */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});


/* Category Filter */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        galleryItems.forEach(item => {

            if (
                category === "all" ||
                item.dataset.category === category
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});