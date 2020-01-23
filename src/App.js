import React, {Component} from 'react';
import {Route, HashRouter, Switch, Redirect} from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import Subject from "./components/etc/Subject";
import TOC from './components/etc/TOC'
import Content from "./components/etc/Content";
import Sidebar from "./Sidebar";
import Form from "./components/Form";
import AddPost from "./components/post/AddPost";
import Etc from "./components/etc/Etc";
import ReadPost from "./components/post/ReadPost";
import AllPost from "./components/post/AllPost";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'read',
            select_content_id: 3,
            subject: {
                title: 'WEB',
                sub: 'World Wide Web!'
            },
            welcome: {
                title: 'Welcome',
                desc: 'Hello, React!'
            },
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for Design'},
                {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
            ]
        }
    }

    render() {
        var _title, _desc = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read') {
            var select_content =
                this.state.contents.find(f => f.id === this.state.select_content_id);
            console.log(select_content);
            _title = select_content.title;
            _desc = select_content.desc;
        }
        return (
            // react는 모든 파일을 다 로딩한 상태에서 URL마다 다른 컴포넌트를
            <HashRouter hashType={'slash'}>
                <div className="App">
                    <div className='app-screen'
                         style={{minHeight: '100vh', maxHeight: '100vh', display: 'flex', overflow: "hidden"}}>
                        <Sidebar></Sidebar>
                        <div className="app-screen__inner" style={{flexBasis: 'auto', flexGrow: 1}}>
                            {/*<div className='app-content' ref={(el) => this.el = el} >*/}
                            <div className='app-content' style={{marginTop: '1vh'}}>
                                <Switch>
                                    // 해당 URL에 따라 Component 이동.
                                    <Route path={`/Home`} component={() => <h1>Welcome to React Web Page</h1>}/>
                                    <Route path={`/Join`} component={() => <Form></Form>}/>
                                    <Route path={`/addPost`} component={() => <AddPost></AddPost>}/>
                                    <Route path={`/allPost/:id`} component={() => <ReadPost></ReadPost>}/>
                                    <Route path={`/allPost`} component={() => <AllPost></AllPost>}/>
                                    <Route path={`/Etc`} component={() =>
                                        <Etc></Etc>
                                    }/>
                                    // 루트(/) 요청으로 Redirect
                                    <Redirect path="*" to="/" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        )
        /*return (
            <div className="App">
                <Sidebar></Sidebar>
                {/!*<Subject title="React" sub="For UI"></Subject>*!/}
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function () {
                        this.setState({mode:'welcome'});
                    }.bind(this)}
                />
                <TOC data={this.state.contents} onChangePage={function (id) {
                    this.setState({mode:'read', select_content_id: Number(id)});
                }.bind(this)}></TOC>
                <Content title={_title} description={_desc}></Content>
            </div>
        );*/
    };
}

/*
class Subject extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        );
    }
}

class TOC extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href ="1.html">HTML</a></li>
                    <li><a href ="2.html">CSS</a></li>
                    <li><a href ="3.html">JavaScript</a></li>
                </ul>
            </nav>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.description}
            </article>
        );
    }
}
*/


/*function App() {
  return (
    <div className="App">
      Hello, React JS
      {/!*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*!/}
    </div>
  );
}*/

export default App;
