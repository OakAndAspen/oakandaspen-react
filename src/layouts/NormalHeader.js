import Nav from "components/Nav";
import TitleBar from "components/TitleBar";
import background from "images/carousel/background1.jpg";
import PropTypes from "prop-types";
import React from "react";
import {getLanguage} from "utils";

export default class NormalHeader extends React.Component {

    state = {
        navOpen: false
    };

    render() {

        let lang = getLanguage(this.props.langCode);
        let title = lang[this.props.pageCode].pageTitle;

        let titleStyle = {
            backgroundImage: "url(" + background + ")",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        };

        return (
            <header className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <TitleBar theme="dark"
                                      onToggleNav={() => this.setState({navOpen: !this.state.navOpen})}/>
                            <hr className="border-secondary"/>
                            <Nav theme="dark" lang={this.props.langCode} isOpen={this.state.navOpen}/>
                        </div>
                    </div>
                </div>
                <div className="mt-2" style={titleStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto py-4">
                                <h1 className="t-white font-weight-bold m-0 small-caps">
                                    {title}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

NormalHeader.propTypes = {
    langCode: PropTypes.string,
    pageCode: PropTypes.string
};