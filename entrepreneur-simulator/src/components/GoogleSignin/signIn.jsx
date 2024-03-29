import {auth, provider} from "./config"
import {signInWithPopup} from "firebase/auth"
import { useEffect } from "react";
import { useState } from "react"
import Home from "./Home";

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

    return (
        <div>
            {value?<Home /> :
                <button onClick={handleClick}>Sign In With Google</button>
            }
        </div>
    )
}

export default SignIn;