import biodi from "images/biodi.png";
import generationConnect from "images/generation-connect.png";
import mtgmanager from "images/mtgmanager.png";
import pawsome from "images/pawsome.png";
import viviskes from "images/viviskes.png";

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
            {
                icon: "browser",
                title: "Sites web",
                description: "Qu'il s'agisse d'un site vitrine, d'un blog ou d'un portfolio, je peux créer un site qui correspond exactement à vos besoins."
            },
            {
                icon: "code",
                title: "Applications web",
                description: "Je découvre régulièrement de nouveaux outils afin de pouvoir vous proposer une solution personnalisée."
            },
            {
                icon: "image",
                title: "Graphisme",
                description: "Je peux créer vos affiches, flyers ou cartes de visites et définir une identité visuelle pour votre marque."
            }
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
    },
    services: {
        list: [
            {
                icon: "browser",
                title: "Sites web",
                description: "Qu'il s'agisse d'un site vitrine, d'un blog ou d'un portfolio, je peux créer un site qui correspond exactement à vos besoins."
            },
            {
                icon: "code",
                title: "Applications web",
                description: "Je découvre régulièrement de nouveaux outils afin de pouvoir vous proposer une solution personnalisée."
            },
            {
                icon: "tools",
                title: "Maintenance",
                description: "Je me charge de la maintenance des produits que je vous fournis, ainsi que de celle de votre site existant."
            },
            {
                icon: "image",
                title: "Graphisme",
                description: "Je peux créer vos affiches, flyers ou cartes de visites et définir une identité visuelle pour votre marque."
            }
        ],
        title1: "Mes outils",
        tools: ["HTML", "CSS", "Javascript", "PHP", "MySQL", "React", "Symfony", "Grav", "Figma", "Illustrator", "PHPStorm", "WebStorm", "DataGrip", "Infomaniak", "DigitalOcean", "Bootstrap", "FontAwesome", "jQuery", "Doctrine"],
        title2: "Mon processus",
        text: "N'hésitez pas à me contacter si vous avez une idée. Nous discuterons ensemble de votre situation et je vous ferai une proposition personnalisée en fonction de vos besoins. J'aime travailler avec la méthode \"agile\" et réaliser un projet en plusieurs cycles au lieu d'avoir un cahier des charges fixe.",
    },
    about: {
        education: {
            subtitle: "Ma formation",
            text: "Promise depuis mon plus jeune âge à une carrière littéraire, mon séjour au Gymnase de Burier m'a fait prendre un tournant inattendu. Presque dix ans après mon entrée au gymnase, je me retrouve avec un titre d'ingénieur, développeuse web indépendante et en plein lancement d'une startup. Voici mon parcours.",
            schools: [
                {
                    name: "Maturité fédérale",
                    school: "Gymnase de Burier",
                    years: "2010 - 2013",
                    description: "C'est durant les cours d'informatique que j'ai codé pour la première fois en HTML, CSS, PHP, Java et Visual Basic. Cela a éveillé en moi un intérêt pour la programmation et j'ai décidé de suivre cette voie."
                },
                {
                    name: "CFC en informatique généraliste",
                    school: "Ecole des Métiers du Valais",
                    years: "2013 - 2015",
                    description: "J'ai acquis des compétences basiques en programmation Java et C#, développement web, réseau et système. C'est durant cette période que j'ai commencé à coder pour le plaisir et pour mon usage personnel. Je désirais toutefois étendre mes horizons professionnelles et acquérir un plus large panel de compétences."
                },
                {
                    name: "Bachelor HES en ingénierie des médias",
                    school: "Haute Ecole d'Ingénierie et de Gestion du Canton de Vaud (HEIG-VD)",
                    years: "2015 - 2019",
                    description: "Cette formation, en plus d'approfondir mes compétences en développement web, m'a donné de bonnes notions de communication, marketing, gestion de projet et gestion d'entreprise, ainsi que des bases en graphisme. J'ai également eu l'occasion de travailler en équipe sur des projets de grande envergure."
                }
            ]
        },
        interests: {
            subtitle: "Mes intérêts",
            text: "Envie de me connaître un peu mieux? Voilà ce que j'aime faire dans mon temps libre.",
            hobbies: [
                {
                    name: "Les jeux",
                    icon: "dice",
                    description: "J'aime beaucoup les jeux de plateau et j'organise souvent des soirées jeux avec mes amis. Je suis particulièrement fan du jeu de cartes à collectionner Magic the Gathering, et il m'arrive aussi de jouer à des jeux vidéos."
                },
                {
                    name: "Les chiens",
                    icon: "paw",
                    description: "J'ai toujours adoré les chiens: quand j'étais petite j'avais un terrier norfolk qui m'a beaucoup aidé dans la vie. J'ai placé les chiens au coeur de mon projet de startup, et j'en adopterai un à nouveau dès que possible."
                },
                {
                    name: "Le développement web",
                    icon: "code",
                    description: "J'adore coder, et j'ai une tendance à utiliser cette compétence à chaque fois que j'ai quelque chose à faire qui pourrait être facilité par une petite application web vite faite."
                },
                {
                    name: "La musique",
                    icon: "music",
                    description: "J'ai toujours eu de l'intérêt pour la musique. J'ai commencé la guitare classique à 7 ans, et j'ai un peu touché au piano et à la guitare électrique plus tard. J'écoute du metal, du rock, de la country, du traditionnel irlandais et des musiques de films."
                }
            ]
        }
    },
    contact: {
        form: {
            title: "Formulaire de contact",
            name: "Votre nom",
            email: "Votre adresse email",
            message: "Votre message",
            button: "Envoyer"
        },
        title1: "Mon lieu de travail",
        title2: "Informations de contact",
        text: "N'hésitez pas à m'envoyer un email à tout moment. Je ferai de mon mieux pour répondre rapidement."
    }
};