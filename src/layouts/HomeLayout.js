import Carousel from "components/Carousel";
import Footer from "components/Footer";
import Nav from "components/Nav";
import TitleBar from "components/TitleBar";
import background from "images/background.jpg";
import React from "react";

export default class HomeLayout extends React.Component {

    render() {

        let headerStyle = {
            backgroundImage: "url(" + background + ")",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        };

        return (
            <div>
                <header className="py-4" style={headerStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <TitleBar theme="light"/>
                                <hr className="border-light"/>
                                <Nav theme="light" lang={this.props.lang}/>
                                <Carousel/>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="container py-4">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            {this.props.children}
                        </div>
                    </div>
                </section>
                <Footer lang={this.props.lang}/>
            </div>
        );
    }
}
