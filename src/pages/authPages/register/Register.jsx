import axios from "axios"
import { useRef} from "react"
import { useNavigate } from "react-router-dom"
import "./register.css"


const Register = () => {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()


  const registerHandler = async (e) => {
    e.preventDefault()
    
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value
    }

    try {
      const res = await axios.post("/api/auth/register", user)
      navigate("/login")
    }catch (err){
      console.log(err)
    }
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BracuConnect</h3>
        </div>
        <div className="loginRight">
          <form className="loginBox" >
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit" onClick={registerHandler}>
              Sign Up
            </button>
            <button className="loginRegisterButton" onClick={() => {navigate("/login")}}>Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register