import React, { useState } from "react";
import {Link} from "react-router-dom";
import logo from '../assets/svg/logo.svg'


import AccessForm from "../components/RequestAccess/AccessForm";
import SuccessMessage from "../components/RequestAccess/SuccessMessage";
const GetAccess = () => {
   const [showForm, setShowForm] = useState(true);
   const switchView = () => {
       setShowForm(false);
   }
    return(
        <main className="w-full">
            <section className="max-w-6xl py-12 mx-auto space-y-12 px-4">
                <Link to="/" className="w-full flex justify-center items-center">
                    <div className="flex items-center space-x-2 ">
                        <img src={logo} alt="logo"/>
                        <span className="font-medium text-black">MyIdentikey</span>
                    </div>
                </Link>
                {showForm ? (
                 <AccessForm switchView={switchView}/>
                ):(
                 <SuccessMessage />
                )}
                
            </section>
        </main>
    )
}

export default GetAccess;