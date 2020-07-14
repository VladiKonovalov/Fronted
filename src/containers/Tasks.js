import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUsersAction,deleteUserTask,editUserTask,viewUserTask} from '../actions/usersActions';

class Tasks extends Component {
    componentDidMount(){
        this.props.getUsers(this.pageNumber);
        this.props.deleteTask(this.taskId);
        this.props.editTask(this.taskId);
        this.props.viewTask(this.taskId);

    }

    get pageNumber(){
        
const isPageNumberExist = typeof this.props.match.params.pageNumber !== 'undefined';
return (isPageNumberExist ? this.props.match.params.pageNumber : 1 );
    }      


    render() {
        const pagesButtonRender=this.getPagesButtonRender();
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
                        {this.props.users.data.map((task,_id) =>
                        <tr key={_id}>
                            <th scope="row">{task._id}</th>
                            <td ><span className="pointer" onClick={()=>this.handlerClickUser(task._id)}>
                                {task.title}</span></td>
                            <td >{task.description}</td>
                            <td >{task.creater}</td>
                            <td >{task.creater}</td>
                            
                            <td > 
                             <span className="pointer" onClick={()=>this.handlerClickDeleteTask(task.id)}>delete  </span> 
                             <span className="pointer" onClick={()=>this.handlerClickViewTask(task.id)}>edit  </span> 
                             <span className="pointer" onClick={()=>this.handlerClickEditTask(task.id)}>view  </span> 
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

    getPagesButtonRender(){
        let pagesButtonRender = [];
        for (let i=1; i<=this.props.users.total_pages; i++){
            pagesButtonRender.push( 
        <li key ={i} className="page-item">
            <button className="page-link" onClick={()=>this.handlerClickPage(i)}>{i}
            </button ></li>
            );
        }
        return pagesButtonRender;
    }
        handlerClickPage(pageNumber){
            if (this.props.users.page !== pageNumber){
                this.props.history.push(`/tasks/${pageNumber}`);
                this.props.getUsers(pageNumber);
            }
            
        }
        handlerClickUser(taskId){
                this.props.history.push(`/task/${taskId}`);
            }
      

            handlerClickDeleteTask(taskId){
             //   deleteUserTask(taskId);
                this.props.deleteTask(taskId);
            }
            handlerClickEditTask(taskId){
                //   deleteUserTask(taskId);
                   this.props.editTask(taskId);
               }
               handlerClickViewTask(taskId){
                //   deleteUserTask(taskId);
                   //this.props.viewTask(taskId);
                   this.props.history.push(`/task/${taskId}`);
               }
      }

const mapStateToProps = state => {
    return {
    users:state.usersReducer.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers(pageNumber){
            dispatch(getUsersAction(pageNumber));
        }
        ,
        deleteTask(taskId){
            dispatch(deleteUserTask(taskId));
         }
         ,
        editTask(taskId){
            dispatch( editUserTask(taskId));
         }
         ,
       viewTask(taskId){
            dispatch(viewUserTask(taskId));
         }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Tasks);