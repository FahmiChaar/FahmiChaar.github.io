const { createApp } = Vue

const vueApp = createApp({
  data() {
    return {
      langs: ['en', 'fr'],
      age: new Date().getFullYear() - 1990,
      projects: [
        {
          name: 'Bizzybird',
          logo: 'bizzy.png',
          description: 'projects.bizzy.description',
          tasks: ['projects.mobDevTasks'],
          tools: 'Ionic Framework, Angular, Sass, Capacitor, Git',
          links: {
            android: "https://play.google.com/store/apps/details?id=tn.simple.bizzybird&hl=fr&gl=US",
            ios: "https://apps.apple.com/us/app/bizzybird/id1566802800?platform=iphone"
          }
        },
        {
          name: "SunnApp",
          logo: 'sunnapp.png',
          description: "projects.sunnapp.description",
          tasks: ['projects.mobDevTasks', 'projects.backDev', 'projects.vpsTasks', 'projects.storesDeploy'],
          tools: 'Laravel, Vue, Vuetify, Sass, Angular, Ionic, Capacitor, Git',
          links: {
            android: "https://play.google.com/store/apps/details?id=com.sunnapp&hl=fr&gl=US",
            ios: "https://apps.apple.com/us/app/sunnapp-horaires-de-pri%C3%A8re/id1597447110?platform=iphone"
          }
        },
        {
          name: 'IDEO GROUPE',
          logo: 'ideo.png',
          description: 'projects.ideo.description',
          tasks: ['projects.mobDevTasks'],
          tools: 'Ionic Framework, Capacitor, OneSignal, Git',
          links: {
            android: "https://play.google.com/store/apps/details?id=com.ideo.app&hl=fr&gl=US"
          },
          pagebreak: true
        },
        {
          name: 'Bizznass',
          logo: 'bizznass.png',
          description: 'projects.bizznass.description',
          tasks: ['projects.mobDevTasks'],
          tools: 'Ionic Framework, Capacitor, Laravel, Git',
          links: {
            android: "https://play.google.com/store/apps/details?id=com.bizznass.app&hl=fr&gl=US"
          }
        },
        {
          name: 'Miqat',
          logo: 'miqat.png',
          description: 'projects.miqat.description',
          tasks: ['projects.mobDevTasks', 'projects.backDev', 'projects.vpsTasks', 'projects.androidDeploy'],
          tools: 'Laravel, Vue, Vuetify, Sass, Angular, Ionic, Capacitor, Node JS, Socket.io, Git',
          links: {
            android: "https://play.google.com/store/apps/details?id=tn.converto.miqat&hl=fr&gl=US"
          }
        },
        {
          name: "Children's Boulevard",
          logo: 'cb.png',
          tasks: ['projects.mobDevTasks', 'projects.backDev', 'projects.vpsTasks', 'projects.androidDeploy'],
          tools: 'Laravel, Vue, Vuetify, Sass, Ionic Framework, Capacitor, Git',
          links: {
            android: "https://play.google.com/store/apps/details?id=tn.converto.cb&hl=fr&gl=US"
          }
        },
        {
          name: "Islam Pro",
          logo: 'islam.png',
          description: "projects.sunnapp.description",
          tasks: ['projects.mobDevTasks', 'projects.storesDeploy'],
          tools: 'Ionic Framework, Capacitor, Git',
          links: {
            android: "https://play.google.com/store/apps/details?id=com.islam.pro&hl=fr&gl=US",
            ios: "https://apps.apple.com/us/app/islam-pro-l-quran-athan-salat/id6444192785?platform=iphone"
          },
        },
        {
          name: "Editions Akhira",
          logo: 'edition.png',
          tasks: ['projects.mobDevTasks', 'projects.backDev', 'projects.vpsTasks', 'projects.storesDeploy'],
          tools: 'Laravel, Inersia js, Vue, Vuetify, Sass, Ionic Framework, Capacitor, Git',
          links: {
            android: "https://play.google.com/store/apps/details?id=com.edition.akhira&hl=fr&gl=US",
            ios: "https://apps.apple.com/fr/app/editions-akhira/id1593373530?platform=iphone"
          },
          pagebreak: true
        },
        {
          name: "Any Service",
          logo: 'any.png',
          description: "projects.anyService.description",
          tasks: ['projects.mobDevTasks', 'projects.androidDeploy'],
          tools: 'Ionic Framework, Capacitor, Node JS, Socket.io, Git',
          links: {
            android: "https://apkpure.com/fr/any-service-%D8%A3%D9%8A-%D8%AE%D8%AF%D9%85%D8%A9/tn.converto.apps.anyService",
          }
        },
        {
          name: 'Haval.tn - Greatwall.tn - Foton.tn',
          logo: 'haval.png',
          tasks: ['projects.haval.description'],
          tools: 'HTML, Css, Javascript, Git',
          links: {
            web: "https://haval.tn"
          }
        },
        {
          name: 'Zsexpress',
          logo: 'zs.png',
          description: 'projects.zs.description',
          tasks: ['projects.zs.task1', 'projects.vpsTasks'],
          tools: 'Laravel, Vue, Vuetify, Sass, Ionic Framework, Capacitor, Git',
          links: {
            web: "http://zs-express-tn.com"
          }
        },
        {
          name: 'Hyundai CRM',
          logo: 'hyundai.jpeg',
          description: 'Hyundai TN CRM',
          tasks: ['projects.hcrm.tasks'],
          tools: 'PHP, Zurmo CRM, Yii Framework, Javascript, Highcharts, Git',
          links: {}
        },
        {
          name: "projects.hospital.name",
          description: "projects.hospital.description",
          tasks: ['projects.frontDev', 'projects.backDev', 'projects.vpsTasks'],
          tools: 'Laravel, Vue, Vuetify, Sass, Git',
          links: {}
        },
        {
          name: 'Foodex',
          description: 'projects.foodex.description',
          tasks: ['projects.mobDevTasks'],
          tools: 'React Native, Twilio, Git',
          links: {}
        },
        {
          name: 'SEVEN',
          description: 'Workout program application',
          tasks: ['projects.mobDevTasks'],
          tools: 'React Native, Git',
          links: {}
        }
      ]
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
    },
    getTools(tools) {
      return tools.split(',').map(t => `<div class='badge bg-primary me-1' style='font-weight: normal;'>${t}</div>`).join('')
    }
  }
})

const messages = {
  en: {
    present: 'Present',
    language: 'Langue',
    language: 'Language',
    header: {
      skills: 'Web & Mobile Developer',
      download: 'Download',
      hireMe: 'Hire Me'
    },
    about: {
      title: 'About Me',
      content: `8 years of experience in web and mobile development.\nI'm passionate about creating engaging, user-friendly software by building both web and mobile applications.`,
      age: 'Age',
      email: 'Email',
      phone: 'Phone',
      address: 'Address'
    },
    skills: {
      title: 'Professional Skills'
    },
    work: {
      title: 'My Projects',
      projects: "Projects",
      tasks: "Tasks",
      tools: "Tools",
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
    },
    projects: {
      visit: "Web Site",
      more: "and more...",
      bizzy: {
        description: "A calendar-based app that helps you find, create, and share exciting events"
      },
      bizznass: {
        description: "Bizznass connects SMEs and individuals to Alibaba and Amazon market places by providing complete solutions of purchasing."
      },
      haval: {
        description: "Template integration"
      },
      zs: {
        description: "Order tracking system",
        task1: "Development of the system for the admin and the customers and a mobile application for the delivery men",
      },
      foodex: {
        description: "Food delivery mobile application"
      },
      miqat: {
        description: "The first application that compares direct Umrah offers and reservations"
      },
      sunnapp: {
        description: 'Prayer Times, Qibla, Quran, Invocations, Quiz'
      },
      hospital: {
        name: 'Course management system',
        description: 'Course management system (creation, schedule, reservation)'
      },
      vpsTasks: "vps configuration and Backend deployment",
      mobDevTasks: "Develop android and ios mobile application",
      androidDeploy: "Deployment on play store",
      storesDeploy: "Deployment on stores (play store, app store)",
      backDev: "Back-end development",
      frontDev: "Front-end development"
    }
  },
  fr: {
    present: 'pr??sente',
    language: 'Langue',
    header: {
      skills: 'D??veloppeur Web & Mobile',
      download: 'T??l??charger',
      hireMe: 'Engagez moi',
    },
    about: {
      title: '?? propos de moi',
      content: `8 ans d'exp??rience en d??veloppement web et mobile.\n
      Je suis passionn?? par la cr??ation de logiciels attrayants et conviviaux en cr??ant des applications Web et mobiles.`,
      age: 'Age',
      email: 'Email',
      phone: 'T??l??phone',
      address: 'Adresse'
    },
    skills: {
      title: 'comp??tences professionnelles'
    },
    work: {
      title: "Mes Projets",
      projects: "Projets",
      tasks: "T??ches",
      tools: "Outils",
      freelance: {
        content: "Je commence ma carri??re professionnelle par de petits projets en tant qu'ind??pendant"
      },
      converto: {
        title: "D??veloppeur Mobile et Full Stack",
        company: "?? Converto Agency",
        content: "Je d??veloppe des applications mobiles avec le framework ionic comme travail principal, et je suis d??veloppeur Full Stack, j'utilise le framework laravel pour le back-end, vue js et inertia js pour le front-end, nous avons cr???? de nombreux projets avec cette pile."
      }
    },
    education: {
      title: '??ducation',
      primary: {
        title: '??ducation primaire',
        subtitle: "de l'??cole Nahej el madersa Rades"
      },
      secondary: {
        title: '??ducation secondaire',
        subtitle: "de college Abed'allah Farhat Rades"
      },
      bac: {
        title: 'Baccalaur??at en Sciences informatiques',
        subtitle: "de Lyc??e Farhat Hached Rades"
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
      copyright: 'Tous droit r??server.'
    },
    projects: {
      visit: "Site Web",
      more: "et plus...",
      bizzy: {
        description: "Application bas??e sur un calendrier qui vous aide ?? trouver, cr??er et partager des ??v??nements passionnants",
      },
      bizznass: {
        description: "Bizznass connecte les PME et les particuliers aux places de march?? Alibaba et Amazon en fournissant des solutions compl??tes d'achat",
      },
      haval: {
        description: "Int??gration de templates"
      },
      zs: {
        description: "Syst??me de suivi de colis",
        task1: "D??veloppement du systeme pour l'admin et les client et d'une application mobile pour les livreurs",
      },
      foodex: {
        description: "Application mobile de livraison de nourriture"
      },
      miqat: {
        description: "La premi??re application qui compare les offres et les r??servations directes de Omra"
      },
      sunnapp: {
        description: 'Horaires de pri??re, Qibla, Quran, Invocations, Quiz'
      },
      hospital: {
        name: 'Syst??me de gestion des cours',
        description: 'Syst??me de gestion des cours (cr??ation, planning, r??servation)'
      },
      vpsTasks: "Configuration du vps et deployment du Backend",
      mobDevTasks: "D??velopper une application mobile android et ios",
      androidDeploy: "D??ploiement sur play store",
      storesDeploy: "D??ploiement sur les stores (play store, app store)",
      backDev: "D??veloppement du back-end",
      frontDev: "D??veloppement du front-end"
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