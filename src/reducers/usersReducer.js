const isLoggedLocalStorage = window.localStorage.getItem('isLogged');

const initState = {
  isLogged: (isLoggedLocalStorage !== null ? (isLoggedLocalStorage === 'true') : false),
  users: {
    users: []
    ///isAdmin: true
//username: "adm"
//_id: "5f0ae9f6d11fdc0d00c495ff"
  }
  ,
  userActive: {
    _id: null,
    username: null,
    isAdmin:null
    }
  
}

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      window.localStorage.setItem('isLogged', action.payload);
      window.localStorage.setItem('userName', action.username);
      window.localStorage.setItem('Autorization',action.token);
      window.localStorage.setItem('isAdmin',action.isAdmin)
      state = { ...state, isLogged: action.payload }
      break;

      case "SINGUP":
        state = { ...state, isSignup: action.payload }
        break;
        case "GET_USERS":
          state = { ...state, users: action.payload}//userActive: action.payload
          break;
    default:
      break;
  }

  return state;
}
export default usersReducer;