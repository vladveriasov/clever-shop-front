import "../App.css";
import LoginForm from "../components/loginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login">
      <p>Login your account</p>
      <LoginForm />
    </div>
  );
};

export default Login;
