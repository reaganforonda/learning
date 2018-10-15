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
                    <h1>TeachSuite</h1>
                    <p>TeachSuite is a toolkit for help teacher make managing admin duties easier.</p>
                    <p>TeachSuite allows teachers to manage grades, attendance, and other administartive tasks in one place</p>
                    <div className='inner-btns'>
                        <button onClick={(e)=>this.handlButton(e, 'login')}>Login</button>
                        <button onClick={(e)=>this.handlButton(e, 'register')}>Sign-Up  </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LandingView);