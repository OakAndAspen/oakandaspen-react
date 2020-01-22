import "App.css";
import React from "react";

export default class Nav extends React.Component {

    render() {
        let navStyle = {
            fontVariant: "all-small-caps"
        };

        let aStyle = {
            fontWeight: "bold",
            fontSize: "1.4em"
        };

        let entries = [
            {label: "Home", url: "/"},
            {label: "Portfolio", url: "/portfolio"},
            {label: "Services", url: "/services"},
            {label: "Blog", url: "/blog"},
            {label: "About", url: "/about"},
            {label: "Contact me", url: "/contact"}
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
                                   href={"/fr" + e.url} style={aStyle}>{e.label}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
}
