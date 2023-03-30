const initialState = {
  all: [
    {
      id: 1,
      name: "Birbalo"
    }
  ]
};

// fetch("https://jsonplaceholder.typicode.com/users")

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        all: action.payload
      }
    case 'ADD_USER':
      return {
        ...state,
        all: [...state.all, action.payload]
      }
    case 'DELETE_USERS':
      return {
        ...state,
        all: []
      }
    default:
      return state;
  }
}

export default usersReducer;