import NormalLayout from "layouts/NormalLayout";
import React from "react";

export default class Portfolio extends React.Component {

    render() {
        return (
            <NormalLayout lang={this.props.match.params.lang} title="Portfolio">
                <h1>Portfolio</h1>
            </NormalLayout>
        );
    }
}
