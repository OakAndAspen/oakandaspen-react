import HomeLayout from "layouts/HomeLayout";
import React from "react";
import {getLanguage} from "utils";

export default class Home extends React.Component {

    lang = getLanguage(this.props.match.params.lang);

    render() {
        return (
            <HomeLayout lang={this.props.match.params.lang}>
                <h1>{this.lang.home.title}</h1>
            </HomeLayout>
        );
    }
}
