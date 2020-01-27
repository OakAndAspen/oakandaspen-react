import PageLayout from "layouts/PageLayout";
import moment from "moment";
import React from "react";
import ReactMarkdown from "react-markdown";
import {getLanguage} from "utils";

export default class Blog extends React.Component {

    lang = getLanguage(this.props.match.params.lang);

    constructor(props) {
        super(props);

        let number = parseInt(this.props.match.params.id);
        let articles = this.lang.blog.articles.sort((a, b) => a.date < b.date ? 1 : -1);
        if (!number) number = articles[0].number;
        let currentArticle = articles.filter(a => a.number === number)[0];
        this.state = {
            article: currentArticle,
            markdown: ""
        };
    }

    componentDidMount() {
        fetch(this.state.article.file)
            .then(response => response.text())
            .then(text => this.setState({markdown: text}));
    }

    render() {
        let a = this.state.article;
        return (
            <PageLayout langCode={this.props.match.params.lang} pageCode="blog">
                <div className="row">
                    <div className="col-8 pr-4 border-right text-center">
                        <h1 className="t-dark">{a.title}</h1>
                        <i>Blog #{a.number} - {moment(a.date).format("DD.MM.YYYY")}</i>
                        <hr/>
                        <div className="text-justify" id="BlogMarkdown">
                            <ReactMarkdown source={this.state.markdown}/>
                        </div>
                    </div>
                    <div className="col-4 pl-4">
                        <h4 className="t-dark text-center mb-4">{this.lang.blog.title}</h4>
                        <p className="text-justify">{this.lang.blog.text}</p>
                        <h4 className="t-dark text-center mb-4">Archive</h4>
                        <ul>
                            {this.lang.blog.articles.sort((a, b) => a.date < b.date ? 1 : -1)
                                .map(a =>
                                    <li className="my-2" key={a.number}>
                                        <a href={"/" + this.props.match.params.lang + "/blog/" + a.number}>
                                            Blog #{a.number} - {a.title}
                                        </a>
                                    </li>
                                )}
                        </ul>
                    </div>
                </div>
            </PageLayout>
        );
    }
}
