import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTaskAction,postTaskAction } from '../actions/usersActions';
import TaskForm from '../components/TaskForm';

class Task extends Component {
  componentDidMount() {
    this.props.getUser(this.taskId);

  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.taskId !== this.taskId) {
      this.props.getUser(this.taskId);
    }
  }
  get taskId() {
    return this.props.match.params.taskId;
  }

  handlerTaskSubmit = (title, description) => {
    this.props.createTask(title, description);


    this.props.history.push('/');
  }

  render() {
    console.log("this.props.user.first_name",this.props.user.first_name)
    return (
      <div className="task-form">
      <TaskForm handlerLogin={this.handlerTaskSubmit} />
    </div>

    )
  }
  handlerClickSubmitTask(){
    if ((this.props.taskTitle !== '') &&(this.props.taskDescription !== '')){
     this.props.SubmitTask();
      this.props.history.push('/tasks');
    }
  }

}
const mapStateToProps = state => {

  return {
                user: state.usersReducer.userActive  }

}

const mapDispatchToProps = dispatch => {

  return {
                getUser(taskId){
                  dispatch(getTaskAction(taskId));
    },
    // SubmitTask(){
    //   dispatch(postTaskAction())
    // },
    createTask: (title, description)  => {
  
      dispatch(postTaskAction(title, description));

    }

  
  }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Task);