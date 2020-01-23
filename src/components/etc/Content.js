import React from "react";

function Content(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.description}
        </article>
    );
}

export default Content;