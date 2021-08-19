import Woman from '../../assets/img/identity-verification-woman.jpg'
import SolutionForConsumer from "../../components/home/SolutionForConsumers";
import SolutionForBusiness from "../../components/home/SolutionForBusiness";
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


const items = [
    {
        text: "Know who your customers are by verifying name, age, address, and more, remotely or in person.",
        svg: Passport
    },
    {
        text: "Prevent identity fraud with strong identity verification and authentication.",
        svg: PreventFraud
    },
    {
        text: "Comply with AML KYC, IALs, and other regulations and frameworks.",
        svg: UserComply
    },
    {
        text: "Scan passports, driver's licences, and other ID cards. Shorten forms and prevent typos.",
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

const IdentityVerification = () => {
    return(
        <div className="w-full">
            <Header image={Woman} title="Identity Verification Solution" text="Verify identity in seconds remotely or in person, prevent fraud, get KYC compliance, and more."/>
            <Features items={items} title="Why use MyKey for Identity Verification?" />
            <SolutionForConsumer />
            <SolutionForBusiness />
            <Testimony />
            <BlogPost />
            <BusinessAndIndividual/>
            <Footer />
        </div>
    )
}

export default IdentityVerification;