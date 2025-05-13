import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sanchit Arora",
  initials: "SA",
  url: "https://sanchitarora.in",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "SRE-II at UBS Investment Bank",
  summary:
    "I am a skilled Software Development Engineer and Site Reliability Engineer with expertise in Python, Unix, ReactJS, SQL, and various other technologies. Currently working at UBS Investment Bank, I have a strong background in developing efficient solutions and have made significant contributions in automation and operational stability. With experience in both frontend and backend technologies, I am adept at creating robust applications and improving workflow efficiency.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "Android Studio",
    "Django",
    "Keras",
    "Pandas",
    "TensorFlow",
    "Flask",
    "MATLAB",
    "HTML/CSS",
    "ReactJS",
    "Snowflake",
    "Git",
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
      title: "Mask Detector",
      href: "/mask_detector.gif",
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
      image: "/mask_detector.gif",
      video: undefined,
    },
    {
      title: "Hacker NewsPaper",
      href: "/hackernewspaper.png",
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
      image: "/hackernewspaper.png",
      video: undefined,
    },
    {
      title: "Sky Pixel detection in outdoor imagery",
      href: "/skypixel.jpg",
      dates: "April 2023 - September 2023",
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
      image: "/skypixel.jpg",
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
    // {
    //   title: "Appreciation through Kudos",
    //   date: "",
    //   description: "Accrued appreciation through the Kudos platform from stakeholders and peers at UBS.",
    //   image: "/achievements/kudos.png",
    //   video: undefined,
    // }
  ],

  // Online courses section
  courses: [
    {
      name: "Introduction to Microsoft Azure Cloud Services",
      url: "https://coursera.org/share/402506801b6b14edf95a51a7b0dc701a",
      date: "December 2022",
      image: "/courses/azure-cloud.png"
    },
    {
      name: "Responsive Web Design by University of London",
      url: "https://coursera.org/share/a7a7410a98aff11fa108269c60cd4ad6",
      date: "June 2019",
      image: "/courses/web-design.png"
    },
    {
      name: "Neural Networks & Deep Learning by deeplearning.ai",
      url: "https://coursera.org/share/e1fad2a7801809937bb2ed85098a4ff5",
      date: "January 2019",
      image: "/courses/nn-dl.png"
    },
    {
      name: "Technical Support Fundamentals by Google",
      url: "https://coursera.org/share/cb16d6445e2aa1154a4d92ae600f9eff",
      date: "June 2018",
      image: "/courses/tech-support.png"
    }
  ],

  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
