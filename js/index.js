const apiKey = "AIzaSyC6DnTOa0FN4ndu09S5klmw3VtYNnFMc9w";
const channelId = "UCLjhW-Y-i4gEWuJaScv5Ufg";
async function fetchLatestVideo() {
  try {
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`
    );
    const data = await response.json();
    const videoId = data.items[0].id.videoId;
    document.getElementById("youtube-channel").innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>
        `;
  } catch (error) {
    console.error("Error al obtener el video:", error);
  }
}
fetchLatestVideo();

const wpBtn = document.getElementById("wp-btn");

wpBtn.addEventListener("click", () => {
  console.log("Redirigiendo a WhatsApp");
});


//------------------------------------------------------------------------------------

//Sliders
const slider = document.getElementById('slider');
const carouselContainer = slider.querySelector('.carousel-container');
const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
const nextBtn = slider.querySelector('.carousel-next');
const prevBtn = slider.querySelector('.carousel-prev');
const pagination = slider.querySelector('.carousel-pagination');

let currentSlide = 0;

// Function to update the slider state
function updateSlider(slideIndex) {
  currentSlide = slideIndex;
  carouselItems.forEach((item, index) => {
    item.classList.remove('active');  // Remove active class from all slides
    if (index === currentSlide) {
      item.classList.add('active');  // Add active class to current slide
    }
  });
  createPagination(); // Update pagination based on current slide
}

// Function to create pagination dots
function createPagination() {
  pagination.innerHTML = ''; // Clear existing pagination dots
  for (let i = 0; i < carouselItems.length; i++) {
    const dot = document.createElement('li');
    dot.classList.add('pagination-dot');
    dot.addEventListener('click', () => updateSlider(i));
    pagination.appendChild(dot);
  }
  pagination.children[currentSlide].classList.add('active');  // Mark current slide dot as active
}

// Event listeners for navigation buttons
nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide === carouselItems.length) {
    currentSlide = 0; // Loop back to first slide if reached end
  }
  updateSlider(currentSlide);
});

prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = carouselItems.length - 1; // Loop back to last slide if reached beginning
  }
  updateSlider(currentSlide);
});

// Initialize the slider state
updateSlider(currentSlide);
createPagination();


//------------------------------------------------------------------------------------