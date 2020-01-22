import React from "react";

export default class NormalLayout extends React.Component {

  render() {
    return (
        <div>
            <header>
                Small header
            </header>
            <section>
            {this.props.children}
            </section>
        </div>
    );
  }
}
