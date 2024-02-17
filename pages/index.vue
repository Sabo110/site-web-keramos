<template>
  <IndexFirstSection />
  <div class="min-h-screen flex flex-col justify-center items-center gap-y-10  px-4 xl:px-0 bg-gray-100">
    <h1 class="text-2xl md:text-3xl text-center">Nos Services de Construction & Vente de Matériaux - <span>Kéramos</span></h1>
    <div class="grid md:grid-cols-3 md:gap-x-4 md:gap-y-0 xl:gap-x-6 gap-y-6 ">
        <IndexCardWithImage v-for="(service, index) in services" :key="index" :titre="service.titre" :description="service.description" :src="service.image" />
    </div>
    <h1 class="md:text-3xl text-center">Pourquoi Nous Choisir ? Découvrez Nos Avantages - <span>Kéramos</span></h1>
    <div class="grid md:grid-cols-3 md:gap-x-4 md:gap-y-0 xl:gap-x-6 gap-y-6 ">
        <IndexCard title="Tarif"> <IconsCash /> </IndexCard>
        <IndexCard title="Expérience"> <IconsEtoile /> </IndexCard>
        <IndexCard title="Delais"> <IconsTime /> </IndexCard>
    </div>
  </div> 
  <div class="min-h-screen flex flex-col justify-center items-center gap-y-10 bg-gray-100">
    <h1 class="text-2xl md:text-3xl text-center">Témoignages Clients : La Satisfaction de Nos Clients - <span>Kéramos</span></h1>
    <div class="grid mb-8  rounded-lg  dark:border-gray-700 md:mb-12 md:grid-cols-3 bg-white dark:bg-gray-800 gap-8">
        <IndexCard2 v-for="(object, index) in textes" :key="index" :url="object.url" :texte="object.texte" :titre="object.titre" alt="image"> </IndexCard2>
    </div>
  </div>
</template>


<script setup>
const services = [
    {
        titre:  "Briques Durables pour Vos Projets de Construction - Kéramos",
        description: "Découvrez nos briques de construction de haute qualité, fabriquées pour durer. Faites confiance à Kéramos pour des matériaux solides et fiables.",
        image: "/images/image9.jpeg",
    },
    {
        titre:   "Tuiles de Toiture Durables",
        description: "Trouvez des tuiles de toiture durables et esthétiques chez Kéramos. Protégez votre maison avec nos tuiles robustes et élégantes.",
        image: "/images/image1.jpeg",
    },
    {
        titre:  "Construction de Maisons & Duplex sur Mesure - Kéramos",
        description:  "Construction de Maisons et Duplex de Qualité. Confiez la construction de votre maison ou duplex à Kéramos. Expertise, qualité et satisfaction garanties pour votre projet immobilier.",
        image: "/images/image9.jpeg",
    },
]
const textes = [
    {
        titre: "Qualité et rapidité au rendez-vous!",
        url: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
        texte: "Nous sommes ravis de la qualité des briques que nous avons achetées pour notre projet de construction. La livraison a été rapide et le service client était exceptionnel. Nous recommandons vivement cette entreprise pour leur professionnalisme et leur fiabilité."
    },
    {
        titre: "Construction sans soucis, équipe compétente.",
        url: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
        texte: "Grâce à l'équipe compétente et à l'écoute, la construction de notre maison s'est déroulée sans le moindre souci. Les matériaux utilisés étaient de grande qualité, ce qui a contribué au succès de notre projet. Nous sommes très satisfaits et nous recommandons cette entreprise à tous ceux qui recherchent un service de construction fiable."
    },
    {
        titre: "Briques de qualité pour une rénovation réussie.",
        url: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
        texte: "Nous avons été impressionnés par le service client exceptionnel que nous avons reçu lors de l'achat de nos matériaux de construction. L'équipe était toujours disponible pour répondre à nos questions et nous fournir des conseils précieux. Nous sommes reconnaissants pour leur professionnalisme et leur engagement envers la satisfaction du client."
    },
    /*{
        titre: "Service client exceptionnel, conseils précieux.",
        url: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
        texte: "Nous sommes ravis de la qualité des briques que nous avons achetées pour notre projet de construction. La livraison a été rapide et le service client était exceptionnel. Nous recommandons vivement cette entreprise pour leur professionnalisme et leur fiabilité."
    },
    {
        titre: "Impressionnés par la qualité des matériaux.",
        url: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png", 
        texte: "La qualité des matériaux de construction que nous avons achetés était vraiment impressionnante. Non seulement ils étaient de grande qualité, mais ils ont également été livrés dans les délais prévus, ce qui a grandement facilité notre projet. Nous recommandons cette entreprise à tous ceux qui recherchent des matériaux de construction fiables et de haute qualité."
    },
    {
        titre: "Expertise et engagement pour votre projet.",
        url: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
        texte: "Notre expérience avec cette entreprise a été très positive. Ils ont fait preuve d'un professionnalisme exemplaire à toutes les étapes de notre projet, depuis l'achat des briques jusqu'à la livraison. Nous sommes reconnaissants pour leur expertise et leur engagement envers la satisfaction du client. Nous les recommandons vivement à tous ceux qui ont des projets de construction ou de rénovation."
    }*/
    
]
</script>
