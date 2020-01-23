import React, {Component} from "react";
import {Form as FormDHX} from "dhx-suite";
import PropTypes from 'prop-types';
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";
import {List as ListDHX, DataCollection} from "dhx-suite";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import ReadPost from "./ReadPost";

class PostListForm extends Component {
    constructor(props){
        super();
        this.state = {
            postId : null
        }
    }

    /*
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("PostListForm componentDidUpdate")
        console.log(prevProps, prevState, snapshot)
        console.log(this.props.data)
        this.list.data.parse(this.props.data)
    }

     */

    componentDidMount() {
        console.log("PostListForm componentDidMount")
        let {css, height, template, itemHeight, virtual, data} = this.props
        this.list = new ListDHX(this.el, {
            css: css,
            data: data,
            template: template,
            height: height,
            itemHeight: itemHeight,
            virtual: virtual
        });

        this.list.events.on("Click", (id) => {
            console.log("click")
            console.log(id)
            console.log(this.props.history)
            this.props.history.push('/allPost/'+id)
        })
    }

    componentWillUnmount() {
        this.list.destructor();
    }

    render() {
        return (
            <div style={{
                height: 400
            }}
                 ref={el => this.el = el}>
            </div>
        );
    }
}

class AllPost extends Component {

    constructor(props) {
        super();
        this.state = {
            postallapi: null
        };
        this.data = new DataCollection()
    }

    fetchAllPostInfo = async () => {

        const postallapi = await axios.get('https://jsonplaceholder.typicode.com/posts/');
        console.log("fetchAllPostInfo")

        const titleInfo = postallapi.data.map(m => {
            return {id: m.id.toString(), title: m.title}
        });

        this.data.parse(titleInfo);
        //
        // this.setState({
        //     postallapi: titleInfo
        // });

/*        axios.get('https://jsonplaceholder.typicode.com/posts/').then(info => {
            console.log("fetchAllPostInfo");
            console.log("info", info.data);
            const titleInfo = info.data.map(m => {
                return {id: m.id.toString(), title: m.title}
            })
            console.log(titleInfo);
            this.data.parse(titleInfo);
        })*/


    }

    componentDidMount() {
        this.fetchAllPostInfo();
        console.log("all post componentDidMount")
    }


    render() {
        const postallinfo = this.state.postallapi;
        console.log("all post render")
        console.log(postallinfo)

        /*let lists = null;
        let listData = null;
        if(this.state.postallapi !== null) {
            listData = this.state.postallapi;
            lists = this.state.postallapi.map(list =>
                <li key={list.id}>
                    <a href="/content/{list.id}"
                       onClick={function (id, event) {
                           event.preventDefault();
                           this.props.onChangePage(id);
                       }.bind(this, list.id)}>
                        {list.title}
                    </a>
                </li>);
        }*/
        return (
            <div>
                <PostListForm
                    css={"dhx_widget--bordered dhx_widget--bg_white"}
                    template={item => `<div style="height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;"><strong>${item.id}. ${item.title}</strong></div>`}
                    height={400}
                    itemHeight={70}
                    virtual={false}
                    data = {this.data}
                    history = {this.props.history}
                    // data={postallinfo}
                />
            </div>
        );
    }
}

PostListForm.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.instanceOf(DataCollection)
    ]),
    template: PropTypes.func,
    keyNavigation: PropTypes.bool,
    css: PropTypes.string,
    virtual: PropTypes.bool,
    height: PropTypes.number,
    itemHeight: PropTypes.number,
};

export default withRouter(AllPost)
