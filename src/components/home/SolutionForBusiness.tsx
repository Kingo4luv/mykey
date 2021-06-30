import businessSolution from '../../assets/svg/solution-web.svg'
import businessSolutionMobile from '../../assets/svg/solution-mobile.svg'

const SolutionForBusiness = () => {
    return(
        <section className="flex flex-col lg:flex-row py-6 md:py-32">
        <div className="w-1/3 hidden lg:block">
          <img src={businessSolution}  alt="business-solution" className="w-full h-full object-cover object-center"/>
        </div>
        <div className="w-full lg:w-2/3 flex md:justify-start lg:justify-center px-4">
          <div className="w-full lg:max-w-2xl">
             <h5 className="text-[#5D5B5B] text-base md:text-2xl">Solutions for Businesses</h5>
             <h2 className="text-[21px] md:text-[32px] leading-[26.04px] md:leading-[39.68px] font-medium mt-4 max-w-lg">Confirm the identity of your customers keep fraudsters away.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-y-12 gap-x-6 lg:gap-x-20 mt-12">
              <div className="space-y-3">
                <span>
                  <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.996545 2.324L11.4545 0L21.9125 2.324C22.1952 2.38683 22.4479 2.54414 22.6291 2.76997C22.8103 2.9958 22.909 3.27666 22.9091 3.56618V16.2769C22.909 17.534 22.5986 18.7717 22.0053 19.88C21.4121 20.9883 20.5544 21.9331 19.5084 22.6304L11.4545 28L3.40073 22.6304C2.35489 21.9332 1.49731 20.9887 0.904079 19.8806C0.310845 18.7725 0.000300817 17.5351 0 16.2782V3.56618C4.96845e-05 3.27666 0.0988119 2.9958 0.279987 2.76997C0.461161 2.54414 0.71392 2.38683 0.996545 2.324ZM2.54545 4.58691V16.2769C2.54547 17.1149 2.75237 17.94 3.14779 18.6789C3.54321 19.4178 4.11492 20.0476 4.81218 20.5125L11.4545 24.9416L18.0969 20.5125C18.794 20.0478 19.3656 19.4181 19.761 18.6795C20.1564 17.9408 20.3634 17.116 20.3636 16.2782V4.58691L11.4545 2.60909L2.54545 4.58691ZM11.4545 12.7273C10.6107 12.7273 9.80137 12.392 9.20466 11.7953C8.60795 11.1986 8.27273 10.3893 8.27273 9.54545C8.27273 8.70158 8.60795 7.89228 9.20466 7.29557C9.80137 6.69886 10.6107 6.36364 11.4545 6.36364C12.2984 6.36364 13.1077 6.69886 13.7044 7.29557C14.3011 7.89228 14.6364 8.70158 14.6364 9.54545C14.6364 10.3893 14.3011 11.1986 13.7044 11.7953C13.1077 12.392 12.2984 12.7273 11.4545 12.7273ZM5.76164 19.0909C5.91592 17.6889 6.58214 16.3931 7.63265 15.4518C8.68315 14.5106 10.044 13.9901 11.4545 13.9901C12.865 13.9901 14.2259 14.5106 15.2764 15.4518C16.327 16.3931 16.9932 17.6889 17.1475 19.0909H5.76164Z" fill="#00ACE6"/>
                  </svg>
                </span>
                <h3 className="text-base md:text-lg text-black font-medium">Validate everything</h3>
                  <p className="text-grey text-[14px] leading-[23.52px]">Validate anything about anyone and leverage data to strengthen your relationship with your customers</p>
              </div>
              <div className="space-y-3">
                <span>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 28C6.2678 28 0 21.7322 0 14C0 6.2678 6.2678 0 14 0C21.7322 0 28 6.2678 28 14C28 21.7322 21.7322 28 14 28ZM14 25.2C16.9704 25.2 19.8192 24.02 21.9196 21.9196C24.02 19.8192 25.2 16.9704 25.2 14C25.2 11.0296 24.02 8.18081 21.9196 6.0804C19.8192 3.98 16.9704 2.8 14 2.8C11.0296 2.8 8.18081 3.98 6.0804 6.0804C3.98 8.18081 2.8 11.0296 2.8 14C2.8 16.9704 3.98 19.8192 6.0804 21.9196C8.18081 24.02 11.0296 25.2 14 25.2ZM7 14H9.8C9.8 15.1139 10.2425 16.1822 11.0302 16.9698C11.8178 17.7575 12.8861 18.2 14 18.2C15.1139 18.2 16.1822 17.7575 16.9698 16.9698C17.7575 16.1822 18.2 15.1139 18.2 14H21C21 15.8565 20.2625 17.637 18.9497 18.9497C17.637 20.2625 15.8565 21 14 21C12.1435 21 10.363 20.2625 9.05025 18.9497C7.7375 17.637 7 15.8565 7 14Z" fill="#00ACE6"/>
                  </svg>
                </span>
                <h3 className="text-base md:text-lg text-black font-medium">Share trust, not data</h3>
                  <p className="text-grey text-[14px] leading-[23.52px]">Harness the power of self-sovereign identity to maintain, share, and control the source of truth</p>
              </div>
              <div className="space-y-3">
                <span>
                  <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.2422 15.1979V16.5795C20.2422 20.4066 19.3248 24.1024 17.5964 27.4197L17.2827 28L14.869 26.6543C16.4717 23.7805 17.3698 20.5613 17.4693 17.2095L17.4789 16.5795V15.1979H20.2422ZM11.9524 11.053H14.7157V16.5795L14.7088 17.1031C14.6043 20.8856 13.3026 24.5374 10.9908 27.533L10.6717 27.9337L8.53015 26.1873C10.639 23.6118 11.8391 20.4123 11.9441 17.0852L11.9524 16.5795V11.053ZM13.3341 5.52651C15.1662 5.52651 16.9233 6.25433 18.2188 7.54985C19.5144 8.84537 20.2422 10.6025 20.2422 12.4346H17.4789C17.4789 11.3353 17.0422 10.2811 16.2649 9.50376C15.4876 8.72645 14.4333 8.28976 13.3341 8.28976C12.2348 8.28976 11.1805 8.72645 10.4032 9.50376C9.62587 10.2811 9.18918 11.3353 9.18918 12.4346V16.5795C9.18918 19.6674 8.05625 22.5813 6.05151 24.8375L5.75861 25.1552L3.75802 23.2486C5.37446 21.5574 6.31988 19.3355 6.41764 16.9981L6.42593 16.5795V12.4346C6.42593 10.6025 7.15375 8.84537 8.44927 7.54985C9.7448 6.25433 11.5019 5.52651 13.3341 5.52651ZM13.3341 1.36291e-05C16.6319 1.36291e-05 19.7947 1.31008 22.1267 3.64203C24.4586 5.97397 25.7687 9.13676 25.7687 12.4346V16.5795C25.7687 18.9255 25.4896 21.2356 24.9438 23.4738L24.7518 24.2185L22.0853 23.4918C22.6269 21.5064 22.9322 19.4547 22.9944 17.3643L23.0054 16.5795V12.4346C23.0054 10.6397 22.5059 8.88021 21.5628 7.35302C20.6197 5.82584 19.2702 4.59123 17.6654 3.78737C16.0606 2.98352 14.2637 2.64212 12.4758 2.8014C10.688 2.96068 8.97975 3.61435 7.54228 4.68924L5.57347 2.71905C7.77505 0.955103 10.513 -0.00417038 13.3341 1.36291e-05ZM3.61847 4.67405L5.58867 6.64286C4.4037 8.22237 3.73323 10.1281 3.66821 12.1017L3.66268 12.4346L3.66821 15.1979C3.66821 16.7453 3.30346 18.2416 2.61541 19.5873L2.39988 19.988L0 18.6174C0.525017 17.6986 0.831737 16.6734 0.892529 15.6013L0.904964 15.1979V12.4346C0.896767 9.61381 1.85434 6.87517 3.61847 4.67405Z" fill="#00ACE6"/>
                  </svg>
                </span>
                <h3 className="text-base md:text-lg text-black font-medium">Privacy by design</h3>
                  <p className="text-grey text-[14px] leading-[23.52px]">Manage data better with tamper-proof credentials and easy integration with your existing systems</p>
              </div>
              <div className="space-y-3">
                <span>
                  <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.3333 14L28.5336 22.7998L26.334 20.6002L32.9342 14L26.334 7.39978L28.5336 5.20022L37.3333 14ZM4.39911 14L10.9993 20.6002L8.79978 22.7998L0 14L8.79978 5.20022L10.9978 7.39978L4.39911 14ZM15.2258 28H11.9156L22.1076 0H25.4178L15.2258 28Z" fill="#00ACE6"/>
                  </svg>

                </span>
                <h3 className="text-base md:text-lg text-black font-medium">Easy deployment</h3>
                  <p className="text-grey text-[14px] leading-[23.52px]">“Push-button deploy” on premises or the cloud</p>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden mt-12">
          <img src={businessSolutionMobile} alt="mobile view" className="w-full h-full object-center object-cover" />
        </div>
      </section>
    )
}

export default SolutionForBusiness