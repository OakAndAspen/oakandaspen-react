import Footer from "components/Footer";
import Nav from "components/Nav";
import TitleBar from "components/TitleBar";
import background from "images/background.jpg";
import React from "react";

export default class NormalLayout extends React.Component {

    render() {

        let titleStyle = {
            backgroundImage: "url(" + background + ")",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        };

        return (
            <div>
                <header className="py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <TitleBar theme="dark"/>
                                <hr className="border-secondary"/>
                                <Nav theme="dark" lang={this.props.lang}/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2" style={titleStyle}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto py-4">
                                    <h2 className="t-white font-weight-bold m-0 small-caps">
                                        {this.props.title}
                                    </h2>
                                </div>
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
                <Footer/>
            </div>
        );
    }
}
