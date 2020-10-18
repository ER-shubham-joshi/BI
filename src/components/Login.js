import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { AuthContext } from './HeaderContainer';

export const Login = (props) => {
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null,
  };
  const [data, setData] = React.useState(initialState);
  const handleInputChange = (event) => {
    console.log(event.target)
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    console.log('form submit');
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    // Hit Authentication Server
    // TODO: Add Google Authentication
    // stubbing token response from auth server
    const resJson = {
      user: 'John Doe',
      token: 'access_token',
    };
    console.log('DATA', data);
    if (data.email === 'username@gmail.com' && data.password === 'password') {
      dispatch({
        type: 'LOGIN',
        payload: resJson,
      });
    } else {
      const error = {
        message: 'Incorrect Username or Password',
      };
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error.message || error.statusText,
      });
    }
  };
  const handleLoginFormClose = () => {
    props.setShowLoginForm(false);
  };
  return (
    <div className="login-container popup">
      <div className="card">
        <div className="container">
          <Form>
            <Form.Group controlId="formBasicEmail" onChange={handleInputChange}>
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" onChange={handleInputChange}>
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <div className="btn-grp">
              <Button variant="primary" onClick={handleFormSubmit}>
                Submit
            </Button>
              <Button onClick={handleLoginFormClose} variant="secondary">Close</Button>
            </div>
          </Form>
          {data.errorMessage && <div className="container"> <Alert variant={'warning'}>
            Incorrect Username or Password provided. Please try again!
            </Alert></div>
          }
        </div>
      </div>
    </div>
  );
};
export default Login;
