import {FontAwesomeIcon as FAI} from "@fortawesome/react-fontawesome";
import Badge from "components/Badge";
import Footnote from "components/Footnote";
import HomeLayout from "layouts/HomeLayout";
import NormalLayout from "layouts/NormalLayout";
import React from "react";
import {getLanguage} from "utils";

export default class Services extends React.Component {

    lang = getLanguage(this.props.match.params.lang);

    render() {
        return (
            <NormalLayout lang={this.props.match.params.lang} title="Services">
                <div className="row text-center my-4 py-4">
                    {this.lang.services.list.map(s =>
                        <div className="col-md-4" key={s.title}>
                            <FAI icon={["far", s.icon]} className="display-3"/>
                            <h4 className="my-4">{s.title}</h4>
                            <p>{s.description}</p>
                        </div>
                    )}
                </div>
                <hr className="border-secondary"/>
                <div className="row text-center">
                    <div className="col-md-6">
                        <h3 className="my-4 text-dark font-weight-bold">
                            {this.lang.services.title1}
                        </h3>
                        <p className="py-4">{this.lang.services.tools.map(t =>
                            <Badge content={t} key={t}/>
                        )}</p>
                    </div>
                    <div className="col-md-6">
                        <h3 className="my-4 text-dark font-weight-bold">
                            {this.lang.services.title2}
                        </h3>
                        <p className="py-4">{this.lang.services.text}</p>
                    </div>
                </div>

                <hr className="border-secondary"/>
                <Footnote lang={this.props.match.params.lang}/>
            </NormalLayout>
        );
    }
}
