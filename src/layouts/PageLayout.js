import Footer from "components/Footer";
import HomeHeader from "layouts/HomeHeader";
import NormalHeader from "layouts/NormalHeader";
import PropTypes from "prop-types";
import React from "react";
import {Helmet} from "react-helmet";
import {getLanguage} from "utils";

export default class PageLayout extends React.Component {

    lang = getLanguage(this.props.langCode);

    render() {

        let meta = this.lang[this.props.pageCode].meta;

        return (
            <div>
                <Helmet>
                    <meta name="description" content={meta.description}/>
                    <meta name="keywords" content={meta.keywords}/>
                </Helmet>
                {this.props.pageCode === "home" ?
                    <HomeHeader langCode={this.props.langCode}/> :
                    <NormalHeader langCode={this.props.langCode} pageCode={this.props.pageCode}/>
                }
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

PageLayout.propTypes = {
    langCode: PropTypes.string,
    pageCode: PropTypes.string
};
