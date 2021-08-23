import logo from '../../assets/svg/logo.svg'
import AccountTypeList from '../../components/AccountTypeList'
import Button from '../../components/Button'
import AccountUser from '../../assets/svg/account-user.svg';
import AccountBusiness from '../../assets/svg/account-business.svg';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const accountTypes = [
    {
        icon: AccountUser,
        title: 'Individual',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum tortor ut nibh nisl ornare auctor augue id. Risus, risus elit consequat aliquet. Risus.'
    },
    {
        icon: AccountBusiness,
        title: 'Business',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum tortor ut nibh nisl ornare auctor augue id. Risus, risus elit consequat aliquet. Risus.'
    },
]

const AccountType = () => {
    const history = useHistory();
    const [selectedType, setSelectedType] = useState("")
    const selectAccountType = ()=>{
        history.push(`/account-type/${selectedType}`)
    }
    const handleSelectedType = (title:string) => {
        setSelectedType(title.toLowerCase())
    }
    return(
        <div className="w-full h-screen max-h-screen min-h-screen py-12 px-4">
                <nav className="max-w-screen-xl mx-auto">
                    <a href="/" className="flex items-center space-x-2 ">
                        <img src={logo} alt="logo"/>
                        <span className="font-medium text-black">MyIdentikey</span>
                    </a>
                </nav>
                <main className="max-w-screen-xl mx-auto mt-16">
                    <h3 className="text-black font-bold text-2xl">Welcome to MyIdentikey!</h3>
                    <p className="mt-6 text-grey text-base">At MyIdentikey, we are building a secure and easy way to verify your customer identity</p>
                    <p className="mt-8 text-black text-base">Please select a path below to continue  with MyIdentikey:</p>
                    <ul className="mt-10 flex gap-6 sm:gap-9 flex-col md:flex-row">
                        {accountTypes.map((type, i) => (
                            <AccountTypeList key={i} title={type.title} icon={type.icon} description={type.description} handleSelectedType={handleSelectedType} selectedType={selectedType} />
                        ))}
                    </ul>
                    <div className="mt-12 w-full sm:w-44">
                        <Button text="Continue" onClick={selectAccountType} disabled={selectedType === ""}/>
                    </div>
                </main>
        </div>
    )
}

export default AccountType