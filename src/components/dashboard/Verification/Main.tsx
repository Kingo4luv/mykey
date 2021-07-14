import { useState } from "react";
import Table from "../table"
import ActivateAccountComponent from "./ActivateAccountComponent"
import VerificationHeadingComponent from "./VerificationHeadingComponent"

const VerificationMain = () => {
    const [showTable, setShowTable] = useState(false);
    return(
        <main className="w-full h-full relative overflow-y-auto ml-0 md:ml-[20%] lg:ml-[16.666667%] pt-20 md:pt-24 px-4 md:px-12">
                <VerificationHeadingComponent />
                {showTable ? <Table /> : <ActivateAccountComponent activateAccount={() => setShowTable(true)} />}
        </main>
    )
}

export default VerificationMain