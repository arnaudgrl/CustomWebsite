/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arnaud Gariel",
  title: "Welcome, I'm Arnaud",
  subTitle: 
    "A passionate Software Developer having an experience of building softwares with Python / Java / C# and C."
  ,
  resumeLink:
    "https://drive.google.com/file/d/1Q_9QmV4uXwSUeKECYyNrmPSw2kpYKv3I/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arnaudgrl",
  linkedin: "https://www.linkedin.com/in/arnaud-gariel/",
  gmail: "arnaud.gariel@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEVELOP SOFTWARE AND APPLICATIONS TO EXPLORE NEW TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Proficient in designing and developing software"),
    emoji(
      "⚡ Expertise in containerization and automation of deployment processes "),
    emoji("⚡ Experienced in creating and managing databases")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-hashtag"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};
const techStack = {}

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "INPG Phelma & INPG Ensimag",
      logo: require("./assets/images/Phelma.png"),
      subHeader: "Master of Science in Computer Engineering",
      duration: "September 2021 - August 2023",
      desc: "Followed multiple courses including:",
      descBullets: [
        "Principles of Database Management Systems",
        "Principles of the Internet",
        "AI for IoT",
        "Introduction to Real-Time Operating Systems",
        "Graphs and Applications",
        "Algorithmics and Programming",
        "..."
      ]
    },
    {
      schoolName: "Ghent University",
      logo: require("./assets/images/Ghent.png"),
      subHeader: "International Exchange Program",
      duration: "September 2022 - February 2023",
      desc: "Followed computer science courses :",
      descBullets: [
      	"Machine Learning",
      	"AI seminar",
      	"Blockchain Technologies and Applications",
      	"IoT",
        "..."
      	
      ,]
    },
    {
      schoolName: "INPG Phelma",
      logo: require("./assets/images/Phelma.png"),
      subHeader: "Bachelor in Electrical Engineering",
      duration: "September 2020 - August 2021",
      desc: "",
      descBullets: [

      ]
    },
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Intern",
      company: "Airbus Defence and Space",
      companylogo: require("./assets/images/Airbus-Logo.png"),
      date: "February 2023 – August 2023",
      desc: "",
      descBullets: [
	"Design of an internal software for cataloging satellite and aerial images, taking into account user needs.",
	"Creation and validation of proof of concepts (POCs).",
	"Containerization of the software with Docker.",
	"Automation of the deployment process for new versions of the software (CI/CD)."
	]
    },
    {
      role: "Data Scientist Intern",
      company: "Ministère des Armées",
      companylogo: require("./assets/images/Ministère_des_Armées.png"),
      date: "May 2022 – August 2022",
      desc: "",
      descBullets: [
      	"Creation of a database intended to collect combat exercise data (SICS) for the purpose of training an artificial intelligence.",
      	"Analysis of the data and the development of a data management application available across the entire intra-defense network."
      ]
      
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HELPED TO CREATE",
  projects: [
    {
      image: require("./assets/images/alga.png"),
      projectName: "Mobile App",
      projectDesc: "Mental Calculation App",
      footerLink: [
        {
          name: "Visit repository",
          url: "https://github.com/arnaudgrl/alga_calcul_mental"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bee.jpg"),
      projectName: "Connected Bee Hive",
      projectDesc: "API and web page for a connect bee hive.",
      footerLink: [
        {
          name: "Visit repository",
          url: "https://github.com/arnaudgrl/Projet-Ruche-Connectee"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ensimag.png"),
      projectName: "Compiler for a sublanguage of Java",
      projectDesc: "Four full weeks of teamwork involving five students with the objective of building a complete compiler for a small object-oriented language.",
      footerLink: [
        {
          name: "Visit repository",
          url: "https://github.com/arnaudgrl/Projet-Genie-Logiciel"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications "),
  subtitle:
    "Certifications that I have done or that I am currently working on!",

  achievementsCards: [
    
    {
      title: "Cloud Digital Leader",
      subtitle:
        "A Cloud Digital Leader can articulate the capabilities of core cloud products and services and understand how they benefit organizations. ",
      image: require("./assets/images/google-cloud-logo-0.png"),
      imageAlt: "Google Cloud Logo",
      footerLink: [
        {
          name: "View Google Digital Leader Path",
          url: "https://www.cloudskillsboost.google/paths/9"
        }
      ]
    },
    {
      title: "Cloud Engineer",
      subtitle:
        "A Cloud Engineer plans, configures, sets up, and deploys cloud solutions.",
      image: require("./assets/images/google-cloud-logo-0.png"),
      imageAlt: "Google Cloud Logo",
      footerLink: [
        {
          name: "View Google Cloud Engineer Path",
          url: "https://www.cloudskillsboost.google/paths/11"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me "),
  subtitle:
    "Discuss an opportunity or a project? My inbox is open for all.",
  number: "+33-0645019721",
  email_address: "arnaud.gariel@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
