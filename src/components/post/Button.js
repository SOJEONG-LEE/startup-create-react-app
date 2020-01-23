import React, {Component} from "react";
import {Form as FormDHX} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

class Button extends Component {
    componentDidMount() {
        this.form = new FormDHX(this.el, {
            cellCss: "dhx_widget--bordered",
            gravity: false,
            cols: [
                {
                    type: "button",
                    value: "Previous",
                    id: "previous",
                    size: "medium",
                    view: "flat",
                    submit: true,
                    color: "primary"
                },
                {
                    type: "button",
                    value: "Next",
                    id: "next",
                    size: "medium",
                    view: "flat",
                    submit: true,
                    color: "primary"
                }
            ]
        });

        this.form.events.on('ButtonClick', (id) => {
            console.log("Button " + id);
            this.props.onButtonClick(id);
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

export default Button;