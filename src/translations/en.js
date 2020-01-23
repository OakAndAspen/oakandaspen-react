import biodi from "images/biodi.png";
import generationConnect from "images/generation-connect.png";
import mtgmanager from "images/mtgmanager.png";
import viviskes from "images/viviskes.png";
import pawsome from "images/pawsome.png";

export default {
    nav: {
        home: "Home",
        portfolio: "Portfolio",
        services: "Services",
        blog: "Blog",
        about: "About",
        contact: "Contact me",
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
        title: "Home",
        welcome: "Welcome to my website",
        firstParagraph: "After finishing my studies in media engineering, I chose the hard way: entrepreneurship. I'm trying to reconcile my work as a freelancer and my startup project. I'm currently looking for my very first jobs, so do not hesitate to contact me to share your project ideas.",
        services: [
            {icon: "code", title: "Web development", description: "Display websites, web applications..."},
            {icon: "bullhorn", title: "Communication", description: "Communication counseling, marketing campaigns..."},
            {icon: "image", title: "Graphics", description: "Posters, flyers, business cards..."}
        ],
        latestWork: {
            title: "Some of my latest work"
        },
        footnote: {
            title: "Have a project idea?",
            text: "I'm currently looking for freelance jobs. Don't hesitate to contact me by email or through my contact form.",
            button: "Contact me"
        }
    },
    portfolio: {
        title: "Portfolio",
        subtitle: "Browse my projects",
        text: "From web development to marketing campaigns, from personal projects to team projects, I have accumulated a large range of skills.",
        projects: [
            {
                name: "Viviskes",
                description: "Website and intranet of a celtic reenactment association",
                image: viviskes
            },
            {
                name: "Paw'some",
                description: "First prototype for my startup project, since renamed Pup'herd",
                image: pawsome
            },
            {
                name: "Generation Connect",
                description: "Prototype of a web platform to put young people at the service of the elderly. Team project during my studies",
                image: generationConnect
            },
            {
                name: "Biodi-vers-City",
                description: "Marketing campaign for BirdLife. Team project during my studies",
                image: biodi
            },
            {
                name: "MtGManager",
                description: "Collectible cards management app for my personal use",
                image: mtgmanager
            }
        ]
    },
    about: {
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
        form: {
            title: "Contact form",
            name: "Your name",
            email: "Your email address",
            message: "Your message",
            button: "Send"
        },
        title1: "My workplace",
        title2: "Contact information",
        text: "Feel free to email at any time. I will do my best to answer quickly."
    }
};