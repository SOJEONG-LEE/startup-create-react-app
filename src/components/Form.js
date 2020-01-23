import React, {Component} from "react";
import { Form as FormDHX } from "dhx-suite";
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
                    label: "Name",
                    icon: "dxi-magnify",
                    placeholder: "Sobuk"
                },
                {
                    type: "input",
                    label: "Email",
                    placeholder: "bear6264@neighbor21.co.kr"
                },
                {
                    type: "input",
                    inputType: "password",
                    label: "Password",
                    placeholder: "********"
                },
                {
                    type: "checkbox",
                    label: "I agree",
                    name: "agree",
                    labelInline: true,
                    value: "checkboxvalue",
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
            console.log("button click in form", id, e)
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