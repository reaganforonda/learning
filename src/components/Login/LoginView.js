import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadUser} from '../../ducks/userReducer';

export  class LoginView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            email: '',
            pw: '',
            displayPWError: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
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

        axios.post('/api/auth/login', user).then((user)=> {
            this.props.loadUser(user.data);
            this.props.history.push('/dashboard/classes');
        }).catch((err) => {
            if(err.response.status === 401) {
                this.setState({displayPWError: true});  
            }
        })
    }

    handleCancel(e) {
        e.preventDefault();

        this.props.history.push('/');
    }

    render(){
        return (
            <div className='loginview'>
                <form className='loginform' onSubmit={(e)=>this.handleFormSubmit(e)}>
                    <div className='form-row'>
                        <h1>Please Log In</h1>
                    </div>
                    <div className='form-row'>
                        <input type='email' required={true} placeholder='Email' name='email' onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='form-row'>
                        <input type='password' required={true} placeholder='Password' name='pw' onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    
                    <div className='form-row'>
                        <div className='form-btns'>
                            <button type='button' onClick={(e)=>this.handleCancel(e)} className='cancel-btn'>Cancel</button>
                            <button className='login-btn'>Login</button>
                        </div>
                    </div>

                    {
                        this.state.displayPWError ? <div className='form-row'><p className='error-message'>Incorrect Password or Email</p></div> : null
                    }
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {loadUser})(withRouter(LoginView));

