import React, {Component} from "react";
import {Form as FormDHX} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

class Form extends Component {

    constructor(props){
        console.log("Form Constructor")
        super();
        this.state = {
            id: false
        }
    }

    checkId = async (data) => {
        this.validId(data);
        console.log("stata.id", this.state.id)
        return this.state.id;
    }

    validId = async (data) => {
        fetch("/checkid", {
            method: "POST",
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: data})
        }).then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                console.log(responseData.result)
                if (responseData.result === true) {
                    console.log("response true");
                    console.log("data", this.state);
                    this.setState((data) => ({
                        id: true
                    }));
                    // return true;
                } else {
                    console.log("response false");
                    this.setState((data) => ({
                        id: false
                    }));
                    // return false;
                }
            });


        /*var asyncresult = (async () => {
            const rawResponse = await fetch("/checkid", {
                method: "POST",
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: data})
            });

            const content = await rawResponse.json();
            if (content.result === true) {
                console.log("response true");
                return true;
            } else {
                console.log("response false");
                return false;
            }
        })();

        console.log('asyncresult',asyncresult);*/

    }

    componentDidMount() {
        console.log("Form componentDidMount")
        this.form = new FormDHX(this.el, {
            cellCss: "dhx_widget--bordered",
            gravity: false,
            rows: [
                {
                    type: "input",
                    label: "Id",
                    id: "id",
                    icon: "dxi-magnify",
                    placeholder: "sobuk123",
                    required: true,
                    validation: this.checkId,
                    // validation: function (value) {
                    //     return value && value.length > 6;
                    // },
                    errorMessage: "Invalid Id",
                    successMessage: "Valid Id"

                },
                {
                    type: "input",
                    inputType: "password",
                    label: "Password",
                    id: "password",
                    placeholder: "********",
                    required: true,
                    validation: function (value) {
                        return value && value.length > 8 && value.length < 16;
                    },
                    errorMessage: "Invalid Password(least 8 characters)",
                    successMessage: "Valid Password"
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
                    type: "input",
                    label: "Phone Number",
                    id: "phone",
                    validation: validPhoneNumber,
                    icon: "dxi-magnify",
                    placeholder: "010-4408-7706",
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

        function validPhoneNumber(data) {
            return data.match(/^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/);
        }

        /*async function checkId(data) {
            return fetch("/checkid", {
                method: "POST",
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: data})
            }).then(response => response.json())
                .then(responseData => {
                    console.log(responseData);
                    console.log(responseData.result)
                    if (responseData.result === true) {
                        console.log("response true");
                        return true;
                    } else {
                        console.log("response false");
                        return false;
                    }
                });*/


        //     /*var asyncresult = (async () => {
        //         const rawResponse = await fetch("/checkid", {
        //             method: "POST",
        //             dataType: 'json',
        //             headers: {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({id: data})
        //         });
        //
        //         const content = await rawResponse.json();
        //         if (content.result === true) {
        //             console.log("response true");
        //             return true;
        //         } else {
        //             console.log("response false");
        //             return false;
        //         }
        //     })();
        //
        //     console.log('asyncresult',asyncresult);*/
        //
        // }

        this.form.events.on('buttonClick', (id, e) => {
            console.log("button click in form", id, e);
            // this.form.send("/form_update", "POST", () => {
            // });
            // window.location = "/#/Home";
            console.log("this.form", this.form._state)
            fetch("/form_update", {
                method: "POST",
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(this.form._state)
            }).then(response => {
                console.log("received database");
                console.log(response);
                if (response.status === 400) {
                    alert("Invalid Values");
                } else {
                    alert("Completed membership");
                    window.location= "/#/Home";
                }
            });
        });
    }

    componentWillUnmount() {
        this.form && this.form.destructor();
    }

    render() {
        console.log("Form render")
        return (
            <form style={{textAlign: 'left'}} ref={el => this.el = el}></form>
        );
    }
}

export default Form;