import React, {Component} from "react";
import {Form as FormDHX} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

class Form extends Component {

    componentDidMount() {
        this.form = new FormDHX(this.el, {
            cellCss: "dhx_widget--bordered",
            gravity: false,
            rows: [
                {
                    type: "input",
                    label: "Id",
                    id: "id",
                    icon: "dxi-magnify",
                    placeholder: "sobuk",
                    required: true,
                    validation: function (value) {
                        return value && value.length > 6;
                    }
                },
                {
                    type: "input",
                    inputType: "password",
                    label: "Password",
                    id: "password",
                    placeholder: "********",
                    required: true,
                    validation: function (value) {
                        return value && value.length > 8;
                    }
                },
                {
                    type: "input",
                    label: "Name",
                    id: "name",
                    icon: "dxi-magnify",
                    placeholder: "Sobuk",
                    required: true
                },
                {
                    type: "input",
                    label: "Email",
                    id: "email",
                    placeholder: "bear6264@neighbor21.co.kr",
                    validation: "email",
                    errorMessage: "Invalid email",
                    successMessage: "Valid email",
                    required: true
                },
                {
                    type: "checkbox",
                    label: "I agree",
                    name: "agree",
                    labelInline: true,
                    value: "checkboxvalue",
                    required: true
                },
                {
                    type: "button",
                    value: "Send",
                    size: "medium",
                    view: "flat",
                    submit: true,
                    color: "primary"
                },
            ]
        });
        this.form.events.on('buttonClick', (id, e) => {
            console.log("button click in form", id, e);
            this.form.send("/form_update", "POST");
        })
    }

    componentWillUnmount() {
        this.form && this.form.destructor();
    }

    render() {
        return (
            <form style={{textAlign: 'left'}} ref={el => this.el = el}></form>
        );
    }
}

export default Form;