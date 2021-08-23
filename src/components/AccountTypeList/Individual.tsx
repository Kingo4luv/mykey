import StepScreen from "../StepScreen"
import logo from '../../assets/svg/logo.svg'
const IndividualAccount  = () => {
    return(
        <div className="w-full h-screen max-h-screen min-h-screen py-12 px-4">
            <nav className="max-w-screen-xl mx-auto">
                <a href="/" className="flex items-center space-x-2 ">
                    <img src={logo} alt="logo"/>
                    <span className="font-medium text-black">MyIdentikey</span>
                </a>
            </nav>
            <StepScreen title="Download app to get started" />
        </div>
    )
}

export default IndividualAccount