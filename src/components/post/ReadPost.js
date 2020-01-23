import React, {Component} from "react";
import {Form as FormDHX} from "dhx-suite";
import {withRouter} from 'react-router-dom';
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";
import Button from "./Button";
import axios from "axios";
import AllPostButtonButton from "./AllPostButton";

class ReadPost extends Component {
    constructor(props) {
        super();
        // initializes component state
        this.state = {
            postId: 1,
            fetching: false, // tells whether the request is waiting for response or not
            post: {
                title: null,
                body: null
            },
            member: {
                name: null,
                email: null,
                password: null
            },
            comments: []
        };
    }

    fetchPostInfo = async (postId) => {
        const postapi = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
        ]);
        console.log(postapi);
        const {title, body} = postapi[0].data;

        this.setState({
            postId,
            post: {
                title,
                body
            },
            fetching: false
        });
    }

    handleButton = (type) => {
        const postId = this.state.postId;

        if (type === 'next') {
            this.fetchPostInfo(postId + 1);
        } else {
            this.fetchPostInfo(postId - 1);
        }
    }

    componentDidMount() {
        this.fetchPostInfo(Number(this.props.match.params.id));
    }

    componentWillUnmount() {
        this.form && this.form.destructor();
    }

    render() {
        const {postId, fetching, post, comments} = this.state;
        return (
            <div class="ReadPost">
                <AllPostButtonButton></AllPostButtonButton>
                <h2>{postId}. {post.title}</h2>
                {post.body}
                <Button postId={postId} onButtonClick={this.handleButton}></Button>

            </div>
        );
    }
}

export default withRouter(ReadPost);