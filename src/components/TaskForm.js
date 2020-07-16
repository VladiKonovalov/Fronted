import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super();
    this.state = {
    task: {
        title: '',
        description: '',
      }  
    }
  }
  handlerChangeTask = (property, value) => {
    let task = this.state.task;
    task[property] = value;
   
   
    this.setState({
      task
    })
  }

  handlerTaskSubmit = (e) => {
    e.preventDefault();
    this.props.handlerTask(this.state.task.title, this.state.task.description);
  }

  render() {

    


    return (
      
    <form className="task-form" onSubmit={this.handlerTaskSubmit}>
<div className="container contact">
<div className="row">
  <div className="col-md-3">
    <div className="contact-info">
      <h2>Write new Task</h2>
      <h4>after you finish press submit</h4>
    </div>
  </div>
  <div className="col-md-9">
    <div className="contact-form">
      <div className="form-group">
    <label className="control-label col-sm-2"  htmlFor="taskTitle" >Task title: </label>
        <div className="col-sm-10">          
        <input type="text" className="form-control" id="title" placeholder="Enter Task Title" name="title" value={this.state.task.title} onChange={(e) => this.handlerChangeTask('title', e.target.value)}/>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="taskDescription">Description:</label>
        <div className="col-sm-10">
        <textarea className="form-control" rows="5" id="description" value={this.state.task.description} onChange={(e) => this.handlerChangeTask('description', e.target.value)} ></textarea>
        </div>
      </div>
      <div className="form-group">        
        <div className="col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</form>

    )
  }
}

export default TaskForm;