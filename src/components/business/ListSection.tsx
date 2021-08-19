const ListSection = ({items, image, title}:{items:{boldText:string; normalText: string}[]; image:string; title:string}) => {
    return(
        <section className="w-full py-12 md:py-24">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 space-y-12 px-4 xl:px-0">
                    <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-10">
                        {items.map((item, i) => {
                            return(
                                <li className="flex space-x-6 py-4 max-w-lg ">
                                    <span className="h-7 w-7 flex-none font-medium rounded-full bg-yellow text-sm text-center flex justify-center items-center">{i+1}</span>
                                    <p className="leading-[26.88px] text-black"><span className="font-medium">{item.boldText}</span>{item.normalText}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                    <div className="h-auto lg:h-100 lg:max-w-xl">
                        <img src={image} alt="" className="w-full h-full object-center object-cover rounded-none lg:rounded"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ListSection