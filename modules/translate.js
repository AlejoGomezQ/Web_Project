const flags = document.getElementById("flags");
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
