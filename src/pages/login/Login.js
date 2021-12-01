import "./Login.css";
import { useRef } from "react";
import useAuth from "../../hooks/authHook";
import { useHistory } from "react-router";

const Login = () => {
  const [setToken] = useAuth(true);

  const history = useHistory();

  const username = useRef();
  const password = useRef();

  const handleSubmitLogin = async (evt) => {
    evt.preventDefault();
    const loginData = {
      uName: username.current.value,
      password: password.current.value,
    };
    const DATA = await fetch("http://localhost:2000/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(loginData),
    });
    const user = await DATA.json();
    if (user.token) {
      setToken(user.token);
      history.push("/");
    } else {
      setToken(false);
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form id="login_form" onSubmit={handleSubmitLogin}>
        <input ref={username} type="text" placeholder="Phone number" />
        <input ref={password} type="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;