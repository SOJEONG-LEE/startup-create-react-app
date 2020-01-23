import React, {Component} from "react";
import {Form as FormDHX} from "dhx-suite";
import {withRouter} from 'react-router-dom';
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

class AllPostButtonButton extends Component {
    componentDidMount() {
        this.form = new FormDHX(this.el, {
            cellCss: "dhx_widget--bordered",
            gravity: false,
            rows: [
                {
                    type: "button",
                    value: "Back",
                    id: "back",
                    size: "medium",
                    view: "flat",
                    submit: true,
                    color: "primary"
                }
            ]
        });

        this.form.events.on('ButtonClick', () => {
            this.props.history.push('/allPost')
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

export default withRouter(AllPostButtonButton);