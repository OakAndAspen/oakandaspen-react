import {FontAwesomeIcon as FAI} from "@fortawesome/react-fontawesome";
import {facebookLink, gitHubLink, languages, linkedInLink} from "config/config";
import React from "react";
import {getLanguage} from "utils";

export default class Footer extends React.Component {

    render() {
        let langCode = languages.includes(this.props.lang) ? this.props.lang : languages[0];
        let lang = getLanguage(langCode);

        return (
            <footer className="bg-dark">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h3 className="logo mb-4 t-white">Oak&Aspen</h3>
                                    <p className="t-gray">{lang.footer.text}</p>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <h4 className="small-caps font-weight-bold mb-4 t-white">Contact info</h4>
                                    <p className="t-gray">
                                        {lang.footer.address.street}<br/>
                                        {lang.footer.address.city}<br/>
                                        {lang.footer.address.country}<br/><br/>
                                        <a href="mailto:contact@oakandaspen.ch">contact@oakandaspen.ch</a>
                                    </p>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <h4 className="small-caps font-weight-bold mb-4 t-white">Find me on</h4>
                                    <a href={facebookLink} className="d-block mb-1 small-caps">
                                        <FAI icon={["fab", "facebook-f"]} className="mr-2"/>
                                        <span>Facebook</span>
                                    </a>
                                    <a href={linkedInLink} className="d-block mb-1 small-caps">
                                        <FAI icon={["fab", "linkedin-in"]} className="mr-2"/>
                                        <span>LinkedIn</span>
                                    </a>
                                    <a href={gitHubLink} className="d-block mb-1 small-caps">
                                        <FAI icon={["fab", "github-alt"]} className="mr-2"/>
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </div>

                            <hr className="border-secondary"/>

                            <p className="font-weight-bold text-center my-4">
                                <span className="small-caps">{lang.footer.copyright.line1} </span>
                                <span className="logo">Oak&Aspen</span><br/>
                                <span className="small-caps">
                                    copyright {new Date().getFullYear()} | {lang.footer.copyright.line2}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
