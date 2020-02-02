import {languages} from "config/config";
import PropTypes from "prop-types";
import React from "react";
import {getLanguage} from "utils";

export default class Nav extends React.Component {

    render() {

        let langCode = languages.includes(this.props.lang) ? this.props.lang : languages[0];
        let lang = getLanguage(langCode);

        let navStyle = {
            fontVariant: "all-small-caps"
        };

        let liStyle = {
            listStyleType: "none"
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

        let navClass = this.props.isOpen ? "" : " d-none d-md-block"

        return (
            <nav className={"px-0 my-4" + navClass} style={navStyle}>
                <ul className="m-0 p-0">
                    {entries.map(e =>
                        <li key={e.label} style={liStyle} className="d-inline-block mr-3">
                            <a className={"text-" + linkColor}
                               href={"/" + langCode + e.url} style={aStyle}>{e.label}</a>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}


Nav.propTypes = {
    theme: PropTypes.string,
    lang: PropTypes.string,
    isOpen: PropTypes.bool
};
