import React from 'react';

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <button onClick={this.handleLogoutClick} > Logout </button>;
        } else {
            button = <button onClick={this.handleLoginClick} > Login </button>;
        }

        return (
            <div style={{margin: '30px'}}>
                { button }
                { isLoggedIn ?
                    (<h1 style={{color: 'green'}}>Welcome back!</h1>) :
                    (<h1 style={{color: 'red'}}>Please sign up.</h1>)
                }
            </div>
        );
    }
}
