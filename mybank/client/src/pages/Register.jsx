import React, { useState } from "react";
import '../styles/SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import img from '../images/ABC_BANK.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    // const navigate=useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const successfulLogin = () => {
        toast.success('Account Created Sucessfully!', {
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
        toast.error('User Already Exists', {
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
        console.log(password, email)
        const mydata = {
            "name": username,
            "email": email,
            "password": password
        }
        try {
            const res = await fetch("/user/register", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(mydata)
            })
            res.json()
            if(res.status===200) successfulLogin()
            else errorLogin()
        }
        catch (err) {
            console.log(err)
            // alert("Error in Creating Account")
            errorLogin()
        }
        setUsername("");
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <section>
                <div className="container">
                    <div className="user signinBx">
                        <div className="formBx">
                            <form
                                onSubmit={(e) => handleSubmit(e)} autoComplete="off"
                            >
                                <h2>Create an account</h2>
                                <input type="text" name="username"
                                    placeholder="Username" required
                                    value={username} onChange={(e) => setUsername(e.target.value)}
                                />
                                <input type="email" name="email"
                                    placeholder="Email Address" required
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="off"
                                />
                                <input type="password" name="password"
                                    placeholder="Create Password" required
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="off"
                                />
                                <input type="submit" name="" value="Sign Up" />
                                <p className="signup">
                                    Already have an account ?
                                    <Link
                                        to="/user/login"
                                    >
                                        Sign in.
                                    </Link>
                                </p>
                            </form>
                        </div>
                        <div className="imgBx">
                            <img
                                src={img}
                                alt="..."
                            />
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

export default Register;