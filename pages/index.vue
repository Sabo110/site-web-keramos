<template>
  <IndexFirstSection />
  <div class="min-h-screen flex flex-col justify-center items-center gap-y-10  px-4 xl:px-0 bg-[#F3F4F6]" id="services">
    <h1 class="text-2xl md:text-3xl text-center">Nos Services de Construction & Vente de Matériaux - <span>Kéramos</span></h1>
    <div class="grid md:grid-cols-3 md:gap-x-4 md:gap-y-0 xl:gap-x-6 gap-y-6 ">
        <IndexCardWithImage v-for="(service, index) in services" :key="index" :titre="service.titre" :description="service.description" :src="service.image" />
    </div>
    <h1 class="text-2xl md:text-3xl text-center py-4">Pourquoi Nous Choisir ? Découvrez Nos Avantages - <span>Kéramos</span></h1>
    <div class="grid md:grid-cols-3 md:gap-x-4 md:gap-y-0 xl:gap-x-6 gap-y-6 ">
        <IndexCard :titre="atouts[0].titre" :description="atouts[0].description"> <IconsCash /> </IndexCard>
        <IndexCard :titre="atouts[1].titre" :description="atouts[1].description"> <IconsEtoile /> </IndexCard>
        <IndexCard :titre="atouts[2].titre" :description="atouts[2].description"> <IconsTime /> </IndexCard>
    </div>
  </div> 
  <div class="min-h-screen flex flex-col justify-center items-center gap-y-10 bg-[#F3F4F6] pt-16 px-4">
    <h1 class="text-2xl md:text-3xl text-center">Témoignages Clients : La Satisfaction de Nos Clients - <span>Kéramos</span></h1>
    <div class="grid mb-8  rounded-lg  dark:border-gray-700 md:mb-12 md:grid-cols-3 dark:bg-gray-800 gap-8">
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
]
const atouts = [
    {
        'titre': 'Tarif',
        'description': 'Tarifs imbattables pour vos projets de construction.'
    },
     {
        'titre': 'Expérience',
        'description': "Plusieurs années d'expertise dans la fabrication et la construction."
    },
     {
        'titre': 'Délais',
        'description': 'Respect des délais pour une livraison rapide.'
    }
]
</script>
