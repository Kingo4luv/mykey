const SettingsApiKeys = () => {
    return(
        <div className="space-y-6">
            <h3 className="font-medium text-lg">API Keys</h3>
            <div className="w-full space-y-6">
                <div className="space-y-2 bg-white py-4 px-4 rounded-lg flex justify-between items-center">
                    <div className="w-full space-y-2">
                        <h5 className="text-sm font-medium text-black">Test Public Key</h5>
                        <p className="text-grey text-sm font-thin">test_pk_CTgsXghshggdghgh</p>
                    </div>
                    <div>
                        <button className="flex space-x-2 bg-gray-100 rounded px-2 py-1 items-center flex-none">
                            <span><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.11054 3.3V1.2C3.11054 1.01435 3.18429 0.8363 3.31557 0.705025C3.44684 0.57375 3.62489 0.5 3.81054 0.5H12.2105C12.3962 0.5 12.5742 0.57375 12.7055 0.705025C12.8368 0.8363 12.9105 1.01435 12.9105 1.2V11C12.9105 11.1856 12.8368 11.3637 12.7055 11.495C12.5742 11.6262 12.3962 11.7 12.2105 11.7H10.1105V13.8C10.1105 14.1864 9.79554 14.5 9.40564 14.5H1.01545C0.923135 14.5005 0.831624 14.4828 0.746172 14.4479C0.66072 14.413 0.58301 14.3615 0.517508 14.2965C0.452005 14.2314 0.400002 14.1541 0.364485 14.0689C0.328968 13.9837 0.310637 13.8923 0.310547 13.8L0.312647 4C0.312647 3.6136 0.627647 3.3 1.01755 3.3H3.11054ZM1.71265 4.7L1.71055 13.1H8.71054V4.7H1.71265ZM4.51054 3.3H10.1105V10.3H11.5105V1.9H4.51054V3.3Z" fill="#101010"/>
                                </svg>
                            </span>
                            <span className="text-xs text-black">Copy</span>
                        </button>
                    </div>
                </div>
                <div className="space-y-2 bg-white py-4 px-4 rounded-lg flex justify-between items-center">
                    <div className="w-full space-y-2">
                        <h5 className="text-sm font-medium text-black">Secret API Key</h5>
                        <p className="text-grey text-sm font-thin">test_pk_CTgsXghshggdghgh</p>
                    </div>
                    <div>
                        <button className="flex space-x-2 bg-gray-100 rounded px-2 py-1 items-center flex-none">
                            <span><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.11054 3.3V1.2C3.11054 1.01435 3.18429 0.8363 3.31557 0.705025C3.44684 0.57375 3.62489 0.5 3.81054 0.5H12.2105C12.3962 0.5 12.5742 0.57375 12.7055 0.705025C12.8368 0.8363 12.9105 1.01435 12.9105 1.2V11C12.9105 11.1856 12.8368 11.3637 12.7055 11.495C12.5742 11.6262 12.3962 11.7 12.2105 11.7H10.1105V13.8C10.1105 14.1864 9.79554 14.5 9.40564 14.5H1.01545C0.923135 14.5005 0.831624 14.4828 0.746172 14.4479C0.66072 14.413 0.58301 14.3615 0.517508 14.2965C0.452005 14.2314 0.400002 14.1541 0.364485 14.0689C0.328968 13.9837 0.310637 13.8923 0.310547 13.8L0.312647 4C0.312647 3.6136 0.627647 3.3 1.01755 3.3H3.11054ZM1.71265 4.7L1.71055 13.1H8.71054V4.7H1.71265ZM4.51054 3.3H10.1105V10.3H11.5105V1.9H4.51054V3.3Z" fill="#101010"/>
                                </svg>
                            </span>
                            <span className="text-xs text-black">Copy</span>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SettingsApiKeys