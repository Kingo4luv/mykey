import valid from '../../assets/svg/valid.svg';
import invalid from '../../assets/svg/invalid.svg';
import pending from '../../assets/svg/pending.svg';


const icons: {[key: string]: string} = {
    valid: valid,
    invalid: invalid,
    pending: pending
}

const color: {[key: string]: string} = {
    valid: "bg-blue",
    invalid: "bg-red-500",
    pending: "bg-slightly-light-blue"
}
const CheckCircle = ({icon}:{icon:string}) => {
    return(
        <span className={`w-6 h-6 ${color[icon]} rounded-full flex items-center justify-center flex-none`}>
            <img src={icons[icon]} alt="" />
        </span>
    )
}

export default CheckCircle;