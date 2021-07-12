import {useParams} from "react-router-dom";
import BusinessAccount from '../../components/AccountTypeList/Business';
import IndividualAccount from "../../components/AccountTypeList/Individual";


const Account = () => {

    const {type} : {type:string} = useParams();
    return(
        <>
            {type === 'individual' ? < IndividualAccount/> : <BusinessAccount />}
        </>
        
    )
}
 
export default Account;