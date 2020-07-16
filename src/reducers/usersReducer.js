const isLoggedLocalStorage = window.localStorage.getItem('isLogged');

const initState = {
  isLogged: (isLoggedLocalStorage !== null ? (isLoggedLocalStorage === 'true') : false),
  users: {
    page: null,
    per_page: null,
    total: null,
    total_pages: null,
    data: [],
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

    default:
      break;
  }

  return state;
}
export default usersReducer;