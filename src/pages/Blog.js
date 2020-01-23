import NormalLayout from "layouts/NormalLayout";
import React from "react";

export default class Blog extends React.Component {

    render() {
        return (
            <NormalLayout lang={this.props.match.params.lang} title="Blog">
                <h1>Blog</h1>
            </NormalLayout>
        );
    }
}
