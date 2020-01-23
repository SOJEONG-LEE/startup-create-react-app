import React from "react";

function Subject(props) {
    return (
        <header>
            <h1><a href="/" onClick={function (event) {
                event.preventDefault();
                props.onChangePage();
            }.bind(this)}>{props.title}</a></h1>
            {props.sub}
        </header>
    );
}

export default Subject;