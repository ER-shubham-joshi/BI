import React from "react";
import Header from "./Header";
import Login from './Login';
export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') || false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  console.log('ACTION',action);
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("isAuthenticated", true);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

function HeaderContainer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div className="Header">
        <Header isAuthenticated={state.isAuthenticated} />
        {!state.isAuthenticated && <Login />}
      </div>
    </AuthContext.Provider>
  );
}
export default HeaderContainer;