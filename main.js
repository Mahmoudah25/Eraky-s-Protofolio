/**
 * MOHAMED ERAKY - FLUTTER DEVELOPER PORTFOLIO
 * Main JavaScript Controller
 * Features:
 * - Bilingual Engine (EN / AR) with RTL/LTR support & LocalStorage persistence
 * - Interactive Typewriter Animation
 * - Interactive Ambient Particle Canvas
 * - Project Filter System & Detail Modals
 * - Contact Form Handler with Validation & Mailto Fallback
 * - Copy to Clipboard with Toast Notification
 * - Smooth Scroll & IntersectionObserver Reveal Animations
 */

document.addEventListener('DOMContentLoaded', () => {

  // ===================================================================
  // 1. I18N / TRANSLATION DICTIONARY (ENGLISH & ARABIC)
  // ===================================================================
  const translations = {
    en: {
      navHome: "Home",
      navAbout: "About",
      navSkills: "Skills",
      navProjects: "Projects",
      navExperience: "Experience",
      navContact: "Contact",
      downloadCv: "CV",
      downloadResume: "Download Resume",
      downloadCvFull: "Download CV",
      heroStatus: "Open to Opportunities & Freelance",
      heroGreeting: "Hello, I'm",
      heroSpecialty: "I build",
      heroDescription: "Computer Science student & passionate Flutter Developer dedicated to crafting high-performance, responsive cross-platform mobile apps. Focused on clean architecture, smooth UI/UX animations, and robust API integrations.",
      exploreWork: "Explore Projects",
      contactMe: "Contact Me",
      findMeOn: "Connect with me:",
      scrollDown: "Scroll Down",
      aboutTag: "Get to Know Me",
      aboutTitle: "About Me",
      statCS: "Computer Science",
      statCert: "Specialized Training",
      statProjects: "Projects Built",
      statCommitment: "Dedication & Clean Code",
      aboutHeadline: "Passionate Mobile Developer Building Seamless Digital Products",
      aboutBio1: "I am a detail-oriented Computer Science student in my third year at Elshorouk Academy (2023 – 2027), deeply enthusiastic about software engineering and mobile application craftsmanship.",
      aboutBio2: "My core focus lies in the Flutter & Dart ecosystem. I have fortified my foundation through high-caliber training programs including the Digital Egypt Pioneers Program (DEPI) and the Information Technology Institute (ITI), along with professional mentorship under Eng. Usama Elgendy.",
      aboutBio3: "I emphasize writing readable, maintainable, and testable code applying OOP principles, SOLID guidelines, and architectural patterns like Bloc/Cubit and Clean Architecture. I love turning complex requirements into intuitive, fluid mobile interfaces.",
      highlight1: "Proficient in Android & iOS cross-platform development",
      highlight2: "Advanced State Management (Bloc, Cubit, Provider)",
      highlight3: "RESTful API integration, Firebase backend & offline caching",
      highlight4: "Continuous learner with strong analytical & problem-solving skills",
      letsTalk: "Let's Talk",
      skillsTag: "My Technical Arsenal",
      skillsTitle: "Skills & Technologies",
      skillsSubtitle: "Technologies, frameworks, and architectural practices I utilize to build modern apps.",
      skillCatMobile: "Mobile & Core",
      skillCatState: "State & Architecture",
      skillCatBackend: "Backend & Storage",
      skillCatTools: "Tools & Languages",
      nativeLang: "Native",
      algorithms: "Data Structures & Logic",
      agile: "Agile Collaboration & Git",
      projectsTag: "Portfolio Showcase",
      projectsTitle: "Featured Projects",
      projectsSubtitle: "A curated selection of mobile applications and software projects I've built.",
      filterAll: "All Projects",
      filterFlutter: "Flutter Apps",
      filterDart: "Dart & OOP",
      filterWeb: "Web",
      projCarhubTitle: "CarHub - Automotive Showcase App",
      projCarhubDesc: "A modern Flutter mobile application for browsing automotive vehicles, exploring specifications, searching car models, and viewing detailed profiles with clean modular architecture.",
      projDepiTitle: "DEPI E-Commerce Mobile App",
      projDepiDesc: "Comprehensive shopping application developed during the Digital Egypt Pioneers program. Features catalog browsing, product details, interactive shopping cart, favorites wishlist, and state handling.",
      projDocdocTitle: "DocDoc - Doctor Appointment App",
      projDocdocDesc: "Sleek medical booking application with animated splash screen, welcoming onboarding flow, authentication interfaces, and doctor specialty appointment scheduling.",
      projTasksTitle: "Tasks & Productivity Manager",
      projTasksDesc: "Intuitive daily task tracker and productivity application. Implements dynamic task status toggling, categorized lists, and persistent storage with responsive screens.",
      projOopTitle: "OOP & Strategy Pattern Engine",
      projOopDesc: "Clean Dart software architecture demonstrating advanced Object-Oriented Programming and design patterns (Factory Method, Strategy Pattern) for dynamic game character combat systems.",
      projDiceTitle: "Dice Mechanics & Algorithmic Tasks",
      projDiceDesc: "Algorithmic problem-solving implementations in C++ covering probability calculations, data structure manipulation, and logical control systems.",
      viewSource: "Source Code",
      details: "Details",
      viewGithub: "GitHub",
      githubCtaTitle: "Check out more on GitHub",
      githubCtaDesc: "Explore all my repositories, open-source code, and mobile development experiments.",
      visitGithub: "Visit GitHub Profile",
      expTag: "Career & Academic Path",
      expTitle: "Experience & Education",
      expSubtitle: "My educational background, professional training, and certified accomplishments.",
      eduDegree: "Higher Education",
      eduTitle: "Bachelor of Computer Science",
      eduDesc: "Currently in the 3rd year. Focusing on Software Engineering fundamentals, Object-Oriented Programming, Data Structures, Algorithms, Database Systems, and System Analysis.",
      certTag: "Certified Program",
      depiTitle: "Digital Egypt Pioneers Program (DEPI)",
      depiDesc: "Specialized training in Mobile Application Development using Flutter. Built production-ready mobile apps, practiced real-world agile development cycles, and mastered REST APIs with state management.",
      itiTitle: "Mobile App Development using Flutter",
      itiDesc: "Intensive mobile track covering Dart language concepts, Flutter framework internals, widget lifecycle, clean responsive UI design, and asynchronous networking.",
      courseTag: "Professional Course",
      diplomaTitle: "Comprehensive Flutter Diploma",
      diplomaDesc: "Deep dive into advanced Flutter architecture, Bloc / Cubit state management patterns, Firebase integration, offline persistence, and deployment best practices.",
      contactTag: "Get In Touch",
      contactTitle: "Contact Me",
      contactSubtitle: "Have a project in mind, an opportunity, or just want to connect? Let's build something exceptional together.",
      reachDirectly: "Reach Out Directly",
      emailLabel: "Email Address",
      phoneLabel: "Phone & WhatsApp",
      locationLabel: "Location",
      locationVal: "Benha, Qalyubia, Egypt",
      sendMessageTitle: "Send a Message",
      formName: "Your Name",
      formEmail: "Your Email",
      formSubject: "Subject",
      formMessage: "Message",
      sendButton: "Send Message",
      footerQuote: '"Crafting high quality mobile experiences with clean code and modern design."',
      rightsReserved: "All rights reserved.",
      craftedWith: "Built with heart for Flutter Excellence",
      copiedEmail: "Email copied to clipboard!",
      copiedPhone: "Phone number copied to clipboard!"
    },
    ar: {
      navHome: "الرئيسية",
      navAbout: "عني",
      navSkills: "المهارات",
      navProjects: "مشاريعي",
      navExperience: "الخبرات والتعليم",
      navContact: "تواصل معي",
      downloadCv: "السيرة الذاتية",
      downloadResume: "تحميل السيرة الذاتية",
      downloadCvFull: "تحميل السيرة الذاتية (CV)",
      heroStatus: "متاح للعمل وفرص التطوير المستقل",
      heroGreeting: "أهلاً بك، أنا",
      heroSpecialty: "أقوم ببناء",
      heroDescription: "طالب علوم حاسب ومطور فلاتر (Flutter Developer) شغوف بتطوير تطبيقات الموبايل متعددة المنصات بأعلى أداء واستجابة. أركز على المعمارية البرمجية النظيفة (Clean Architecture)، والواجهات الانسيابية، والربط الاحترافي مع الـ APIs وقواعد البيانات.",
      exploreWork: "تصفح المشاريع",
      contactMe: "تواصل معي",
      findMeOn: "تابعني وتواصل معي عبر:",
      scrollDown: "مرر للأسفل",
      aboutTag: "تعرف عليّ عن قرب",
      aboutTitle: "نبذة عني",
      statCS: "علوم الحاسب",
      statCert: "برامج تدريب معتمدة",
      statProjects: "مشاريع منجزة",
      statCommitment: "التزام بأعلى معايير الكود",
      aboutHeadline: "مطور تطبيقات موبايل شغوف بصناعة حلول رقمية انسيابية وعالية الجودة",
      aboutBio1: "أنا طالب علوم حاسب في السنة الثالثة بأكاديمية الشروق (2023 - 2027)، شغوف بهندسة البرمجيات وصناعة تطبيقات الموبايل التي تقدم تجربة مستخدم متميزة.",
      aboutBio2: "أركز بشكل أساسي على تقنيات فلاتر ودارت (Flutter & Dart). ثقلت مهاراتي عبر برامج ومبادرات تقنية كبرى مثل مبادرة رواد مصر الرقمية (DEPI) ومعهد تكنولوجيا المعلومات (ITI)، بالإضافة إلى دبلومة فلاتر المتقدمة مع المهندس أسامة الجندي.",
      aboutBio3: "أهتم بكتابة كود نظيف وسهل الصيانة وقابل للاختبار بالاعتماد على مبادئ الـ OOP ومبادئ SOLID، واستخدام أنماط إدارة الحالة المتقدمة مثل Bloc وCubit والمعمارية النظيفة Clean Architecture.",
      highlight1: "تطوير تطبيقات احترافية لنظامي Android و iOS",
      highlight2: "إدارة حالة متقدمة (Bloc, Cubit, Provider)",
      highlight3: "ربط متكامل مع RESTful APIs وFirebase والتخزين المحلي",
      highlight4: "شغف مستمر بالتعلم وحل المشكلات البرمجية المعقدة",
      letsTalk: "لنبدأ محادثة",
      skillsTag: "المهارات والتقنيات",
      skillsTitle: "المهارات والأدوات البرمجية",
      skillsSubtitle: "مجموعة التقنيات والأطر البرمجية والمعايير المعمارية التي أعتمد عليها في بناء التطبيقات الحديثة.",
      skillCatMobile: "تطوير الموبايل والأساسيات",
      skillCatState: "إدارة الحالة والمعمارية",
      skillCatBackend: "الباك إند والـ APIs والتخزين",
      skillCatTools: "الأدوات ولغات البرمجة",
      nativeLang: "اللغة الأم",
      algorithms: "هياكل البيانات والمنطق البرمجي",
      agile: "العمل الجماعي والتعاون عبر Git",
      projectsTag: "معرض الأعمال",
      projectsTitle: "أبرز المشاريع",
      projectsSubtitle: "مجموعة مختارة من تطبيقات الموبايل والأنظمة البرمجية التي قمت بتطويرها.",
      filterAll: "كل المشاريع",
      filterFlutter: "تطبيقات Flutter",
      filterDart: "Dart & OOP",
      filterWeb: "ويب",
      projCarhubTitle: "تطبيق CarHub - معرض ومواصفات السيارات",
      projCarhubDesc: "تطبيق فلاتر عصري لاستعراض وفلترة مواصفات وتفاصيل السيارات، مع شاشات تفاعلية وبحث مخصص وهيكل برمجي منظم.",
      projDepiTitle: "تطبيق المتجر الإلكتروني - DEPI E-Commerce",
      projDepiDesc: "تطبيق تسوق متكامل تم تطويره ضمن مبادرة رواد مصر الرقمية (DEPI). يشمل تصفح المنتجات، سلة المشتريات، المفضلة، وشاشات تفاصيل العناصر مع إدارة الحالة.",
      projDocdocTitle: "تطبيق حجز الأطباء - DocDoc App",
      projDocdocDesc: "واجهة تطبيق طبي راقية لحجز المواعيد مع الأطباء، تتضمن شاشة ترحيبية Onboarding، وتسجيل دخول، واستعراض التخصصات الطبية.",
      projTasksTitle: "تطبيق إدارة المهام والملاحظات اليومية",
      projTasksDesc: "أداة لزيادة الإنتاجية وتنظيم المهام اليومية مع إمكانية تحديث الحالات، والتخزين المحلي المستمر عبر الذاكرة.",
      projOopTitle: "محرك الألعاب البرمجي - أنماط التصميم وOOP",
      projOopDesc: "تطبيق معماري مكتوب بلغة Dart يطبق أنماط التصميم المتقدمة (Strategy Pattern وFactory Pattern) لإدارة استراتيجيات شخصيات اللعبة.",
      projDiceTitle: "محاكاة النرد وخوارزميات برمجية",
      projDiceDesc: "تطبيقات خوارزمية وحل مشكلات بلغة C++ تغطي حساب الاحتمالات والتعامل مع البيانات والتفكير المنطقي.",
      viewSource: "الكود المصدري",
      details: "التفاصيل",
      viewGithub: "جيت هاب",
      githubCtaTitle: "استكشف المزيد من الأكواد على GitHub",
      githubCtaDesc: "تصفح مستودعات الأكواد المفتوحة والمشاريع والتجارب التطويرية الخاصة بي على منصة جيت هاب.",
      visitGithub: "زيارة حساب GitHub",
      expTag: "المسار التعليمي والمهني",
      expTitle: "الخبرات والتعليم والشهادات",
      expSubtitle: "خلفيتي الأكاديمية والشهادات التدريبية الاحترافية المعتمدة التي حصلت عليها.",
      eduDegree: "التعليم العالي",
      eduTitle: "بكالوريوس علوم الحاسب (Computer Science)",
      eduDesc: "حالياً في السنة الثالثة. دراسة متعمقة لأساسيات هندسة البرمجيات، البرمجة كائنية التوجه (OOP)، هياكل البيانات، الخوارزميات، ونظم قواعد البيانات.",
      certTag: "برنامج معتمد",
      depiTitle: "مبادرة رواد مصر الرقمية (DEPI)",
      depiDesc: "تدريب تخصصي مكثف في تطوير تطبيقات الموبايل باستخدام Flutter برعاية وزارة الاتصالات وتكنولوجيا المعلومات. بناء تطبيقات متكاملة واحترافية.",
      itiTitle: "تطوير تطبيقات الموبايل بفلاتر - ITI",
      itiDesc: "مسار تدريبي معتمد من معهد تكنولوجيا المعلومات يغطي أساسيات لغة Dart، ودورة حياة الـ Widgets، وبناء واجهات مستخدم متجاوبة وربط الشبكات.",
      courseTag: "دبلومة احترافية",
      diplomaTitle: "دبلومة Flutter الشاملة",
      diplomaDesc: "دراسة متقدمة مع م/ أسامة الجندي، تناولت معمارية فلاتر المتقدمة، Bloc وCubit، وFirebase، والتعامل الاحترافي مع الـ APIs والتخزين المحلي.",
      contactTag: "تواصل مباشر",
      contactTitle: "تواصل معي",
      contactSubtitle: "لديك فكرة تطبيق، فرصة عمل، أو ترغب في استشارة تقنية؟ يسعدني دائماً التواصل والتعاون معك.",
      reachDirectly: "طرق التواصل المباشرة",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف والواتساب",
      locationLabel: "الموقع الجغرافي",
      locationVal: "بنها، القليوبية، مصر",
      sendMessageTitle: "أرسل رسالة",
      formName: "الاسم الكامل",
      formEmail: "بريدك الإلكتروني",
      formSubject: "موضوع الرسالة",
      formMessage: "الرسالة",
      sendButton: "إرسال الرسالة",
      footerQuote: '"صناعة تطبيقات استثنائية بكود نظيف وتصميم عصري."',
      rightsReserved: "جميع الحقوق محفوظة.",
      craftedWith: "صُنع بشغف لتقديم أفضل تجارب Flutter",
      copiedEmail: "تم نسخ البريد الإلكتروني بنجاح!",
      copiedPhone: "تم نسخ رقم الهاتف بنجاح!"
    }
  };

  // Typed Text Arrays
  const typingTexts = {
    en: [
      "Flutter Mobile Apps",
      "Clean Architecture",
      "Cross-Platform Apps",
      "Pixel-Perfect UI/UX",
      "Bloc & Cubit State Management"
    ],
    ar: [
      "تطبيقات فلاتر للموبايل",
      "معمارية كود نظيفة (Clean Code)",
      "تطبيقات متوافقة مع Android و iOS",
      "واجهات عصرية فائقة السلاسة",
      "إدارة حالة متقدمة بالـ Bloc"
    ]
  };

  // Modal Project Database
  const modalProjects = {
    "modal-carhub": {
      title: {
        en: "CarHub - Automotive Mobile App",
        ar: "تطبيق CarHub لعالم ومواصفات السيارات"
      },
      subtitle: {
        en: "Built with Flutter & Dart • Clean UI Architecture",
        ar: "مبني باستخدام فلاتر ودارت • تصميم واجهات متقن"
      },
      desc: {
        en: "CarHub is a mobile application tailored for car enthusiasts and prospective buyers. It offers vehicle catalogs, detailed specifications (engine, transmission, fuel economy), search filters, and an interactive car showcase screen.",
        ar: "تطبيق CarHub مصمم للمهتمين بعالم السيارات، حيث يوفر كتالوجاً متكاملاً لموديلات السيارات ومواصفاتها الدقيقة ومحركاتها، مع إمكانية البحث والفلترة وعرض الشاشات بتصميم متجاوب وأنيق."
      },
      features: {
        en: [
          "Vehicle specs inspection with customized layout cards",
          "Dynamic search and vehicle filtering options",
          "Modular widget hierarchy adhering to separation of concerns",
          "Responsive mobile layouts designed for multiple screen densities"
        ],
        ar: [
          "استعراض تفصيلي لمواصفات السيارات عبر بطاقات تفاعلية",
          "نظام بحث وفلترة ديناميكي سريع",
          "بناء موديولار معتمد على تقسيم الـ Widgets النظيفة",
          "تصميم متجاوب ومتوافق مع مختلف مقاسات الشاشات"
        ]
      },
      github: "https://github.com/eng-m-eraky/carhub-intial"
    },
    "modal-depi": {
      title: {
        en: "DEPI E-Commerce Shopping App",
        ar: "تطبيق المتجر الإلكتروني - DEPI E-Commerce"
      },
      subtitle: {
        en: "Digital Egypt Pioneers Initiative (DEPI) • Flutter & REST APIs",
        ar: "مشروع مبادرة رواد مصر الرقمية • فلاتر وربط الـ APIs"
      },
      desc: {
        en: "A robust online shopping application built under the Ministry of Communications and Information Technology's DEPI scholarship. It delivers a full e-commerce flow: home product catalog, interactive cart management, favorites wishlist, item details, and profile screen.",
        ar: "تطبيق تسوق إلكتروني متكامل تم إنجازه ضمن منحة رواد مصر الرقمية التابعة لوزارة الاتصالات. يشتمل على دورة التسوق الكاملة: استعراض المنتجات، سلة المشتريات، المفضلة، شاشة تفاصيل المنتج، وشاشة الملف الشخصي."
      },
      features: {
        en: [
          "Home screen with categorized product feeds and banner sliders",
          "State-driven Shopping Bag with real-time total and count updates",
          "Favorites screen with one-tap toggle for saved items",
          "Item Details screen with custom transitions and specifications",
          "Profile management interface"
        ],
        ar: [
          "شاشة رئيسية تعرض تصنيفات المنتجات والبنرات الترويجية",
          "سلة مشتريات تفاعلية تحسب الإجمالي والكميات لحظياً",
          "شاشة المفضلة لحفظ المنتجات بنقرة واحدة",
          "شاشة تفاصيل المنتج مع تأثيرات انتقال انسيابية",
          "شاشة حساب المستخدم والملف الشخصي"
        ]
      },
      github: "https://github.com/eng-m-eraky/depitask"
    },
    "modal-docdoc": {
      title: {
        en: "DocDoc - Doctor Appointment Booking UI",
        ar: "تطبيق DocDoc لحجز مواعيد الأطباء"
      },
      subtitle: {
        en: "Healthcare UI/UX • Material 3 & Custom Animations",
        ar: "واجهات الرعاية الصحية • ماتيريال 3 وتأثيرات مخصصة"
      },
      desc: {
        en: "A premium medical mobile application interface designed to simplify doctor discovery and appointment booking. Includes an animated splash screen, an inspiring onboarding journey, authentication interfaces, and doctor specialty directories.",
        ar: "تطبيق طبي راقٍ يهدف لتسهيل البحث عن الأطباء وحجز الاستشارات والمواعيد الطبية بسهولة. يضم شاشة تمهيدية متحركة، جولة تعريفية Onboarding مريحة للمستخدم، شاشات تسجيل دخول، ودليل استعراض التخصصات الطبية."
      },
      features: {
        en: [
          "Modern Onboarding flow with engaging typography and imagery",
          "Authentication screens (Sign In / Sign Up) with validation",
          "Doctor specialty categorizations (Cardiology, Pediatrics, etc.)",
          "Clean visual aesthetic matching modern healthcare apps"
        ],
        ar: [
          "شاشات تعريفية Onboarding جذابة ومريحة للمريض",
          "شاشات تسجيل دخول وتسجيل حساب جديد مع التحقق من الحقول",
          "استعراض التخصصات الطبية المختلفة بطريقة منظمة",
          "تصميم ناعم ومريح للعين يعكس معايير التطبيقات الطبية العالمية"
        ]
      },
      github: "https://github.com/eng-m-eraky"
    },
    "modal-tasks": {
      title: {
        en: "Tasks & Productivity Application",
        ar: "تطبيق إدارة المهام والإنتاجية"
      },
      subtitle: {
        en: "Flutter • Local Storage & State Management",
        ar: "فلاتر • تخزين محلي وإدارة الحالة"
      },
      desc: {
        en: "A daily task management application designed for productivity enthusiasts. Enables users to organize their daily schedule, add and remove checklist items, toggle completion states, and persist data locally across app restarts.",
        ar: "تطبيق لإدارة المهام اليومية والجدولة الشخصية بكفاءة عالية. يتيح للمستخدم إضافة وحذف وتعديل المهام، وتحديد حالة الإنجاز، مع الحفاظ على البيانات مخزنة محلياً حتى بعد إغلاق التطبيق."
      },
      features: {
        en: [
          "Add, edit, check, and delete daily tasks with ease",
          "Dynamic reactive UI updating immediately on state change",
          "Offline persistence using Shared Preferences",
          "Minimalist, distraction-free user interface"
        ],
        ar: [
          "إضافة وحذف وتحديث المهام بنقرة واحدة",
          "واجهة تفاعلية تستجيب فوراً لتغيرات الحالة",
          "حفظ المهام محلياً بدون الحاجة لاتصال بالإنترنت",
          "تصميم أنيق وبسيط يركز على الإنتاجية وتجنب التشتت"
        ]
      },
      github: "https://github.com/eng-m-eraky/tasks"
    },
    "modal-oop": {
      title: {
        en: "OOP & Strategy Pattern Combat Engine",
        ar: "محرك أنماط التصميم والـ OOP في لغة Dart"
      },
      subtitle: {
        en: "Pure Dart • Factory & Strategy Design Patterns",
        ar: "لغة دارت • تطبيق Factory Pattern وStrategy Pattern"
      },
      desc: {
        en: "A robust architectural implementation illustrating Object-Oriented Programming (OOP) and Software Design Patterns in pure Dart. Implements the Strategy Pattern for pluggable character combat tactics and the Factory Pattern for dynamic game entity instantiation.",
        ar: "مشروع معماري متقن يستعرض إتقان مبادئ البرمجة كائنية التوجه (OOP) وأنماط التصميم (Design Patterns) في لغة Dart. يطبق نمط الاستراتيجية (Strategy Pattern) للتبديل الديناميكي بين أساليب الهجوم، ونمط المصنع (Factory Pattern) لإنشاء الكائنات بمرونة."
      },
      features: {
        en: [
          "Strategy Pattern implementation for runtime attack modification",
          "Factory Pattern for decoupled character creation",
          "Strict adherence to SOLID principles and Clean Code standards",
          "Extensible architecture ready for complex simulation systems"
        ],
        ar: [
          "تطبيق Strategy Pattern لتغيير أسلوب وسلوك الكائن أثناء وقت التشغيل",
          "تطبيق Factory Pattern لفصل بناء الكائنات عن منطق التشغيل",
          "التزام صارم بمبادئ SOLID وقواعد الكود النظيف",
          "هيكل قابل للتوسع بسهولة لإضافة شخصيات واستراتيجيات جديدة"
        ]
      },
      github: "https://github.com/eng-m-eraky"
    }
  };

  // State Management
  let currentLang = localStorage.getItem('eraky_lang') || 'en';

  // ===================================================================
  // 2. LANGUAGE ENGINE SETUP
  // ===================================================================
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('lang-label');

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('eraky_lang', lang);

    const isRtl = lang === 'ar';
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    // Update Toggle Button Text
    if (langLabel) {
      langLabel.textContent = isRtl ? 'English' : 'عربي';
    }

    // Update all i18n data elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update Input Placeholders
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');

    if (nameInput) nameInput.placeholder = isRtl ? 'مثال: محمد أحمد' : 'e.g. John Doe';
    if (emailInput) emailInput.placeholder = isRtl ? 'مثال: name@example.com' : 'e.g. john@example.com';
    if (subjectInput) subjectInput.placeholder = isRtl ? 'مثال: فرصة عمل أو مشروع فلاتر' : 'e.g. Mobile App Opportunity';
    if (messageInput) messageInput.placeholder = isRtl ? 'اكتب تفاصيل مشروعك أو رسالتك هنا...' : 'Tell me about your idea or project...';

    // Restart Typing Animation with current language words
    initTypewriter(typingTexts[lang]);
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      applyLanguage(nextLang);
    });
  }

  // ===================================================================
  // 3. TYPEWRITER EFFECT
  // ===================================================================
  let typewriterTimeout = null;
  const typedTextEl = document.getElementById('typed-text');

  function initTypewriter(words) {
    if (!typedTextEl) return;
    if (typewriterTimeout) clearTimeout(typewriterTimeout);

    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIdx];

      if (isDeleting) {
        typedTextEl.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
      } else {
        typedTextEl.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
      }

      let typingSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && charIdx === currentWord.length) {
        typingSpeed = 2000; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        typingSpeed = 400; // Pause before new word
      }

      typewriterTimeout = setTimeout(type, typingSpeed);
    }

    type();
  }

  // ===================================================================
  // 4. NAVBAR SCROLL & ACTIVE LINK DETECTION
  // ===================================================================
  const navbarWrapper = document.querySelector('.navbar-wrapper');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Navbar Scrolled State
    if (navbarWrapper) {
      if (scrollPos > 40) {
        navbarWrapper.classList.add('scrolled');
      } else {
        navbarWrapper.classList.remove('scrolled');
      }
    }

    // Back to Top Button
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active Section Detection
    let activeId = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        activeId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('active');
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===================================================================
  // 5. MOBILE DRAWER NAVIGATION & BACKDROP
  // ===================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function toggleMobileMenu(forceClose = false) {
    if (!mobileNavDrawer) return;

    const isOpen = mobileNavDrawer.classList.contains('open');

    if (forceClose || isOpen) {
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
      mobileNavDrawer.classList.remove('open');
      mobileNavDrawer.setAttribute('aria-hidden', 'true');
      if (drawerBackdrop) drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.add('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
      }
      mobileNavDrawer.classList.add('open');
      mobileNavDrawer.setAttribute('aria-hidden', 'false');
      if (drawerBackdrop) drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', () => toggleMobileMenu(true));
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', () => toggleMobileMenu(true));
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  // Close mobile drawer on outside click
  document.addEventListener('click', (e) => {
    if (
      mobileNavDrawer &&
      mobileNavDrawer.classList.contains('open') &&
      !mobileNavDrawer.contains(e.target) &&
      mobileMenuBtn &&
      !mobileMenuBtn.contains(e.target)
    ) {
      toggleMobileMenu(true);
    }
  });

  // ===================================================================
  // 6. PROJECT FILTERING
  // ===================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // ===================================================================
  // 7. PROJECT DETAILS MODAL
  // ===================================================================
  const modalBackdrop = document.getElementById('project-modal');
  const modalDynamicContent = document.getElementById('modal-dynamic-content');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalTriggerBtns = document.querySelectorAll('.btn-modal');

  function openProjectModal(modalKey) {
    const data = modalProjects[modalKey];
    if (!data || !modalDynamicContent || !modalBackdrop) return;

    const lang = currentLang;
    const isRtl = lang === 'ar';

    const featuresHtml = data.features[lang].map(item => `
      <li><i class="fa-solid fa-circle-check"></i> <span>${item}</span></li>
    `).join('');

    modalDynamicContent.innerHTML = `
      <h3 class="modal-project-title">${data.title[lang]}</h3>
      <div class="modal-project-subtitle">${data.subtitle[lang]}</div>
      <p class="modal-project-desc">${data.desc[lang]}</p>
      
      <div class="modal-section-title">${isRtl ? 'المزايا والتقنيات الأساسية:' : 'Key Features & Capabilities:'}</div>
      <ul class="modal-features-list">
        ${featuresHtml}
      </ul>

      <div class="modal-action-row">
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fa-brands fa-github"></i>
          <span>${isRtl ? 'فتح الكود على جيت هاب' : 'View on GitHub'}</span>
        </a>
      </div>
    `;

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  modalTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalKey = btn.getAttribute('data-modal');
      openProjectModal(modalKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      toggleMobileMenu(true);
    }
  });

  // ===================================================================
  // 8. COPY TO CLIPBOARD & TOAST NOTIFICATION
  // ===================================================================
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toastEl = document.getElementById('toast');
  let toastTimeout = null;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3200);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const isPhone = textToCopy.includes('+20');
          const msg = isPhone
            ? translations[currentLang].copiedPhone
            : translations[currentLang].copiedEmail;
          showToast(msg);
        }).catch(() => {
          showToast('Copied: ' + textToCopy);
        });
      }
    });
  });

  // ===================================================================
  // 9. CONTACT FORM INTERACTION
  // ===================================================================
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = document.getElementById('form-message').value.trim();

      const isRtl = currentLang === 'ar';

      if (!name || !email || !subject || !message) {
        formStatus.className = 'form-status-msg error';
        formStatus.textContent = isRtl
          ? 'يرجى ملء جميع الحقول المطلوبة.'
          : 'Please fill in all required fields.';
        return;
      }

      // Simulate sending with polite confirmation & offer mailto fallback
      formStatus.className = 'form-status-msg success';
      formStatus.textContent = isRtl
        ? 'شكراً لك! تم استلام رسالتك وسأقوم بالرد عليك في أقرب وقت.'
        : 'Thank you! Your message has been prepared. I will get back to you shortly.';

      // Compose mailto link so user can optionally open their mail app directly
      const mailtoLink = `mailto:muhammederakyy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 1000);

      contactForm.reset();

      setTimeout(() => {
        formStatus.textContent = '';
      }, 7000);
    });
  }

  // ===================================================================
  // 10. SCROLL REVEAL OBSERVER
  // ===================================================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ===================================================================
  // 11. AMBIENT PARTICLES CANVAS
  // ===================================================================
  const canvas = document.getElementById('ambient-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(40, Math.floor(window.innerWidth / 35));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.fill();

        // Connect nearby particles with subtle faint lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.75;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // ===================================================================
  // 12. CURRENT YEAR INITIALIZATION
  // ===================================================================
  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // Initial language application
  applyLanguage(currentLang);
});
