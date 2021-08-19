const PersonalDetails = () => {
    return(
        <div className="w-full max-w-2xl px-0 md:px-12 py-0 md:py-12">
            <h3 className="text-black font-medium text-lg">Personal Details</h3>
            <div className="mt-10 space-y-5">
                <dl className="space-x-6 text-black grid grid-cols-2">
                    <dt className="font-bold">Firstname</dt>
                    <dd className="truncate">Oluwole</dd>
                </dl>
                <dl className="space-x-6 text-black grid grid-cols-2">
                    <dt className="font-bold">Lastname</dt>
                    <dd className="truncate">Majekodunmi</dd>
                </dl>
                <dl className="space-x-6 text-black grid grid-cols-2">
                    <dt className="font-bold">Middlename</dt>
                    <dd className="truncate">Murphy</dd>
                </dl>
                <dl className="space-x-6 text-black grid grid-cols-2">
                    <dt className="font-bold">Email</dt>
                    <dd className="truncate ">Fashikunfemi10@gmail.com</dd>
                </dl>
                <dl className="space-x-6 text-black grid grid-cols-2">
                    <dt className="font-bold">Phone number</dt>
                    <dd>09066778800</dd>
                </dl>
                <dl className="space-x-6 text-black grid grid-cols-2">
                    <dt className="font-bold">Nationality</dt>
                    <dd className="truncate">Nigeria</dd>
                </dl>
                <dl className="space-x-6 text-black grid grid-cols-2">
                    <dt className="font-bold">Date of birth</dt>
                    <dd className="truncate">10-12-2000</dd>
                </dl>
            </div>
        </div>
    )
}

export default PersonalDetails;