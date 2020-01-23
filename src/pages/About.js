import NormalLayout from "layouts/NormalLayout";
import React from "react";

export default class About extends React.Component {

    render() {
        return (
            <NormalLayout lang={this.props.match.params.lang} title="About">
                <h1>About</h1>
            </NormalLayout>
        );
    }
}
