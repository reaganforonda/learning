import React from 'react';

export default class LandingView extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
    }

    render() {
        return (
            <div className='landingView'>
                <button>Login</button>
                <button>Create Account</button>
            </div>
        )
    }
}