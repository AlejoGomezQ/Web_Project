import { fetchLatestVideo } from "./modules/fetchVideo.js";
import { initModal } from "./modules/imageModal.js";
import { openWp } from "./modules/openWhatsapp.js";
import { adjustFormIframe } from "./modules/form.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchLatestVideo();

  openWp();

  initModal();

  adjustFormIframe();
});
