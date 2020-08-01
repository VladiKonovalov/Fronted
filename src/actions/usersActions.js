

export const loginAction = (username, password) => {
  return async (dispach) => {
    const body = {
      username,
      password
    }
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + window.localStorage.Autorization
      },
      body: JSON.stringify(body)
    }


    fetch('https://vladikonov.herokuapp.com/users/login', options)
      .then(function (response) {
        console.log("login",response.status);

        return response.json();
      }).then(function (data) {
        const isLogged = (typeof data.token !== 'undefined' && data.token !== '');
        const token = data.token;
        const username=data.username;
        return dispach({
          type: "LOGIN",
          payload: isLogged,
          token: token,
          username:username
        })
      });
  }
}


export const singupAction = (username, password, isAdmin) => {
  return async (dispach) => {


    const body = {
      username,
      password,
      isAdmin
    }
    const options = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }


    fetch('https://vladikonov.herokuapp.com/users/signup', options)
      .then(function (response) {
        return response.json();
      }).then(function (data) {
        const isSignup = (typeof data.message);
        return dispach({
          type: "SIGNUP",
          payload: isSignup
        })
      });
  }
}


export const logoutAction = () => {
 
  return {
    type: "LOGIN",
    payload: false,
token:undefined,
username:''
  }
 
}



export const getUsersAction = (pageNumber) => {
  return async (dispach) => {

  const options = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + window.localStorage.Autorization
    }
  }

    fetch(`https://vladikonov.herokuapp.com/users?page=${pageNumber}`, options)
      .then(function (response) {
        if (response.status=== 401) {
          return logoutAction();  
          }
          if (response.status=== 403) {
            return logoutAction();  
            }
        return response.json();
      }).then(function (data) {
        return dispach({
          type: "GET_USERS",
          payload: data
        })
      });
  }
}

export const getTasksAction = (pageNumber) => {
  return async (dispach) => {

  const options = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + window.localStorage.Autorization
    }
  }

    fetch(`https://vladikonov.herokuapp.com/tasks?page=${pageNumber}`, options)
      .then(function (response) {
        if (response.status=== 401) {
          return logoutAction();  
          }
                  return response.json();
      }).then(function (data) {
        return dispach({
          type: "GET_TASKS",
          payload: data
        })
      });
  }
}



export const getTaskAction = (taskId) => {
  return async (dispach) => {

    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + window.localStorage.Autorization
      }
    }
    fetch(`https://vladikonov.herokuapp.com/tasks/${taskId}`, options)
      .then(function (response) {
        if (response.status=== 401) {
         return logoutAction();  
         }
                 return response.json();
      }).then(function (data) {
        const taskActive = data 
        return dispach({
          type: "GET_TASK",
          payload: taskActive
        })
      });
  }
}

export const postTaskAction = (title, description) => {
  return async (dispach) => {

    const body = {
      title,
      description
    }
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + window.localStorage.Autorization
      },
      body: JSON.stringify(body)
    }


    fetch('https://vladikonov.herokuapp.com/tasks', options)
      .then(function (data) {
        const ispost = (typeof data.title);

        //return response.json(); 
        return dispach({
          type: "POST_TASK",
          payload: ispost
        })
      });
  }
}


export const deleteTaskAction = (taskId) => {
  return async (dispach) => {


    const options = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + window.localStorage.Autorization
      }
    }

    fetch(`https://vladikonov.herokuapp.com/tasks/${taskId}`, options)
      .then(function (response) {
 if (response.status=== 401) {
  logoutAction();  
 }
        return response.json();
      }).then(function (data) {
        const isDelete = (typeof data.token !== 'undefined' && taskId !== 'undefined' );

        return dispach({
          type: "DELETE_TASK",
          payload: isDelete
        })
      });
  }
}



export const editTaskAction = (taskId) => {
  return async (dispach) => {


    const options = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + window.localStorage.Autorization
      }
    }

    fetch(`https://vladikonov.herokuapp.com/tasks/${taskId}`, options)
      .then(function (data) {
        //       const ispost = (typeof data.message);

        //return response.json(); 
        return dispach({
          type: "EDIT_TASK",
          payload: data
        })
      });


  }
}



