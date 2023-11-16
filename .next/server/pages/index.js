"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./portfolio.ts + 1 modules
var portfolio = __webpack_require__(805);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/SEO.tsx




function SEO() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: portfolio/* seoData.author */.hD.author
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: portfolio/* seoData.keywords.join */.hD.keywords.join(", ")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: portfolio/* seoData.image */.hD.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:url",
                content: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:image",
                content: portfolio/* seoData.image */.hD.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "Index"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/manifest.json"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "./favicon.png"
            })
        ]
    });
}
// SEO.prototype = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     url: PropTypes.string,
//     keywords: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
// };
/* harmony default export */ const components_SEO = (SEO);

;// CONCATENATED MODULE: external "@emailjs/browser"
const browser_namespaceObject = require("@emailjs/browser");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser_namespaceObject);
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(981);
;// CONCATENATED MODULE: ./components/Alerts.tsx



const Alert = ({ message , color , icon  })=>{
    return(// this should reappear every time the user clicks on the button
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.UncontrolledAlert, {
        color: color,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "alert-inner--icon",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: icon
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "alert-inner--text",
                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: message
                })
            })
        ]
    }));
};
/* harmony default export */ const Alerts = (Alert);

;// CONCATENATED MODULE: ./components/ContactUs.tsx






const ContactUs = ()=>{
    const form = (0,external_react_.useRef)(null);
    const [alert, setAlert] = (0,external_react_.useState)(null);
    const successAlert = {
        color: "success",
        icon: "ni ni-like-2",
        message: " Your message has been sent successfully!"
    };
    const errorAlert = {
        color: "danger",
        icon: "ni ni-bell-55",
        message: " Oops! Something went wrong. Please try again later."
    };
    const sendEmail = (e)=>{
        e.preventDefault();
        console.log("submitting");
        console.log(form.current);
        const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey && form.current) {
            browser_default().sendForm(emailJsServiceId, emailJsTemplateId, form.current, emailJsPublicKey).then((result)=>{
                console.log(result.text);
                setAlert(successAlert);
            }, (error)=>{
                console.log(error.text);
                setAlert(errorAlert);
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "section section-lg section-shaped",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                ref: form,
                onSubmit: sendEmail,
                children: [
                    alert && /*#__PURE__*/ jsx_runtime_.jsx(Alerts, {
                        color: alert.color,
                        icon: alert.icon,
                        message: alert.message
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Card, {
                        className: "section-lg bg-gradient-info shadow-lg border-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                                className: "justify-content-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                    lg: "8",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Card, {
                                        className: "bg-gradient-secondary shadow",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.CardBody, {
                                            className: "p-lg-5",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "text-center mb-1",
                                                    children: "Connect with me"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/icons/common/YashviDesaiProfilePicture.jpg",
                                                    style: {
                                                        width: "215px",
                                                        height: "200px",
                                                        marginTop: "20px"
                                                    },
                                                    alt: "",
                                                    className: "rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                    className: external_classnames_default()("mt-5", {}),
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.InputGroup, {
                                                        className: "input-group-alternative",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupAddon, {
                                                                addonType: "prepend",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupText, {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "ni ni-user-run"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                placeholder: "Your name",
                                                                type: "text",
                                                                name: "user_name"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                    className: external_classnames_default()({}),
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.InputGroup, {
                                                        className: "input-group-alternative",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupAddon, {
                                                                addonType: "prepend",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupText, {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "ni ni-email-83"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                                placeholder: "Email address",
                                                                name: "user_email",
                                                                type: "email"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                        className: "form-control-alternative",
                                                        cols: "80",
                                                        name: "user_message",
                                                        placeholder: "Type a message...",
                                                        rows: "4",
                                                        type: "textarea"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                                        block: true,
                                                        className: "btn-round",
                                                        color: "default",
                                                        size: "lg",
                                                        type: "submit",
                                                        children: "Send Message"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_ContactUs = (ContactUs);

;// CONCATENATED MODULE: ./pages/index.tsx


const Navigation = dynamic_default()(()=>__webpack_require__.e(/* import() */ 581).then(__webpack_require__.bind(__webpack_require__, 581)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/Navigation"
        ]
    }
});
const Greetings = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(819), __webpack_require__.e(471)]).then(__webpack_require__.bind(__webpack_require__, 471)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Greetings"
        ]
    }
});
const Skills = dynamic_default()(()=>__webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(__webpack_require__, 7)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Skills"
        ]
    }
});
//const Proficiency = dynamic(() => import('../containers/Proficiency'));
const Education = dynamic_default()(()=>__webpack_require__.e(/* import() */ 380).then(__webpack_require__.bind(__webpack_require__, 380)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Education"
        ]
    }
});
const Experience = dynamic_default()(()=>__webpack_require__.e(/* import() */ 949).then(__webpack_require__.bind(__webpack_require__, 949)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Experience"
        ]
    }
});
//const Projects = dynamic(() => import('../containers/Projects'));
//const Feedbacks = dynamic(() => import('../containers/Feedbacks'));
const GithubProfileCard = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(819), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 77)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/GithubProfileCard"
        ]
    }
});



function Home({ githubProfileData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_SEO, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Greetings, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Skills, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Education, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Experience, {}),
            portfolio/* showContactUs */.Nd ? /*#__PURE__*/ jsx_runtime_.jsx(components_ContactUs, {}) : null
        ]
    });
}
// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };
async function getStaticProps() {
    const githubProfileData = await fetch(`https://api.github.com/users/${portfolio/* openSource.githubUserName */.qL.githubUserName}`).then((res)=>res.json());
    return {
        props: {
            githubProfileData
        }
    };
}


/***/ }),

/***/ 805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E5": () => (/* binding */ educationInfo),
  "b8": () => (/* binding */ experience),
  "c0": () => (/* binding */ greetings),
  "qL": () => (/* binding */ openSource),
  "hD": () => (/* binding */ seoData),
  "Nd": () => (/* binding */ showContactUs),
  "LO": () => (/* binding */ skillsSection),
  "KT": () => (/* binding */ socialLinks)
});

// UNUSED EXPORTS: contact

;// CONCATENATED MODULE: external "react-easy-emoji"
const external_react_easy_emoji_namespaceObject = require("react-easy-emoji");
var external_react_easy_emoji_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_emoji_namespaceObject);
;// CONCATENATED MODULE: ./portfolio.ts

const greetings = {
    name: "Yashvi Desai",
    title: "Hey there, I'm Yashvi!",
    description: "I am a Software Developer pursuing my Master's degree in Software Engineering at San Jose State University. I like building solutions to solve real-world problems.",
    resumeLink: "https://drive.google.com/file/d/1N0jWrumIUDeAGbZK2jsfd5s07xkN3k53/view?usp=drive_link"
};
const openSource = {
    githubUserName: "1hanzla100"
};
const contact = {};
const socialLinks = {
    linkedin: "https://www.linkedin.com/in/yashvidesai999",
    github: "https://github.com/YashviDesaii"
};
const skillsSection = {
    title: "My experience",
    subTitle: "A tech enthusiast looking to make a real world imapact through technology",
    data: [
        {
            title: "Software Engineer",
            lottieAnimationFile: "/lottie/skills/fullstack.json",
            skills: [
                external_react_easy_emoji_default()("⚡ Developed a system that delivers 500 GB of data while accommodating dynamic client requirements leveraging Microsoft Azure Blob Storage and creating RESTful APIs in C#"),
                external_react_easy_emoji_default()("⚡ Reduced processing time for fetching data from 5s to 1s by optimizing database schema, resulting in 20% cost reduction"),
                external_react_easy_emoji_default()("⚡ Provided easy access of data to clients by implementing stored procedures, enhancing indexing strategies, and designing UI in Angular for a web portal based on ASP.Net Core"),
                external_react_easy_emoji_default()("⚡ Improved reliability of ‘Analytics Portal’ by designing test cases and increasing overall coverage by 14%")
            ],
            softwareSkills: [
                {
                    skillName: "C-Sharp",
                    iconifyTag: "vscode-icons:file-type-csharp"
                },
                {
                    skillName: "ASP Dot Net Core",
                    iconifyTag: "mdi:web"
                },
                {
                    skillName: "Angular",
                    iconifyTag: "logos:angular"
                },
                {
                    skillName: "MySQL",
                    iconifyTag: "vscode-icons:file-type-mysql"
                },
                {
                    skillName: "Microsoft Azure Blog Storage",
                    iconifyTag: "logos:microsoft"
                }
            ]
        },
        {
            title: "Software Engineering Intern",
            lottieAnimationFile: "/lottie/skills/cloudinfra.json",
            skills: [
                external_react_easy_emoji_default()("⚡ Upgraded an Android application from version 7 to 10 and fine-tuned it by making a notification channel for push notifications and retrieving user permissions on run-time using Java and Android Jetpack Components, increasing user engagement by 20%"),
                external_react_easy_emoji_default()("⚡ Implemented Role-Based Authentication for 3 different authorization levels, ensuring security and data integrity"),
                external_react_easy_emoji_default()("⚡ Modernized the application with features such as Geolocation, Asset Management and conducted testing and quality assurance achieving a 99% crash-free rate")
            ],
            softwareSkills: [
                // ? Check README To get icon details
                {
                    skillName: "Java",
                    iconifyTag: "logos:java"
                },
                {
                    skillName: "Android",
                    iconifyTag: "logos:android"
                },
                {
                    skillName: "Github",
                    iconifyTag: "akar-icons:github-fill"
                },
                {
                    skillName: "JavaScript",
                    iconifyTag: "logos:javascript"
                }
            ]
        }
    ]
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
const educationInfo = [
    {
        schoolName: "San Jose State University",
        location: "San Jose, CA, USA",
        subHeader: "Master of Science in Software Engineering",
        graduation: "Spring 2024",
        //desc: 'Participated in the research of XXX and published 3 papers.',
        gpa: "3.7",
        descBullets: "Related Courses: Web & Mobile Application Development, Data Mining, Enterprise Distributed Systems, Software Engineering Processes"
    },
    {
        schoolName: "Sardar Patel Institute of Technology",
        location: "Mumbai, India",
        subHeader: "Bachelor of Technology in Information Technology",
        graduation: "Spring 2021",
        //desc: 'Participated in the research of XXX and published 3 papers.',
        gpa: "3.65",
        descBullets: "Related Courses: Object Oriented Programming, Database Management, Data Structures and Algorithms, Machine Learning"
    }
];
const experience = [
    {
        //role: 'Frontend Developer',
        projectName: "ConnectX: Virtual Event Platform",
        companyLogo: "/img/icons/common/virtualEventPlatform.jpeg",
        //date: 'Apr 2022 – Jun 2022',
        //desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
        github: "https://github.com/YashviDesaii?tab=repositories",
        descBullets: [
            external_react_easy_emoji_default()("⚡ Led the development of a full-stack application designed to provide organizations with the capacity to host and manage conferences or exhibitions in a virtual environment using React and Node.js for development and MongoDB for storing essential data"),
            external_react_easy_emoji_default()("⚡ Handled real-time interactions such as chat, live Q&A sessions, and instant notifications using an event-driven data pipeline utilizing Apache Kafka, providing an engaging user experience"),
            external_react_easy_emoji_default()("⚡ Divided the platform into self-contained micro-services and used Docker to containerize and deploy the backend components"),
            external_react_easy_emoji_default()("⚡ Utilized Kubernetes as an orchestration tool to ensure automated scaling and high availability for events with high attendee load")
        ]
    },
    {
        //role: 'API Engineer',
        projectName: "OfficeFlex: Agile Work-In-Office Reservation System",
        companyLogo: "/img/icons/common/inOfficeReservationSystem.jpeg",
        //date: 'Jan 2022 – Mar 2022',
        //desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
        github: "https://github.com/YashviDesaii/275-term-Project",
        descBullets: [
            external_react_easy_emoji_default()("⚡ Architectured an end-to-end development of a cloud-based Work-In Office Reservation System utilizing Spring framework for backend and leveraging MVC, ORM, and transaction methodologies"),
            external_react_easy_emoji_default()("⚡ Integrated OAuth/OpenID support for Google and local account setup with email verification into an intuitive ReactJS frontend for user registration and authentication"),
            external_react_easy_emoji_default()("⚡ Built a comprehensive system with manager-defined policies, including custom rules for scheduling and bulk operations"),
            external_react_easy_emoji_default()("⚡ Leveraged RDS and deployed the application on AWS EC2 instances, employing a load balancer for high availability")
        ]
    },
    {
        //role: 'Full Stack Developer',
        projectName: "PUBGProPredict: PlayerUnknown's Battlegrounds Placement Predictor",
        companyLogo: "/img/icons/common/pubg.jpeg",
        //date: 'Sept 2021 - Oct 2021',
        //desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
        github: "https://github.com/YashviDesaii/CMPE255-Final-Project",
        descBullets: [
            external_react_easy_emoji_default()("⚡ Conducted exploratory data analysis and feature engineering using Python libraries to identify key features and deliver valuable insights into player performance and winning strategies based on anonymized PUBG game data from 65,000 games"),
            external_react_easy_emoji_default()("⚡ Analyzed and compared the results of 5 regression models to predict player placement in the game"),
            external_react_easy_emoji_default()("⚡ Ascertained the most optimal model and fine-tuned it to achieve a minimum mean squared error of 0.008")
        ]
    },
    {
        //role: 'Backend Developer',
        projectName: "Quackademics: A Modernized Academics Platform",
        companyLogo: "/img/icons/common/quackademics.png",
        //date: 'Sept 2021',
        //desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
        github: "https://github.com/YashviDesaii/LAHacks2023",
        descBullets: [
            external_react_easy_emoji_default()("⚡ add description here")
        ]
    },
    {
        //role: 'Backend Developer',
        projectName: "VirtualCommerce: Immersive 3D E-Commerce Experience",
        companyLogo: "/img/icons/common/virtualEcommerce.jpeg",
        //date: 'Sept 2021',
        //desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
        github: "https://ieeexplore.ieee.org/document/9545009",
        descBullets: [
            external_react_easy_emoji_default()("⚡ Rendered 3D view of E-Commerce products like furniture, apparel, and accessories to present an in-person experience whilst shopping online by developing an Android application"),
            external_react_easy_emoji_default()("⚡ Determined the most efficient technique for rendering objects onto a flat surface by comparing 4 rendering algorithms and created over 200 3D objects using Unity 3D based on the chosen algorithm"),
            external_react_easy_emoji_default()("⚡ Authored and published a research paper for the same in IEEE Xplore")
        ]
    }
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
const showContactUs = true;
// See object prototype on /types/section.ts page
const seoData = {
    title: "Yashvi Desai",
    // description:
    //   'A passionate Full Stack Web Developer and Blockchain Developer.',
    author: "Yashvi Desai",
    // image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
    url: "https://yashvi-desaii-portfolio.vercel.app/",
    keywords: []
};


/***/ }),

/***/ 895:
/***/ ((module) => {

module.exports = require("headroom.js");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 189:
/***/ ((module) => {

module.exports = require("react-lottie");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ }),

/***/ 566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152], () => (__webpack_exec__(987)));
module.exports = __webpack_exports__;

})();