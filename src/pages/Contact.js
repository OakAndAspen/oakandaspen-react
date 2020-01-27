import {email, emailJsUserId} from "config/config";
import emailjs from 'emailjs-com';
import $ from "jquery";
import PageLayout from "layouts/PageLayout";
import React from "react";
import {getLanguage} from "utils";

export default class Contact extends React.Component {

    lang = getLanguage(this.props.match.params.lang);

    state = {
        message: "",
        color: ""
    };

    constructor(props) {
        super(props);
        this.send = this.send.bind(this);
    }

    send() {
        let params = {
            email: $("#txtEmail").val(),
            name: $("#txtName").val(),
            message: $("#txaMessage").val()
        };

        if (!params.email || !params.name || !params.message) {
            this.setState({
                message: this.lang.contact.messages.missing,
                color: "warning"
            });
            return null;
        }

        if (!params.email.match(/[^@]+@[^.]+\..+/)) {
            this.setState({
                message: this.lang.contact.messages.emailIncorrect,
                color: "warning"
            });
            return null;
        }

        let service_id = "default_service";
        let template_id = "template_e8F7s0hk";
        emailjs.send(service_id, template_id, params, emailJsUserId).then(r => {
            if (r.status === 200) {
                this.setState({
                    message: this.lang.contact.messages.success,
                    color: "success"
                });
            } else {
                this.setState({
                    message: this.lang.contact.messages.error,
                    color: "danger"
                });
            }
        });
    }

    render() {
        return (
            <PageLayout langCode={this.props.match.params.lang} pageCode="contact">
                <div className="row">
                    <div className="col-md-8">
                        {this.renderForm()}
                    </div>
                    <div className="col-md-4">
                        {this.renderAside()}
                    </div>
                </div>
            </PageLayout>
        );
    }

    renderForm() {
        return (
            <div>
                <h4 className="t-dark font-weight-bold">
                    {this.lang.contact.form.title}
                </h4>
                <input type="text" className="form-control my-3"
                       id="txtName" placeholder={this.lang.contact.form.name}/>
                <input type="text" className="form-control my-3"
                       id="txtEmail" placeholder={this.lang.contact.form.email}/>
                <textarea className="form-control my-3" id="txaMessage"
                          placeholder={this.lang.contact.form.message}/>
                <button className="btn b-green w-100 t-white small-caps"
                        onClick={this.send}>
                    {this.lang.contact.form.button}
                </button>
                {this.state.message &&
                <div className={"mt-4 text-center alert alert-" + this.state.color}>
                    {this.state.message}
                </div>}
            </div>
        );
    }

    renderAside() {
        return (
            <div>
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
                <p className="py-2 t-green">
                    {email}
                </p>
                <p>{this.lang.contact.text}</p>
            </div>
        );
    }
}
