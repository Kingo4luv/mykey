const WhatIsMyKey = ({items}:{items: {title:string; text:string; svg:string}[]}) => {
    return(
        <section className="py-6 md:py-12 w-full px-4 space-y-12">
            {items.map((item, i) => {
                return(
                    <div className={`max-w-screen-xl mx-auto flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} key={i}>
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <img src={item.svg} alt={item.title} />
                        </div>
                        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
                            <dl className="md:max-w-md mx-auto space-y-2 md:space-y-4">
                                <dt className="font-medium text-black text-lg md:text-2xl">{item.title}</dt>
                                <dd className="text-grey text-base">{item.text}</dd>
                            </dl>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default WhatIsMyKey;