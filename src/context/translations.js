
const translations = {
  en: {
    navbar: {
      about:         "About me",
      skills:        "Skills",
      projects:      "Projects",
      contact:       "Contact",
      contactButton: "Contact"
    },
    home: {
      greetings:      "Greetings 👋🏽",
      intro:          "I'm",
      name:           "Sebastian Schoeneberger",
      jobTitlePrefix: "And I am a",
      jobTitle:       "Full-Stack Developer",
      description:    "With a background in mechatronics and business management, I combine technical expertise, problem-solving, and a multicultural perspective to create impactful web solutions.",
      callToAction:   "Let’s build solutions that make an impact!",
      downloadCV:     "Download CV"
    },
    aboutMe: {
      title:            "About Me",
      subtitle:         "Get to know me",
      intro1:           "👋🏽 My name is Sebastian Schoeneberger, and I'm a junior full-stack web developer with a diverse background and a passion for technology.",
      intro2: {
        part1:          "I started my professional journey at ",
        mercedes:       "Mercedes-Benz",
        part2:          " in the automotive sector, moved into ",
        entrepreneurship:"entrepreneurship",
        part3:          " with multiple businesses, and I am now thrilled to explore new opportunities in the ",
        techIndustry:   "tech industry",
        part4:          "."
      },
      setsTitle:        "What Sets Me Apart",
      sets: {
        set1_label:      "Technical Expertise:",
        set1:            "My experience in vehicle diagnostics at Mercedes-Benz honed my problem-solving skills, which I now apply to coding. I work with JavaScript, React, Node.js, Express, SQL, MongoDB, and more.",
        set2_label:      "Entrepreneurial Mindset:",
        set2:            "Six years of running businesses gave me expertise in marketing, finance, and leadership—helping me build web applications that truly serve business needs.",
        set3_label:      "Multilingual & Adaptable:",
        set3:            "Fluent in German, Spanish, and English, with global experience across three continents, I thrive in diverse environments and communicate effectively.",
        set4_label:      "Detail-Oriented & Reliable:",
        set4:            "I uphold high standards, stay committed to delivering quality work, and ensure every project is completed efficiently and on time."
      },
      techStackTitle:   "Tech Stack",
      educationTitle:   "Education",
      timeline1: {
        date:           "Oct 2024",
        title:          "Frontend Development Training",
        org:            "Kreativstrom",
        desc1:          "Hands-on HTML, CSS and Javascript Training Programm.",
        desc2:          "Intensive frontend training with expert guidance."
      },
      timeline2: {
        date:           "May 2024",
        title:          "Full-Stack App & Web Development Bootcamp",
        org:            "WBS Coding School / Berlin",
        desc1:          "Completed a full-time, 15-week hybrid bootcamp in full-stack web development.",
        desc2:          "Gained expertise in HTML, CSS, JavaScript, React, Node.js, Express, and SQL through hands-on projects and real-world applications.",
        desc3:          "Participated in on-campus sessions to experience a collaborative work environment."
      },
      timeline3: {
        date:           "Sep 2018",
        title:          "Automotive Mechatronics Technician",
        org:            "Mercedes-Benz Group / Frankfurt",
        desc1:          "Formal vocational training",
        desc2:          "Diagnosed and resolved technical issues using advanced tools and technology.",
        desc3:          "Inspected, maintained, and repaired various vehicle components"
      },
      timeline4: {
        date:           "Jan 2010",
        title:          "International Baccalaureate (IB)",
        org:            "German Embassy School Addis Abeba",
        desc1:          "International Baccalaureate: An internationally recognized bilingual secondary school certificate."
      },
      experienceTitle:  "Experience",
      exp1: {
        company:        "Self-employed",
        role:           "Full-Stack Web Developer Freelancer",
        dateRange:      "Sep 2024 - Present | Remote Germany & Ethiopia",
        desc1:          "Develop and deploy responsive full-stack web applications using modern frameworks like React and Node.js.",
        desc2:          "Collaborate with clients to deliver custom solutions, optimizing performance, UX, and scalability."
      },
      exp2: {
        company:        "German AutoTec",
        role:           "Co-Founder & CEO",
        dateRange:      "Jan 2021 - May 2024 | Addis Ababa, Ethiopia",
        desc1:          "Launched and grew a mid-size Mercedes-Benz repair shop in Addis Ababa, employing 10 staff members.",
        desc2:          "Managed financial operations, marketing strategies, and human resources to ensure business growth and efficiency.",
        desc3:          "Provided technical advisory services and handled international customer service to maintain high customer satisfaction.",
        desc4:          "Led the expansion into vehicle detailing services in 2023, resulting in a 35% increase in revenue."
      },
      exp3: {
        company:        "Chila",
        role:           "Shareholder & Co-owner",
        dateRange:      "Jul 2021 - Apr 2024 | Addis Ababa, Ethiopia",
        desc1:          "Assisted in the development of a dog-food and pet shop brand in Addis Ababa.",
        desc2:          "Contributed to daily operations and managed store activities to ensure efficient and effective service."
      },
      exp4: {
        company:        "Inity Lounge",
        role:           "Co-Owner & Manager",
        dateRange:      "Jan 2019 - Jul 2020 | Addis Ababa, Ethiopia",
        desc1:          "Conceptualized and launched a successful lounge and restaurant.",
        desc2:          "Managed daily operations, finances, and marketing to ensure efficient functioning and profitability.",
        desc3:          "Ceased operations due to the impact of the COVID-19 pandemic."
      },
      softSkillsTitle:  "Soft Skills",
      languagesTitle:   "Languages",
      languagesList: {
        german:        "German",
        spanish:       "Spanish",
        english:       "English",
        amharic:       "Amharic",
        italian:       "Italian"
      },
      skillsSectionTitle: "Skills",

    softSkillsList: {
    reliability:        "Reliability",
    attentionToDetail:  "Attention to Detail",
    professionalism:    "Professionalism",
    adaptability:       "Adaptability",
    problemSolving:     "Problem Solving",
    multicultural:      "Multicultural"
  },

    },

    contact: {
      title:           "Contact Me",
      nameLabel:       "Name",
      emailLabel:      "Email",
      messageLabel:    "Message",
      namePlaceholder: "Enter your Name",
      emailPlaceholder:"Enter your Email",
      messagePlaceholder:"Type your Message here",
      sendButton:      "Send Message",
      errors: {
        allFields:    "All fields are required.",
        invalidEmail: "Please enter a valid email address.",
        sending:      "Sending message...",
        success:      "Message sent successfully! 🎉",
        failure:      "Failed to send message. Please try again."
      }
    },

    projects: {
      title:     "Projects",
      viewMore:  "View more",
      snaptask: {
        title:       "Snaptask",
        type:        "Fullstack Website",
        description: "SnapTask is a full-stack SaaS application that leverages QR code technology for efficient task management. Its intuitive admin dashboard and mobile interface work together to deliver an innovative solution for managing tasks in real time.",
        tech:        ["React", "NodeJS", "Mongo DB", "Express", "OpenAI", "AWS"],
        details: {
          overviewTitle:         "Overview",
          overviewPara1:         "SnapTask is a versatile Full-stack SaaS platform engineered to streamline task management through innovative QR code technology. Built with the MERN stack—MongoDB, Express, React, and Node.js—along with Vite and Tailwind CSS, this project showcases my ability to develop robust, modern web applications from the ground up.",
          overviewPara2:         "Developed in collaboration with a team at WBS Coding School, SnapTask demonstrates a modern, real-world solution for task management.",
          keyImplTitle:          "Key Implementations:",
          implementations: {
            qrIntegration:          {
              label: "QR Code Integration:",
              text:  "Quickly access and update tasks by scanning codes."
            },
            adminDashboard:        {
              label: "Comprehensive Admin Dashboard:",
              text:  "Manage areas, tasks, and user roles with real-time insights."
            },
            mobileInterface:       {
              label: "Mobile-Optimized Interface:",
              text:  "Seamlessly manage tasks on the go."
            },
            chatbotIntegration:    {
              label: "OpenAI Chatbot Integration:",
              text:  "Enhance user interaction with data analysis and query responses."
            },
            backendArchitecture:   {
              label: "Robust Backend Architecture:",
              text:  "Secure, scalable RESTful APIs with role-based permissions."
            },
            modularCode:           {
              label: "Modular Code:",
              text:  "Reusable components and thorough documentation for future enhancements."
            }
          },
          liveDemoTitle:         "Live Demo & Codebase",
          liveDemoInstructions:  "Live Demo can be tested with following credentials:",
          credentials: {
            usernameLabel: "Username:",
            passwordLabel: "Password:",
            username:      "example@test.com",
            password:      "password1234"
          },
          credentialsNote:      "(Login might take a minute if the Backend server is sleeping, please be patient)"
        }
      },
      edelstein: {
        title:       "Edelstein Bibliothek",
        type:        "Fullstack Website",
        description: "A website created for a gemstone seller to showcase and manage their inventory. This platform allows users to explore gemstones using advanced filters, view detailed properties, and learn more about their healing and spiritual benefits.",
        tech:        ["React", "NodeJS", "Mongo DB", "Express","AWS"],
        details: {
          overviewTitle:        "Overview",
          overviewPara1:        "Edelstein Bibliothek is a full-stack MERN application created for a gemstone seller to showcase and manage their inventory. The platform allows users to explore a rich gemstone library using advanced filters, view detailed properties, and learn about the healing and spiritual benefits of each gemstone.",
          overviewPara2:        "The site features an intuitive design with reusable React components and responsive layouts, ensuring a seamless user experience. For administrators, a dedicated admin panel allows dynamic creation, updating, and deletion of gemstone entries.",
          keyImplTitle:         "Key Implementations:",
          implementations: {
            advancedFiltering: {
              label: "Advanced Filtering:",
              text:  "Easily refine gemstone searches to quickly find desired properties."
            },
            dynamicAdminPanel: {
              label: "Dynamic Admin Panel:",
              text:  "Administrators can seamlessly create, update, and delete gemstone entries."
            },
            responsiveDesign: {
              label: "Responsive Design:",
              text:  "Enjoy a seamless experience on any device."
            },
            modularCode: {
              label: "Modular Code:",
              text:  "Reusable components and clear documentation ensure maintainability."
            }
          },
          liveDemoTitle:        "Live Demo & Codebase",
          liveDemoInstructions: "Test the admin panel at",
          credentials: {
            usernameLabel: "Username:",
            passwordLabel: "Password:",
            username:      "admin@example.com",
            password:      "password1234"
          },
          credentialsNote:      "(Login might take a minute if the Backend server is sleeping, please be patient)"
        }
      },
  
      "pokemon-battle": {
        title:       "Pokemon Battle Game",
        type:        "Fullstack Website",
        description: "A Pokémon battle game page where players can choose Pokémon, battle opponents, and see real-time health updates.",
        tech:        ["React", "NodeJS", "Mongo DB", "Express"],
        details: {
          overviewTitle:        "Overview",
          overviewPara1:        "Pokemon-battle Game is an engaging full-stack MERN application built as a team project. It combines the excitement of Pokémon battles with modern web technologies, allowing players to choose Pokémon, battle opponents, and view real-time health updates.",
          overviewPara2:        "The project uses the Pokémon API to fetch data and a Node.js backend for score tracking and maintaining a dynamic leaderboard, offering an interactive and competitive experience.",
          keyImplTitle:         "Key Implementations:",
          implementations: {
            viteIntegration:       { label: "Vite Integration:",             text: "Experience fast builds and hot module replacement." },
            tailwindConfig:        { label: "Tailwind CSS Configuration:",    text: "Leverage a utility-first framework for rapid and responsive design." },
            dynamicLeaderboard:    { label: "Dynamic Leaderboard:",           text: "Real-time score tracking and competitive rankings." },
            interactiveBattles:    { label: "Interactive Battles:",           text: "Engage with the Pokémon API for immersive, real-time battles." },
            customizableThemes:    { label: "Customizable Themes:",           text: "Personalize the interface for a unique user experience." }
          },
          liveDemoTitle:        "Live Demo & Codebase",
          liveDemoNote:         "Challenge yourself and see how you stack up against other trainers in real-time battles!"
        }
      },
      "car-care-ai": {
        title:       "Car Care Ai",
        type:        "Fullstack Website (Work in Progress)",
        description: "CarCare AI is a cutting-edge platform that uses artificial intelligence to simplify car diagnostics. Users can describe their car issues, and the AI provides quick, reliable solutions and troubleshooting advice.",
        tech:        ["React", "NodeJS", "Mongo DB", "Express", "OpenAI"],
        details: {
          overviewTitle:        "Overview",
          overviewPara1:        "CarCare AI is a cutting-edge platform designed to simplify car diagnostics using artificial intelligence. Users can describe car issues, and the AI provides quick, reliable troubleshooting advice and service reminders. Although still in development, the platform aims to become your personal AI mechanic.",
          overviewPara2:        "Powered by an extensive Node.js backend with OpenAI integration, CarCare AI also offers features such as car detail storage, service history tracking, and personalized recommendations through a daily free token system.",
          keyImplTitle:         "Key Implementations:",
          implementations: {
            robustApi: {
              label:           "Robust API:",
              text:            "Efficiently handle diagnostic queries and service data through a scalable backend."
            },
            userAuth: {
              label:           "User Authentication:",
              text:            "Secure login with JWT and robust input validation."
            },
            openaiIntegration: {
              label:           "OpenAI Integration:",
              text:            "Get intelligent diagnostic advice and troubleshooting support."
            },
            serviceHistory: {
              label:           "Service History & Reminders:",
              text:            "Track maintenance and receive personalized reminders."
            }
          },
          codebaseTitle:        "Codebase",
          codebaseNote:         "CarCare AI is still under development. Please check back later for a live demo."
        }
      }
    },

    footer: {
      contactInfo: {
        title: "Contact Information"
      },
      links: {
        title: "Links",
        about: "About",
        contact: "Contact",
        skills: "Skills",
        projects: "Projects"
      },
      requestCV: {
        placeholder: "Your-email@gmail.com",
        button: "Request My CV"
      },
      toast: {
        invalidEmail: "Please enter a valid email address.",
        sending: "Sending your CV…",
        success: "Check your inbox for my CV! 🎉",
        failure: "Failed to send. Please try again."
      },
      disclaimer: {
        prefix: "Copyright",
        by: "Portfolio Website by"
      }
    },
    
  },
  de: {
    navbar: {
      about:         "Über mich",
      skills:        "Fähigkeiten",
      projects:      "Projekte",
      contact:       "Kontakt",
      contactButton: "Kontakt"
    },
    home: {
      greetings:      "Grüße 👋🏽",
      intro:          "Ich bin",
      name:           "Sebastian Schoeneberger",
      jobTitlePrefix: "Und ich bin ein",
      jobTitle:       "Full-Stack Entwickler",
      description:    "Mit einem Hintergrund in Mechatronik und Betriebswirtschaft kombiniere ich technisches Fachwissen, Problemlösungskompetenz und eine multikulturelle Perspektive, um wirkungsvolle Weblösungen zu schaffen.",
      callToAction:   "Lass uns Lösungen bauen, die einen Unterschied machen!",
      downloadCV:     "Lebenslauf herunterladen"
    },
    aboutMe: {
      title:            "Über mich",
      subtitle:         "Lerne mich kennen",
      intro1:           "👋🏽 Mein Name ist Sebastian Schoeneberger und ich bin Junior Full-Stack Webentwickler mit einem vielfältigen Hintergrund und Leidenschaft für Technologie.",
      intro2: {
        part1:          "Ich habe meine berufliche Laufbahn bei ",
        mercedes:       "Mercedes-Benz",
        part2:          " im Automobilsektor begonnen, bin dann in die ",
        entrepreneurship:"Unternehmerschaft",
        part3:          " mit mehreren Unternehmen gewechselt und freue mich nun, neue Möglichkeiten in der ",
        techIndustry:   "Tech-Branche",
        part4:          " zu erkunden."
      },
      setsTitle:        "Was mich auszeichnet",
      sets: {
        set1_label:      "Technisches Fachwissen:",
        set1:            "Meine Erfahrung in der Fahrzeugdiagnose bei Mercedes-Benz hat meine Problemlösungsfähigkeiten geschärft, die ich jetzt beim Programmieren einsetze. Ich arbeite mit JavaScript, React, Node.js, Express, SQL, MongoDB und mehr.",
        set2_label:      "Unternehmerische Denkweise:",
        set2:            "Sechs Jahre Unternehmensführung haben mir Expertise in Marketing, Finanzen und Führung gegeben—was mir hilft, Webanwendungen zu entwickeln, die echte Geschäftsanforderungen erfüllen.",
        set3_label:      "Mehrsprachig & Anpassungsfähig:",
        set3:            "Fließend in Deutsch, Spanisch und Englisch mit globaler Erfahrung auf drei Kontinenten; ich gedeihe in vielfältigen Umgebungen und kommuniziere effektiv.",
        set4_label:      "Detailorientiert & Zuverlässig:",
        set4:            "Ich setze hohe Standards, bleibe der Qualität verpflichtet und stelle sicher, dass jedes Projekt effizient und termingerecht abgeschlossen wird."
      },
      techStackTitle:   "Tech-Stack",
      educationTitle:   "Ausbildung",
      timeline1: {
        date:           "Okt 2024",
        title:          "Frontend-Entwicklungstraining",
        org:            "Kreativstrom",
        desc1:          "Praxisorientiertes Training in HTML, CSS und JavaScript.",
        desc2:          "Intensives Frontend-Training mit fachkundiger Anleitung."
      },
      timeline2: {
        date:           "Mai 2024",
        title:          "Full-Stack App- & Web-Entwicklungs-Bootcamp",
        org:            "WBS Coding School / Berlin",
        desc1:          "Abschluss eines 15-wöchigen hybriden Vollzeit-Bootcamps in Full-Stack Webentwicklung.",
        desc2:          "Erworbenes Fachwissen in HTML, CSS, JavaScript, React, Node.js, Express und SQL durch praktische Projekte.",
        desc3:          "Teilnahme an Präsenzsitzungen für eine kollaborative Arbeitsumgebung."
      },
      timeline3: {
        date:           "Sep 2018",
        title:          "Fachkraft für Automatisierungstechnik",
        org:            "Mercedes-Benz Group / Frankfurt",
        desc1:          "Formale Berufsausbildung",
        desc2:          "Diagnose und Behebung technischer Probleme mit fortschrittlichen Werkzeugen.",
        desc3:          "Inspektion, Wartung und Reparatur von Fahrzeugkomponenten."
      },
      timeline4: {
        date:           "Jan 2010",
        title:          "International Baccalaureate (IB)",
        org:            "German Embassy School Addis Abeba",
        desc1:          "International Baccalaureate: Ein international anerkanntes zweisprachiges Schulabschlusszeugnis."
      },
      experienceTitle:  "Erfahrung",
      exp1: {
        company:        "Selbstständig",
        role:           "Full-Stack Webentwickler Freelancer",
        dateRange:      "Sep 2024 - Heute | Remote Deutschland & Äthiopien",
        desc1:          "Entwicklung und Bereitstellung responsiver Full-Stack Webanwendungen mit React und Node.js.",
        desc2:          "Zusammenarbeit mit Kunden für maßgeschneiderte Lösungen, Optimierung von Leistung, UX und Skalierbarkeit."
      },
      exp2: {
        company:        "German AutoTec",
        role:           "Mitgründer & CEO",
        dateRange:      "Jan 2021 - Mai 2024 | Addis Abeba, Äthiopien",
        desc1:          "Aufbau und Wachstum einer mittelgroßen Mercedes-Benz-Werkstatt mit 10 Mitarbeitern.",
        desc2:          "Leitung von Finanzen, Marketing und Personal für Wachstum und Effizienz.",
        desc3:          "Technische Beratung und internationaler Kundenservice für hohe Kundenzufriedenheit.",
        desc4:          "Erweiterung um Fahrzeugaufbereitung in 2023, +35 % Umsatz."
      },
      exp3: {
        company:        "Chila",
        role:           "Gesellschafter & Miteigentümer",
        dateRange:      "Jul 2021 - Apr 2024 | Addis Abeba, Äthiopien",
        desc1:          "Mitwirkung beim Aufbau einer Hunde- und Tiernahrungsmarke in Addis Abeba.",
        desc2:          "Tägliche Geschäftsführung und Filialmanagement für effizienten Service."
      },
      exp4: {
        company:        "Inity Lounge",
        role:           "Miteigentümer & Manager",
        dateRange:      "Jan 2019 - Jul 2020 | Addis Abeba, Äthiopien",
        desc1:          "Konzeption und Eröffnung einer erfolgreichen Lounge und eines Restaurants.",
        desc2:          "Betriebsführung, Finanzen und Marketing für Rentabilität.",
        desc3:          "Schließung aufgrund der COVID-19-Pandemie."
      },
      softSkillsTitle:  "Soft Skills",
      languagesTitle:   "Sprachen",
      languagesList: {
        german:        "Deutsch",
        spanish:       "Spanisch",
        english:       "Englisch",
        amharic:       "Amharisch",
        italian:       "Italienisch"
      },
      skillsSectionTitle: "Fähigkeiten",
      softSkillsList: {
        reliability:        "Zuverlässigkeit",
        attentionToDetail:  "Detailgenauigkeit",
        professionalism:    "Professionalität",
        adaptability:       "Anpassungsfähigkeit",
        problemSolving:     "Problemlösung",
        multicultural:      "Multikulturell"
      },
    },

    contact: {
      title:           "Kontakt",
      nameLabel:       "Name",
      emailLabel:      "E-Mail",
      messageLabel:    "Nachricht",
      namePlaceholder: "Geben Sie Ihren Namen ein",
      emailPlaceholder:"Geben Sie Ihre E-Mail-Adresse ein",
      messagePlaceholder:"Geben Sie hier Ihre Nachricht ein",
      sendButton:      "Nachricht senden",
      errors: {
        allFields:    "Alle Felder sind erforderlich.",
        invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        sending:      "Nachricht wird gesendet...",
        success:      "Nachricht erfolgreich gesendet! 🎉",
        failure:      "Senden der Nachricht fehlgeschlagen. Bitte versuchen Sie es erneut."
      }
    },

    projects: {
      title:     "Projekte",
      viewMore:  "Mehr anzeigen",
      snaptask: {
        title:       "Snaptask",
        type:        "Fullstack-Website",
        description: "SnapTask ist eine Full-Stack-SaaS-Anwendung, die QR-Code-Technologie für effizientes Aufgabenmanagement nutzt. Das intuitive Admin-Dashboard und die mobile Oberfläche arbeiten zusammen, um eine innovative Lösung für das Echtzeit-Management von Aufgaben zu bieten.",
        tech:        ["React", "NodeJS", "Mongo DB", "Express", "OpenAI", "AWS"],
        details: {
          overviewTitle:         "Überblick",
          overviewPara1:         "SnapTask ist eine vielseitige Full-Stack-SaaS-Plattform, die entwickelt wurde, um das Aufgabenmanagement mittels innovativer QR-Code-Technologie zu optimieren. Gebaut mit dem MERN-Stack—MongoDB, Express, React und Node.js—sowie Vite und Tailwind CSS, zeigt dieses Projekt meine Fähigkeit, robuste, moderne Webanwendungen von Grund auf zu entwickeln.",
          overviewPara2:         "In Zusammenarbeit mit einem Team der WBS Coding School entwickelt, demonstriert SnapTask eine moderne, praxisnahe Lösung für das Aufgabenmanagement.",
          keyImplTitle:          "Implementierungen:",
          implementations: {
            qrIntegration:          {
              label: "QR-Code-Integration:",
              text:  "Schneller Zugriff und Aktualisierung von Aufgaben durch Scannen von Codes."
            },
            adminDashboard:        {
              label: "Umfassendes Admin-Dashboard:",
              text:  "Verwalten Sie Bereiche, Aufgaben und Benutzerrollen mit Echtzeit-Einblicken."
            },
            mobileInterface:       {
              label: "Mobil optimierte Oberfläche:",
              text:  "Verwalten Sie Aufgaben nahtlos unterwegs."
            },
            chatbotIntegration:    {
              label: "OpenAI-Chatbot-Integration:",
              text:  "Verbessern Sie die Benutzerinteraktion mit Datenanalyse und Antwortmöglichkeiten."
            },
            backendArchitecture:   {
              label: "Robuste Backend-Architektur:",
              text:  "Sichere, skalierbare REST-APIs mit rollenbasierten Berechtigungen."
            },
            modularCode:           {
              label: "Modularer Code:",
              text:  "Wiederverwendbare Komponenten und ausführliche Dokumentation für künftige Erweiterungen."
            }
          },
          liveDemoTitle:         "Live-Demo & Codebasis",
          liveDemoInstructions:  "Die Live-Demo kann mit folgenden Zugangsdaten getestet werden:",
          credentials: {
            usernameLabel: "Benutzername:",
            passwordLabel: "Passwort:",
            username:      "example@test.com",
            password:      "password1234"
          },
          credentialsNote:      "(Der Login kann eine Minute dauern, wenn der Backend-Server schläft, bitte haben Sie Geduld.)"
        }
      },
      edelstein: {
        title:       "Edelstein Bibliothek",
        type:        "Fullstack-Website",
        description: "Edelstein Bibliothek ist eine Fullstack-MERN-Anwendung für einen Edelsteinhändler, um sein Inventar zu präsentieren und zu verwalten. Die Plattform ermöglicht Nutzern, eine umfangreiche Edelsteinbibliothek mit erweiterten Filtern zu durchsuchen, detaillierte Eigenschaften anzuzeigen und mehr über deren heilende und spirituelle Vorteile zu erfahren.",
        tech:        ["React", "NodeJS", "Mongo DB", "Express", "AWS"],
        details: {
          overviewTitle:        "Überblick",
          overviewPara1:        "Edelstein Bibliothek ist eine Fullstack-MERN-Anwendung für einen Edelsteinhändler, um sein Inventar zu präsentieren und zu verwalten. Die Plattform ermöglicht Nutzern, eine umfangreiche Edelsteinbibliothek mit erweiterten Filtern zu durchsuchen, detaillierte Eigenschaften anzuzeigen und mehr über deren heilende und spirituelle Vorteile zu erfahren.",
          overviewPara2:        "Die Seite bietet ein intuitives Design mit wiederverwendbaren React-Komponenten und responsiven Layouts für eine nahtlose Benutzererfahrung. Für Administratoren ermöglicht ein dediziertes Admin-Panel das dynamische Erstellen, Aktualisieren und Löschen von Edelstein-Einträgen.",
          keyImplTitle:         "Wesentliche Implementierungen:",
          implementations: {
            advancedFiltering: {
              label: "Erweiterte Filterung:",
              text:  "Verfeinern Sie Edelsteinsuchen, um gewünschte Eigenschaften schnell zu finden."
            },
            dynamicAdminPanel: {
              label: "Dynamisches Admin-Panel:",
              text:  "Administratoren können Edelstein-Einträge nahtlos erstellen, aktualisieren und löschen."
            },
            responsiveDesign: {
              label: "Responsives Design:",
              text:  "Erleben Sie eine durchgängige Nutzung auf jedem Gerät."
            },
            modularCode: {
              label: "Modularer Code:",
              text:  "Wiederverwendbare Komponenten und klare Dokumentation gewährleisten Wartbarkeit."
            }
          },
          liveDemoTitle:        "Live-Demo & Codebasis",
          liveDemoInstructions: "Testen Sie das Admin-Panel unter",
          credentials: {
            usernameLabel: "Benutzername:",
            passwordLabel: "Passwort:",
            username:      "admin@example.com",
            password:      "password1234"
          },
          credentialsNote:      "(Der Login kann eine Minute dauern, wenn der Backend-Server schläft; bitte haben Sie Geduld.)"
        }
      },
      
      "pokemon-battle": {
        title:       "Pokemon Battle Game",
        type:        "Fullstack-Website",
        description: "Eine Pokémon-Battle-Seite, auf der Spieler Pokémon auswählen, gegen Gegner kämpfen und Echtzeit-Gesundheitsbalken sehen können.",
        tech:        ["React", "NodeJS", "Mongo DB", "Express"],
        details: {
          overviewTitle:        "Überblick",
          overviewPara1:        "Pokemon-Battle Game ist eine packende Full-Stack-MERN-Anwendung, die in einem Teamprojekt entwickelt wurde. Sie verbindet die Spannung von Pokémon-Kämpfen mit modernen Webtechnologien und ermöglicht Spielern, Pokémon auszuwählen, gegen Gegner anzutreten und Live-Gesundheitsanzeigen zu sehen.",
          overviewPara2:        "Das Projekt nutzt die Pokémon-API zum Abrufen von Daten und ein Node.js-Backend für das Punktezählen sowie die Pflege einer dynamischen Bestenliste, um ein interaktives und wettbewerbsorientiertes Erlebnis zu bieten.",
          keyImplTitle:         "Wesentliche Implementierungen:",
          implementations: {
            viteIntegration:       { label: "Vite-Integration:",              text: "Schnelle Builds und Hot Module Replacement." },
            tailwindConfig:        { label: "Tailwind CSS-Konfiguration:",     text: "Verwenden Sie ein Utility-First-Framework für schnelle und responsive Gestaltung." },
            dynamicLeaderboard:    { label: "Dynamische Bestenliste:",        text: "Echtzeit-Punktestand und wettbewerbsfähige Ranglisten." },
            interactiveBattles:    { label: "Interaktive Kämpfe:",            text: "Interaktion mit der Pokémon-API für immersive, Echtzeit-Kämpfe." },
            customizableThemes:    { label: "Anpassbare Designs:",            text: "Passen Sie die Oberfläche für ein einzigartiges Nutzererlebnis an." }
          },
          liveDemoTitle:        "Live-Demo & Codebasis",
          liveDemoNote:         "Fordere dich selbst heraus und finde heraus, wie du in Echtzeitkämpfen gegen andere Trainer abschneidest!"
        }
      },
      "car-care-ai": {
        title:       "Car Care Ai",
        type:        "Fullstack-Website (in Arbeit)",
        description: "CarCare AI ist eine Plattform, die künstliche Intelligenz nutzt, um Autodiagnosen zu vereinfachen. Nutzer beschreiben ihre Fahrzeugprobleme und die KI liefert schnelle, verlässliche Lösungen und Tipps zur Fehlerbehebung.",
        tech:        ["React", "NodeJS", "Mongo DB", "Express", "OpenAI"],
        details: {
          overviewTitle:        "Überblick",
          overviewPara1:        "CarCare AI ist eine hochmoderne Plattform, die entwickelt wurde, um Fahrzeugdiagnosen mithilfe künstlicher Intelligenz zu vereinfachen. Nutzer können Fahrzeugprobleme beschreiben, und die KI liefert schnelle, zuverlässige Fehlersuchehinweise und Serviceerinnerungen. Obwohl sich die Plattform noch in der Entwicklung befindet, soll sie Ihr persönlicher KI-Mechaniker werden.",
          overviewPara2:        "Angetrieben von einem umfangreichen Node.js-Backend mit OpenAI-Integration bietet CarCare AI zudem Funktionen wie Fahrzeuginformationsspeicherung, Wartungshistorie-Tracking und personalisierte Empfehlungen über ein tägliches Gratis-Token-System.",
          keyImplTitle:         "Wesentliche Implementierungen:",
          implementations: {
            robustApi: {
              label:           "Robuste API:",
              text:            "Diagnoseanfragen und Servicedaten effizient über ein skalierbares Backend abwickeln."
            },
            userAuth: {
              label:           "Benutzerauthentifizierung:",
              text:            "Sicherer Login mit JWT und robuster Eingabevalidierung."
            },
            openaiIntegration: {
              label:           "OpenAI-Integration:",
              text:            "Intelligente Diagnosehinweise und Unterstützung bei der Fehlersuche erhalten."
            },
            serviceHistory: {
              label:           "Wartungshistorie & Erinnerungen:",
              text:            "Wartungen verfolgen und personalisierte Erinnerungen erhalten."
            }
          },
          codebaseTitle:        "Codebasis",
          codebaseNote:         "CarCare AI befindet sich noch in der Entwicklung. Bitte schauen Sie später für eine Live-Demo vorbei."
        }
      }
    },

    footer: {
      contactInfo: {
        title: "Kontaktinformationen"
      },
      links: {
        title: "Links",
        about: "Über mich",
        contact: "Kontakt",
        skills: "Fähigkeiten",
        projects: "Projekte"
      },
      requestCV: {
        placeholder: "Ihre-Email@gmail.com",
        button: "Fordere meinen Lebenslauf an"
      },
      toast: {
        invalidEmail: "Bitte eine gültige E-Mail-Adresse eingeben.",
        sending: "Lebenslauf wird gesendet…",
        success: "Prüfe deinen Posteingang! 🎉",
        failure: "Fehler beim Senden. Bitte erneut versuchen."
      },
      disclaimer: {
        prefix: "Urheberrecht",
        by: "Portfolio Website von"
      }
    }
  },

  es: {
    navbar: {
      about:         "Sobre mí",
      skills:        "Habilidades",
      projects:      "Proyectos",
      contact:       "Contacto",
      contactButton: "Contacto"
    },
    home: {
      greetings:      "Saludos 👋🏽",
      intro:          "Soy",
      name:           "Sebastian Schoeneberger",
      jobTitlePrefix: "Y soy un",
      jobTitle:       "Desarrollador Full-Stack",
      description:    "Con un background en mecatrónica y gestión empresarial, combino experiencia técnica, resolución de problemas y una perspectiva multicultural para crear soluciones web impactantes.",
      callToAction:   "Construyamos soluciones que marquen la diferencia!",
      downloadCV:     "Descargar CV"
    },
    aboutMe: {
      title:            "Sobre mí",
      subtitle:         "Conóceme",
      intro1:           "👋🏽 Mi nombre es Sebastian Schoeneberger y soy un desarrollador web full-stack junior con un trasfondo diverso y pasión por la tecnología.",
      intro2: {
        part1:          "Comencé mi trayectoria profesional en ",
        mercedes:       "Mercedes-Benz",
        part2:          " en el sector automotriz, pasé a ",
        entrepreneurship:"emprendimiento",
        part3:          " con múltiples negocios y ahora estoy emocionado de explorar nuevas oportunidades en la ",
        techIndustry:   "industria tecnológica",
        part4:          "."
      },
      setsTitle:        "Lo que me distingue",
      sets: {
        set1_label:      "Experiencia Técnica:",
        set1:            "Mi experiencia en diagnóstico de vehículos en Mercedes-Benz perfeccionó mis habilidades de resolución de problemas, que ahora aplico a la programación. Trabajo con JavaScript, React, Node.js, Express, SQL, MongoDB y más.",
        set2_label:      "Mentalidad Emprendedora:",
        set2:            "Seis años gestionando negocios me dieron experiencia en marketing, finanzas y liderazgo—ayudándome a construir aplicaciones web que satisfacen necesidades empresariales.",
        set3_label:      "Multilingüe & Adaptable:",
        set3:            "Dominio de alemán, español e inglés con experiencia global en tres continentes; prospero en entornos diversos y comunico eficazmente.",
        set4_label:      "Orientado al Detalle & Fiable:",
        set4:            "Mantengo altos estándares, me comprometo con la calidad y garantizo que cada proyecto se complete de manera eficiente y puntual."
      },
      techStackTitle:   "Tech Stack",
      educationTitle:   "Educación",
      timeline1: {
        date:           "Oct 2024",
        title:          "Entrenamiento de Desarrollo Frontend",
        org:            "Kreativstrom",
        desc1:          "Programa práctico en HTML, CSS y JavaScript.",
        desc2:          "Entrenamiento intensivo de frontend con orientación experta."
      },
      timeline2: {
        date:           "May 2024",
        title:          "Bootcamp Full-Stack",
        org:            "WBS Coding School / Berlín",
        desc1:          "Completé un bootcamp híbrido de 15 semanas en desarrollo web full-stack.",
        desc2:          "Adquirí experiencia en HTML, CSS, JavaScript, React, Node.js, Express y SQL con proyectos prácticos.",
        desc3:          "Participé en sesiones presenciales para un entorno de trabajo colaborativo."
      },
      timeline3: {
        date:           "Sep 2018",
        title:          "Técnico en Mecatrónica Automotriz",
        org:            "Mercedes-Benz Group / Frankfurt",
        desc1:          "Formación profesional formal.",
        desc2:          "Diagnóstico y resolución de problemas técnicos con herramientas avanzadas.",
        desc3:          "Inspección, mantenimiento y reparación de componentes de vehículos."
      },
      timeline4: {
        date:           "Ene 2010",
        title:          "Bachillerato Internacional (IB)",
        org:            "German Embassy School Addis Abeba",
        desc1:          "Bachillerato Internacional: Un certificado escolar bilingüe reconocido mundialmente."
      },
      experienceTitle:  "Experiencia",
      exp1: {
        company:        "Autónomo",
        role:           "Desarrollador Web Full-Stack Freelance",
        dateRange:      "Sep 2024 - Presente | Remoto Alemania & Etiopía",
        desc1:          "Desarrollo y despliegue de aplicaciones web full-stack responsivas con React y Node.js.",
        desc2:          "Colaboración con clientes para soluciones a medida, optimizando rendimiento, UX y escalabilidad."
      },
      exp2: {
        company:        "German AutoTec",
        role:           "Co-fundador & CEO",
        dateRange:      "Ene 2021 - May 2024 | Addis Abeba, Etiopía",
        desc1:          "Lanzamiento y crecimiento de un taller Mercedes-Benz mediano con 10 empleados.",
        desc2:          "Gestión financiera, marketing y RR. HH. para crecimiento y eficiencia.",
        desc3:          "Asesoría técnica y servicio al cliente internacional para alta satisfacción.",
        desc4:          "Expansión a detallado de vehículos en 2023, +35 % ingresos."
      },
      exp3: {
        company:        "Chila",
        role:           "Socio & Copropietario",
        dateRange:      "Jul 2021 - Abr 2024 | Addis Abeba, Etiopía",
        desc1:          "Apoyo al desarrollo de una marca de comida para mascotas en Addis Abeba.",
        desc2:          "Gestión diaria de operaciones y actividades de tienda para servicio eficiente."
      },
      exp4: {
        company:        "Inity Lounge",
        role:           "Copropietario & Gerente",
        dateRange:      "Ene 2019 - Jul 2020 | Addis Abeba, Etiopía",
        desc1:          "Conceptualización y apertura de una lounge y restaurante exitosos.",
        desc2:          "Gestión de operaciones, finanzas y marketing para rentabilidad.",
        desc3:          "Cese de operaciones por la pandemia de COVID-19."
      },
      softSkillsTitle:  "Habilidades Blandas",
      languagesTitle:   "Idiomas",
      languagesList: {
        german:        "Alemán",
        spanish:       "Español",
        english:       "Inglés",
        amharic:       "Amárico",
        italian:       "Italiano"
      },
      skillsSectionTitle: "Habilidades",
      softSkillsList: {
        reliability:        "Fiabilidad",
        attentionToDetail:  "Atención al Detalle",
        professionalism:    "Profesionalismo",
        adaptability:       "Adaptabilidad",
        problemSolving:     "Resolución de Problemas",
        multicultural:      "Multicultural"
      },
    },

    contact: {
      title:           "Contáctame",
      nameLabel:       "Nombre",
      emailLabel:      "Correo electrónico",
      messageLabel:    "Mensaje",
      namePlaceholder: "Ingrese su nombre",
      emailPlaceholder:"Ingrese su correo electrónico",
      messagePlaceholder:"Escribe tu mensaje aquí",
      sendButton:      "Enviar mensaje",
      errors: {
        allFields:    "Todos los campos son obligatorios.",
        invalidEmail: "Por favor ingrese una dirección de correo electrónico válida.",
        sending:      "Enviando mensaje...",
        success:      "¡Mensaje enviado con éxito! 🎉",
        failure:      "Error al enviar el mensaje. Por favor inténtelo de nuevo."
      }
    },

    projects: {
      title:     "Proyectos",
      viewMore:  "Ver más",
      snaptask: {
        title:       "Snaptask",
        type:        "Fullstack Website",
        description: "SnapTask es una aplicación SaaS full-stack que aprovecha la tecnología de códigos QR para una gestión de tareas eficiente. Su panel de administración intuitivo y su interfaz móvil trabajan juntos para ofrecer una solución innovadora en tiempo real.",
        tech:        ["React", "NodeJS", "Mongo DB", "Express", "OpenAI", "AWS"],
        details: {
          overviewTitle:         "Resumen",
          overviewPara1:         "SnapTask es una plataforma SaaS Full-stack versátil diseñada para simplificar la gestión de tareas mediante tecnología de códigos QR. Construida con el stack MERN—MongoDB, Express, React y Node.js—junto con Vite y Tailwind CSS, este proyecto demuestra mi capacidad para desarrollar aplicaciones web modernas y robustas desde cero.",
          overviewPara2:         "Desarrollado en colaboración con un equipo de WBS Coding School, SnapTask demuestra una solución moderna y real para la gestión de tareas.",
          keyImplTitle:          "Implementaciones clave:",
          implementations: {
            qrIntegration:          {
              label: "Integración de código QR:",
              text:  "Accede y actualiza tareas rápidamente escaneando códigos."
            },
            adminDashboard:        {
              label: "Panel de administración completo:",
              text:  "Gestiona áreas, tareas y roles de usuario con información en tiempo real."
            },
            mobileInterface:       {
              label: "Interfaz optimizada para móvil:",
              text:  "Gestiona tareas sin problemas mientras te desplazas."
            },
            chatbotIntegration:    {
              label: "Integración de chatbot OpenAI:",
              text:  "Mejora la interacción del usuario con análisis de datos y respuestas a consultas."
            },
            backendArchitecture:   {
              label: "Arquitectura de backend robusta:",
              text:  "APIs REST seguras y escalables con permisos basados en roles."
            },
            modularCode:           {
              label: "Código modular:",
              text:  "Componentes reutilizables y documentación completa para futuras mejoras."
            }
          },
          liveDemoTitle:         "Demo en vivo y código fuente",
          liveDemoInstructions:  "La demo en vivo se puede probar con las siguientes credenciales:",
          credentials: {
            usernameLabel: "Nombre de usuario:",
            passwordLabel: "Contraseña:",
            username:      "example@test.com",
            password:      "password1234"
          },
          credentialsNote:      "(El inicio de sesión puede tardar un minuto si el servidor backend está durmiendo; por favor, ten paciencia.)"
        }
      },
      edelstein: {
        title:       "Edelstein Bibliothek",
        type:        "Sitio web fullstack",
        description: "Una aplicación MERN full-stack creada para un vendedor de gemas que muestra y gestiona su inventario. La plataforma permite a los usuarios explorar una amplia biblioteca de gemas con filtros avanzados, ver propiedades detalladas y conocer los beneficios curativos y espirituales de cada gema.",
        tech:        ["React", "NodeJS", "Mongo DB", "Express", "AWS"],
        details: {
          overviewTitle:        "Resumen",
          overviewPara1:        "Edelstein Bibliothek es una aplicación MERN full-stack creada para un vendedor de gemas, que permite mostrar y gestionar su inventario. La plataforma facilita a los usuarios explorar una amplia biblioteca de gemas mediante filtros avanzados, ver propiedades detalladas y aprender sobre sus beneficios curativos y espirituales.",
          overviewPara2:        "El sitio cuenta con un diseño intuitivo, componentes React reutilizables y diseños responsivos para garantizar una experiencia de usuario fluida. Para los administradores, un panel de administración dedicado permite crear, actualizar y eliminar entradas de gemas de forma dinámica.",
          keyImplTitle:         "Implementaciones clave:",
          implementations: {
            advancedFiltering: {
              label: "Filtrado avanzado:",
              text:  "Refina fácilmente las búsquedas de gemas para encontrar rápidamente las propiedades deseadas."
            },
            dynamicAdminPanel: {
              label: "Panel de administración dinámico:",
              text:  "Los administradores pueden crear, actualizar y eliminar entradas de gemas sin complicaciones."
            },
            responsiveDesign: {
              label: "Diseño responsivo:",
              text:  "Disfruta de una experiencia fluida en cualquier dispositivo."
            },
            modularCode: {
              label: "Código modular:",
              text:  "Componentes reutilizables y documentación clara aseguran la mantenibilidad."
            }
          },
          liveDemoTitle:        "Demo en vivo y código fuente",
          liveDemoInstructions: "Prueba el panel de administración en",
          credentials: {
            usernameLabel: "Nombre de usuario:",
            passwordLabel: "Contraseña:",
            username:      "admin@example.com",
            password:      "password1234"
          },
          credentialsNote:      "(El inicio de sesión puede tardar un minuto si el servidor backend está inactivo; por favor, ten paciencia.)"
        }
      },
      
      "pokemon-battle": {
        title:       "Pokemon Battle Game",
        type:        "Fullstack Website",
        description: "Una página de batalla Pokémon donde los jugadores pueden elegir Pokémon, combatir oponentes y ver actualizaciones de vida en tiempo real.",
        tech:        ["React", "NodeJS", "Mongo DB", "Express"],
        details: {
          overviewTitle:        "Resumen",
          overviewPara1:        "Pokemon-battle Game es una aplicación MERN de pila completa atractiva desarrollada como proyecto de equipo. Combina la emoción de las batallas Pokémon con tecnologías web modernas, permitiendo a los jugadores elegir Pokémon, enfrentarse a oponentes y ver actualizaciones de salud en tiempo real.",
          overviewPara2:        "El proyecto utiliza la API de Pokémon para obtener datos y un backend de Node.js para el seguimiento de puntuaciones y el mantenimiento de una clasificación dinámica, ofreciendo una experiencia interactiva y competitiva.",
          keyImplTitle:         "Implementaciones Clave:",
          implementations: {
            viteIntegration:       { label: "Integración de Vite:",            text: "Experimenta compilaciones rápidas y reemplazo en caliente de módulos." },
            tailwindConfig:        { label: "Configuración de Tailwind CSS:",  text: "Aprovecha un framework utility-first para un diseño rápido y responsivo." },
            dynamicLeaderboard:    { label: "Clasificación Dinámica:",         text: "Seguimiento de puntuaciones en tiempo real y rankings competitivos." },
            interactiveBattles:    { label: "Batallas Interactivas:",          text: "Interactúa con la API de Pokémon para batallas inmersivas en tiempo real." },
            customizableThemes:    { label: "Temas Personalizables:",          text: "Personaliza la interfaz para una experiencia de usuario única." }
          },
          liveDemoTitle:        "Demo en Vivo & Código",
          liveDemoNote:         "¡Desafíate y comprueba cómo te comparas con otros entrenadores en batallas en tiempo real!"
        }
      },
      "car-care-ai": {
        title:       "Car Care Ai",
        type:        "Fullstack Website (En progreso)",
        description: "CarCare AI es una plataforma de vanguardia que usa inteligencia artificial para simplificar los diagnósticos de automóviles. Los usuarios describen sus problemas y la IA ofrece soluciones rápidas, fiables y consejos.",
        tech:        ["React", "NodeJS", "Mongo DB", "Express", "OpenAI"],
        details: {
          overviewTitle:        "Resumen",
          overviewPara1:        "CarCare AI es una plataforma de vanguardia diseñada para simplificar el diagnóstico de automóviles mediante inteligencia artificial. Los usuarios pueden describir los problemas de su vehículo, y la IA proporciona consejos de solución de problemas rápidos y fiables, así como recordatorios de servicio. Aunque aún está en desarrollo, la plataforma apunta a convertirse en su mecánico de IA personal.",
          overviewPara2:        "Impulsado por un extenso backend en Node.js con integración de OpenAI, CarCare AI también ofrece funciones como almacenamiento de detalles del vehículo, seguimiento del historial de servicio y recomendaciones personalizadas a través de un sistema de tokens gratuitos diarios.",
          keyImplTitle:         "Implementaciones clave:",
          implementations: {
            robustApi: {
              label:           "API Robusta:",
              text:            "Gestiona consultas de diagnóstico y datos de servicio de manera eficiente a través de un backend escalable."
            },
            userAuth: {
              label:           "Autenticación de usuarios:",
              text:            "Inicio de sesión seguro con JWT y validación robusta de entradas."
            },
            openaiIntegration: {
              label:           "Integración de OpenAI:",
              text:            "Obtén asesoramiento inteligente de diagnóstico y soporte de solución de problemas."
            },
            serviceHistory: {
              label:           "Historial de servicio y recordatorios:",
              text:            "Seguimiento del mantenimiento y recepción de recordatorios personalizados."
            }
          },
          codebaseTitle:        "Base de Código",
          codebaseNote:         "CarCare AI aún está en desarrollo. Por favor, vuelve más tarde para una demo en vivo."
        }
      }
    },

    footer: {
      contactInfo: {
        title: "Información de Contacto"
      },
      links: {
        title: "Enlaces",
        about: "Sobre mí",
        contact: "Contacto",
        skills: "Habilidades",
        projects: "Proyectos"
      },
      requestCV: {
        placeholder: "Tu-email@gmail.com",
        button: "Solicitar mi CV"
      },
      toast: {
        invalidEmail: "Por favor ingresa un correo válido.",
        sending: "Enviando tu CV…",
        success: "¡Revisa tu bandeja! 🎉",
        failure: "Error al enviar. Inténtalo de nuevo."
      },
      disclaimer: {
        prefix: "Derechos de autor",
        by: "Sitio web de portafolio por"
      }
    }
  }
};

export default translations;
