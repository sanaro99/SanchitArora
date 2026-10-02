import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sanchit Arora",
  initials: "SA",
  url: "https://www.sanchitarora.me",
  location: "Seattle, WA",
  locationLink: "https://www.google.com/maps/place/seattle",
  description:
    "Software Engineer · AI systems & developer tools · UW MSIM ’27",
  summary:
    "I build AI tools that people can use and trust. At TestSprite, I worked on CLI test-plan generation, developer workflows, and the reliability of AI-driven testing. Before that, I spent 4+ years at UBS building automation, full-stack systems, and production reliability tooling, including an LLM-powered platform that reduced automation setup time by 95% across 20 engineering teams. I’m pursuing an MS in Information Management at the University of Washington (3.98 GPA), specializing in Artificial Intelligence and Product Management. Outside work, I build products for job applications, consumer trust, travel, reflection, and accessible video.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "TypeScript",
    "JavaScript",
    "SQL",
    "Java",
    "C++",
    "React",
    "Next.js",
    "React Native",
    "Expo",
    "Node.js",
    "FastAPI",
    "Django",
    "Flask",
    "Bun",
    "Hono",
    "PostgreSQL",
    "SQLite",
    "IndexedDB",
    "Supabase",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Linux",
    "System Design",
    "LLMs",
    "RAG",
    "LangGraph",
    "FAISS",
    "PyTorch",
    "TensorFlow",
    "NLP",
    "Playwright",
    "Puppeteer",
    "Socket.IO",
    "Three.js",
    "OAuth",
    "Splunk",
    "AppDynamics",
    "TrueNAS",
    "ZFS",
    "Traefik",
    "Cloudflare"
],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sanaro@uw.edu",
    tel: "+1 (206) 605-4678",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/sanchit-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/sanchit-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      VSCO: {
        name: "VSCO",
        url: "https://dub.sh/sanchit-vsco",
        icon: Icons.vsco,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sanaro@uw.edu?subject=Saw your portfolio",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "TestSprite",
      href: "https://www.testsprite.com",
      badges: ["AI Testing", "Developer Tools", "TypeScript", "Python", "AWS", "DynamoDB", "Lambda"],
      location: "Seattle, WA",
      title: "Software Development Intern",
      logoUrl: "/testsprite.svg",
      start: "June 2026",
      end: "September 2026",
      description:
        `• Built an end-to-end CLI workflow for AI-assisted test-plan generation, review, and selective acceptance, with supporting backend routes and documentation.<br />
        • Designed the workflow for developers and coding agents: structured JSON output, live stage progress, stable exit codes, and recovery that resumes existing work.<br />
        • Added project analysis and coverage reporting to help identify untested areas; restored the Windows exit-code contract used by CI and automated agents.<br />
        • Investigated false passes in AI-generated tests, tracing assertion and evidence handling across browser automation, the testing engine, and the backend.<br />
        • Fixed API-key scope enforcement and product defects across the CLI, backend, and web application.`,
    },
    {
      company: "UBS Investment Bank",
      href: "https://www.ubs.com",
      badges: ["AI", "Automation", "Azure", "Python", "Unix", "SQL", "Splunk", "Git", "AppDynamics", "BigPanda", "Amelia", "Docker", "Kubernetes", "ReactJS"],
      location: "Pune, India",
      title: "Sr. Software Engineer & Site Reliability Engineer",
      logoUrl: "/ubs.png",
      start: "March 2024",
      end: "August 2025",
      description:
        `• Led AutoFlow development — an LLM-powered tool converting natural language to Amelia automation workflows using GPT-4.1, LangGraph, and FastAPI with React frontend; reduced automation setup time by 95% across 20 engineering teams<br />
      • Launched RAG chatbot using Azure AI Search indexing 5 years of team emails (~50K docs), delivering automated incident diagnosis and step-by-step resolutions for production issues<br />
      • Engineered config-driven monitoring dashboard with dynamic UI generation, aggregating Splunk server health, AppDynamics microservices health, and ServiceNow ticket data for 30+ teams; reduced mean time to detection (MTTD) by 60%<br />
      • Partnered with product managers and operations leadership to scope and design AI tooling for $10B+ daily transaction systems under regulatory, cost, and latency constraints
      `,
    },
    {
      company: "UBS Investment Bank",
      href: "https://www.ubs.com",
      badges: ["Automation", "Splunk", "AppDynamics", "Python", "Unix", "SQL", "Docker", "Kubernetes"],
      location: "Pune, India",
      title: "Software Engineer & Site Reliability Engineer",
      logoUrl: "/ubs.png",
      start: "July 2021",
      end: "March 2024",
      description:
        `• Automated 20+ recurring incident types, operational requests, and weekend startup checks using Amelia IPSoft for 300+ internal users, saving 200+ engineering hours monthly<br />
      • Built shift handover platform tracking deliverables, blockers, and workload across regional shifts (Pune, Zurich, NYC), cutting handoff time by 40% with real-time manager dashboards<br />
      • Created observability dashboards in Splunk and AppDynamics monitoring 200+ microservices across 5 Tier-1 applications, reducing incident detection time by 60% with proactive alerts<br />
      • Managed incident response for 5 Tier-1 collateral applications processing $10B+ in daily transactions, maintaining 99.8% uptime through root-cause analysis and post-incident reviews<br />
      • Earned the Engineering Excellence Award (Aug 2022) and Quarterly Star Award (Apr 2023), recognized by directors for sustained contributions to automation, observability, and operations<br />
      • Owned the team's knowledge repository in Confluence; standardized article creation, peer review, and quarterly maintenance, cutting onboarding ramp time for new engineers by roughly 30%
      `,
    },
    {
      company: "UBS Group Functions",
      badges: ["ARIS", "Process modelling", "SWIFT"],
      href: "https://www.ubs.com",
      location: "Pune, India",
      title: "Group Technology Intern",
      logoUrl: "/ubs.png",
      start: "March 2021",
      end: "July 2021",
      description:
        "Designed 20 SWIFT message processing workflows in ARIS, standardizing and digitizing procedures across operations teams to enable future automation. Collaborated with business analysts and ops managers to identify inefficiencies and propose process improvements adopted by operations leadership.",
    },
    {
      company: "India Young Foundation",
      href: "https://indiayoungfoundation.org/",
      badges: ["Django", "HTML/CSS", "JavaScript", "SQLite", "Bootstrap", "Stripe API"],
      location: "Pune, India",
      title: "Web Developer",
      logoUrl: "/iyf.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Developed the NGO's website using Django with functionalities such as mailing system, multi-lingual view, and donations through online payment.",
    },
    {
      company: "NITI Aayog",
      href: "https://aim.gov.in/",
      badges: ["JavaScript", "PHP", "MySQL", "Bootstrap", "Flutter", "Firebase", "Security Fixes", "Bug Fixes"],
      location: "Delhi, India",
      title: "Science and Technology Intern",
      logoUrl: "/aim.jpg",
      start: "June 2019",
      end: "July 2019",
      description:
        "Developed an advanced application form for the Mentor India program, utilizing JavaScript, PHP, MySQL, and Bootstrap.",
    },
  ],
  education: [
    {
      school: "University of Washington",
      href: "https://ischool.uw.edu/",
      degree: "M.S. Information Management",
      logoUrl: "/uw.png",
      start: "2025",
      end: "2027",
      description:
        `• GPA: 3.98/4.0<br />
        • <b>Specializations:</b> Artificial Intelligence, Product Management<br />
        • <b>Coursework:</b> Implementing & Managing GenAI Systems, Building & Applying LLMs, Principles of Product & Project Management, Product Strategy, Information Policy and Ethics<br />
        • <b>Reader/Grader</b>, LIS 589 Academic Librarianship (UW iSchool, Winter 2026), LIS 510 Information Behavior (UW iSchool, Spring 2026)
        `,
    },
    {
      school: "Manipal Institute of Technology",
      href: "https://www.manipal.edu/mit/program-list/btech/btech-information-technology.html",
      degree: "B.Tech. Information Technology",
      logoUrl: "/manipal.png",
      start: "2017",
      end: "2021",
      description:
        `• GPA: 3.7/4.0 (8.26 CGPA)<br />
        • <b>Minor in Big Data</b>, Other courses: Machine Learning, Distributed Systems, Data Analytics, Data Warehousing, Pattern Recognition, Internet of Things<br />
        • <b>Technical Head - The Astronomy Club</b>: Led the Data Science Project, the Optical Telescope Project, and the Star Tracker Project
        `,
    },
    {
      school: "Montfort School",
      href: "https://montfortschooldelhi.in",
      degree: "Senior Secondary (CBSE)",
      logoUrl: "/montfort.png",
      start: "2005",
      end: "2017",
      description:
        `• Percentage: 93.8%<br />
        • <b>Subjects:</b> Physics, Chemistry, Mathematics, Computer Science, English
        `,
    },
  ],
  projects: [
    {
      title: "Applination",
      href: "https://applination.sanchitarora.me",
      dates: "2026 – Present",
      status: "Live app",
      description: "A job-application workspace that finds postings, scores them against your profile, and prepares tailored resumes and cover letters. I built the Python/FastAPI engine and Next.js interface, with per-user data isolation, encrypted provider keys, a tracker, interview preparation, and a Chrome autofill extension. Bring a cloud model or connect local Ollama. The guided demo uses a fictional candidate and simulated AI responses.",
      technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "LLMs", "Chrome Extension"],
      image: "/projects/applination.png",
      imageAlt: "Applination demo application tracker with scores, statuses, and deadlines",
      imageCaption: "Demo account with fictional application data.",
      links: [
        { type: "Live", href: "https://applination.sanchitarora.me", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/sanaro99/applination", icon: <Icons.github className="size-3" /> },
      ],
      video: undefined,
    },
    {
      title: "Trusten",
      href: "https://github.com/sanaro99/trusten",
      dates: "2025 – Present",
      status: "In development",
      description: "A consumer-trust auditing tool, evolved from DarkGuard. A headless browser scans pages and multi-step flows for manipulative interfaces, then pairs findings with a trust grade, annotated screenshots, recordings, and downloadable reports. I built deterministic and AI-assisted analysis, a dashboard, and a Chrome extension for checking the page you are browsing. Regulatory references help explain each finding and its possible implications.",
      technologies: ["TypeScript", "Bun", "Hono", "Puppeteer", "PostgreSQL", "Browser Extension", "LLMs"],
      image: "/projects/trusten.png",
      imageAlt: "Trusten dashboard with a scan form, trust grades, and recent scans",
      imageCaption: "Dashboard with sample scan history.",
      links: [
        { type: "Source", href: "https://github.com/sanaro99/trusten", icon: <Icons.github className="size-3" /> },
        { type: "Blog", href: "/blog/the-approve-button-illusion", icon: <Icons.globe className="size-3" /> },
      ],
      video: undefined,
    },
    {
      title: "Kalp",
      href: "https://github.com/sanaro99/kalp",
      dates: "2026 – Present",
      status: "In development",
      description: "A private daily journal connecting what you did with how you felt. I built an Expo/React Native app with a 24-hour activity timeline, focus check-ins, small changes to try, and weekly review. SQLite keeps the core journal on-device and available offline without an account. Insights show observation coverage and associations in your logs; missing answers stay unknown rather than becoming zeroes.",
      technologies: ["React Native", "Expo", "TypeScript", "SQLite", "Drizzle", "Local-first"],
      image: "/projects/kalp.jpg",
      imageAlt: "Kalp weekly review showing a focus score, recorded answer count, and a small change to try",
      imageCaption: "Web preview with test journal entries.",
      links: [
        { type: "Source", href: "https://github.com/sanaro99/kalp", icon: <Icons.github className="size-3" /> },
      ],
      video: undefined,
    },
    {
      title: "CoupleOGames",
      href: "https://github.com/sanaro99/coupleogames",
      dates: "2026 – Present",
      status: "In development",
      description: "Four games for two people spending time together or apart: Doodle Duo, Know Me Better, In Sync, and Clue Quest. I built synchronized play, hidden-answer reveals, reconnect handling, and a shared scorecard using React, Fastify, and Socket.IO. A Three.js cat brings the table to life. The project is under active development; public launch is on hold.",
      technologies: ["React", "TypeScript", "Fastify", "Socket.IO", "Three.js"],
      image: "/projects/coupleogames.png",
      imageAlt: "CoupleOGames sample table for Alex and Jamie with four game cards and an animated cat",
      imageCaption: "Sample table for Alex and Jamie.",
      links: [
        { type: "Source", href: "https://github.com/sanaro99/coupleogames", icon: <Icons.github className="size-3" /> },
      ],
      video: undefined,
    },
    {
      title: "Luggist",
      href: "https://luggist.sanchitarora.me",
      dates: "2025 – Present",
      status: "Live app",
      description: "An installable packing tracker that organizes trips into bags, cubes, and items, with checklists and packing progress. I built reactive IndexedDB storage, reusable templates, drag-and-drop organization, and offline support. The core tracker stores data in your browser and needs no account or AI connection. Optional AI tools send the requested trip or packing context to a configured provider to draft lists and suggest forgotten items.",
      technologies: ["Next.js", "TypeScript", "Dexie", "IndexedDB", "PWA", "LLMs"],
      image: "/projects/luggist.jpg",
      imageAlt: "Luggist sample weekend trip with a bag, packing checklist, and progress bar",
      imageCaption: "Sample trip created from a built-in template.",
      links: [
        { type: "Live", href: "https://luggist.sanchitarora.me", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/sanaro99/Luggist", icon: <Icons.github className="size-3" /> },
      ],
      video: undefined,
    },
    {
      title: "ASL Gloss & Non-manual Marker Research",
      href: "https://github.com/sanaro99/sign-lang-gen",
      dates: "Summer 2026",
      status: "Research",
      description: "UW independent-study work on translating English into ASL gloss and grammatical non-manual markers. I worked on a Stage 1 reimplementation and evaluation pipeline comparing fixed examples, FAISS retrieval, paragraph context, and their combination. The work examines data leakage, gloss conventions, and qualitative errors alongside automatic metrics. It is translation research, with no claim of a validated sign-language interpreter or complete video synthesis.",
      technologies: ["Python", "LLMs", "FAISS", "sentence-transformers", "Ollama", "Evaluation"],
      image: "/projects/asl-research.svg",
      imageAlt: "Research pipeline from English through example retrieval and context to gloss and non-manual markers, evaluated in four conditions",
      imageCaption: "Overview of the research pipeline.",
      links: [
        { type: "Source", href: "https://github.com/sanaro99/sign-lang-gen", icon: <Icons.github className="size-3" /> },
      ],
      video: undefined,
    },
    {
      title: "GenASL",
      href: "https://github.com/sanaro99/GenASL",
      dates: "2025 – Present",
      status: "Prototype",
      description: "An accessibility prototype exploring ASL overlays for YouTube. Earlier work chained retrieved signing clips; the current direction uses an LLM interpretation plan and retrieved motion primitives to drive a 3D avatar, including grammatical non-manual markers. I built the extension and Python pipeline foundations. The avatar system is still in build-out and has not been validated as a replacement for a human interpreter.",
      technologies: ["Python", "FastAPI", "LLMs", "FAISS", "FFmpeg", "Three.js"],
      image: "/projects/genasl.png",
      imageAlt: "GenASL prototype Chrome extension popup with overlay and gloss controls",
      imageCaption: "Extension interface from the earlier overlay prototype.",
      links: [
        { type: "Source", href: "https://github.com/sanaro99/GenASL", icon: <Icons.github className="size-3" /> },
      ],
      video: undefined,
    },
    {
      title: "Sanchit Cloud",
      href: "/blog/self-hosting",
      dates: "2025 – Present",
      status: "Personal infrastructure",
      description: "A self-hosted platform for storage, backups, virtual machines, and personal web applications. I built on TrueNAS and ZFS, then added container hosting, HTTPS routing through Cloudflare and Traefik, and GitHub Actions image builds. It now supports products such as Applination and Luggist. The work spans service deployment, persistent storage, monitoring, and operating applications beyond a local development machine.",
      technologies: ["TrueNAS", "ZFS", "Docker", "Traefik", "Cloudflare", "GitHub Actions", "Linux"],
      image: "/projects/trueNAS.png",
      imageAlt: "Server hardware used for the personal cloud project",
      imageCaption: undefined,
      links: [
        { type: "Blog", href: "/blog/self-hosting", icon: <Icons.globe className="size-3" /> },
      ],
      video: undefined,
    },
    {
      title: "NBT-Gen: Never-Before-Thought Generator",
      href: "https://github.com/sanaro99/NBT-Gen",
      dates: "2025 – Present",
      status: "Prototype",
      description: "A creativity experiment that takes a topic and a wildness setting, generates several ideas with Gemini, and uses Mistral as an independent comparative judge. I built the best-of-N pipeline, streamed progress, and retro web interface. The judge compares coherence, novelty, and surprise; an explicitly labeled heuristic fallback keeps provider failures visible. The scores guide selection rather than proving an idea has never been thought before.",
      technologies: ["Python", "FastAPI", "Gemini", "Mistral", "Jinja2", "SSE", "NES.css"],
      image: "/projects/nbt-gen.jpg",
      imageAlt: "NBT-Gen retro interface with a topic field and wildness slider",
      imageCaption: undefined,
      links: [
        { type: "Source", href: "https://github.com/sanaro99/NBT-Gen", icon: <Icons.github className="size-3" /> },
      ],
      video: undefined,
    },
    {
      title: "Fantasy Cricket",
      href: "https://fantasy-cricket-silk.vercel.app",
      dates: "April – May 2025",
      status: "Earlier project",
      imageCaption: undefined,
      imageAlt: "Fantasy Cricket",
      description:
        "Full-stack fantasy cricket platform serving 1,000+ users with real-time leaderboards, OAuth2, and Supabase Row-Level Security. Features context-aware AI match summaries using Gemini API with Google Search grounding, adapting to pre/live/post-match states. Currently supports IPL, with extensibility for other leagues.",
      technologies: [
        "Next.js",
        "Supabase",
        "Gemini API",
        "OAuth2",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanaro99/fantasy-cricket",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://fantasy-cricket-silk.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/projects/fantasy-cricket.png",
      video: undefined,
    },
    {
      title: "Mask Detector",
      href: "https://github.com/sanaro99/MaskDetector",
      dates: "Jan 2021",
      status: "Earlier project",
      imageCaption: undefined,
      imageAlt: "Mask Detector",
      description:
        "Real-time mask detection for edge devices (Raspberry Pi), using Haar Cascade for fast face detection with low latency.",
      technologies: [
        "Python",
        "OpenCV",
        "Haar Cascade",
        "TensorFlow",
        "Keras",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanaro99/MaskDetector",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/mask_detector.gif",
      video: undefined,
    },
    {
      title: "Hacker NewsPaper",
      href: "https://github.com/sanaro99/HackerNewspaper",
      dates: "May 2020",
      status: "Earlier project",
      imageCaption: undefined,
      imageAlt: "Hacker NewsPaper",
      description:
        "Hacker News' Ask HN column in a Newspaper-style UI using ReactJS, NodeJS, and Hacker News API.",
      technologies: [
        "ReactJS",
        "NodeJS",
        "Hacker News API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanaro99/HackerNewspaper",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/hackernewspaper.png",
      video: undefined,
    },
    {
      title: "Sky Pixel detection in outdoor imagery",
      href: "https://github.com/sanaro99/SkyPixel_NN",
      dates: "January 2020",
      status: "Earlier project",
      imageCaption: undefined,
      imageAlt: "Sky Pixel detection in outdoor imagery",
      description:
        "Developed a neural network model using PSPNet and TensorFlow to segment sky pixels in images for enhanced outdoor image analysis.",
      technologies: [
        "TensorFlow",
        "PSPNet",
        "Neural Networks",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanaro99/SkyPixel_NN",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/skypixel.jpg",
      video: undefined,
    },
    {
      title: "Spielen Android app – Find & Play Sports Nearby",
      href: "https://github.com/rahul0101/Spielen",
      dates: "March - June 2020",
      status: "Earlier project",
      imageCaption: undefined,
      imageAlt: "Spielen Android app \u2013 Find & Play Sports Nearby",
      description:
        "Spielen is an Android app that helps users find, host, and join local sports events with features like map-based location, event reminders, and direct contact with hosts.",
      technologies: [
        "Java",
        "Android Studio",
        "Firebase",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rahul0101/Spielen",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/spielen.png",
      video: undefined,
    },
    {
      title: "Predicting Star/Galaxy/Quasar using NN",
      href: "https://github.com/sanaro99/SDSS_NN",
      dates: "January 2019",
      status: "Earlier project",
      imageCaption: undefined,
      imageAlt: "Predicting Star/Galaxy/Quasar using NN",
      description:
        "Developed a neural network model in TensorFlow and Keras for classifying a given set of parameters into stars, galaxies, and quasars, with a Tkinter GUI",
      technologies: [
        "TensorFlow",
        "Keras",
        "Tkinter",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanaro99/SDSS_NN",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/sdss_nn.png",
      video: undefined,
    },
    {
      title: "Snake game on terminal",
      href: "https://github.com/sanaro99/Snake_cpp",
      dates: "May 2015",
      status: "Earlier project",
      imageCaption: undefined,
      imageAlt: "Snake game on terminal",
      description:
        "A simple Snake game implemented in C++ using 'time' and 'windows' libraries",
      technologies: [
        "C++",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanaro99/Snake_cpp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/snake.gif",
      video: undefined,
    }
  ],
  achievements: [
    {
      title: "2nd Place, AIMS Product Competition",
      date: "February 2026",
      description: "Runner-up for engineering an AI-integrated campus marketplace MVP with behavioral TrustScores, verified user identities, and built-in logistics.",
      image: undefined,
      video: undefined,
    },
    {
      title: "Quarterly Star Award",
      date: "April 2023",
      description: "Recognised with the Quarterly Star Award for exceptional contributions in automation, observability, and operational excellence at UBS.",
      image: "/achievements/star-award.png",
      video: undefined,
    },
    {
      title: "Engineering Excellence Award",
      date: "August 2022",
      description: "Awarded for outstanding performance in incident response, observability dashboards, and people-and-culture contributions at UBS.",
      image: "/achievements/excellence-award.jpg",
      video: undefined,
    },
  ],

  // Online courses & certifications section
  courses: [
    {
      name: "UBS Certified Engineer — Software Engineer",
      url: undefined,
      date: "June 2025",
      image: undefined,
      issued_by: "UBS",
    },
    {
      name: "Azure Cloud Fundamentals (AZ-900)",
      url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
      date: "June 2025",
      image: undefined,
      linkLabel: "Certification details",
      issued_by: "Microsoft",
    },
    {
      name: "Azure AI Fundamentals (AI-900)",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/sanchitarora/555364719FD9C893?sharingId=CC2941D544480702",
      date: "November 2024",
      image: "/courses/azure-ai.png",
      issued_by: "Microsoft",
    },
    {
      name: "Amelia AIOps Platform Fundamentals",
      url: "/courses/amelia.png",
      date: "October 2024",
      image: "/courses/amelia.png",
      issued_by: "Amelia",
    },
    {
      name: "Certified BigPanda Operator",
      url: "https://www.credly.com/badges/d150ac16-af32-4cb2-a10d-e1ee7f0f0f8e",
      date: "October 2024",
      image: "/courses/bigpanda.png",
      issued_by: "BigPanda",
    },
    {
      name: "Introduction to Microsoft Azure Cloud Services",
      url: "https://coursera.org/share/402506801b6b14edf95a51a7b0dc701a",
      date: "December 2022",
      image: "/courses/azure-cloud.png",
      issued_by: "Coursera",
    },
    {
      name: "Machine Learning with Big Data",
      url: "https://www.coursera.org/account/accomplishments/records/5NLL6SWBPYGQ",
      date: "April 2020",
      image: "/courses/machine-learning.png",
      issued_by: "University of California, San Diego",
    },
    {
      name: "Natural Language Processing in TensorFlow",
      url: "https://www.coursera.org/account/accomplishments/records/ZVBGAQYQAKJV",
      date: "November 2020",
      image: "/courses/nlp.png",
      issued_by: "deeplearning.ai",
    },
    {
      name: "Responsive Web Design",
      url: "https://coursera.org/share/a7a7410a98aff11fa108269c60cd4ad6",
      date: "June 2019",
      image: "/courses/web-design.png",
      issued_by: "University of London",
    },
    {
      name: "Neural Networks & Deep Learning",
      url: "https://coursera.org/share/e1fad2a7801809937bb2ed85098a4ff5",
      date: "January 2019",
      image: "/courses/nn-dl.png",
      issued_by: "deeplearning.ai",
    },
    {
      name: "Technical Support Fundamentals",
      url: "https://coursera.org/share/cb16d6445e2aa1154a4d92ae600f9eff",
      date: "June 2018",
      image: "/courses/tech-support.png",
      issued_by: "Google",
    }
  ],
} as const;
