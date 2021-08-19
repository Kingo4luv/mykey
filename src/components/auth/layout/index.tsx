import AuthFace from '../../../assets/svg/auth-face.svg'
import logo from '../../../assets/svg/logo.svg'
import { useLocation, Link } from "react-router-dom";

const AuthLayout: React.FC = ({children}) => {
    let location = useLocation();
    return(
        <div className="w-full flex h-screen max-h-screen min-h-screen overflow-x-hidden">
            <div className="w-full md:w-1/2 h-full relative py-4 md:py-12 px-4">
                <div className="max-w-2xl mx-auto">
                    <nav className="flex items-center justify-between">
                        <a href="/" className="flex items-center space-x-2 ">
                            <img src={logo} alt="logo"/>
                            <span className="font-medium text-black">MyKey</span>
                        </a>
                        
                        {["/login","/register","/verify"].includes(location.pathname) ? (
                            location.pathname === "/login" ? 
                            (<Link to="/register" className="flex items-center text-sm">
                                <span className="text-black font-thin">New user?</span>
                                <span className="font-medium text-black">Create an account</span>
                            </Link>)
                            :
                            (
                            <Link to="/login" className="flex items-center text-sm">
                                 <span className="text-black font-thin">Already have an account?</span>
                                 <span className="font-medium text-black">Login</span>
                            </Link>
                            )
                        ) : null}
                    </nav>
                    {children}
                </div>
            </div>
            <div className="w-1/2 h-full bg-[#0BB4FC] hidden md:block">
                <div className="w-full h-full relative">
                    <img src={AuthFace} alt="Auth face" className="w-full h-full relative top-3 -right-32" />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout