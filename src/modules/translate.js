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

window.onload = function () {
  btnEn = document.getElementById("btn-en");
  btnEs = document.getElementById("btn-es");
  initializeLanguageControl();
  btnEn.addEventListener("click", handleLanguageSwitch);
  btnEs.addEventListener("click", handleLanguageSwitch);
};

function handleLanguageSwitch(event) {
  const selectedLanguage = event.target.closest("li").getAttribute("idioma");
  switchLanguage(selectedLanguage);
}

function initializeLanguageControl() {
  const initialLang = isUserLanguageSpanish() ? "es" : "en";  // Detecta el idioma del usuario
  polyglot = new Polyglot();
  switchLanguage(initialLang);  // Establece el idioma inicial y muestra la bandera opuesta
}

function switchLanguage(locale) {
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

function isUserLanguageSpanish() {
  const userLanguage = navigator.language;
  const spanish = "es";
  return userLanguage.includes(spanish);
}

// Función de localización - obtiene las preferencias de idioma del usuario
function getUserPreferredLocale() {
  return isUserLanguageSpanish() ? espanol : english;
}

function loadLocalizedTexts() {
  try {
    document.getElementById("youtube").innerHTML = polyglot.t("youtube");
    document.getElementById("about").innerHTML = polyglot.t("about");
    document.getElementById("gallery").innerHTML = polyglot.t("gallery");
    document.getElementById("contact").innerHTML = polyglot.t("contact");
    document.getElementById("title").innerHTML = polyglot.t("title");
    document.getElementById("phrase1").innerHTML = polyglot.t("phrase1");
    document.getElementById("description").innerHTML = polyglot.t("description");
    document.getElementById("phrase2").innerHTML = polyglot.t("phrase2");
    document.getElementById("text").innerHTML = polyglot.t("text");
  } catch (e) {
    console.warn("Polyglot", e);
  }
}

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

export { initializeLanguageControl, switchLanguage, isUserLanguageSpanish };
