export const loginAction = (username, password) => {
  return async (dispach) => {
    const body = {
      username,
      password
    }
    const options = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }


     fetch('https://vladikonov.herokuapp.com/users/login', options)
//   fetch('https://reqres.in/api/login', options)
      .then(function (response) { 
        return response.json(); 
      }).then(function (data) {
        const isLogged = (typeof data.token !== 'undefined' && data.token !== '');
        const token =data.token ;

        return dispach({
          
          type: "LOGIN",
          payload: isLogged ,
          token: token
        })
      });
  }
}

export const singupAction = (username, password,isAdmin) => {
  return async (dispach) => {
    console.log("username", username);
    console.log("password", password);
    console.log("isadmin", isAdmin);


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


    //  fetch('http://localhost:3001/users/login', options)
   fetch('https://vladikonov.herokuapp.com/users/singup', options)
      .then(function (response) { 
        return response.json(); 
      }).then(function (data) {
        const isSignup = (typeof data.token !== 'undefined' && data.token !== '' && data.id !=='' && data.response === 200);

        return dispach({
          type: "SIGNUP",
          payload: isSignup
        })
      });
  }
}

export const logoutAction = () =>{
  return{
    type: "LOGIN",
    payload: false
  }
}




export const getUsersAction = (pageNumber) => {

  const options = {
    method: 'GET',
    headers: { "Content-Type": "application/x-www-form-urlencoded" 
   ,"Autorization": window.localStorage.Autorization,
   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"

  }
  }

  return async (dispach) => {
 //  fetch(`https://vladikonov.herokuapp.com/tasks?page=${pageNumber}`,options)
 fetch(`https://reqres.in/api/users?page=${pageNumber}`,options)
      .then(function (response) { 
        return response.json(); 
      }).then(function (data) {

        return dispach({
          type: "SET_TASKS",
          payload: data
        })
      });
  }
}


export const getTaskAction = (taskId) => {
  return async (dispach) => {

//    fetch('http://localhost:3000/tasks/${taskId}')

    fetch(`https://reqres.in/api/users/${taskId}`)
      .then(function (response) { 
        return response.json(); 
      }).then(function (data) {

        return dispach({
          type: "SET_TASK",
          payload: data.data
        })
      });
  }
}

export const postTaskAction = (title,description) => {
  return async (dispach) => {

    const body = {
      title,
      description
    }
    const options = {
      method: 'POST',
      headers: { "Content-Type": "application/json",
      Authorization :"Bearer " + window.localStorage.Autorization
    },
      body: JSON.stringify(body),
    }

 //   fetch('https://reqres.in/api/users', options)

     fetch('https://vladikonov.herokuapp.com/tasks',options)
      .then(function (data) {
        const ispost = (typeof data.name !== 'undefined' && data.status_code !== '');
        console.log("the post happen", data)
        return dispach({
          type: "POST_TASK",
          payload: ispost
        })
      });
  }
}


export const deleteUserTask = (taskId) => {
  return async (dispach) => {

    
    const options = {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
//      ,Autorization: {token}
    }


    //  fetch('http://localhost:3000/users/login', options)
    fetch(`https://reqres.in/api/users/${taskId}`, options)
      .then(function (response) { 
    //    return response.json(); 
      }).then(function (data) {

        return dispach({
          type: "DELETE_TASK",
          payload: Response
        })
      });
  }
}

export const viewUserTask = (taskId) => {
  return async (dispach) => {

    
    const options = {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
//      ,Autorization: {token}
    }


    fetch('https://reqres.in/api/users/2', options)
      .then(function (response) { 
   //     return response.json(); 
      }).then(function (data) {

        return dispach({
          type: "VIEW_TASK",
          payload: Response
        })
      });
  }
}


export const editUserTask = (taskId) => {

  return async (dispach) => {

    
    const options = {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" }
//      ,Autorization: {token}
    }



    fetch('https://reqres.in/api/users/2', options)
      .then(function (response) { 
  //      return response.json(); 
      }).then(function (data) {

        return dispach({
          type: "EDIT_TASK",
          payload: Response
        })
      });
  }
}


