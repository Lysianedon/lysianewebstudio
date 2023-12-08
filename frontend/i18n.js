import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context("../locales", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

function getPreferedLanguage(available) {
  if (typeof navigator === "object" && typeof navigator.languages === "object") {
    for (let lang of navigator.languages) {
      let short = lang.slice(0, 2);
      if (available.indexOf(short) !== -1) return short;
    }
  }
}

function loadPhraseApp() {
  window.PHRASEAPP_CONFIG = {
    projectId: "6531d07ea46173d9d0c32181effe7366",
    autoLowercase: false,
    fullReparse: true,
  };
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = `https://phraseapp.com/assets/in-context-editor/2.0/app.js?${new Date().getTime()}`;
  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(script, firstScript);

  i18n.postTranslation = (translation, key) => {
    return `{{__phrase_${key}__}}`;
  };
}

function unloadPhraseApp() {
  window.top.location.reload();
}

const messages = loadLocaleMessages();
let savedLocale;
if (!!window.localStorage && typeof localStorage.getItem === "function") {
  savedLocale = localStorage.getItem("locale");
}
const i18n = new VueI18n({
  locale: savedLocale || getPreferedLanguage(Object.keys(messages)) || process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  silentFallbackWarn: true,
  messages: messages,
});

i18n.vm.$watch(
  "locale",
  function (locale, previous) {
    if (locale === "phrase") {
      return loadPhraseApp();
    } else {
      if (document.documentElement) {
        document.documentElement.lang = locale;
        document.documentElement.translate = true;
      }
      if (window.localStorage && typeof localStorage.setItem === "function") {
        localStorage.setItem("locale", locale);
      }
      if (previous === "phrase") {
        return unloadPhraseApp();
      }
    }
  },
  { immediate: true }
);

export const $t = i18n.vm.$t;
export default i18n;