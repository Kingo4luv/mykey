import { useState } from "react"
import { Link, useHistory } from "react-router-dom"

const LinkItem = ({title, path, subLinks, url}: {title:string;  url: string; path:string; subLinks: string[]}) => {
    const {location:{pathname}} = useHistory();
    const [open, setOpen] = useState(false);
    return(
        <div>
          <div className="flex pl-4  lg:pl-6 xl:pl-12  justify-between items-center">
              <Link to={url} className="">
                <div className="flex space-x-3">
                    <span>
                        <svg className="w-5 h-5" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={path}
                            fill={pathname === url ? '#000' : '#999'}
                        />
                        </svg>
                    </span>
                    <p className={`font-medium text-sm ${pathname !== url && 'text-icon-grey'}`}>{title}</p>
                </div>
            </Link>
            {subLinks.length > 0 && 
                <button className="z-50" onClick={() => setOpen(!open)}>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.81846 4.90925L-3.815e-07 1.09079L1.09077 1.80721e-05L6 4.90925L1.09077 9.81848L-4.7679e-08 8.72771L3.81846 4.90925Z" fill="#999999"/>
                    </svg>
                </button>
            }
          </div>
            <div className="space-y-10 mt-10">
                {subLinks.length > 0 && open && subLinks.map((link, i) => (
                <Link to="/dashboard" className="flex pl-20 space-x-3" key={i}>
                    <p className="text-sm text-icon-grey">{link}</p>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default LinkItem
