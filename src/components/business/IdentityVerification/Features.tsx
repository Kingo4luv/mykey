

const Features = ({title, items}: {title: string; items:{text:string; svg:string}[]} ) => {
    return(
        <section className="py-12 lg:py-24 bg-hair w-full px-4 lg:px-0">
            <div className="max-w-screen-xl mx-auto space-y-12 lg:space-y-24">
                <h3 className="text-white text-xl md:text-2xl font-medium">Why use MyIdentikey for Identity Verification?</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
                    {items.map((item, i) => {
                        return(
                            <li className="space-y-5" key={i}>
                                <img src={item.svg} alt="icon" className="h-10 w-10" />
                                <p className="text-[#E0E0E0] font-thin">{item.text}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Features;