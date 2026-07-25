export const portfolio = {
  name: "Abhinav Kumar Singh",
  firstName: "Abhinav",
  role: "React & React Native Developer",
  tagline:
    "I craft high-performance mobile and web experiences — from pixel-perfect interfaces to scalable production systems shipping to millions.",
  location: "Noida, Uttar Pradesh, India",
  email: "abhinavrajput980@gmail.com",
  phone: "+91 79032 62748",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/abhinav2851",
    linkedin: "https://www.linkedin.com/in/abhinav-singh-39867a22a/",
    twitter: "https://twitter.com/",
  },
  summary:
    "Software Developer with 3+ years of experience specializing in cross-platform mobile apps (React Native) and modern web platforms (React.js). I ship production-ready products with a 99% crash-free rate, obsess over performance, and automate everything from CI/CD to release management on the App Store and Play Store.",
  stats: [
    { label: "Years of Experience", value: 3, suffix: "+" },
    { label: "Apps Shipped to Production", value: 7, suffix: "+" },
    { label: "Crash-Free Sessions", value: 99, suffix: "%" },
    { label: "Performance Gains", value: 25, suffix: "%" },
  ],
  skills: [
    {
      category: "Languages & Core",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "JS Engine Internals"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React Native", "React.js", "Redux Toolkit", "Context API", "Tailwind CSS"],
    },
    {
      category: "Tools & Services",
      items: ["Firebase", "REST APIs", "Git", "NPM / Yarn", "Android Studio", "Xcode"],
    },
    {
      category: "DevOps & Deployment",
      items: ["CI/CD Pipelines", "Fastlane", "Play Console", "App Store Connect"],
    },
  ],
  experience: [
    {
      company: "Hanging Panda Pvt Ltd",
      role: "Software Developer",
      location: "Noida, Uttar Pradesh",
      period: "Apr 2023 — Present",
      bullets: [
        "Engineered and launched 7+ production-ready mobile applications with React Native, sustaining a 99% crash-free rate across iOS and Android.",
        "Architected scalable, responsive web platforms and enterprise admin dashboards with React.js, Tailwind CSS, and Context API.",
        "Boosted application performance by 25% via render optimization, faster API cycles, and disciplined Redux Toolkit state management.",
        "Integrated interfaces with REST APIs, third-party SDKs, and real-time Firebase architectures.",
        "Automated end-to-end CI/CD pipelines with Fastlane, Xcode, and Android Studio — cutting release cycles dramatically.",
      ],
    },
  ],
  projects: [
    {
      name: "Smart Attendance System",
      tag: "Enterprise",
      description:
        "Biometric attendance platform supporting six authorization protocols — GPS, Wi-Fi, NFC, QR, Bluetooth, and Voice — with live face verification and offline-first sync.",
      highlights: [
        "Six-layer authorization: GPS, Wi-Fi, NFC, QR, Bluetooth, Voice",
        "Live face verification and voice-to-voice matching",
        "Rooted device, mock location & VPN detection",
        "Leave management with multi-tier approval workflows",
      ],
      stack: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs"],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.mohapp.smartattendance&hl=en_IN",
      } as ProjectLinks,
    },
    {
      name: "Ding — Messaging & Admin Suite",
      tag: "Consumer",
      description:
        "A cross-platform messaging product with secure channels, deep linking, rich media, and a full monetization stack across mobile and web.",
      highlights: [
        "Secure messaging, QR channel discovery & deep links",
        "In-App Purchases (mobile) + Stripe (web admin)",
        "Google & Apple OAuth authentication",
        "Dynamic light / dark themes and scheduled communications",
      ],
      stack: ["React Native", "React.js", "Stripe", "IAP", "OAuth"],
      links: {
        ios: "https://apps.apple.com/us/app/ding-fyi/id6755784325",
      } as ProjectLinks,
    },
    {
      name: "Time365 — Workforce & Attendance",
      tag: "Enterprise",
      description:
        "Next-generation workforce and attendance management solution for businesses in Germany. Fully automated punch-in/out with overtime tracking and multi-factor verified access.",
      highlights: [
        "Multi-method authentication: GPS, Wi-Fi, Beacon, QR & Face verification",
        "Automated overtime tracking and shift management",
        "Secure, verified access with anti-spoof safeguards",
        "Live on Google Play & App Store — deployed for German HR teams",
      ],
      stack: ["React Native", "TypeScript", "Redux Toolkit", "Firebase"],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.time365pro.hrm&hl=en_IN",
        ios: "https://apps.apple.com/in/app/time365/id1622578053",
      } as ProjectLinks,
    },
    {
      name: "Madkhol — Sharia-Compliant Investing",
      tag: "Consumer",
      description:
        "Smart, 100% Sharia-compliant investment app for Saudi Arabia. Open a managed portfolio in under 3 minutes with expert-backed strategies across local and international markets.",
      highlights: [
        "Portfolio onboarding in under 3 minutes",
        "Global investing across local & international markets",
        "In-app educational lessons and personal consultations",
        "Bank-grade security with encrypted data in transit",
      ],
      stack: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs"],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.madkhol&hl=en_IN",
        ios: "https://apps.apple.com/eg/app/madkhol-%D9%85%D8%AF%D8%AE%D9%88%D9%84/id6476918304",
      } as ProjectLinks,
    },
    {
      name: "SUNLAND Communities — Home Services",
      tag: "Consumer",
      description:
        "One-stop home services marketplace for the UAE — connecting residents with vetted professionals for AC repair, plumbing, and everyday maintenance, all bookable from a single app.",
      highlights: [
        "On-demand booking for AC, plumbing & home maintenance",
        "Vetted professional network across Abu Dhabi",
        "Real-time job tracking and status updates",
        "Live on Google Play for UAE communities",
      ],
      stack: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs"],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.sunlandapp&hl=en",
      } as ProjectLinks,
    },
    {
      name: "Insurance Law — Legal Practice Website",
      tag: "Web",
      description:
        "A polished marketing site for an insurance law practice — animated hero sliders, team profiles, service showcases, and a conversion-focused layout.",
      highlights: [
        "Animated hero carousel with scroll-driven transitions",
        "Team, services & case-study sections with rich media",
        "Fully responsive, SEO-optimized marketing pages",
        "Deployed on Vercel with edge-cached performance",
      ],
      stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      links: {
        web: "https://lawyer-website-sable.vercel.app/",
      } as ProjectLinks,
    },
  ],
  education: [
    {
      degree: "B.Tech — Computer Science and Engineering",
      school: "Greater Noida Institute of Technology",
      period: "2019 — 2022",
    },
  ],
} as const;

export type ProjectLinks = {
  android?: string;
  ios?: string;
  web?: string;
  repo?: string;
  live?: string;
};

export type Portfolio = typeof portfolio;
