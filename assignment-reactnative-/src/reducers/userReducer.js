const initialState = {
  users: [],
  loggedInUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "LOGIN":
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case "EDIT_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        loggedInUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
