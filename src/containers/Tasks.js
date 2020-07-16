import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTasksAction, getTaskAction,deleteTaskAction,editTaskAction } from '../actions/usersActions';

class Tasks extends Component {
    componentDidMount() {
        this.props.getTasks(1);
        this.props.viewTask(this.taskId);
        this.props.deletTask(this.taskId);
        this.props.deletTask(this.taskId);
         this.props.editTask(this.taskId);
    }

    get pageNumber() {

        const isPageNumberExist = typeof this.props.match.params.pageNumber !== 'undefined';
        return (isPageNumberExist ? this.props.match.params.pageNumber : 2);
    }


    render() {

        const pagesButtonRender = this.getPagesButtonRender();
        const _data= this.props.tasks.tasks;



        return (
            <div className="users-page">
                <table className="table table-hover table-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Descrition</th>
                            <th scope="col">Creator</th>
                            <th scope="col">Date Created</th>

                        </tr>
                    </thead>
                    <tbody>
                        {_data.map((task, taskID) =>
                            <tr key={taskID}> 
                                <th scope="row" > {taskID +1}</th>
                                <td >{task.title}</td>
                                <td >{task.description}</td>
                                <td >{task.creater}</td>
                                <td >{task.createdDate}</td>

                                <td >
                                <span className="pointer" onClick={() => this.handlerClickViewTask(task._id)}>view  </span>
                                    <span className="pointer" onClick={() => this.handlerClickDeleteTask(task._id)}>delete  </span>
                                    <span className="pointer" onClick={() => this.handlerClickEditTask(task._id)}>edit  </span>
                                </td>
                            </tr>

                        )}

                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {pagesButtonRender}
                    </ul>
                </nav>
            </div>
        )
    }

    getPagesButtonRender() {
        let pagesButtonRender = [];
        for (let i = 1; i <= 3; i++) {
            pagesButtonRender.push(
                <li key={i} className="page-item">
                    <button className="page-link" onClick={() => this.handlerClickPage(i)}>{i}
                    </button ></li>
            );
        }
        return pagesButtonRender;
    }
    handlerClickPage(pageNumber) {
        if (this.props.tasks.page !== pageNumber) {
            this.props.history.push(`/tasks/${pageNumber}`);
            this.props.getTasks(pageNumber);
        }

    }
    handlerClickUser(taskID) {
        this.props.history.push(`/task/${taskID}`);
    }


    handlerClickDeleteTask(taskID) {
        if ((taskID !== '') && (taskID !== 'undefind')) {
        //  deleteUserTask(taskID);
        this.props.deletTask(taskID);
        this.props.history.push('/tasks');

     } }

    handlerClickEditTask(taskID) {
        this.props.history.push(`/task/${taskID}`);

    }
    handlerClickViewTask(taskID) {
        this.props.history.push(`/task/${taskID}`);
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.taskReducer.tasks,
       // isDelete: state.taskReducer.
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks(pageNumber) {
            dispatch(getTasksAction(pageNumber));
        },
       
        viewTask(taskID) {
            dispatch(getTaskAction(taskID));
        },
        deletTask(taskID){
            dispatch(deleteTaskAction(taskID));  
        },
        editTask(taskID){
            dispatch(editTaskAction(taskID));  
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Tasks);