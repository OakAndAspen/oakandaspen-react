import React from "react";
import {Helmet} from "react-helmet";

export default class Head extends React.Component {

    render() {
        let meta = this.props.lang[this.props.pageCode];
        return (
            <Helmet>
                <meta name="description" content={meta.description}/>
                <meta name="keywords" content={meta.keywords}/>
            </Helmet>
        );
    }
}
