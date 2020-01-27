import blog1 from "articles/blog1.md";
import blog2 from "articles/blog2.md";
import blog3 from "articles/blog3.md";
import {email} from "config/config";
import background1 from "images/carousel/background1.jpg";
import background2 from "images/carousel/background2.jpg";
import background3 from "images/carousel/background3.jpg";
import biodi from "images/portfolio/biodi.png";
import generationConnect from "images/portfolio/generation-connect.png";
import mtgmanager from "images/portfolio/mtgmanager.png";
import pawsome from "images/portfolio/pawsome.png";
import viviskes from "images/portfolio/viviskes.png";

export default {
    nav: {
        home: "Home",
        portfolio: "Portfolio",
        services: "Services",
        blog: "Blog",
        about: "About",
        contact: "Contact me",
    },
    carousel: [
        {
            title: "Irina Despot",
            subtitle: "Freelance web developer",
            image: background1,
            button: {
                title: "My story",
                url: "/about"
            }
        },
        {
            title: "Web development",
            subtitle: "Browse my projects",
            image: background2,
            button: {
                title: "Portfolio",
                url: "/portfolio"
            }
        },
        {
            title: "Pup'herd",
            subtitle: "My startup project",
            image: background3
        }
    ],
    footnote: {
        title: "Have a project idea?",
        text: "I'm currently looking for freelance jobs. Don't hesitate to contact me by email or through my contact form.",
        button: "Contact me"
    },
    footer: {
        text: "After finishing my studies in media engineering, I chose the hard way of entrepreneurship. I'm trying to reconcile my work as a freelancer and my startup project.",
        address: {
            street: "Rue des Prés-du-Moulin 3",
            city: "1920 Martigny (VS)",
            country: "Switzerland"
        },
        copyright: {
            line1: "Development, design and content by",
            line2: "all rights reserved"
        }
    },
    home: {
        pageTitle: "Home",
        meta: {
            description: "Oak&Aspen is Irina Despot's one-man freelancing business in web development.",
            keywords: "Oak&Aspen, OakAndAspen, web, development, Irina, Despot, freelance"
        },
        welcome: "Welcome",
        firstParagraph: "After finishing my studies in media engineering, I chose the hard way: entrepreneurship. I'm trying to reconcile my work as a freelancer and my startup project. I'm currently looking for my very first jobs, so do not hesitate to contact me to share your project ideas.",
        services: [
            {
                icon: "browser",
                title: "Websites",
                description: "From homepages to blogs and portfolios, I can create a website that fits your needs perfectly."
            },
            {
                icon: "code",
                title: "Web apps",
                description: "I'm regularly learning new tools so that I can offer you a solution customized to your specific needs."
            },
            {
                icon: "image",
                title: "Graphics",
                description: "I can design your posters, flyers or business cards and create a visual identity for your brand"
            }
        ],
        latestWork: {
            title: "Some of my latest work"
        }
    },
    portfolio: {
        pageTitle: "Portfolio",
        meta: {
            description: "Here's a showcase of my latest projects, ranging from apps and websites to marketing campagns.",
            keywords: "Portfolio, showcase, projects, developement, communication, achievements"
        },
        subtitle: "Browse my projects",
        text: "From web development to marketing campaigns, from personal projects to team projects, I have accumulated a large range of skills.",
        projects: [
            {
                name: "Viviskes",
                tags: ["Symfony", "React", "MySQL"],
                description: "Website and intranet of a celtic reenactment association",
                image: viviskes
            },
            {
                name: "MtGManager",
                tags: ["Symfony", "React", "MySQL"],
                description: "Collectible cards management app for my personal use",
                image: mtgmanager
            },
            {
                name: "Paw'some",
                tags: ["Symfony", "React", "MySQL"],
                description: "First prototype for my startup project, since renamed Pup'herd",
                image: pawsome
            },
            {
                name: "Biodi-vers-City",
                tags: ["React", "Illustrator", "Team project"],
                description: "Marketing campaign for BirdLife. Team project during my studies",
                image: biodi
            },
            {
                name: "Generation Connect",
                tags: ["Backbone", "Team project"],
                description: "Prototype of a web platform to put young people at the service of the elderly. Team project during my studies",
                image: generationConnect
            }
        ]
    },
    services: {
        pageTitle: "Services",
        meta: {
            description: "Discover here the types of service I provide, as well as my tools and work process.",
            keywords: "Services, tools, method"
        },
        list: [
            {
                icon: "browser",
                title: "Websites",
                description: "From homepages to blogs and portfolios, I can create a website that fits your needs perfectly."
            },
            {
                icon: "code",
                title: "Web apps",
                description: "I'm regularly learning new tools so that I can offer you a solution customized to your specific needs."
            },
            {
                icon: "tools",
                title: "Maintenance",
                description: "I take care of the maintenance of the products I provide you with, as well as the maintenance of your existing website."
            },
            {
                icon: "image",
                title: "Graphics",
                description: "I can design your posters, flyers or business cards and create a visual identity for your brand"
            }
        ],
        title1: "My toolbox",
        tools: ["HTML", "CSS", "Javascript", "PHP", "MySQL", "React", "Symfony", "Grav", "Figma", "Illustrator", "PHPStorm", "WebStorm", "DataGrip", "Infomaniak", "DigitalOcean", "Bootstrap", "FontAwesome", "jQuery", "Doctrine"],
        title2: "How I work",
        text: "Do not hesitate to contact me if you have an idea. We will discuss your situation and I will make a proposal that fits your needs. I like to work with the \"agile\" method and implement your project through multiple cycles instead of having fixed specifications.",
    },
    blog: {
        pageTitle: "Blog",
        meta: {
            description: "This is my blog, a place to put my thoughts when my brain overflows.",
            keywords: "Blog, articles, thoughts"
        },
        title: "A place for my thoughts",
        text: "In February 2019, I started writing articles for my blog as I was taking a plane to the farthest place I've even been to: San Francisco. I wrote my first three articles during that trip, and haven't been very consistent since then. I hope to find the time to write again.",
        articles: [
            {
                number: 1,
                date: "2019-02-12",
                title: "Going to California",
                file: blog1
            },
            {
                number: 2,
                date: "2019-02-13",
                title: "Visiting the City",
                file: blog2
            },
            {
                number: 3,
                date: "2019-02-20",
                title: "The child in us",
                file: blog3
            }
        ]
    },
    about: {
        pageTitle: "About",
        meta: {
            description: "Here is a summary of my education and my hobbies and interests.",
            keywords: "Irina, Despot, education, hobbies, interests"
        },
        education: {
            subtitle: "My education",
            text: "Promised to a literary career from a very young age, my life took an unexpected turn during my time in high school. Almost ten years later, I find myself with a title of engineer, doing freelance web development and launching a startup. Here's how I got there.",
            schools: [
                {
                    name: "Federal matura",
                    school: "Gymnase de Burier",
                    years: "2010 - 2013",
                    description: "I tried programming for the first time during the optional IT course, learning HTML, CSS, PHP, Java and Visual Basic. This experience awoke in me an interest for programming, and I decided to follow that road."
                },
                {
                    name: "VET diploma in general IT",
                    school: "Ecole des Métiers du Valais",
                    years: "2013 - 2015",
                    description: "I acquired basic knowledge in Java and C#, web development, networks and systems. It is during that time that I started coding for pleasure and for my personal use. However, I wanted to widen my options and my skills to more than just IT."
                },
                {
                    name: "Bachelor's degree in media engineering",
                    school: "Haute Ecole d'Ingénierie et de Gestion du Canton de Vaud (HEIG-VD)",
                    years: "2015 - 2019",
                    description: "This cursus, in addition to refining my web development skills, gave me new skills in communication, marketing, project management, business and a bit of graphic design. I also had the opportunity to work in a team on several large projects."
                }
            ]
        },
        interests: {
            subtitle: "My interests",
            text: "Need to get to know me better? Here's what I like to do in my free time.",
            hobbies: [
                {
                    name: "Games",
                    icon: "dice",
                    description: "I am a big fan of board games and often organize game nights with my friends. I also play and collect Magic the Gathering cards, and sometimes I like playing video games as well."
                },
                {
                    name: "Dogs",
                    icon: "paw",
                    description: "I have always loved dogs: when I was little I had a norfolk terrier who helped me a lot in life. I recently adopted a new puppy with my boyfriend and put dogs at the heart of my startup project."
                },
                {
                    name: "Web development",
                    icon: "code",
                    description: "I love coding, and have a tendency to use that skills whenever something I do could be made easier with a small web app."
                },
                {
                    name: "Music",
                    icon: "music",
                    description: "I always had a thing for music. I started playing classical guitar when I was 7, and later learned a bit of piano and electric guitar. I like to listen to metal, rock, country, movie soundtrack and irish folk."
                },
            ]
        }
    },
    contact: {
        pageTitle: "Contact",
        meta: {
            description: "Do you wish to contact me about a project? You're in the right place.",
            keywords: "Contact, email, message"
        },
        form: {
            title: "Contact form",
            name: "Your name",
            email: "Your email address",
            message: "Your message",
            button: "Send"
        },
        title1: "My workplace",
        title2: "Contact information",
        text: "Feel free to email at any time. I will do my best to answer quickly.",
        messages: {
            missing: "Please complete all fields.",
            emailIncorrect: "The given email address is invalid.",
            success: "Thank you for your message! I shall answer as soon as possible.",
            error: "An unknown error has occured. Please send your request to " + email + ". Apologies for the inconvenience."
        }
    }
};