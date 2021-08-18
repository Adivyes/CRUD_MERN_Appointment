import React, { useState } from 'react'
import LoginPage from '../login/Login';
import SignUpPage from '../signUp/Signup';

export default function Home() {
    const [landPage, setLandPage] = useState(false)
    function PageToggle(){

    }

    return (
        <div>
            {landPage?
            <LoginPage toggle={setLandPage}/>
            :
            <SignUpPage toggle={setLandPage}/>
        }
        </div>
    )
}
