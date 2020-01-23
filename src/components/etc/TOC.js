import React from 'react';

function TOC(props) {
    var lists = props.data.map(list =>
        <li key={list.id}>
            {/*<a href="/content/{list.id}"
               data-id = {list.id}
               onClick={function (event) {
                event.preventDefault();
                props.onChangePage(event.target.dataset.id);
            }.bind(this)}>*/}
            <a href="/content/{list.id}"
               onClick={function (id, event) {
                   event.preventDefault();
                   props.onChangePage(id);
               }.bind(this, list.id)}>
                {list.title}
            </a>
        </li>);
    return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
    );
}

export default TOC;
