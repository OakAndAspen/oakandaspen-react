import {FontAwesomeIcon as FAI} from "@fortawesome/react-fontawesome";
import Nav from "components/Nav";
import TitleBar from "components/TitleBar";
import PropTypes from "prop-types";
import React from "react";
import {getLanguage} from "utils";

export default class HomeHeader extends React.Component {

    lang = getLanguage(this.props.langCode);

    state = {
        index: 0
    };

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        let index = this.state.index;
        index = (index === this.lang.carousel.length - 1) ? 0 : index + 1;
        this.setState({index: index});
    }

    previous() {
        let index = this.state.index;
        index = (index === 0) ? this.lang.carousel.length - 1 : index - 1;
        this.setState({index: index});
    }

    render() {

        let currentSlide = this.lang.carousel[this.state.index];

        let headerStyle = {
            backgroundImage: "url(" + currentSlide.image + ")",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        };

        return (
                <header className="py-4" style={headerStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <TitleBar theme="light"/>
                                <hr className="border-light"/>
                                <Nav theme="light" lang={this.props.langCode}/>
                                {this.renderCarousel(currentSlide)}
                            </div>
                        </div>
                    </div>
                </header>
        );
    }

    renderCarousel(currentSlide) {

        let carouselStyle = {
            fontFamily: "Novecento"
        };

        let arrowStyle = {
            color: "rgba(255,255,255,0.7)"
        };

        return (
            <div className="d-flex justify-content-between align-items-center text-center my-4 py-4"
                 style={carouselStyle}>
                <FAI icon={["far", "angle-left"]} style={arrowStyle}
                     className="display-2 pointer" onClick={this.previous}/>
                <div className="t-white">
                    <h1 className="small-caps font-weight-bold">{currentSlide.title}</h1>
                    <h4>{currentSlide.subtitle}</h4>
                    {currentSlide.button &&
                    <a className="btn b-green t-white mt-4" href={"/" + this.props.langCode + currentSlide.button.url}>
                        {currentSlide.button.title}
                    </a>}
                </div>
                <FAI icon={["far", "angle-right"]} style={arrowStyle}
                     className="display-2 pointer" onClick={this.next}/>
            </div>
        );
    }
}

HomeHeader.propTypes = {
    langCode: PropTypes.string
};
