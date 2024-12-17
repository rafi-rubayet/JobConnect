import { createI18n } from "vue-i18n";
import { ref, computed } from "vue";

// Import translation files
import en from "./locales/en.json";
import ja from "./locales/ja.json";

// Create a ref for the current locale
export const currentLocale = ref("en"); // Default locale is English

// Translation messages
const messages = {
  en,
  ja,
};

// Retrieve saved locale from localStorage or use a default
const savedLocale = localStorage.getItem('user-locale') || 'en';

// Create the i18n instance
export const i18n = createI18n({
  legacy: false, // Use Composition API mode
  globalInjection: true, // Enable global `t` function
  locale: savedLocale, // Use the ref value as the initial locale
  messages,
});

