import Badge from "components/Badge";
import Footnote from "components/Footnote";
import PageLayout from "layouts/PageLayout";
import React from "react";
import {getLanguage} from "utils";

export default class Portfolio extends React.Component {

    lang = getLanguage(this.props.match.params.lang);

    render() {
        return (
            <PageLayout langCode={this.props.match.params.lang} pageCode="portfolio">
                <div className="text-center">
                    <h3 className="my-4 text-dark font-weight-bold">
                        {this.lang.portfolio.subtitle}
                    </h3>
                    <p className="py-4">{this.lang.portfolio.text}</p>
                </div>

                <div className="row text-center mb-4">
                    {this.lang.portfolio.projects.map(p =>
                        <div className="col-md-6 mx-auto my-4" key={p.name}>
                            <h4 className="my-4 font-weight-bold">{p.name}</h4>
                            <img src={p.image} alt={p.name} className="img-fluid mb-4 border b-gray border"/>
                            <p>{p.tags.map(t => <Badge content={t} key={t}/>)}</p>
                            <p>{p.description}</p>
                        </div>
                    )}
                </div>

                <hr className="border-secondary"/>
                <Footnote lang={this.props.match.params.lang}/>
            </PageLayout>
        );
    }
}
