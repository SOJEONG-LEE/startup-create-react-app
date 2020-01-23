import React, {Component} from "react";
import PropTypes from 'prop-types';
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";
import {List as ListDHX, DataCollection} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class PostListForm extends Component {
    componentDidMount() {
        let { css, height, template, itemHeight, virtual, data } = this.props
        this.list = new ListDHX(this.el, {
            css: css,
            data: data,
            template: template,
            height: height,
            itemHeight: itemHeight,
            virtual: virtual
        });
    }

    componentWillUnmount() {
        this.list.destructor();
    }
    render() {
        return (
            <div style={{
                height: 400
            }}
                 ref={el => this.el = el} >
            </div>
        );
    }
}

class PostList extends Component {
    constructor(props){
        super(props)
        this.state = {
            postdata : null,
            itemsCount: null
        }
        this.data = new DataCollection()

/*        this.data.events.on('load', () => {
            this.setState({
                itemsCount: this.data.getLength(),
                postdata : this.props.postallapi
            })
        })

        this.data.load("").then(() => {
            this.data.events.on('change', () => {
                this.setState({
                    itemsCount: this.data.getLength(),
                    postdata : this.props.postallapi
                })
            })
        })*/
    }
/*
    componentDidMount() {
        console.log("postList componentDidMount")
        console.log(this.props.postallapi)
        this.setState({
            postdata : this.props.postallapi
        })
    }

    componentWillUnmount() {
        this.data.events.detach('load')
    }
    handleClick() {
        if(this.state.itemsCount === 0) {
            this.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`)
        } else {
            this.data.remove(this.data.getId(0))
        }
    }*/

    render() {
        console.log("postList render")
        console.log(this.props.postallapi)
        this.data.load(this.props.postallapi);

        return (
            <div>
                <PostListForm
                    css={"dhx_widget--bordered dhx_widget--bg_white"}
                    template={item => `<div style="height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;"><strong>${item.id}</strong> <span>${item.title}</span></div>`}
                    height={400}
                    itemHeight={70}
                    virtual={false}
                    data={this.data}
                />
                {/*<div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
                    <button className="button" onClick={() => this.handleClick()}>
                        {this.state.itemsCount === 0 ? 'Reset' : `Remove first of ${this.state.itemsCount} items`}
                    </button>
                </div>*/}
            </div>
        );
    }
}

PostList.propTypes = {
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

export default PostList;