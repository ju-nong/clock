// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
    css: ["@/assets/css/style.scss"],
});
