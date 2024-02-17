// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
     link:[
      {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css'}
     ],
     script:[
      {src:'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js', defer:true}
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
