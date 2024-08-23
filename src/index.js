/**
 * Punto de entrada principal de la aplicación.
 *
 * Este script se ejecuta cuando el contenido del documento ha sido completamente cargado.
 * Importa y ejecuta varias funciones para inicializar diferentes características de la aplicación:
 *
 * - `fetchLatestVideo()`: Obtiene y muestra el video más reciente.
 * - `openWp()`: Agrega un evento de clic al botón de WhatsApp.
 * - `initModal()`: Inicializa el modal para visualizar imágenes de una galería.
 * - `adjustFormIframe()`: Ajusta el tamaño de un iframe dentro de un contenedor de formulario.
 * - `translate()`: (comentado) Agrega funcionalidad de traducción a la página.
 *
 * @module main
 */

import "./styles.scss";

import { fetchLatestVideo } from "./modules/fetchVideo.js";
import { initModal } from "./modules/imageModal.js";
import { openWp } from "./modules/openWhatsapp.js";
import { adjustFormIframe } from "./modules/form.js";
import { initializeLanguageControl, switchLanguage, isUserLanguageSpanish } from "./modules/translate.js";
import { validateLogin} from "./modules/validationsForm.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchLatestVideo();

  openWp();

  initModal();

  adjustFormIframe();

  initializeLanguageControl();

  switchLanguage();

  isUserLanguageSpanish();

  validateLogin();
});
