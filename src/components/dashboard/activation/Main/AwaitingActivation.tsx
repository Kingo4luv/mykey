const AwaitingActivation = () => {
    return(
        <main className="w-full h-full overflow-y-auto py-24 lg:py-32 px-4 md:px-12 ml-0 md:ml-[20%] xl:ml-[16.666667%]">
                
                <h1 className="text-xl">Activate Business</h1>
                <div className="w-full h-4/5 flex flex-col justify-center items-center space-y-5">
                    <span>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="32" r="32" fill="#E6F9FF"/>
                            <g clip-path="url(#clip0)">
                            <path d="M31.9999 18.2856C24.4377 18.2856 18.2856 24.4377 18.2856 31.9999C18.2856 39.5621 24.4377 45.7142 31.9999 45.7142C39.5622 45.7142 45.7142 39.562 45.7142 31.9999C45.7142 24.4377 39.5622 18.2856 31.9999 18.2856ZM31.9999 42.7165C26.0906 42.7165 21.2833 37.9092 21.2833 31.9999C21.2833 26.0909 26.0906 21.2832 31.9999 21.2832C37.9092 21.2832 42.7166 26.0909 42.7166 31.9999C42.7166 37.9092 37.9092 42.7165 31.9999 42.7165Z" fill="black"/>
                            <path d="M33.187 32.0164V26.2685C33.187 25.6267 32.667 25.1066 32.0254 25.1066C31.3837 25.1066 30.8635 25.6267 30.8635 26.2685V32.3876C30.8635 32.4059 30.868 32.423 30.8689 32.4413C30.8536 32.7572 30.9625 33.078 31.2037 33.3194L35.5309 37.6462C35.9848 38.1 36.7204 38.1 37.1739 37.6462C37.6274 37.1923 37.6277 36.4567 37.1739 36.0031L33.187 32.0164Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="27.4286" height="27.4286" fill="white" transform="translate(18.2856 18.2856)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <div className="max-w-md space-y-3">
                        <h2 className="text-lg text-hair font-medium text-center">Account activation in progress...</h2>
                        <p className="text-center text-sm text-grey leading-[23.54px]">We are currently reviewing your business account activation, and will notify you via email once it’s approved</p>
                    </div>
                </div>

                <p className="text-center text-black text-sm">Are you making more than 10,000 calls? Contact our sales team</p>
        </main>
    )
}

export default AwaitingActivation;