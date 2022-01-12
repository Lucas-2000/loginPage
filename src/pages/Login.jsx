import '../styles/login.scss'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'

export function Login() {
    return (
        <div id="page-login">
            <form>
                <header>
                    <h1>
                        Login
                    </h1>
                </header>
                <div className="insert-data">
                    <label>Username</label>
                    <input type="text" placeholder="Type your username" />
                    <label>Password</label>
                    <input type="password" placeholder="Type your password" />
                    <a href="" className="forgot-password">Forgot password?</a>
                    <button>LOGIN</button>
                </div>
                <div className="sign-another">
                    <label>Or sign using</label>
                    <div className="icons">
                        <FaFacebook style={{marginLeft: "1rem", cursor: "pointer"}} size="40px" color="blue" />
                        <FaTwitter style={{marginLeft: "1rem", cursor: "pointer"}} size="40px" color="aqua" />
                        <FaGoogle style={{marginLeft: "1rem", cursor: "pointer"}} size="40px" color=" #DB4437" />
                    </div>
                </div>
                <div className="sign-up">
                    <label>Or sign using</label>
                    <a href="" >SIGN UP</a>
                </div>
            </form>
        </div>
    )
}