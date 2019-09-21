import React from 'react';
import './Main.css'
import LoginControl from "./login/LoginControl";
import Feature from "./feature/Feature";
import {connect} from "react-redux";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    render() {
        let localeDate = this.state.date.toLocaleTimeString('en');
        /*const addUserButton = <button style={{margin: '10px'}}> Add User </button>;
        const removeUserButton = <button style={{margin: '10px'}}> Remove User </button>;*/
        return (
            <div className="main-area">
                <h1>Hello, {this.props.name}</h1>
                <h2>It is {localeDate}</h2>
                <div><span>Number of features {this.props.features.length}, number of users {this.props.users.length}</span></div>
                {/*<div>{addUserButton}</div>*/}
                {/*<div>{removeUserButton}</div>*/}
                <a href="#" onClick={this.handleClick.bind(this, 'welch w c lin')}>User Detail</a>
                <LoginControl />
                <Feature />
            </div>
        );
    }

    componentDidMount() {
        console.log('welch-msg', 'Main is mounted')
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log('welch-msg', 'Main will be destroyed')
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick(value, e) {
        console.log('welch-msg-value', value);
        console.log('welch-msg-event', e);
        e.preventDefault();
    }
}

const mapStateToProps = state => {
    const { features, users } = state;
    return { features, users };
};

export default connect(
    mapStateToProps,
    null
)(Main);