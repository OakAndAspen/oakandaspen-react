import React from "react";

export default class HomeLayout extends React.Component {

    render() {
        return (
            <div>
                <header>
                    Big header
                </header>
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
}
