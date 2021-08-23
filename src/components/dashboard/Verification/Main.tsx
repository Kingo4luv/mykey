import { Transition } from "@headlessui/react";
import { useState } from "react";
import UserDetailsModal from "../../modal/UserDetails";
import Table from "../table";
import ActivateAccountComponent from "./ActivateAccountComponent";
import VerificationHeadingComponent from "./VerificationHeadingComponent";

const VerificationMain = () => {
  const [showTable, setShowTable] = useState(false);
  const [showUserModal, setUserModal] = useState(false);

  const toggleUserDetailsModal = () => {
    setUserModal(!showUserModal);
  };
  return (
    <>
      <main className="w-full h-full relative overflow-y-auto ml-0 md:ml-[20%] lg:ml-[16.666667%] pt-20 md:pt-24 px-4 md:px-12">
        <VerificationHeadingComponent />
        {showTable ? (
          <Table handleClick={toggleUserDetailsModal} />
        ) : (
          <ActivateAccountComponent
            activateAccount={() => setShowTable(true)}
          />
        )}
      </main>
      <Transition
        className="z-50"
        show={showUserModal}
        enter="transition duration-300 ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-300 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <UserDetailsModal closeModal={toggleUserDetailsModal} />
      </Transition>
    </>
  );
};

export default VerificationMain;
