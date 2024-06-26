import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";


export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'ca',
    fallbackLocale: 'en',
    availableLocales: ['ca', 'en'],
    messages: messages,
});
