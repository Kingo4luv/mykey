import Navigation from "../components/nav"
import FinancialServiceImage  from '../assets/img/financial-service.jpg'
import HealthcareImage  from '../assets/img/healthcare.jpg'
import LegalHammerImage  from '../assets/img/legal-hammer.jpg'
import ShoppingBagImage  from '../assets/img/shopping-bag.jpg'
import BlackWomanImage  from '../assets/img/black-woman.jpg'
import SharingSuccessImage  from '../assets/img/sharing-success.jpg'

import MapIcon  from '../assets/svg/map.svg'
import HouseIcon  from '../assets/svg/house.svg'
import HealthcareIcon  from '../assets/svg/healthcare.svg'
import LegalIcon  from '../assets/svg/legal.svg'
import ShopIcon  from '../assets/svg/shop.svg'
import sharingIcon  from '../assets/svg/sharing.svg'
import BusinessAndIndividual from "../components/home/BusinessAndIndividual"
import Footer from "../components/Footer"
import Doctor from "../assets/img/doctor.jpg"
import { Link } from "react-router-dom"

const data = [
    {
        id: 'financial-services',
        title:'Financial Services',
        text: `Et mi at morbi dignissim. Vel turpis pretium dictum a cras tellus felis, platea ut. Eget vitae tellus vitae elit. Pretium aenean aliquam elit lectus et. Lorem cras tortor sit mattis elementum sem tincidunt ac. Sit orci amet nec ut tempus. Mauris cursus sit sagittis, quam magna mollis imperdiet. Quis convallis augue amet, sit commodo adipiscing dictum.`,
        svg: FinancialServiceImage
    },
    {
        id: 'health-care',
        title:'Healthcare',
        text: `Et mi at morbi dignissim. Vel turpis pretium dictum a cras tellus felis, platea ut. Eget vitae tellus vitae elit. Pretium aenean aliquam elit lectus et. Lorem cras tortor sit mattis elementum sem tincidunt ac. Sit orci amet nec ut tempus. Mauris cursus sit sagittis, quam magna mollis imperdiet. Quis convallis augue amet, sit commodo adipiscing dictum.`,
        svg: HealthcareImage
    },
    {
        id: 'legal-services',
        title:'Legal and  Professional Services',
        text: `Et mi at morbi dignissim. Vel turpis pretium dictum a cras tellus felis, platea ut. Eget vitae tellus vitae elit. Pretium aenean aliquam elit lectus et. Lorem cras tortor sit mattis elementum sem tincidunt ac. Sit orci amet nec ut tempus. Mauris cursus sit sagittis, quam magna mollis imperdiet. Quis convallis augue amet, sit commodo adipiscing dictum.`,
        svg: LegalHammerImage
    },
    {
        id: 'retail',
        title:'Retail and E-Commerce',
        text: `Et mi at morbi dignissim. Vel turpis pretium dictum a cras tellus felis, platea ut. Eget vitae tellus vitae elit. Pretium aenean aliquam elit lectus et. Lorem cras tortor sit mattis elementum sem tincidunt ac. Sit orci amet nec ut tempus. Mauris cursus sit sagittis, quam magna mollis imperdiet. Quis convallis augue amet, sit commodo adipiscing dictum.`,
        svg: ShoppingBagImage
    },
    {
        id: 'travel-and-hospitality',
        title:'Travel and Hospitality',
        text: `Et mi at morbi dignissim. Vel turpis pretium dictum a cras tellus felis, platea ut. Eget vitae tellus vitae elit. Pretium aenean aliquam elit lectus et. Lorem cras tortor sit mattis elementum sem tincidunt ac. Sit orci amet nec ut tempus. Mauris cursus sit sagittis, quam magna mollis imperdiet. Quis convallis augue amet, sit commodo adipiscing dictum.`,
        svg: BlackWomanImage
    },
    {
        id: 'sharing-economy',
        title:'Sharing economy',
        text: `Et mi at morbi dignissim. Vel turpis pretium dictum a cras tellus felis, platea ut. Eget vitae tellus vitae elit. Pretium aenean aliquam elit lectus et. Lorem cras tortor sit mattis elementum sem tincidunt ac. Sit orci amet nec ut tempus. Mauris cursus sit sagittis, quam magna mollis imperdiet. Quis convallis augue amet, sit commodo adipiscing dictum.`,
        svg: SharingSuccessImage
    },
    
]



const industries = [
    {
        name: 'Financial Services',
        icon:  HouseIcon
    },
    {
        name: 'Healthcare',
        icon: HealthcareIcon
    },
    {
        name: 'Legal and professional services',
        icon: LegalIcon
    },
    {
        name: 'Retail and E-commerce',
        icon: ShopIcon
    },
    {
        name: 'Travel and Hospitality',
        icon: MapIcon
    },
    {
        name: 'Sharing economy',
        icon: sharingIcon
    },
]

const Usecases = () => {
    return(
        <div className="w-full">
            <Navigation />
            <header className="w-full py-12 lg:py-32 px-4 mt-10 md:mt-2">
                <div className="max-w-screen-xl flex flex-col md:flex-row mx-auto">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-xl md:text-[48px] md:leading-[59.52px] font-bold">MyIdentiKey Industries and use cases.</h2>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                        <div>
                            <p className="max-w-sm text-base md:text-[18px] md:leading-[29.52px] text-black mt-4 md:mt-0">MyIdentiKey empowers businesses to eliminate fraud without adding friction to the customer experience.</p>
                            <div className="flex space-x-5 mt-12">
                                <Link to="/get-access" className="w-full md:w-40">
                                    <button className="text-white bg-[#00ACE6] w-full py-3 rounded text-[14px] md:text-[16] font-medium">Get access</button>
                                </Link>
                                <button className="text-[#00ACE6] bg-white border border-[#00ACE6] w-full md:w-40 py-3 rounded text-[14px] md:text-[16] font-medium">Contact sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="hero w-full h-auto md:h-112">
                <img src={Doctor} className="w-full h-full object-center object-cover" alt="" />
            </section>
            <section className="w-full bg-[#F5F5F5] py-12 lg:py-24 px-4">
                <div className="max-w-screen-xl mx-auto justify-center flex flex-col items-center space-y-12">
                    <h2 className="font-medium text-black text-xl  md:text-3xl">Industries using MyIdentiKey</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:w-auto">
                        {industries.map((industry, i) => {
                            return(
                                <li className="bg-white rounded h-52 w-full md:w-60 flex flex-col justify-center items-center space-y-6 px-4">
                                    <img src={industry.icon} alt="icon" />
                                    <p className="text-center text-grey">{industry.name}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
           
            <section className="py-6 md:py-12 w-full px-4 space-y-12 mb-12">
                {data.map((item, i) => {
                    return(
                        <div id={item.id} className={`max-w-screen-xl py-4 lg:py-12 mx-auto relative flex flex-col ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`} key={i}>
                            <div className="w-full md:w-1/2 flex justify-center items-center">
                                <img src={item.svg} alt={item.title} className="w-100 h-80 object-cover object-center rounded" />
                            </div>
                            <div className="flex flex-col justify-center  w-full md:w-1/2 mt-12 md:mt-0">
                                <dl className="md:max-w-md mx-auto space-y-4">
                                    <dt className="font-medium text-black text-lg md:text-2xl max-w-xs">{item.title}</dt>
                                    <dd className="text-grey text-base md:max-w-xs lg:max-w-none">{item.text}</dd>
                                </dl>
                            </div>
                        </div>
                    )
                })}
            </section>
            <BusinessAndIndividual/>
            <Footer />
        </div>
    )
}

export default Usecases;