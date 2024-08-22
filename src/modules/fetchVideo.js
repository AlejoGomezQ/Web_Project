/**
 * Clave API de YouTube utilizada para autenticar las solicitudes a la API.
 * @constant {string}
 */
const X = "AIzaSyCAnMEGYNe46hK1zOC-4wvRWFhOFFqmT4A";

/**
 * ID del canal de YouTube del cual se obtendrán los videos.
 * @constant {string}
 */
const channelId = "UCLjhW-Y-i4gEWuJaScv5Ufg";

/**
 * Obtiene el video más reciente del canal de YouTube especificado
 * y lo inserta en un iframe en el DOM.
 *
 * @async
 * @function fetchLatestVideo
 * @throws {Error} Si ocurre un error al obtener el video.
 */
export async function fetchLatestVideo() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${X}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`
    );
    const data = await response.json();
    const videoId = data.items[0].id.videoId;

    const iframeWidth = window.innerWidth <= 768 ? 350 : 560;
    const iframeHeight = window.innerWidth <= 768 ? 200 : 315;

    document.getElementById("youtube-channel").innerHTML = `
            <iframe width="${iframeWidth}" height="${iframeHeight}" src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>
        `;
  } catch (error) {
    console.error("Error al obtener el video:", error);
  }
}
