import { useContext, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./login.css"
import { AuthContext } from '../../../contexts/AuthContext/AuthContext'
import { login_success, login_failure } from '../../../contexts/AuthContext/AuthActions'

const Login = () => {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const { user, dispatch } = useContext(AuthContext)

  const loginHandler = async (e) => {
    e.preventDefault()

    try {
      const userCredentials = {
        email: email.current.value,
        password: password.current.value
      }
      const res = await axios.post("/api/auth/login", userCredentials)
      dispatch(login_success(res.data))
      navigate("/")
    } catch (err) {
      dispatch(login_failure)
      if(err.response) {
        if(err.response.status === 400){
          setError("Incorrect Password")
        }else if(err.response.status === 404){
          setError("User not found")
        }else{
          setError("Login Failed")
        }
      }else{
        setError("Unknown Error")
      }
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BracuConnect</h3>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            {error && <span className="errorMessage" align="center">{error}</span>}
            <button className="loginButton" onClick={loginHandler}>
              Log In
            </button>
            <button className="loginRegisterButton" onClick={() => {navigate("/register")}}>
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login