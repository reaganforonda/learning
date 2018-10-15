import React from 'react';
import {withRouter} from'react-router-dom';
import {connect} from 'react-redux';
import {loadUserClasses, setActiveClass} from '../../ducks/classReducer';
import AddClassForm from './AddClassForm';
import ClassesList from './ClassesList';

export class ClassesView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            displayClassFormModal: false
        }

        this.toggleClassFormModal = this.toggleClassFormModal.bind(this);
        this.handleClassSelection = this.handleClassSelection.bind(this);
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

    handleClassSelection(e, selectedClass){
        e.preventDefault();

        this.props.setActiveClass(selectedClass);
        
    }

    render(){
        return (
            <div className='classesview'>
                {
                    this.props.classes.length === 0 || !this.props.classes ? <button onClick={this.toggleClassFormModal}>Add a Class</button> : (
                        <div><button onClick={this.toggleClassFormModal}>Add a Class</button><ClassesList setActiveClass={this.props.setActiveClass} classes={this.props.classes}/></div>
                    )
                }
                
                    {
                        this.state.displayClassFormModal ? 
                            <div><AddClassForm setActiveClass={this.handleClassSelection} user={this.props.user} reloadClasses={this.props.loadUserClasses} toggleClassFormModal={this.toggleClassFormModal}/></div> : null
                    }
                
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

export default connect(mapStateToProps, {loadUserClasses, setActiveClass})(withRouter(ClassesView));