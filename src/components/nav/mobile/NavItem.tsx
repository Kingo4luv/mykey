import { useState } from "react";
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
const MobileNavItem = ({link}: {link: {name: string, sublinks: {name: string; url:string; text?: string; img?:string; imgMobile?: string}[]}}) => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <li className="py-5" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex justify-between items-center">
                <p className="text-sm text-black">{link.name}</p>
                <span>
                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.87781 0.269164C9.70541 0.0968183 9.47162 0 9.22785 0C8.98408 0 8.75029 0.0968183 8.5779 0.269164L5.06794 3.77912L1.55798 0.269164C1.38459 0.101703 1.15237 0.00904058 0.91133 0.0111352C0.670288 0.0132298 0.439711 0.109913 0.269262 0.280362C0.0988131 0.450811 0.00212935 0.681388 3.47527e-05 0.922431C-0.00205984 1.16347 0.0906022 1.39569 0.258064 1.56908L4.41706 5.72992C4.50246 5.81553 4.6039 5.88345 4.71559 5.9298C4.82728 5.97614 4.94702 6 5.06794 6C5.18886 6 5.30859 5.97614 5.42028 5.9298C5.53197 5.88345 5.63342 5.81553 5.71881 5.72992L9.87781 1.56908C10.0502 1.39668 10.147 1.16289 10.147 0.919122C10.147 0.675352 10.0502 0.441562 9.87781 0.269164Z" fill="#101010"/>
                    </svg>
                </span>
                </div>
            {isOpen && 
                (
                <>
                {link.name !== 'Use cases' ? (
                <div className="w-full bg-white relative">
                    {link.name === 'Business' ? (
                        <ul className="py-8 w-full mx-auto grid grid-cols-1 gap-8">
                            {link.sublinks.map((sublink, i) => {
                                return(
                                    <li>
                                        <Link to={sublink.url} className="flex space-x-5 items-start">
                                            <img src={sublink.imgMobile} alt="" />
                                            <dl className="space-y-2">
                                                <dt className="font-medium text-sm text-black">{sublink.name}</dt>
                                                <dd className="text-grey text-xs lg:text-sm font-thin">{sublink.text}</dd>
                                            </dl>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    ):link.name === 'Individual' ? (
                        <ul className="max-w-screen-lg py-6 w-full mx-auto grid grid-cols-1 gap-12">
                            {link.sublinks.map((sublink, i) => {
                                return(
                                    <li className="">
                                        <Link to={sublink.url}>
                                            <div className="h-52 w-full">
                                                <img src={sublink.img} alt="" className="h-full w-full object-cover object-center" />
                                            </div>
                                            <p className="font-medium text-sm text-black mt-4">{sublink.name}</p>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    ) : null}
                </div>
            ):(
                <div className="bg-white py-6 w-full">
                    <ul>
                        {link.sublinks.map((sublink, i) => {
                            return(
                                <li className={`py-3 capitalize hover:bg-gray-50 ${sublink.name === 'All Industries' ? 'font-medium text-base text-hair' : 'text-sm text-grey'}`}>
                                    <HashLink to={sublink.url}>
                                        {sublink.name}
                                    </HashLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
                    </>
                )
            }
                        
        </li>
    )
}

export default MobileNavItem;