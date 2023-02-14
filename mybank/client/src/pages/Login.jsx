import React, { useState, useEffect } from "react";
import '../styles/SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import img from '../images/ABC_BANK.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate();

    const successfulLogin = () => {
        toast.success('logged in Sucessfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    }
    const errorLogin = () => {
        toast.error('Error in Log in', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        const mydata = { email, password }
        try {
            const res = await fetch("/user/login", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(mydata)
            })
            await res.json();
            setEmail("");
            setPassword("");
            if (res.status === 200){
                successfulLogin();
                setTimeout(()=>{
                    navigate('/user/profile')
                },2000)
            }
            else {
                errorLogin()
            }
        }
        catch (err) {
            // alert("Error in Login")
            errorLogin();
        }
        
    }

    return (
        <div>
            <section>
                <div className="container">
                    <div className="user signinBx">
                        <div className="imgBx">
                            <img
                                src={img}
                                alt="..."
                            />
                        </div>
                        <div className="formBx">
                            <form autoComplete="off"
                                onSubmit={(e) => handleSubmit(e)}
                            >
                                <h2>Sign In</h2>
                                <input type="email" name="email"
                                    placeholder="Email" required value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input type="password" name="password"
                                    placeholder="Password" required value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <input type="submit" name="login" value="Login" />
                                <p className="signup">
                                    Don't have an account ?
                                    <Link
                                        to="/user/register"
                                    >
                                        Sign Up.
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
        </div>
    );
};

export default Login;