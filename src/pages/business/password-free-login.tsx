import IdentityScanning from '../../assets/img/identity-scanning.jpg'
import Dashboard from '../../assets/img/dashboard.png'
import Testimony from "../../components/home/Testimony";
import BlogPost from "../../components/home/BlogPost";
import BusinessAndIndividual from "../../components/home/BusinessAndIndividual";
import Footer from "../../components/Footer";
import Features from "../../components/business/IdentityVerification/Features";
import Header from "../../components/business/Header";

import PhoneVerified from '../../assets/svg/phone-verified.svg'
import Onboarding from '../../assets/svg/onboarding.svg'
import PhoneLocked from '../../assets/svg/phone-locked.svg'
import ListSection from '../../components/business/ListSection';


const items = [
    {
        text: "Replace passwords with password-free login and multi-factor authentication (MFA) on the MyKey mobile app.",
        svg: PhoneVerified
    },
    {
        text: "Eliminate weak passwords, forgotten passwords, locked accounts, and password resets to save time and money.",
        svg: Onboarding
    },
    {
        text: "Increase login security and prevent data breaches with multi-factor authentication (MFA) using smartphones, biometrics, and geofencing.",
        svg: PhoneLocked
    }
]


const accessData = [
    {
        boldText: "Request verified identity information ",
        normalText: "(such as name, age, and address) from your user’s mobile app for stronger authentication"
    },
    {
        boldText: "Geofence logins ",
        normalText: "to specific locations for increased security."
    },
    {
        boldText: "Onboard users remotely, quickly, and automatically ",
        normalText: "using our mobile identity verification platform that scans government-issued ID documents."
    },
    {
        boldText: "Easily integrates into your website, application, kiosk, or ",
        normalText: "custom system, using standard protocols and dedicated support."
    },
]


const PasswordFreeLogin = () => {
    return(
        <div className="w-full">
            <Header image={Dashboard} title="Login and Multi-Factor Authentication" text="Increase login security, reduce friction, and eliminate filling of long enrollment forms"/>
            <Features items={items} title="Why use MyKey for DIgital Identity and Wallet?" />
            <ListSection items={accessData} image={IdentityScanning} title="Stronger Security and easier access"/>
            <Testimony />
            <BlogPost />
            <BusinessAndIndividual/>
            <Footer />
        </div>
    )
}

export default PasswordFreeLogin;