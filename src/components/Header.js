import React from "react";
export const Header = (props) => {
    console.log(props.isAuthenticated)
    return (
        <nav id="navigation">
            <h1 href="#" className="logo">
                Business Integrator
      </h1>
        </nav>
    );
};
export default Header;