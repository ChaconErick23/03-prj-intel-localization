// Manual language direction buttons
const englishBtn = document.getElementById("englishBtn");
const arabicBtn = document.getElementById("arabicBtn");

englishBtn.addEventListener("click", function () {
  document.documentElement.lang = "en";
  document.documentElement.dir = "ltr";
});

arabicBtn.addEventListener("click", function () {
  document.documentElement.lang = "ar";
  document.documentElement.dir = "rtl";
});

// Auto-detect RTL languages if the page language changes
function updatePageDirection() {
  const rtlLanguages = ["ar", "he", "fa", "ur"];
  const currentLanguage = document.documentElement.lang.toLowerCase();

  if (rtlLanguages.some(function (language) {
    return currentLanguage.startsWith(language);
  })) {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }
}

// Watch for language changes, such as from browser translation tools
const languageObserver = new MutationObserver(updatePageDirection);

languageObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["lang"]
});

// Run once when the page loads
updatePageDirection();