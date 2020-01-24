import React from "react";

export default class Badge extends React.Component {

    render() {
        let style = {
            fontSize: "0.9em"
        };

        return (
            <span className="badge b-green t-white small-caps mr-2 mb-1 p-1"
                  style={style}>
                {this.props.content}
            </span>
        );
    }
}
