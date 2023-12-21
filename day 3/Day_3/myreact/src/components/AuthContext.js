import React, { createContext, useReducer, useContext } from 'react';

const AuthContext = createContext();

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  isLoggedIn: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SIGN_UP':
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const setField = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const signUp = () => {
    // Perform validation here before signing up
    if (state.password !== state.confirmPassword) {
      alert('Password and Confirm Password must match');
      return;
    }

    // Add additional validation logic as needed

    dispatch({ type: 'SIGN_UP' });
  };

  return (
    <AuthContext.Provider value={{ state, setField, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
