const apiKey = "AIzaSyC6DnTOa0FN4ndu09S5klmw3VtYNnFMc9w";
const channelId = "UCLjhW-Y-i4gEWuJaScv5Ufg";

fetch(
  `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`
)
  .then((response) => response.json())
  .then((data) => {
    const videoId = data.items[0].id.videoId;
    document.getElementById("youtube-channel").innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>
        `;
  })
  .catch((error) => console.error("Error al obtener el video:", error));
