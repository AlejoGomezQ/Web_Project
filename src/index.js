import "./styles.scss";

import { fetchLatestVideo } from "./modules/fetchVideo.js";
import { initModal } from "./modules/imageModal.js";
import { openWp } from "./modules/openWhatsapp.js";
import { adjustFormIframe } from "./modules/form.js";
/* import { translate } from "./modules/translate.js"; */

document.addEventListener("DOMContentLoaded", () => {
  fetchLatestVideo();

  openWp();

  initModal();

  adjustFormIframe();

  /* translate(); */
});
