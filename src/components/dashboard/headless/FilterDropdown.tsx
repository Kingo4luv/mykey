import { Menu, Transition } from '@headlessui/react'
import { useState } from 'react'
import { Fragment } from 'react'


export default function FilterDropdown({data}: {data:string[]}) {
  const [currentTitle, setCurrentTitle] = useState(data[0])
  return (
    <div className="">
      <Menu as="div" className="relative">
            <Menu.Button className="w-full flex text-sm space-x-3 items-center justify-between bg-white px-4 py-2 md:py-3 border border-[#EBEBEB] rounded">
                <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1667 2.5H16.5001C16.7211 2.5 16.9331 2.5878 17.0893 2.74408C17.2456 2.90036 17.3334 3.11232 17.3334 3.33333V16.6667C17.3334 16.8877 17.2456 17.0996 17.0893 17.2559C16.9331 17.4122 16.7211 17.5 16.5001 17.5H1.50008C1.27907 17.5 1.06711 17.4122 0.910826 17.2559C0.754545 17.0996 0.666748 16.8877 0.666748 16.6667V3.33333C0.666748 3.11232 0.754545 2.90036 0.910826 2.74408C1.06711 2.5878 1.27907 2.5 1.50008 2.5H4.83342V0.833333H6.50008V2.5H11.5001V0.833333H13.1667V2.5ZM11.5001 4.16667H6.50008V5.83333H4.83342V4.16667H2.33342V7.5H15.6668V4.16667H13.1667V5.83333H11.5001V4.16667ZM15.6668 9.16667H2.33342V15.8333H15.6668V9.16667Z" fill="black"/>
                    </svg>
                </span>
                <span>{currentTitle}</span>
                <span>
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.243 5.657L0 1.414L1.415 0L4.243 2.829L7.071 0L8.486 1.414L4.243 5.657Z" fill="#101010"/>
                    </svg>
                </span>
            </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute divide-y-[1px] px-4 md:px-6 divide-[#E9E9E9] py-4 right-0 w-56 mt-2 origin-top-right text-black bg-white shadow-menu-shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
            {data.map((title, i) => {
                return(
                    <div className="py-1" key={i} onClick={() => setCurrentTitle(title)}>
                        <Menu.Item>
                            <button className="text-gray-900 group flex items-center w-full py-3 text-sm space-x-4">
                                <span>{title}</span>
                            </button>
                        </Menu.Item>
                    </div>
                )
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}






