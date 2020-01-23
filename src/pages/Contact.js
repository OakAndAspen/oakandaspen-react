import NormalLayout from "layouts/NormalLayout";
import React from "react";

export default class Contact extends React.Component {

    render() {
        return (
            <NormalLayout lang={this.props.match.params.lang} title="Contact">
                <h1>Contact</h1>
            </NormalLayout>
        );
    }
}
