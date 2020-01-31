import React, {Component} from "react";

class Database extends Component {
    constructor(props) {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log("Database componentDidMount");
        fetch('/database', {
            method: 'get',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(responseData => {
            this.setState({
                data: responseData.rows
            });
            console.log("responseData", responseData)
            console.log("data", this.state.data);
        });

    }

    render() {
        console.log("Database render");
        let temp;
        try {
            temp = this.state.data.map(postgres => {
                console.log(postgres);
                return `<li>id:${postgres.name},num:${postgres.birth}</li>`
            }).join('');
        }catch (e) {

        }

        return (
            <div>
                <h2> database </h2>
                <ul>
                    {temp}
                </ul>
            </div>
        );
    }
}

export default Database;