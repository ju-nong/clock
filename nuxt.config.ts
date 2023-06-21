// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/css/style.scss"],
    components: [
        "~/components",
        {
            path: "~/components/clock/analog",
            prefix: "Analog",
        },
        {
            path: "~/components/clock/digital",
            prefix: "Digital",
        },
    ],
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
    ssr: false,
});
