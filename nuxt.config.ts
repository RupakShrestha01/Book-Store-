

import { defineNuxtConfig } from "nuxt";
const isDev = process.env.NODE_ENV === "development" || process.dev;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Book-Store",
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "",
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css",
      },
    ],
    script: [{ src: "https://unpkg.com/flowbite@1.5.2/dist/flowbite.js" }],
  },
  runtimeConfig: {
    public: {
      apiBase: isDev
        ? "http://127.0.0.1:8000/v1/learn/"
        : "https://eb.edusanjal.com/v1/learn/",
    },
  },

  buildModules: ["@nuxtjs/svg"],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["~/assets/css/main.css"],
});
