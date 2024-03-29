import {auth, provider} from "../config.js"
import {signInWithPopup} from "firebase/auth"
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const SignIn = () => {

    const [value, setValue] = useState('');
    const handleClick = () => {
        signInWithPopup(auth,provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/home");
    }

    return (
            <div className="bg-[url('./assets/bg/charts.jpg')] bg-no-repeat bg-cover bg-center bg-opacity-5 h-screen w-screen flex justify-center align-middle">
                <div className="text-center m-auto px-3 py-7 rounded-lg bg-gray-100 h-72 flex flex-col justify-between">
                    <h1 className="text-4xl text-black font-medium">Welcome to<br />Entrepreneur Simulator</h1>

                {value? navigateHome() :
                    <button onClick={handleClick} className="bg-white rounded-xl px-4  text-3xl flex justify-center align-middle"><span className="m-auto text-black">Sign In With Google</span> <img className="m-auto h-16" src="https://imgs.search.brave.com/Hw0fgPqodZAvLUkDoHx6Qgvz7s1GR-tAFikkqKMoed4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTEyOC5wbmc"/></button>
                }
                </div>
            </div>
    )
}

export default SignIn;