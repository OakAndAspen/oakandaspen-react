import NormalLayout from "layouts/NormalLayout";
import React from "react";

export default class Services extends React.Component {

    render() {
        return (
            <NormalLayout lang={this.props.match.params.lang} title="Services">
                <h1>Services</h1>
            </NormalLayout>
        );
    }
}
