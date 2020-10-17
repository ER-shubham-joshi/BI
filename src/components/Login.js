import React from "react";
import { AuthContext } from "./HeaderContainer";
export const Login = () => {
    const { dispatch } = React.useContext(AuthContext);
    const initialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    };
    const [data, setData] = React.useState(initialState);
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    const handleFormSubmit = event => {
        event.preventDefault();
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });

        // Hit Authentication Server
        // TODO: Add Google Authentication
        // stubbing token response from auth server
        const resJson = {
            user: 'John Doe',
            token: 'access_token',
        }
        if (data.email === 'username@gmail.com' && data.password === 'password') {
            dispatch({
                type: "LOGIN",
                payload: resJson
            })
        }
        else {
            const error = {
                message: "Incorrect Username or Password"
            };
            setData({
                ...data,
                isSubmitting: false,
                errorMessage: error.message || error.statusText
            });
        }
    };
    return (
        <div className="login-container">
            <div className="card">
                <div className="container">
                    <form onSubmit={handleFormSubmit}>
                        <h1>Login</h1>

                        <label htmlFor="email">
                            Email Address
              <input
                                type="text"
                                value={data.email}
                                onChange={handleInputChange}
                                name="email"
                                id="email"
                            />
                        </label>

                        <label htmlFor="password">
                            Password
              <input
                                type="password"
                                value={data.password}
                                onChange={handleInputChange}
                                name="password"
                                id="password"
                            />
                        </label>

                        {data.errorMessage && (
                            <span className="form-error">{data.errorMessage}</span>
                        )}

                        <button disabled={data.isSubmitting}>
                            {data.isSubmitting ? (
                                "Loading..."
                            ) : (
                                    "Login"
                                )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;