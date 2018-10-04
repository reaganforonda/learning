import React from 'react';


export default class RegisterView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            email: '',
            pw :  '',
            confirmPW: '',
            displayPWError: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    handleFormSubmit(e){
        e.preventDefault();
        if(this.state.pw === this.state.confirmPW) {
            this.setState({displayPWError: false});
            let user ={
                email: this.state.email,
                pw: this.state.pw,
                confirmPW : this.state.confirmPW
            }

            console.log(user);
        } else {
            this.setState({displayPWError: true});
        }
    }

    render(){
        return (
            <div className='registerview'>
                <form className='registerform' onSubmit={(e)=>this.handleFormSubmit(e)}>
                    <input required={true} name='email' type='email' placeholder='Email' onChange={(e)=> this.handleInputChange(e)}/>
                    <input required={true} name='pw' type='password' placeholder='Password' onChange={(e)=> this.handleInputChange(e)}/>
                    <input required={true} name='confirmPW' type='password' placeholder='Confirm Password' onChange={(e)=> this.handleInputChange(e)}/>
                    {
                        this.state.displayPWError ? <div>Passwords Do Not Match</div> : null
                    }
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}