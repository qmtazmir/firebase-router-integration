import React from "react";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";

const Login = () => {
    const {singInWithGoogle } = useFirebase()
    return (
    <div>
      <h1>Please Login</h1>
      <div style={{ margin: "20px" }}>
        <button onClick={singInWithGoogle}>Sign in by gmail</button>
      </div>

      <form>
        <input type="email" placeholder="Your Email" />
        <br />
        <br />
        <input type="password" name="" id="" placeholder="Password" />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
