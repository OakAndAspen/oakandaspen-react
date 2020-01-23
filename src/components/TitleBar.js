import {FontAwesomeIcon as FAI} from "@fortawesome/react-fontawesome";
import {facebookLink, gitHubLink, languages, linkedInLink} from "config/config";
import React from "react";

export default class TitleBar extends React.Component {

    render() {

        let links = [
            {icon: "facebook-f", title: "Facebook", url: facebookLink},
            {icon: "linkedin-in", title: "LinkedIn", url: linkedInLink},
            {icon: "github-alt", title: "GitHub", url: gitHubLink}
        ];

        let logoStyle = {
            fontFamily: "Pacifico"
        };

        let linkStyle = {
            fontSize: "1.4em",
            borderRadius: "50%"
        };

        let textColor = this.props.theme === "light" ? "light" : "secondary";
        let linkColor = this.props.theme === "light" ? "dark" : "light";
        let linkBackground = this.props.theme === "light" ? "light" : "secondary";

        return (
            <div className={"d-flex align-items-center text-" + textColor}>
                <h1 style={logoStyle}>Oak&Aspen</h1>
                <span className="ml-auto">
                    {languages.map(l =>
                        <a href={"/" + l} style={linkStyle} className={"mr-3 small-caps text-" + textColor}>{l}</a>
                    )}
                </span>
                <span>
                    {links.map(l =>
                        <a href={l.url} title={l.title} className={"ml-2 py-1 px-2 bg-" + linkBackground}
                           style={linkStyle}>
                            <FAI icon={["fab", l.icon]} className={"text-" + linkColor}/>
                        </a>
                    )}
                </span>
            </div>
        );
    }
}
