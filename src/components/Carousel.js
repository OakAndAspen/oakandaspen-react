import {FontAwesomeIcon as FAI} from "@fortawesome/react-fontawesome";
import React from "react";

export default class Carousel extends React.Component {

    render() {
        return (
            <div className="d-flex justify-content-between align-items-center t-white text-center my-4 small-caps">
                <FAI icon={["far", "angle-left"]} className="display-1 pointer"/>
                <div className="t-white">
                    <h1>Test content</h1>
                </div>
                <FAI icon={["far", "angle-right"]} className="display-1 pointer"/>
            </div>
        );
    }
}
