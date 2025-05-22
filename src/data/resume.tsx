import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sanchit Arora",
  initials: "SA",
  url: "https://sanchitarora.in",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Software Engineer at UBS Investment Bank",
  summary:
    "I bring a strong mix of full-stack development and AI skills, focused on solving real problems with clean, reliable solutions. From LLM-powered tools to intelligent automation, my work is driven by clarity, speed, and impact: reducing manual effort, simplifying complexity, and enhancing system reliability.",
  avatarUrl: "/me.png",
  skills: [
    "Artificial Intelligence",
    "React",
    "Flask",
    "Git",
    "Python",
    "Azure",
    "Unix",
    "SQL",
    "Splunk",
    "AppDynamics",
    "BigPanda",
    "Amelia",
    "Next.js",
    "Typescript",
    "Node.js",  
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "Big Data",
    "Android Studio",
    "Machine Learning",
    "Django",
    "Keras",
    "Pandas",
    "TensorFlow",
    "MATLAB",
    "HTML/CSS",
    "ReactJS",
    "Snowflake",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sanchitarora@outlook.in",
    tel: "+91 9741402760",
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
        url: "mailto:sanchitarora@outlook.in?subject=Saw your portfolio",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "UBS Investment Bank",
      href: "https://www.ubs.com",
      badges: [],
      location: "Pune, India",
      title: "Tech Site Reliability Engineer - II",
      logoUrl: "/ubs.png",
      start: "July 2021",
      end: "Present",
      description:
      `• Proactively resolve critical production issues and drive operational stability through automation and tool development<br />
      • Engineered internal web tools using ReactJS, Python (Flask), and SQL, reducing manual effort by \~80 hours/month<br />
      • Built a huddle management app that decreased meeting frequency by 30% and improved tracking of open issues<br />
      • Developed a telemetry tool to streamline data aggregation and app health monitoring, cutting detection time by 70%<br />
      • Enhanced observability by building dashboards and alerts in Splunk and AppDynamics, boosting incident response efficiency by 50%<br />
      • Tech Stack: ReactJS, NodeJS, Python (Flask), SQL, Azure, Unix, Autosys, Automation Anywhere
      `,
    },
    {
      company: "UBS Group Functions",
      badges: [],
      href: "https://www.ubs.com",
      location: "Pune, India",
      title: "Group Technology Intern",
      logoUrl: "/ubs.png",
      start: "March 2021",
      end: "July 2021",
      description:
        "Developed models for the business process workflows of twenty Standard Operating Procedures (SOPs) used by the operations team in processing SWIFT messages",
    },
    {
      company: "India Young Foundation",
      href: "https://indiayoungfoundation.org/",
      badges: [],
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
      badges: [],
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
      school: "Manipal Institute of Technology",
      href: "https://www.manipal.edu/mit/program-list/btech/btech-information-technology.html",
      degree: "B.Tech. Information Technology",
      logoUrl: "/manipal.png",
      start: "2017",
      end: "2021",
    },
    // {
    //   school: "Montfort School",
    //   href: "https://montfortschooldelhi.in",
    //   degree: "Senior Secondary School",
    //   logoUrl: "/montfort.png",
    //   start: "2005",
    //   end: "2017",
    // },
  ],
  projects: [
    {
      title: "Fantasy Cricket",
      href: "/projects/fantasy-cricket-login.png",
      dates: "April - May 2025",
      active: true,
      description:
        "Fantasy Cricket web app built with Next.js, Tailwind CSS, and Supabase. Features OAuth & email login, match/player selection, and leaderboards. Currently supports IPL, with extensibility for other leagues.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "OAuth"
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
      image: "/projects/fantasy-cricket-login.png",
      video: undefined,
    },
    {
      title: "Personal NAS with TrueNAS SCALE",
      href: "/projects/trueNAS.png",
      dates: "May 2025",
      active: true,
      description:
        "Built a self-hosted NAS using an old laptop and TrueNAS SCALE for private cloud storage, daily phone backups, photo hosting, virtual machines, and remote access.",
      technologies: [
        "TrueNAS SCALE",
        "ZFS",
        "SMB (Samba)",
        "Linux Scripting",
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
        "Real‑time facial mask detection model using Haar Cascade classifiers to verify correct mask usage.",
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
        "Hacker News' Ask HN column in a Newspaper‑style UI using ReactJS, NodeJS, and Hacker News API.",
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
      title: "Quarterly Star Award",
      date: "April 2023",
      description: "Recognised with the Quarterly Star Award for exceptional contributions to UBS in the first quarter of 2023.",
      image: "/achievements/star-award.png",
      video: undefined,
    },
    {
      title: "Engineering Excellence Award",
      date: "August 2022",
      description: "Awarded with Engineering Excellence for being among the top performers completing a year of full‑time employment at UBS.",
      image: "/achievements/excellence-award.png",
      video: undefined,
    },
  ],

  // Online courses section
  courses: [
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
