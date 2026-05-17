import { createI18n } from "vue-i18n"

const messages = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      available: "Available for opportunities"
    },
    sections: {
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      courses: "Courses & Certifications",
      contact: "Let's Work Together"
    },
    buttons: {
      cv: "Download CV",
      projects: "View Projects",
      live: "Live",
      github: "GitHub",
      email: "Send Email",
      all: "All"
    },
    contact: {
      intro: "I'm open to internships, junior developer roles, freelance opportunities, and collaborative tech projects."
    },
    footer: {
      rights: "© 2026 Mazin Ahmed. All rights reserved."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرات",
      education: "التعليم",
      contact: "تواصل"
    },
    hero: {
      available: "متاح لفرص جديدة"
    },
    sections: {
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرات",
      education: "التعليم",
      courses: "الدورات والشهادات",
      contact: "لنعمل معا"
    },
    buttons: {
      cv: "تحميل السيرة الذاتية",
      projects: "عرض المشاريع",
      live: "الموقع",
      github: "GitHub",
      email: "إرسال بريد",
      all: "الكل"
    },
    contact: {
      intro: "أنا متاح للتدريب، وأدوار المطور المبتدئ، وفرص العمل الحر، والمشاريع التقنية التعاونية."
    },
    footer: {
      rights: "© 2026 مازن أحمد. جميع الحقوق محفوظة."
    }
  }
}

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages
})
