const { createApp } = Vue

const vueApp = createApp({
  data() {
    return {
      langs: ['en', 'fr']
    }
  },
  mounted() {
    // Animations
    AOS.init({
      anchorPlacement: 'top-left',
      duration: 1000
    });
  },
  methods: {
    switchLanguage(lang) {
      this.$i18n.locale = lang
    }
  }
})

const messages = {
  en: {
    present: 'Present',
    header: {
      skills: 'Web & Mobile Developer',
      download: 'Download',
      hireMe: 'Hire Me'
    },
    about: {
      title: 'About Me',
      content: "Hello! I’m Mohamed Fahmi Chaar. I am passionate about Web & Mobile Development. I am a skilled Full Stack Developer.",
      age: 'Age',
      email: 'Email',
      phone: 'Phone',
      address: 'Address'
    },
    skills: {
      title: 'Professional Skills'
    },
    work: {
      title: 'Work Experience',
      freelance: {
        content: "I start my professional career with small projects as a freelancer"
      },
      converto: {
        title: "Mobile & Full Stack Developer",
        company: "at Converto Agency",
        content: "I develop mobile applications with ionic framework as my main job, and i'm Full Stack developer, i use laravel framework for the back-end, vue js and inertia js for the front-end we created many projects with this stack."
      }
    },
    education: {
      title: 'Education',
      primary: {
        title: 'Primary education',
        subtitle: 'from Nahej el madersa Rades school'
      },
      secondary: {
        title: 'Secondary education',
        subtitle: "From Abed'allah Farhat Rades College"
      },
      bac: {
        title: 'Bachelor of Computer Science',
        subtitle: "From Farhat Hached Rades High school"
      },
      self: {
        title: 'Self learning',
        subtitle: 'from Home'
      }
    },
    contact: {
      title: 'Contact',
      send: 'Send',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      yourMessage: 'Your Message',
      copyright: 'All rights reserved.'
    }
  },
  fr: {
    present: 'Présente',
    header: {
      skills: 'Développeur Web & Mobile',
      download: 'Télécharger',
      hireMe: 'Engagez moi',
    },
    about: {
      title: 'À propos de moi',
      content: "Bonjour! Je suis Mohamed Fahmi Chaar. Je suis passionné par le développement Web & Mobile. Je suis un développeur Full Stack qualifié.",
      age: 'Age',
      email: 'Email',
      phone: 'Téléphoner',
      address: 'Adresse'
    },
    skills: {
      title: 'compétences professionnelles'
    },
    work: {
      title: "L'expérience professionnelle",
      freelance: {
        content: "Je commence ma carrière professionnelle par de petits projets en tant qu'indépendant"
      },
      converto: {
        title: "Développeur Mobile et Full Stack",
        company: "à Converto Agency",
        content: "Je développe des applications mobiles avec le framework ionic comme travail principal, et je suis développeur Full Stack, j'utilise le framework laravel pour le back-end, vue js et inertia js pour le front-end, nous avons créé de nombreux projets avec cette pile."
      }
    },
    education: {
      title: 'Éducation',
      primary: {
        title: 'Éducation primaire',
        subtitle: "de l'école Nahej el madersa Rades"
      },
      secondary: {
        title: 'Éducation secondaire',
        subtitle: "de college Abed'allah Farhat Rades"
      },
      bac: {
        title: 'Baccalauréat en Sciences informatiques',
        subtitle: "de Lycée Farhat Hached Rades"
      },
      self: {
        title: 'Auto-apprentissage',
        subtitle: 'de la maison'
      }
    },
    contact: {
      title: 'Contact',
      send: 'Envoyer',
      yourName: 'Votre nom',
      yourEmail: 'Votre e-mail',
      yourMessage: 'Votre message',
      copyright: 'Tous droit réserver.'
    }
  }
}

const i18n = VueI18n.createI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages
})

vueApp.use(i18n)
vueApp.mount('#top')