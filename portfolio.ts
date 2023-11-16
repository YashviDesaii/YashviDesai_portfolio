import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Yashvi Desai',
  title: "Hey there, I'm Yashvi!",
  description:
    "I am a Software Developer pursuing my Master's degree in Software Engineering at San Jose State University. I like building solutions to solve real-world problems.",
  resumeLink:
    'https://drive.google.com/file/d/1N0jWrumIUDeAGbZK2jsfd5s07xkN3k53/view?usp=drive_link',
};

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/yashvidesai999',
  github: 'https://github.com/YashviDesaii',
};

export const skillsSection: SkillsSectionType = {
  title: 'My experience',
  subTitle: 'A tech enthusiast looking to make a real world imapact through technology',
  data: [
    {
      title: 'Software Engineer', //figure out how to add a hyperlink for company name
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Developed a system that delivers 500 GB of data while accommodating dynamic client requirements leveraging Microsoft Azure Blob Storage and creating RESTful APIs in C#'
        ),
        emoji('⚡ Reduced processing time for fetching data from 5s to 1s by optimizing database schema, resulting in 20% cost reduction'),
        emoji('⚡ Provided easy access of data to clients by implementing stored procedures, enhancing indexing strategies, and designing UI in Angular for a web portal based on ASP.Net Core'),
        emoji('⚡ Improved reliability of ‘Analytics Portal’ by designing test cases and increasing overall coverage by 14%'),
      ],
      softwareSkills: [
        {
          skillName: 'C-Sharp',
          iconifyTag: 'vscode-icons:file-type-csharp',
        },
        {
          skillName: 'ASP Dot Net Core',
          iconifyTag: 'mdi:web',
        },
        {
          skillName: 'Angular',
          iconifyTag: 'logos:angular',
        },
        {
          skillName: 'MySQL',
          iconifyTag: 'vscode-icons:file-type-mysql',
        },
        {
          skillName: 'Microsoft Azure Blog Storage',
          iconifyTag: 'logos:microsoft',
        },
      ],
    },
    {
      title: 'Software Engineering Intern', //figure out how to add a hyperlink for company name
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Upgraded an Android application from version 7 to 10 and fine-tuned it by making a notification channel for push notifications and retrieving user permissions on run-time using Java and Android Jetpack Components, increasing user engagement by 20%'),
        emoji(
          '⚡ Implemented Role-Based Authentication for 3 different authorization levels, ensuring security and data integrity'
        ),
        emoji(
          '⚡ Modernized the application with features such as Geolocation, Asset Management and conducted testing and quality assurance achieving a 99% crash-free rate'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'Android',
          iconifyTag: 'logos:android',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
      ],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       iconifyTag: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       iconifyTag: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       iconifyTag: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       iconifyTag: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       iconifyTag: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

// export const SkillBars: SkillBarsType[] = [
//   {
//     Stack: 'Frontend/Design', //Insert stack or technology you have experience in
//     progressPercentage: '90', //Insert relative proficiency in percentage
//   },
//   {
//     Stack: 'Backend',
//     progressPercentage: '70',
//   },
//   {
//     Stack: 'Programming',
//     progressPercentage: '60',
//   },
// ];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'San Jose State University',
    location: 'San Jose, CA, USA',
    subHeader: 'Master of Science in Software Engineering',
    graduation: 'Spring 2024',
    //desc: 'Participated in the research of XXX and published 3 papers.',
    gpa: '3.7',
    descBullets: 'Related Courses: Web & Mobile Application Development, Data Mining, Enterprise Distributed Systems, Software Engineering Processes',
  },
  {
    schoolName: 'Sardar Patel Institute of Technology',
    location: 'Mumbai, India',
    subHeader: 'Bachelor of Technology in Information Technology',
    graduation: 'Spring 2021',
    //desc: 'Participated in the research of XXX and published 3 papers.',
    gpa: '3.65',
    descBullets: 'Related Courses: Object Oriented Programming, Database Management, Data Structures and Algorithms, Machine Learning',
    
  },
];

export const experience: ExperienceType[] = [
  {
    //role: 'Frontend Developer',
    projectName: 'ConnectX: Virtual Event Platform',
    companyLogo: '/img/icons/common/virtualEventPlatform.jpeg',
    //date: 'Apr 2022 – Jun 2022',
    //desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
    github: 'https://github.com/YashviDesaii?tab=repositories',
    descBullets: [
      emoji('⚡ Led the development of a full-stack application designed to provide organizations with the capacity to host and manage conferences or exhibitions in a virtual environment using React and Node.js for development and MongoDB for storing essential data'),
      emoji ('⚡ Handled real-time interactions such as chat, live Q&A sessions, and instant notifications using an event-driven data pipeline utilizing Apache Kafka, providing an engaging user experience'),
      emoji('⚡ Divided the platform into self-contained micro-services and used Docker to containerize and deploy the backend components'),
      emoji('⚡ Utilized Kubernetes as an orchestration tool to ensure automated scaling and high availability for events with high attendee load'),
    ]
  },
  {
    //role: 'API Engineer',
    projectName: 'OfficeFlex: Agile Work-In-Office Reservation System',
    companyLogo: '/img/icons/common/inOfficeReservationSystem.jpeg',
    //date: 'Jan 2022 – Mar 2022',
    //desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
    github: 'https://github.com/YashviDesaii/275-term-Project',
    descBullets: [
      emoji('⚡ Architectured an end-to-end development of a cloud-based Work-In Office Reservation System utilizing Spring framework for backend and leveraging MVC, ORM, and transaction methodologies'),
      emoji ('⚡ Integrated OAuth/OpenID support for Google and local account setup with email verification into an intuitive ReactJS frontend for user registration and authentication'),
      emoji('⚡ Built a comprehensive system with manager-defined policies, including custom rules for scheduling and bulk operations'),
      emoji('⚡ Leveraged RDS and deployed the application on AWS EC2 instances, employing a load balancer for high availability'),
    ]
  },
  {
    //role: 'Full Stack Developer',
    projectName: 'PUBGProPredict: PlayerUnknown\'s Battlegrounds Placement Predictor',
    companyLogo: '/img/icons/common/pubg.jpeg',
    //date: 'Sept 2021 - Oct 2021',
    //desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
    github: 'https://github.com/YashviDesaii/CMPE255-Final-Project',
    descBullets: [
      emoji('⚡ Conducted exploratory data analysis and feature engineering using Python libraries to identify key features and deliver valuable insights into player performance and winning strategies based on anonymized PUBG game data from 65,000 games'),
      emoji ('⚡ Analyzed and compared the results of 5 regression models to predict player placement in the game'),
      emoji('⚡ Ascertained the most optimal model and fine-tuned it to achieve a minimum mean squared error of 0.008'),
    ]
  },
  {
    //role: 'Backend Developer',
    projectName: 'Quackademics: A Modernized Academics Platform',
    companyLogo: '/img/icons/common/quackademics.png',
    //date: 'Sept 2021',
    //desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
    github: 'https://github.com/YashviDesaii/LAHacks2023',
    descBullets: [
      emoji('⚡ add description here')
    ]
  },
  {
    //role: 'Backend Developer',
    projectName: 'VirtualCommerce: Immersive 3D E-Commerce Experience',
    companyLogo: '/img/icons/common/virtualEcommerce.jpeg',
    //date: 'Sept 2021',
    //desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
    github: 'https://ieeexplore.ieee.org/document/9545009',
    descBullets: [
      emoji('⚡ Rendered 3D view of E-Commerce products like furniture, apparel, and accessories to present an in-person experience whilst shopping online by developing an Android application'),
      emoji ('⚡ Determined the most efficient technique for rendering objects onto a flat surface by comparing 4 rendering algorithms and created over 200 3D objects using Unity 3D based on the chosen algorithm'),
      emoji('⚡ Authored and published a research paper for the same in IEEE Xplore'),
    ]
  },
];

// export const projects: ProjectType[] = [
//   {
//     name: 'developer-portfolio',
//     desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
//     github: 'https://github.com/1hanzla100/developer-portfolio',
//     link: 'https://developer-portfolio-1hanzla100.vercel.app/',
//   },
//   {
//     name: 'AtlasMart',
//     desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
//     github: 'https://github.com/1hanzla100/Django-React-Marketplace',
//   },
//   {
//     name: 'Technota (Forum)',
//     desc: 'Get hands-on experience in technical skills with Technota',
//     github: 'https://github.com/1hanzla100/django-react-forum',
//   },
//   {
//     name: 'Shopaza (Ecommerce)',
//     desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
//     github: 'https://github.com/1hanzla100/Django-ecommerce',
//   },
// ];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Yashvi Desai',
  // description:
  //   'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Yashvi Desai',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://yashvi-desaii-portfolio.vercel.app/',
  keywords: [
    // 'Hanzla',
    // 'Hanzla Tauqeer',
    // '@1hanzla100',
    // '1hanzla100',
    // 'Portfolio',
    // 'Hanzla Portfolio ',
    // 'Hanzla Tauqeer Portfolio',
  ],
};
