const initState={
  TaskState :"the task been"
//  = window.localStorage.getItem('isLogged');

} 

const taskReducer = (state = initState, action) =>{
 switch(action.type){
     case "SET_TASK":
      state = { ...state, userActive: action.payload }
      break;
      case "POST_TASK":
        state = { ...state, userActive: action.payload,autorization:action.token }
        break;
  
      case "DELETE_TASK":
        state = { ...state, userActive: action.payload }
        break;
        case "VIEW_TASK":
          state = { ...state, userActive: action.payload }
          break;
     default: 
     break;
 }
  return state;
}
export default taskReducer;