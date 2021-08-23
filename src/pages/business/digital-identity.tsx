import Digital from '../../assets/img/digital.jpeg'
import Usability from '../../assets/img/usability.jpg'
import Testimony from "../../components/home/Testimony";
import BlogPost from "../../components/home/BlogPost";
import BusinessAndIndividual from "../../components/home/BusinessAndIndividual";
import Footer from "../../components/Footer";
import Features from "../../components/business/IdentityVerification/Features";
import Header from "../../components/business/Header";

import Passport from '../../assets/svg/passport.svg'
import PreventFraud from '../../assets/svg/prevent-fraud.svg'
import UserComply from '../../assets/svg/user-comply.svg'
import ScanDocument from '../../assets/svg/scan-document.svg'
import Onboarding from '../../assets/svg/onboarding.svg'
import BridgeUser from '../../assets/svg/bridge-users.svg'
import ListSection from '../../components/business/ListSection';


const items = [
    {
        text: "Know who your customers are by verifying name, age, address, and more, remotely or in person.",
        svg: Passport
    },
    {
        text: "Store verified identity information in a decentralized, mobile digital wallet on each user’s smartphone.",
        svg: PreventFraud
    },
    {
        text: "Comply with AML KYC, IALs, and other regulations and frameworks.",
        svg: UserComply
    },
    {
        text: "Prevent identity fraud with strong identity verification and authentication.",
        svg: ScanDocument
    },
    {
        text: "Make onboarding fast and easy with identity verification results in seconds.",
        svg: Onboarding
    },
    {
        text: "Onboard more customers quicker and reduce customer abandonment.",
        svg: BridgeUser
    },
]


const usabilityData = [
    {
        boldText: "Users take a selfie and scan ID documents ",
        normalText: "once to get a reusable MyIdentikey ID with verified information."
    },
    {
        boldText: "Reusable digital ID provides instant identity verification ",
        normalText: "for multiple businesses by using verified information from the MyIdentikey app."
    },
    {
        boldText: "Works online (remotely) and offline (in person) with a ",
        normalText: "streamlined mobile experience."
    },
    {
        boldText: "Standard protocols and dedicated support enable easy integration ",
        normalText: "into your website, application, kiosk, or custom system."
    },
]


const DigitalIdentity = () => {
    return(
        <div className="w-full">
            <Header image={Digital} title="Digital Identity and Wallet" text="Improve access to your services with MyIdentikey's verified digital identity platform."/>
            <Features items={items} title="Why use MyIdentikey for DIgital Identity and Wallet?" />
            <ListSection items={usabilityData} image={Usability} title="Better Usability and Convenience"/>
            <Testimony />
            <BlogPost />
            <BusinessAndIndividual/>
            <Footer />
        </div>
    )
}

export default DigitalIdentity;