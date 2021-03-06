import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadUser} from '../../ducks/userReducer';

export class RegisterView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            email: '',
            pw :  '',
            confirmPW: '',
            displayPWError: false,
            firstName: '',
            displayLoginError: false,
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
                axios.post('/api/auth/login', user).then((user)=> {
                    this.props.loadUser(user.data);
                    this.props.history.push('/classes');
                }).catch((err) => {
                    console.log(err);
                })
            }).catch((err) => {
                console.log(err);
                this.setState({displayLoginError: true});
            })
        } else {
            this.setState({displayPWError: true});
        }
    }

    handleCancel(e){
        e.preventDefault();

        this.props.history.push('/');
    }

    render(){
        return (
            <div className='registerview'>
                <form className='registerform' onSubmit={(e)=>this.handleFormSubmit(e)}>
                    <div className='form-row'>
                        <h1>Please Register</h1>
                    </div>
                    <div className='form-row'>
                        <input required={true} name='firstName' type='text' placeholder='First Name' onChange={(e)=> this.handleInputChange(e)}/>
                    </div>
                    <div className='form-row'>
                        <input required={true} name='lastName' type='text' placeholder='Last Name' onChange={(e)=> this.handleInputChange(e)}/>
                    </div>
                    <div className='form-row'>
                        <input required={true} name='email' type='email' placeholder='Email' onChange={(e)=> this.handleInputChange(e)}/>
                    </div>
                    <div className='form-row'>
                        <input required={true} name='pw' type='password' placeholder='Password' onChange={(e)=> this.handleInputChange(e)}/>
                    </div>
                    <div className='form-row'>
                        <input required={true} name='confirmPW' type='password' placeholder='Confirm Password' onChange={(e)=> this.handleInputChange(e)}/>
                    </div>
                    <div className='form-row'>
                        <div className='form-btns'>
                            <button type='button' onClick={(e)=>this.handleCancel(e)}>Cancel</button>
                            <button>Submit</button>
                        </div>
                    </div>
                    {
                        this.state.displayPWError ? <div className='form-row'><p className='error-message'>Passwords Do Not Match</p></div> : null
                    }{
                        this.state.displayLoginError ? <div className='form-row'><p className='error-message'>Email Already In Use</p></div> : null
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

export default connect(mapStateToProps, {loadUser})(withRouter(RegisterView));