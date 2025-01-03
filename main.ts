import i18n from "./i18n";

console.log(i18n.t("greeting")); // "Hello"
i18n.changeLanguage("de");
console.log(i18n.t("greeting")); // "Hallo"
