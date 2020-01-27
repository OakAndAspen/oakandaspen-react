import {FontAwesomeIcon as FAI} from "@fortawesome/react-fontawesome";
import Footnote from "components/Footnote";
import PageLayout from "layouts/PageLayout";
import React from "react";
import {getLanguage} from "utils";

export default class Home extends React.Component {

    lang = getLanguage(this.props.match.params.lang);

    render() {
        return (
            <PageLayout langCode={this.props.match.params.lang} pageCode="home">
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
                            <FAI icon={["far", s.icon]} className="display-2"/>
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
                    <div className="row text-center">
                        {this.lang.portfolio.projects.slice(0, 3).map(p =>
                            <div className="col-md-4" key={p.name}>
                                <h4 className="my-4 font-weight-bold">{p.name}</h4>
                                <img src={p.image} alt={p.name} className="img-fluid mb-4 border b-gray border"/>
                            </div>
                        )}
                    </div>
                </div>

                <hr className="border-secondary"/>
                <Footnote lang={this.props.match.params.lang}/>
            </PageLayout>
        );
    }
}
