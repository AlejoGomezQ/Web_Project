/* const flags = document.getElementById("flags");
const textsToChange = document.getElementsByClassName("translate");

const toggleFlags = (lang) => {
  const spanishFlag = flags.querySelector('li[data-language="es"]');
  const englishFlag = flags.querySelector('li[data-language="en"]');

  if (lang === "es") {
    spanishFlag.classList.add("hidden");
    englishFlag.classList.remove("hidden");
  } else {
    spanishFlag.classList.remove("hidden");
    englishFlag.classList.add("hidden");
  }
};

const changeLang = async (lang) => {
  try {
    const reqJson = await fetch(`../languages/${lang}.json`);

    const texts = await reqJson.json();

    for (const textToChange of textsToChange) {
      const section = textToChange.dataset.section;
      const value = textToChange.dataset.value;

      textToChange.innerHTML = texts[section][value];
    }

    toggleFlags(lang);

    localStorage.setItem("preferredLanguage", lang);
  } catch (error) {
    console.error("Error changing language:", error);
  }
};

export function translate() {
  flags.addEventListener("click", (e) => {
    e.preventDefault();
    const lang = e.target.closest("li").dataset.language;
    changeLang(lang);
  });

  const preferredLanguage = localStorage.getItem("preferredLanguage") || "es";
  changeLang(preferredLanguage);
}
 */
import Polyglot from "node-polyglot";
// Importa tus objetos de idioma
import english from "../languages/en.js";
import espanol from "../languages/es.js";

let polyglot;
let btnEs, btnEn;
const flags = document.getElementById("flags");

/**
 * Inicializa el control de idioma al cargar la ventana y asigna los manejadores de eventos a los botones de cambio de idioma.
 * @function window.onload
 */
window.onload = function () {
  btnEn = document.getElementById("btn-en");
  btnEs = document.getElementById("btn-es");
  initializeLanguageControl();
  btnEn.addEventListener("click", handleLanguageSwitch);
  btnEs.addEventListener("click", handleLanguageSwitch);
};

/**
 * Manejador de eventos para el cambio de idioma. Cambia el idioma de la aplicación según la bandera seleccionada.
 * @param {Event} event - El evento click que activa el cambio de idioma.
 */
function handleLanguageSwitch(event) {
  const selectedLanguage = event.target.closest("li").getAttribute("language");
  // Guarda el idioma seleccionado en localStorage
  localStorage.setItem('preferredLanguage', selectedLanguage);
  switchLanguage(selectedLanguage);
}

/**
 * Inicializa el control de idioma basado en la configuración regional del usuario o en la preferencia almacenada, y muestra la bandera opuesta.
 * @function initializeLanguageControl
 */
export function initializeLanguageControl() {
  // Obtiene el idioma guardado en localStorage, si existe
  const storedLang = localStorage.getItem('preferredLanguage');
  const initialLang = storedLang || (isUserLanguageSpanish() ? "es" : "en"); // Usa el idioma guardado o detecta el idioma del usuario
  polyglot = new Polyglot();
  switchLanguage(initialLang); // Establece el idioma inicial y muestra la bandera opuesta
}

/**
 * Cambia el idioma de la aplicación y actualiza los textos localizados en el DOM.
 * @function switchLanguage
 * @param {string} locale - El código de idioma seleccionado (e.g., "es" o "en").
 */
export function switchLanguage(locale) {
  if (locale === "en") {
    polyglot.locale("en");
    polyglot.extend(english);
  } else if (locale === "es") {
    polyglot.locale("es");
    polyglot.extend(espanol);
  }
  loadLocalizedTexts();
  updateFlags(locale); // Actualiza las banderas
}

/**
 * Verifica si el idioma preferido del usuario es el español.
 * @function isUserLanguageSpanish
 * @returns {boolean} - True si el idioma del usuario es español, false en caso contrario.
 */
export function isUserLanguageSpanish() {
  const userLanguage = navigator.language;
  const spanish = "es";
  return userLanguage.includes(spanish);
}

/**
 * Obtiene el conjunto de textos localizados y los aplica en el DOM.
 * @function loadLocalizedTexts
 */
function loadLocalizedTexts() {
  try {
    document.getElementById("youtube").innerHTML = polyglot.t("youtube");
    document.getElementById("about").innerHTML = polyglot.t("about");
    document.getElementById("gallery").innerHTML = polyglot.t("gallery");
    document.getElementById("contact").innerHTML = polyglot.t("contact");
    document.getElementById("title").innerHTML = polyglot.t("title");
    document.getElementById("phrase1").innerHTML = polyglot.t("phrase1");
    document.getElementById("description").innerHTML =
      polyglot.t("description");
    document.getElementById("phrase2").innerHTML = polyglot.t("phrase2");
    document.getElementById("text").innerHTML = polyglot.t("text");
  } catch (e) {
    console.warn("Polyglot", e);
  }
}

/**
 * Actualiza la visibilidad de las banderas en función del idioma seleccionado.
 * @function updateFlags
 * @param {string} lang - El código de idioma seleccionado (e.g., "es" o "en").
 */
function updateFlags(lang) {
  const spanishFlag = flags.querySelector('li[data-language="es"]');
  const englishFlag = flags.querySelector('li[data-language="en"]');

  if (lang === "es") {
    spanishFlag.classList.add("hidden");
    englishFlag.classList.remove("hidden");
  } else {
    spanishFlag.classList.remove("hidden");
    englishFlag.classList.add("hidden");
  }
}

