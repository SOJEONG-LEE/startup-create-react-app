import React, {Component} from "react";
import {Form as FormDHX} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

class AddPost extends Component {
    componentDidMount() {

        this.form = new FormDHX(this.el, {
            cellCss: "dhx_widget--bordered",
            gravity: false,
            rows: [
                {
                    type: "input",
                    label: "Title",
                    labelWidth: "70px",
                    labelInline: true,
                    icon: "dxi-magnify",
                    placeholder: "title"
                },
                {
                    type: "input",
                    label: "Writer",
                    labelWidth: "70px",
                    labelInline: true
                },
                {
                    type: "datepicker",
                    label: "Date",
                    labelWidth: "70px",
                    labelInline: true
                },
                {
                    type: "simpleVault",
                    label: "files",
                    labelInline: true,
                    labelWidth: "70px",
                    width: "450px"
                },
                {
                    type: "textarea",
                    label: "Textarea",
                    labelWidth: "70px",
                    labelInline: true,
                    value: "Some nice text",
                    width: 800
                },
                {
                    type: "button",
                    value: "Submit",
                    size: "medium",
                    view: "flat",
                    submit: true,
                    color: "primary"
                },
            ]
        });
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


export default AddPost;