import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTaskAction, postTaskAction } from '../actions/usersActions';
import TaskForm from '../components/TaskForm';

class Task extends Component {
  componentDidMount() {
    this.props.getTask(this.taskID);

  }

  componentDidUpdate(prevProps) {

    if (prevProps.match.params.taskID !== this.taskID) {
      this.props.getTask(this.taskID);
    }
  }
  get taskID() {
    return this.props.match.params.taskID;
  }

  handlerTask = (title, description) => {
    this.props.createTask(title, description);
    this.props.history.push('/tasks');
  }

  render() {
    return (
      <div className="task-form">
        <TaskForm handlerTask={this.handlerTask} />

      </div>
    )
  }

  handlerClickSubmitTask() {
    if ((this.props.taskTitle !== '') && (this.props.taskDescription !== '')) {
      this.props.history.push('/tasks');
    }
  }

}
const mapStateToProps = state => {

  return {
    task: state.taskReducer.taskActive
  }
}

const mapDispatchToProps = dispatch => {

  return {
    getTask(taskID) {
      console.log("taskID",taskID)
      dispatch(getTaskAction(taskID));
    },

    createTask: (title, description) => {
      dispatch(postTaskAction(title, description));

    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Task);