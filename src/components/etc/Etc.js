import React, {Component} from 'react';
import Subject from "./Subject";
import TOC from './TOC'
import Content from "./Content";

class Etc extends Component {
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
            <div className="Etc">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function () {
                        this.setState({mode:'welcome'});
                    }.bind(this)}
                ></Subject>
                <TOC data={this.state.contents} onChangePage={function (id) {
                    this.setState({mode:'read', select_content_id: Number(id)});
                }.bind(this)}></TOC>
                <Content title={_title} description={_desc}></Content>
            </div>
        );
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

export default Etc;
