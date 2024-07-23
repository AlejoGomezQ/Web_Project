import { fetchLatestVideo } from "./modules/fetchVideo.js";
import { openWp } from "./modules/openWhatsapp.js";
import { moveSlide } from "./modules/sliderIndex.js";

fetchLatestVideo();

openWp();

moveSlide();
