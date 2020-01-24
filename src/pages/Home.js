import {FontAwesomeIcon as FAI} from "@fortawesome/react-fontawesome";
import HomeLayout from "layouts/HomeLayout";
import React from "react";
import {getLanguage} from "utils";

export default class Home extends React.Component {

    lang = getLanguage(this.props.match.params.lang);

    render() {
        return (
            <HomeLayout lang={this.props.match.params.lang}>
                <div className="text-center my-4 py-4">
                    <h3 className="my-4 text-dark font-weight-bold">
                        {this.lang.home.welcome}
                    </h3>
                    <p className="py-4">{this.lang.home.firstParagraph}</p>
                </div>

                <hr className="border-secondary"/>

                <div className="row text-center my-4 py-4">
                    {this.lang.home.services.map(s =>
                        <div className="col-md-4" key={s.title}>
                            <FAI icon={["far", s.icon]} className="display-3"/>
                            <h4 className="my-4">{s.title}</h4>
                            <p>{s.description}</p>
                        </div>
                    )}
                </div>

                <hr className="border-secondary"/>

                <div className="text-center my-4 py-4">
                    <h3 className="my-4 font-weight-bold">
                        {this.lang.home.latestWork.title}
                    </h3>
                    <p>--- TODO ---</p>
                </div>

                <hr className="border-secondary"/>

                <div className="text-center my-4 py-4">
                    <h3 className="my-4 text-dark font-weight-bold">
                        {this.lang.home.footnote.title}
                    </h3>
                    <p className="py-2">
                        {this.lang.home.footnote.text}
                    </p>
                    <button className="btn btn-info mx-auto small-caps">
                        {this.lang.home.footnote.button}
                    </button>
                </div>
            </HomeLayout>
        );
    }
}
