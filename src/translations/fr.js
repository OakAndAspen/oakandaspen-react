import biodi from "images/biodi.png";
import generationConnect from "images/generation-connect.png";
import mtgmanager from "images/mtgmanager.png";
import viviskes from "images/viviskes.png";
import pawsome from "images/pawsome.png";

export default {
    nav: {
        home: "Accueil",
        portfolio: "Portfolio",
        services: "Services",
        blog: "Blog",
        about: "À propos",
        contact: "Contact",
    },
    footer: {
        text: "Après avoir terminé mes études en ingénierie des médias en été 2019, j'ai choisi la voie difficile de l'entreprenariat. Je tente actuellement de concilier mon travail de développeur en freelance et mon projet de startup.",
        address: {
            street: "Rue des Prés-du-Moulin 3",
            city: "1920 Martigny (VS)",
            country: "Suisse"
        },
        copyright: {
            line1: "Développement, design & contenu par",
            line2: "Tous droits réservés"
        }
    },
    home: {
        title: "Accueil",
        welcome: "Bienvenue sur mon site",
        firstParagraph: "Après avoir terminé mes études en ingénierie des médias en été 2019, j'ai choisi la voie difficile: celle de l'entreprenariat. Je tente actuellement de concilier mon travail de développeur en freelance et mon projet de startup. Je suis à la recherche de mes touts premiers mandats, alors n'hésitez pas à m'envoyer un email pour me faire part de vos idées de projets.",
        services: [
            {icon: "code", title: "Développement", description: "Sites de présentation, applications web..."},
            {
                icon: "bullhorn",
                title: "Communication",
                description: "Conseils en communication, campagnes marketing..."
            },
            {icon: "image", title: "Graphisme", description: "Affiches, flyers, cartes de visite..."}
        ],
        latestWork: {
            title: "Quelques projets récents"
        },
        footnote: {
            title: "Vous avez une idée de projet?",
            text: "Je suis actuellement à la recherche de mandats. N'hésitez pas à me contacter par email ou via mon formulaire de contact.",
            button: "Contactez moi"
        }
    },
    portfolio: {
        title: "Portfolio",
        subtitle: "Parcourez mes projets",
        text: "Du développement web aux campagnes de marketing, des projets personnels aux projets en équipe, j'ai déjà accumulé un certain panel de compétences. ",
        projects: [
            {
                name: "Viviskes",
                description: "Site web et intranet d'une association de reconstitution historique celte",
                image: viviskes
            },
            {
                name: "Paw'some",
                description: "Premier prototype pour mon projet de startup, depuis renommé Pup'herd",
                image: pawsome
            },
            {
                name: "Generation Connect",
                description: "Prototype d'une plateforme pour GenerationConnect. Projet en équipe effectué dans le cadre de mes études",
                image: generationConnect
            },
            {
                name: "Biodi-vers-City",
                description: "Campagne de communication pour BirdLife. Projet en équipe effectué dans le cadre de mes études",
                image: biodi
            },
            {
                name: "MtGManager",
                description: "Application de gestion de cartes à collectionner pour mon usage personnel",
                image: mtgmanager
            }
        ]
    }
};