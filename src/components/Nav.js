import {languages} from "config/config";
import React from "react";
import {getLanguage} from "utils";

export default class Nav extends React.Component {

    render() {

        let langCode = languages.includes(this.props.lang) ? this.props.lang : languages[0];
        let lang = getLanguage(langCode);

        let navStyle = {
            fontVariant: "all-small-caps"
        };

        let aStyle = {
            fontWeight: "bold",
            fontSize: "1.4em"
        };

        let entries = [
            {label: lang.nav.home, url: "/"},
            {label: lang.nav.portfolio, url: "/portfolio"},
            {label: lang.nav.services, url: "/services"},
            {label: lang.nav.blog, url: "/blog"},
            {label: lang.nav.about, url: "/about"},
            {label: lang.nav.contact, url: "/contact"}
        ];

        let linkColor = this.props.theme === "light" ? "light" : "secondary";

        return (
            <nav className="navbar navbar-expand-md px-0" style={navStyle}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {entries.map(e =>
                            <li className="nav-item active">
                                <a className={"nav-link text-" + linkColor}
                                   href={"/" + langCode + e.url} style={aStyle}>{e.label}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
}
