import React from "react";
import {getLanguage} from "utils";

export default class Footnote extends React.Component {

    render() {

        let lang = getLanguage(this.props.lang);

        return (
            <div className="text-center my-4 py-4">
                <h3 className="my-4 text-dark font-weight-bold">
                    {lang.footnote.title}
                </h3>
                <p className="py-2">
                    {lang.footnote.text}
                </p>
                <a href={"/" + this.props.lang + "/contact"}
                   className="btn b-green t-white font-weight-bold mx-auto small-caps">
                    {lang.footnote.button}
                </a>
            </div>
        );
    }
}
