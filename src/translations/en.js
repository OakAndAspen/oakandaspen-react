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
    }
};