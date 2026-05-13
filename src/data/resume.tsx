import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sanchit Arora",
  initials: "SA",
  url: "https://sanchitarora.me",
  location: "Seattle, WA",
  locationLink: "https://www.google.com/maps/place/seattle",
  description:
    "MS Student at University of Washington | Former Sr. Software Engineer at UBS",
  summary:
    "Software Engineer with 4+ years at UBS designing AI-driven automation, full-stack systems, and reliability tooling. Built an LLM-powered automation platform that cut setup time 95% across 20 engineering teams. Currently pursuing an MS in Information Management at the University of Washington (3.98 GPA) with specializations in Artificial Intelligence and Product Management.",
  avatarUrl: "/me.jpg",
  skills: [
    "Artificial Intelligence",
    "React",
    "Svelte",
    "Django",
    "Flask",
    "FastAPI",
    "Git",
    "Python",
    "JavaScript",
    "TypeScript",
    "Shell",
    "Azure",
    "Unix",
    "SQL",
    "Splunk",
    "AppDynamics",
    "BigPanda",
    "Amelia",
    "Next.js",
    "Node.js",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "Big Data",
    "Android Studio",
    "Machine Learning",
    "LLMs",
    "RAG",
    "LangChain",
    "LangGraph",
    "NLP",
    "Keras",
    "Pandas",
    "TensorFlow",
    "PyTorch",
    "Transformers",
    "FAISS",
    "sentence-transformers",
    "MATLAB",
    "HTML/CSS",
    "ReactJS",
    "Snowflake",
    "Supabase",
    "OAuth",
    "CI/CD",
    "System Design",
    "Agile",
    "Unit Testing",
    "NGINX",
    "TrueNAS",
    "Monitoring",
    "Incident Management",
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
      company: "UBS Investment Bank",
      href: "https://www.ubs.com",
      badges: ["AI", "Automation", "Azure", "Python", "Unix", "SQL", "Splunk", "Git", "AppDynamics", "BigPanda", "Amelia", "Docker", "Kubernetes", "ReactJS"],
      location: "Pune, India",
      title: "Sr. Software Engineer",
      logoUrl: "/ubs.png",
      start: "March 2024",
      end: "August 2025",
      description:
        `• Led AutoFlow development — an LLM-powered tool converting natural language to Amelia automation workflows using GPT-4.1, LangGraph, and FastAPI with React frontend; reduced automation setup time by 95% across 20 engineering teams<br />
      • Launched RAG chatbot using Azure AI Search indexing 5 years of team emails (~50K docs), delivering automated incident diagnosis and step-by-step resolutions for production issues<br />
      • Engineered config-driven monitoring dashboard with dynamic UI generation, aggregating server health and ticket data for 30+ teams; reduced MTTD by 60%<br />
      • Mentored junior engineers through transition into high-stakes production environments; authored onboarding docs adopted by 3+ teams<br />
      • Partnered with product and ops stakeholders to scope, design, and ship AI tooling within regulatory, cost, and latency constraints
      `,
    },
    {
      company: "UBS Investment Bank",
      href: "https://www.ubs.com",
      badges: ["Automation", "Splunk", "AppDynamics", "Python", "Unix", "SQL", "Docker", "Kubernetes"],
      location: "Pune, India",
      title: "Software Engineer (Executive Employee)",
      logoUrl: "/ubs.png",
      start: "July 2021",
      end: "March 2024",
      description:
        `• Automated 20+ recurring incident types and operational requests using Amelia IPSoft for 300+ internal users, saving 200+ engineering hours monthly<br />
      • Built shift handover platform tracking deliverables and workload across regional shifts, cutting handoff time by 40% with manager dashboards<br />
      • Created observability dashboards in Splunk and AppDynamics monitoring 200+ microservices, reducing incident detection time by 60% with proactive alerts<br />
      • Managed incident response for 5 Tier-1 collateral applications processing $10B+ in daily transactions, maintaining 99.8% uptime through root-cause analysis and post-incident reviews<br />
      • Earned Engineering Excellence Award (Aug 2022) and Quarterly Star Award (Apr 2023) for contributions to automation, observability, and operational excellence
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
      title: "DarkGuard / Trusten",
      href: "/projects/darkguard.png",
      dates: "2025 – Present",
      active: true,
      description:
        "Browser extension that scans any website for dark patterns, grades it A–F on honesty, and maps every finding to the specific laws it may violate. Built with a hybrid rule-based + multi-model AI detection engine covering 24 manipulation categories across 10 analysis modules, with a false positive rate below 3%. Includes a deep scan engine that walks multi-step user flows autonomously, capturing screenshot evidence at each step. 118 automated tests, regulatory mapping to 14 international frameworks (FTC Act, EU DSA, GDPR).",
      technologies: [
        "JavaScript",
        "Browser Extension",
        "NLP",
        "LLMs",
        "DOM Analysis",
        "REST API",
      ],
      links: [
        {
          type: "Blog",
          href: "/blog/the-approve-button-illusion",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/darkguard.png",
      video: undefined,
    },
    {
      title: "GenASL: Generative ASL Pipeline",
      href: "/projects/genasl.png",
      dates: "2025",
      active: true,
      description:
        "End-to-end AI pipeline generating Picture-in-Picture American Sign Language overlays for YouTube videos. Translates English transcripts to syntactically correct ASL gloss sequences using LLMs (not word-for-word — ASL has its own grammar). Clip-chaining system maps gloss to 2,000+ video assets via FAISS + sentence-transformer embeddings, compositing final outputs with FFmpeg.",
      technologies: [
        "Python",
        "LLMs",
        "FAISS",
        "sentence-transformers",
        "FFmpeg",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanaro99/GenASL",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/genasl.png",
      video: undefined,
    },
    {
      title: "Fantasy Cricket",
      href: "/projects/fantasy-cricket.png",
      dates: "April – May 2025",
      active: true,
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
      title: "NBT-Gen: Never-Before-Thought Generator",
      href: "/projects/nbt-gen.png",
      dates: "2025",
      active: true,
      description:
        "FastAPI pipeline that inverts assumptions about a topic and generates counterintuitive ideas via Gemini. Features automated quality scoring with Mistral and a NES.css retro UI with a user-tunable 'wildness' slider for model temperature.",
      technologies: [
        "FastAPI",
        "Gemini API",
        "Mistral API",
        "Jinja2",
        "NES.css",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanaro99/NBT-Gen",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/nbt-gen.png",
      video: undefined,
    },
    {
      title: "Global Personal Cloud",
      href: "/projects/trueNAS.png",
      dates: "2025 – Present",
      active: true,
      description:
        "Self-hosted private cloud with ZFS-backed storage, automated remote backups, and VM hosting. Cross-continent NGINX architecture with read/write splitting: reads served from the geographically closer node (Seattle), writes routed to Delhi as the consistency primary, with ~200ms cross-Pacific ZFS replication.",
      technologies: [
        "TrueNAS",
        "ZFS",
        "NGINX",
        "Linux",
        "Networking",
      ],
      links: [
        {
          type: "Blog",
          href: "/blog/self-hosting",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/trueNAS.png",
      video: undefined,
    },
    {
      title: "Mask Detector",
      href: "/projects/mask_detector.gif",
      dates: "Jan 2021",
      active: true,
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
      href: "/projects/hackernewspaper.png",
      dates: "May 2020",
      active: true,
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
      href: "/projects/skypixel.jpg",
      dates: "January 2020",
      active: true,
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
      href: "/projects/spielen.png",
      dates: "March - June 2020",
      active: true,
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
      href: "/projects/sdss_nn.png",
      dates: "January 2019",
      active: true,
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
      href: "/projects/snake.gif",
      dates: "May 2015",
      active: true,
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
      image: "/achievements/aims-competition.png",
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
      url: "/courses/ubs-certified.png",
      date: "June 2025",
      image: "/courses/ubs-certified.png",
      issued_by: "UBS",
    },
    {
      name: "Azure Cloud Fundamentals (AZ-900)",
      url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
      date: "June 2025",
      image: "/courses/azure-cloud-az900.png",
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
