import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersAction } from '../actions/usersActions';

class Users extends Component {
    componentDidMount() {
        this.props.getUsers(2);
    }

    get pageNumber() {

        const isPageNumberExist = typeof this.props.match.params.pageNumber !== 'undefined';
        return (isPageNumberExist ? this.props.match.params.pageNumber : 2);
    }

    handlerisAdmin = (e) => {

        if (e===true ){

    return 'true';}

 return 'false';
}
    
    render() {

        const pagesButtonRender = this.getPagesButtonRender();
        const _data= this.props.users.users;
        if (_data === null){
console.log("it is null",_data);}
        return (
            <div className="users-page">
                <table className="table table-hover table-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">username</th>
                            <th scope="col">is Admin</th>
                            <th scope="col">number of tasks</th>
                            <th scope="col">last created task</th>

                        </tr>
                    </thead>
                    <tbody>
                        {_data.map((user, userID) =>
                            <tr key={userID}> 
                                <th scope="row" > {userID +1}</th>
                                <td >{user.username}</td>
                                <td >      {''+user.isAdmin}</td>
                                <td >{user._id}</td>
                                <td > 000</td>
                                <td >
                                    <span className="pointer" onClick={() => this.handlerClickDeleteTask(user._id)}>delete  </span>
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
            this.props.history.push(`/users/${pageNumber}`);
            this.props.getTasks(pageNumber);
        }

    }
    handlerClickUser(taskID) {
        this.props.history.push(`/user/${taskID}`);
    }


    handlerClickDeleteTask(taskID) {
        if ((taskID !== '') && (taskID !== 'undefind')) {
        //  deleteUserTask(taskID);
        this.props.deletTask(taskID);
        this.props.history.push('/users');

     } }

    // handlerClickEditTask(taskID) {
    //     this.props.editTask(taskID);
    //     this.props.history.push(`/task/${taskID}`);

    // }
    // handlerClickViewTask(taskID) {
    //     this.props.viewTask(taskID);
    //     this.props.history.push(`/task/${taskID}`);
    // }
}

const mapStateToProps = state => {
    return {
     //   tasks: state.taskReducer.tasks,
    //    taskActive: state.taskReducer.taskActive,
         users: state.usersReducer.users

    }
}

const mapDispatchToProps = dispatch => {
    return {
   

        getUsers(pageNumber) {
            dispatch(getUsersAction(pageNumber));
        },
       
        // deletTask(taskID){
        //     dispatch(deleteTaskAction(taskID));  
        // }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Users);