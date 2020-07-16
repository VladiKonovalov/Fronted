const isLoggedLocalStorage = window.localStorage.getItem('isLogged');

const initState={
  isLogged: (isLoggedLocalStorage !== null ? (isLoggedLocalStorage === 'true') : false),
tasks: {
  tasks:[]}
  ,
  taskActive: {
    _id: null,
    title: null,
    description: null,

  },
} 

const taskReducer = (state = initState, action) =>{

 switch(action.type){
     case "SET_TASK":

      state = { ...state, userActive: action.payload,autorization:action.token }

      break;
      case "POST_TASK":

        state = { ...state, taskActive: action.payload,autorization:action.token }
        break;
        case "GET_TASKS":
          state = { ...state, tasks: action.payload }
          break;
      case "DELETE_TASK":
        
        state = { ...state, taskActive: action.payload,autorization:action.token }
        break;
        case "VIEW_TASK":
          state = { ...state, taskActive: action.payload,autorization:action.token }
          break;
     default: 
     break;
 }
  return state;
}
export default taskReducer;