const apiKey = "AIzaSyCeEZ7hJcZ9GtK-06H-oUQEdG2_60ZbSGA";
const channelId = "UCLjhW-Y-i4gEWuJaScv5Ufg";

export async function fetchLatestVideo() {
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
