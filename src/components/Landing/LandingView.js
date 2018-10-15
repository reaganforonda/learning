import React from 'react';
import {withRouter} from 'react-router-dom';

export class LandingView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            toLogin: false,
            toRegister: false
        }

        this.handlButton = this.handlButton.bind(this);
    }

    handlButton(e, path) {
        if(path === 'login') {
            e.preventDefault();
            this.props.history.push('/login');
        } else if (path === 'register') {
            e.preventDefault();
            this.props.history.push('/register');
        }
    }

    render() {
        return (
            <div className='landingView'>
                <div className='inner'>
                    <h1>ClassRoom Manager</h1>
                    <p>A classroom management web application for teachers</p>
                    <button onClick={(e)=>this.handlButton(e, 'login')}>Login</button>
                    <button onClick={(e)=>this.handlButton(e, 'register')}>Create Account</button>
                </div>
            </div>
        )
    }
}

export default withRouter(LandingView);