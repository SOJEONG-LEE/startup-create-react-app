import React, {Component, PureComponent} from 'react';
import {withRouter} from 'react-router-dom';
import {Sidebar as SidebarDHX, TreeCollection} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Sidebar extends Component {

    componentDidMount() {
        this.sidebar = new SidebarDHX(this.el, {
            css: "dhx_widget--bordered dhx_widget--bg_white",
            /*            width: width,
                        minWidth: minWidth,
                        collapsed: collapsed,
                        data: data*/
        })

        this.sidebar.data.load(`${process.env.PUBLIC_URL}/static/sidebar.json`)

        this.sidebar.events.on('Click', (id, e) => {
            console.log("Click " + id);
            /*
            Route는 컴포넌트에 기본적으로 match, history, location 이라는 것을 넘겨준다.
            이때 histroy.push(‘/인자’) 함수에 인자를 넣어주면 해당 인자로 URL을 새로고침 없이 이동
            history는 브라우저의 window.history와 유사하며 주소를 임의로 변경하거나 되돌아 갈 수 있도록 한다.
            주소 변경시, SPA특성을 지키기 위해 페이지 전체를 리로드 하지 않는다. location이 포함되어 있다.
            */
            this.props.history.push('/' + id)
        })
    }

    componentWillUnmount() {
        this.sidebar.destructor();
    }

    render() {
        return (
            <div ref={el => this.el = el}></div>
        );
    }
}

/*
withRouter 고차함수를 이용해 Component를 주입하게 되면,
Siderbar Component는 RouteComponentProps의 정보를 갖게 된다.
RouteComponentProps는 history, location, match 정보를 가진 인터페이스로서 Route 정보를 담고 있다.
*/
export default withRouter(Sidebar);