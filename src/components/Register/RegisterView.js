import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

export class RegisterView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            email: '',
            pw :  '',
            confirmPW: '',
            displayPWError: false,
            firstName: ''
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
                email: this.state.email.toLowerCase(),
                pw: this.state.pw,
                confirmPW : this.state.confirmPW,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            }

            axios.post('/api/auth/register', user).then(() => {
                axios.post('/api/auth/login', user).then(()=> {
                    console.log('Redirect');
                }).catch((err) => {
                    console.log(err);
                })
            }).catch((err) => {
                console.log(err);
            })
        } else {
            this.setState({displayPWError: true});
        }
    }

    render(){
        return (
            <div className='registerview'>
                <form className='registerform' onSubmit={(e)=>this.handleFormSubmit(e)}>
                    <input required={true} name='firstName' type='text' placeholder='First Name' onChange={(e)=> this.handleInputChange(e)}/>
                    <input required={true} name='lastName' type='text' placeholder='Last Name' onChange={(e)=> this.handleInputChange(e)}/>
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

export default withRouter(RegisterView);