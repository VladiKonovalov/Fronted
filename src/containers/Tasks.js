import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTasksAction, deleteUserTask, editUserTask, viewUserTask } from '../actions/usersActions';

class Tasks extends Component {
    componentDidMount() {
        this.props.getTasks(this.pageNumber);
        this.props.deleteTask(this.taskId);
        this.props.editTask(this.taskId);
        this.props.viewTask(this.taskId);

    }

    get pageNumber() {

        const isPageNumberExist = typeof this.props.match.params.pageNumber !== 'undefined';
        return (isPageNumberExist ? this.props.match.params.pageNumber : 1);
    }


    render() {
        const pagesButtonRender = this.getPagesButtonRender();

        return (
            <div className="users-page">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Descrition</th>
                            <th scope="col">Creator</th>
                            <th scope="col">Date Created</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.tasks.map((task, taskID) =>
                            <tr key={taskID}>
                                <th scope="row" >  2{task.title}</th>
                                <td >3{task.description}</td>
                                <td >4{task.creater}</td>
                                <td >5{task.dateCreated}</td>

                                <td >
                                    <span className="pointer" onClick={() => this.handlerClickDeleteTask(task.taskID)}>delete  </span>
                                    <span className="pointer" onClick={() => this.handlerClickViewTask(task.taskID)}>edit  </span>
                                    <span className="pointer" onClick={() => this.handlerClickEditTask(task.taskID)}>view  </span>
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
        console.log("taskId", taskID);
        this.props.history.push(`/tasks/${taskID}`);
    }


    handlerClickDeleteTask(taskID) {

        //   deleteUserTask(taskId);
        this.props.deleteTask(taskID);
    }
    handlerClickEditTask(taskID) {
        console.log("handlerClickEditTask", taskID);

        //   deleteUserTask(taskId);
        this.props.editTask(taskID);
        
    }
    handlerClickViewTask(taskID) {
        console.log("taskId", taskID);

        //   deleteUserTask(taskId);
        //this.props.viewTask(taskId);
        this.props.history.push(`/tasks/${taskID}`);
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.taskReducer.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks(pageNumber) {
            dispatch(getTasksAction(pageNumber));
        }
        ,
        deleteTask(taskID) {
            console.log("deleteTask(taskID)", taskID);

            dispatch(deleteUserTask(taskID));
        }
        ,
        editTask(taskID) {
            console.log("editTask(taskID)", taskID);

            dispatch(editUserTask(taskID));
        },

        viewTask(taskID) {
            dispatch(viewUserTask(taskID));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Tasks);