//Sliders

let carousel, container, prevBtn, nextBtn, pagination;
let bullets, totalItems, percent, currentIndex;

function next() {
    slideTo(currentIndex + 1);
}

function prev() {
    slideTo(currentIndex - 1);
}

function slideTo(index) {
    index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
    container.style.WebkitTransform = container.style.transform =
        "translate(-" + index * 100 + "%, 0)";
    bullets[currentIndex].classList.remove("active-bullet");
    bullets[index].classList.add("active-bullet");
    currentIndex = index;
}

window.onload = function () {
    carousel = document.querySelector(".carousel");
    container = carousel.querySelector(".carousel-container");
    prevBtn = carousel.querySelector(".carousel-prev");
    nextBtn = carousel.querySelector(".carousel-next");
    pagination = carousel.querySelector(".carousel-pagination");
    totalItems = container.querySelectorAll(".carousel-item").length;
    currentIndex = 0;

    for (let i = 0; i < totalItems; i++) {
        let li = document.createElement("li");
        li.classList.add("carousel-bullet");
        pagination.appendChild(li);
    }

    bullets = [].slice.call(carousel.querySelectorAll(".carousel-bullet"));
    bullets[currentIndex].classList.add("active-bullet");
    prevBtn.addEventListener("click", prev, false);
    nextBtn.addEventListener("click", next, false);

    pagination.addEventListener(
        "click",
        (e) => {
            let index = bullets.indexOf(e.target);
            if (index !== -1 && index !== currentIndex) {
                slideTo(index);
            }
        },
        false
    );

    setInterval(next, 2000);
};