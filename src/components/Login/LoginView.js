import React from 'react';
import axios from 'axios';

export default class LoginView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            email: '',
            pw: '',
            displayPWError: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    handleFormSubmit(e){
        e.preventDefault();
        let user = {
            email: this.state.email.toLowerCase(),
            pw : this.state.pw
        }

        axios.post('/api/auth/login', user).then(()=> {
            this.props.history.push('/dashboard/classes');
        }).catch((err) => {
            if(err.response.status === 401) {
                this.setState({displayPWError: true});  
            }
        })
    }

    render(){
        return (
            <div className='loginview'>
                <form className='loginform' onSubmit={(e)=>this.handleFormSubmit(e)}>
                    <input type='email' required={true} placeholder='Email' name='email' onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='password' required={true} placeholder='Password' name='pw' onChange={(e)=>this.handleInputChange(e)}/>
                    {
                        this.state.displayPWError ? <div>Incorrect Password or Email</div> : null
                    }
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}