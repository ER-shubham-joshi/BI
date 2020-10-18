import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Login from './Login';

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') || false,
  user: localStorage.getItem('user') || '',
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      localStorage.setItem('isAuthenticated', true);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

function HeaderContainer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [showLoginForm, setShowLoginForm] = React.useState(false);

  const onClickLogin = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="Header">
        <Header isAuthenticated={state.isAuthenticated} user={state.user} />
        {!state.isAuthenticated && !showLoginForm && <Button variant="outline-primary" onClick={onClickLogin}>Login</Button>}
        {!state.isAuthenticated && showLoginForm && <Login setShowLoginForm={setShowLoginForm} />}
      </div>
    </AuthContext.Provider>
  );
}
export default HeaderContainer;
