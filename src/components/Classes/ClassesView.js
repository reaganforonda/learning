import React from 'react';
import {withRouter} from'react-router-dom';
import {connect} from 'react-redux';
import {loadUserClasses} from '../../ducks/classReducer';
import AddClassForm from './AddClassForm';

export class ClassesView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            displayClassFormModal: false
        }

        this.toggleClassFormModal = this.toggleClassFormModal.bind(this);
    }

    componentDidMount() {
        this.props.loadUserClasses(this.props.user);
    }

    toggleClassFormModal(){
        if(this.state.displayClassFormModal) {
            this.setState({displayClassFormModal: false});
        } else {
            this.setState({displayClassFormModal: true});
        }
    }

    render(){
        return (
            <div className='classesview'>
                {
                    this.props.classes.length === 0 || !this.props.classes ? <button onClick={this.toggleClassFormModal}>Add a Class</button> : (
                        <div>
                            List of classes
                        </div>
                    )
                }
                <div>
                    {
                        this.state.displayClassFormModal ? <AddClassForm user={this.props.user} reloadClasses={this.props.loadUserClasses} toggleClassFormModal={this.toggleClassFormModal}/> : null
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        classes: state.classReducer.classes
    }
}

export default connect(mapStateToProps, {loadUserClasses})(withRouter(ClassesView));