const isLoggedLocalStorage = window.localStorage.getItem('isLogged');

const initState = {
  isLogged: (isLoggedLocalStorage !== null ? (isLoggedLocalStorage === 'true') : false),
  users: {
    page: null,
    per_page: null,
    total: null,
    total_pages: null,
    data: [],
  },
  userActive: {
    id: null,
    first_name: null,
    last_name: null,
    avatar: null
  },
  tasks: {
    _id: null,
    title: null,
    description: null,
    creater: null
    }
}

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      window.localStorage.setItem('isLogged', action.payload);
      window.localStorage.setItem('Autorization',action.token);
      state = { ...state, isLogged: action.payload }
      break;

      case "SINGUP":
        state = { ...state, isSignup: action.payload }
        break;
  
    case "SET_TASKS":
      state = { ...state, users: action.payload ,autorization:action.token }
      break;
    default:
      break;
  }

  return state;
}
export default usersReducer;