// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
     link:[
      {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css'},
      {href:"https://unpkg.com/aos@2.3.1/dist/aos.css", rel:"stylesheet"}
     ],
     script:[
      {src:'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js', defer:true},
      {src:"https://unpkg.com/aos@2.3.1/dist/aos.js"}
     ]
    },
    
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
