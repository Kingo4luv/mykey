import React, { useState } from "react";
import {Link} from "react-router-dom";


import AccessForm from "../components/RequestAccess/AccessForm";
import SuccessMessage from "../components/RequestAccess/SuccessMessage";
const GetAccess = () => {
   const [showForm, setShowForm] = useState(true);
   const switchView = () => {
       setShowForm(false);
   }
    return(
        <main className="w-full">
            <section className="max-w-6xl py-12 lg:py-32 mx-auto space-y-12 px-4">
                <Link to="/">
                    <div className="flex space-x-2 justify-center items-center mb-10">
                        <span>
                            <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6073 22.0494L28.3281 0.018477V0C27.6583 0.99114 26.5241 1.64333 25.2388 1.64333H3.72605C1.66963 1.64333 -1.71661e-05 3.31298 -1.71661e-05 5.36952C-1.71661e-05 6.05371 0.184736 6.69502 0.507147 7.24638L9.055 22.0494C9.68629 23.2108 10.9172 24 12.3311 24C13.7449 24 14.976 23.2108 15.6073 22.0494Z" fill="#007499"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.78548 14.6566C4.47807 14.1149 4.30253 13.4887 4.30253 12.8218C4.30253 10.7653 5.97213 9.09574 8.02863 9.09574H10.1799L7.00219 3.59417C6.37093 2.43266 5.13997 1.64355 3.72613 1.64355C1.66963 1.64355 3.43323e-05 3.31315 3.43323e-05 5.36965C3.43323e-05 6.0538 0.184886 6.6952 0.507194 7.24656L4.78548 14.6566Z" fill="#007499"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3588 14.6007L10.1799 9.09473H8.02331C5.96682 9.09473 4.30249 10.7643 4.30249 12.8208C4.30249 13.5077 4.4887 14.1512 4.81338 14.7041L9.05502 22.0485C8.76811 21.5205 8.60509 20.9157 8.60509 20.273C8.60509 18.2165 10.2747 16.5469 12.3312 16.5469H16.6338C15.2199 16.5469 13.989 15.7578 13.3576 14.5963L13.3588 14.6007Z" fill="#00ACE6"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6072 22.0491L19.8201 14.7529C19.1662 15.8285 17.9833 16.5476 16.6337 16.5476H12.3311C10.2746 16.5476 8.60505 18.2172 8.60505 20.2736C8.60505 22.3301 10.2746 23.9997 12.3311 23.9997C13.745 23.9997 14.9759 23.2106 15.6072 22.0491Z" fill="#66D9FF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8767 14.6573C19.2362 15.7863 18.0232 16.5486 16.6336 16.5486C15.2197 16.5486 13.9888 15.7595 13.3574 14.598L10.1797 9.09639H20.936C22.2856 9.09639 23.4686 8.37736 24.1223 7.30176L19.8767 14.6573Z" fill="#00BFFF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.91226 3.43819C6.25844 2.36259 5.07551 1.64355 3.72594 1.64355H12.331C13.6806 1.64355 14.8635 2.36259 15.5174 3.43819L17.685 7.19047C18.3235 8.32714 19.5407 9.09575 20.936 9.09575H10.1797L6.91226 3.43819Z" fill="#0086B3"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3312 1.64333C13.6807 1.64333 14.8636 2.36241 15.5175 3.43796L17.6852 7.19035C18.3236 8.32688 19.5408 9.0956 20.9361 9.0956C22.2858 9.0956 23.4687 8.37651 24.1225 7.30097L28.3281 0.018477V0C27.6582 0.99114 26.5241 1.64333 25.2388 1.64333H12.3312Z" fill="#0099CC"/>
                            </svg>
                        </span>
                        <h2 className="font-bold text-base">MyKey</h2>
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