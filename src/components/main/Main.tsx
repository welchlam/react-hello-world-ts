import React from 'react';
import './Main.css'
import LoginControl from "./login/LoginControl";
import Feature from "./feature/Feature";
import {connect} from "react-redux";
import {IFeature} from "../../model/IFeature";

export interface Props {
    name: string;
    features: IFeature[];
    users: string[];
}

export interface State {
    date: Date;
}

class Main extends React.Component<Props, State> {
    private timerID: NodeJS.Timeout | undefined;

    constructor(props: Props) {
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
        if (this.timerID instanceof NodeJS.Timeout) {
            clearInterval(this.timerID);
        }
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick(value: any, e: any) {
        console.log('welch-msg-value', value);
        console.log('welch-msg-event', e);
        e.preventDefault();
    }
}

const mapStateToProps = (state: Props) => {
    const { features, users } = state;
    return { features, users };
};

export default connect(mapStateToProps)(Main);