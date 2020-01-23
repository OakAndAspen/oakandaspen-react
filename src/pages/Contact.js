import NormalLayout from "layouts/NormalLayout";
import React from "react";
import {getLanguage} from "utils";

export default class Contact extends React.Component {

    lang = getLanguage(this.props.match.params.lang);

    render() {
        return (
            <NormalLayout lang={this.props.match.params.lang} title="Contact">
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="t-dark font-weight-bold">
                            {this.lang.contact.form.title}
                        </h4>
                        <input type="text" className="form-control my-3" placeholder={this.lang.contact.form.name}/>
                        <input type="text" className="form-control my-3" placeholder={this.lang.contact.form.email}/>
                        <textarea className="form-control my-3" placeholder={this.lang.contact.form.message}/>
                        <button className="btn b-green w-100 t-white small-caps">
                            {this.lang.contact.form.button}
                        </button>
                    </div>
                    <div className="col-md-4">
                        <h4 className="t-dark font-weight-bold">
                            {this.lang.contact.title1}
                        </h4>
                        <p className="py-4">
                            {this.lang.footer.address.street}<br/>
                            {this.lang.footer.address.city}<br/>
                            {this.lang.footer.address.country}
                        </p>
                        <h4 className="t-dark font-weight-bold">
                            {this.lang.contact.title2}
                        </h4>
                        <p className="py-2">
                            <a href="mailto:contact@oakandaspen.ch">contact@oakandaspen.ch</a>
                        </p>
                        <p>{this.lang.contact.text}</p>
                    </div>
                </div>
            </NormalLayout>
        );
    }
}
