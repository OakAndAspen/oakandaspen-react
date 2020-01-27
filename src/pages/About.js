import {FontAwesomeIcon as FAI} from "@fortawesome/react-fontawesome";
import Footnote from "components/Footnote";
import PageLayout from "layouts/PageLayout";
import React from "react";
import {getLanguage} from "utils";

export default class About extends React.Component {

    lang = getLanguage(this.props.match.params.lang);

    render() {
        return (
            <PageLayout langCode={this.props.match.params.lang} pageCode="about">
                <div className="text-center py-2">
                    <h3 className="my-4 text-dark font-weight-bold">
                        {this.lang.about.education.subtitle}
                    </h3>
                    <p className="py-4">{this.lang.about.education.text}</p>
                </div>

                <div className="row text-center py-2">
                    {this.lang.about.education.schools.map(s =>
                        <div className="col-md-4" key={s.name}>
                            <h4 className="my-4">{s.name}</h4>
                            <p className="my-4 font-weight-bold">{s.school}</p>
                            <p>{s.description}</p>
                        </div>
                    )}
                </div>

                <hr className="border-secondary"/>

                <div className="text-center py-2">
                    <h3 className="my-4 text-dark font-weight-bold">
                        {this.lang.about.interests.subtitle}
                    </h3>
                    <p className="py-4">{this.lang.about.interests.text}</p>
                </div>

                <div className="row text-center py-2">
                    {this.lang.about.interests.hobbies.map(h =>
                        <div className="col-md-6 my-4" key={h.name}>
                            <FAI icon={["far", h.icon]} className="display-4"/>
                            <h4 className="my-4">{h.name}</h4>
                            <p>{h.description}</p>
                        </div>
                    )}
                </div>

                <hr className="border-secondary"/>
                <Footnote lang={this.props.match.params.lang}/>
            </PageLayout>
        );
    }
}
