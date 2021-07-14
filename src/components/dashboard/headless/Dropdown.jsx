import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'


export default function Dropdown() {
  return (
    <div className="">
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="inline-flex p-3 justify-center w-full text-sm font-medium rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.243 5.657L0 1.414L1.415 0L4.243 2.829L7.071 0L8.486 1.414L4.243 5.657Z" fill="white"/>
            </svg>

          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute space-y-3 py-4 right-0 w-56 mt-2 origin-top-right text-black bg-white shadow-menu-shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-4 py-1">
              <Menu.Item>
                <button className="text-gray-900 group flex items-center w-full px-2 py-2 text-sm space-x-4">
                    <span className="block">
                        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6667 14H9.33333V12.6667C9.33333 12.1362 9.12262 11.6275 8.74755 11.2525C8.37247 10.8774 7.86377 10.6667 7.33333 10.6667H3.33333C2.8029 10.6667 2.29419 10.8774 1.91912 11.2525C1.54405 11.6275 1.33333 12.1362 1.33333 12.6667V14H0V12.6667C0 11.7826 0.351189 10.9348 0.976311 10.3096C1.60143 9.68452 2.44928 9.33333 3.33333 9.33333H7.33333C8.21739 9.33333 9.06524 9.68452 9.69036 10.3096C10.3155 10.9348 10.6667 11.7826 10.6667 12.6667V14ZM5.33333 8C4.80805 8 4.2879 7.89654 3.8026 7.69552C3.3173 7.4945 2.87634 7.19986 2.50491 6.82843C2.13347 6.45699 1.83883 6.01604 1.63782 5.53073C1.4368 5.04543 1.33333 4.52529 1.33333 4C1.33333 3.47471 1.4368 2.95457 1.63782 2.46927C1.83883 1.98396 2.13347 1.54301 2.50491 1.17157C2.87634 0.800139 3.3173 0.505501 3.8026 0.304482C4.2879 0.103463 4.80805 -7.82739e-09 5.33333 0C6.3942 1.58081e-08 7.41162 0.421427 8.16176 1.17157C8.91191 1.92172 9.33333 2.93913 9.33333 4C9.33333 5.06087 8.91191 6.07828 8.16176 6.82843C7.41162 7.57857 6.3942 8 5.33333 8ZM5.33333 6.66667C6.04058 6.66667 6.71885 6.38572 7.21895 5.88562C7.71905 5.38552 8 4.70724 8 4C8 3.29276 7.71905 2.61448 7.21895 2.11438C6.71885 1.61428 6.04058 1.33333 5.33333 1.33333C4.62609 1.33333 3.94781 1.61428 3.44772 2.11438C2.94762 2.61448 2.66667 3.29276 2.66667 4C2.66667 4.70724 2.94762 5.38552 3.44772 5.88562C3.94781 6.38572 4.62609 6.66667 5.33333 6.66667Z" fill="#101010"/>
                        </svg>
                    </span>
                   <span>Profile</span>
                </button>
              </Menu.Item>
            </div>
            <div className="px-4 py-1">
              <Menu.Item>
                <button className="text-gray-900 group flex items-center w-full px-2 py-2 text-sm space-x-4">
                    <span className="block">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 14C0 12.5855 0.561903 11.229 1.5621 10.2288C2.56229 9.22857 3.91885 8.66667 5.33333 8.66667C6.74782 8.66667 8.10438 9.22857 9.10457 10.2288C10.1048 11.229 10.6667 12.5855 10.6667 14H9.33333C9.33333 12.9391 8.91191 11.9217 8.16176 11.1716C7.41161 10.4214 6.3942 10 5.33333 10C4.27247 10 3.25505 10.4214 2.50491 11.1716C1.75476 11.9217 1.33333 12.9391 1.33333 14H0ZM5.33333 8C3.12333 8 1.33333 6.21 1.33333 4C1.33333 1.79 3.12333 0 5.33333 0C7.54333 0 9.33333 1.79 9.33333 4C9.33333 6.21 7.54333 8 5.33333 8ZM5.33333 6.66667C6.80667 6.66667 8 5.47333 8 4C8 2.52667 6.80667 1.33333 5.33333 1.33333C3.86 1.33333 2.66667 2.52667 2.66667 4C2.66667 5.47333 3.86 6.66667 5.33333 6.66667ZM10.856 9.13533C11.7929 9.55728 12.588 10.2408 13.1457 11.1038C13.7035 11.9668 14.0001 12.9725 14 14H12.6667C12.6668 13.2293 12.4444 12.475 12.0261 11.8277C11.6077 11.1804 11.0114 10.6678 10.3087 10.3513L10.8553 9.13533H10.856ZM10.3973 1.60867C11.069 1.88553 11.6433 2.35569 12.0473 2.95949C12.4514 3.56328 12.6669 4.27349 12.6667 5C12.6669 5.91489 12.3251 6.79682 11.7084 7.47255C11.0916 8.14828 10.2444 8.56898 9.33333 8.652V7.31C9.8273 7.23925 10.2856 7.01201 10.6409 6.66164C10.9962 6.31126 11.2298 5.85621 11.3074 5.36329C11.3851 4.87036 11.3027 4.36553 11.0723 3.9229C10.8419 3.48027 10.4756 3.12316 10.0273 2.904L10.3973 1.60867Z" fill="#101010"/>
                        </svg>
                    </span>
                   <span>Team</span>
                </button>
              </Menu.Item>
            </div>
            <div className="px-4 py-1">
              <Menu.Item>
                <button className="text-gray-900 group flex items-center w-full px-2 py-2 text-sm space-x-4">
                    <span className="block">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.2725 5.8905H8.5085V7.1995H3.2725V9.163L0 6.545L3.2725 3.927V5.8905ZM2.618 10.472H4.39038C5.14613 11.1385 6.07813 11.5728 7.07457 11.7227C8.07101 11.8726 9.08954 11.7319 10.008 11.3173C10.9264 10.9027 11.7057 10.2319 12.2523 9.38541C12.7989 8.53891 13.0897 7.55266 13.0897 6.545C13.0897 5.53735 12.7989 4.55109 12.2523 3.70459C11.7057 2.85809 10.9264 2.1873 10.008 1.77271C9.08954 1.35813 8.07101 1.21735 7.07457 1.36729C6.07813 1.51723 5.14613 1.9515 4.39038 2.618H2.618C3.22712 1.80457 4.01754 1.1444 4.92647 0.689937C5.8354 0.235473 6.83778 -0.000761604 7.854 1.84457e-06C11.4688 1.84457e-06 14.399 2.9302 14.399 6.545C14.399 10.1598 11.4688 13.09 7.854 13.09C6.83778 13.0908 5.8354 12.8545 4.92647 12.4001C4.01754 11.9456 3.22712 11.2854 2.618 10.472Z" fill="#101010"/>
                        </svg>
                    </span>
                   <span>Logout</span>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}





