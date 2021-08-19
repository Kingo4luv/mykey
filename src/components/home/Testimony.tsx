import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const testimonies = [
    {
        id: 1,
        author: 'Wole Majekodunmi',
        role: 'Head of Marketing',
        body: 'Identification verification affects nearly every business, making identity a necessary component of every transaction.  Thanks to Mykey identity verification has been made easy. User Identity verification is safely and efficiently handled. Customers can be onboarded with as little as a selfie-and ID scan . Mykey is a digital identity you can trust',
        location: 'Verifrica HQ'
    },
    {
        id: 2,
        author: 'Shalom Fashola',
        role: 'Lead Developer',
        body: 'Thanks to Mykey identity verification has been made easy. User Identity verification is safely and efficiently handled. Customers can be onboarded with as little as a selfie-and ID scan . Mykey is a digital identity you can trust. Identification verification affects nearly every business, making identity a necessary component of every transaction.  ',
        location: 'Verifrica'
    },
    {
        id: 3,
        author: 'Moses Sisom',
        role: 'Lead Engineer',
        body: 'Facilisi pellentesque suspendisse urna hac eleifend orci et convallis massa nascetur gravida cum quisque cras, nullam parturient vestibulum lacus magna dis pretium morbi natoque ligula lacinia dictumst.',
        location: 'Cowrywise'
    },
]

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Testimony = () => {
     const [[page, direction], setPage] = useState([0, 0]);
     const testimonyIndex = wrap(0, testimonies.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

   
    return(
        <section className="w-full bg-[#FAFAFA] py-12 md:py-24 flex flex-col justify-center items-center space-y-5 px-4">
            <div className=" text-center space-y-4">
              <h4 className="text-center text-lg text-black">Why use MyKey?</h4>
              <h2 className="text-center text-xl md:text-3xl text-black font-medium">What our clients say about us</h2>
            </div>
            <div className="h-60 relative max-w-xl w-full md:w-1/2">
                <AnimatePresence initial={false} custom={direction}>
                <motion.div 
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                    }
                }}
                className="text-center space-y-6 absolute inset-0 w-full">
                    <p className="text-black font-thin text-sm md:text-lg">{testimonies[testimonyIndex].body}</p>
                    <div className="space-y-1 text-black">
                        <p className="font-medium text-base">{testimonies[testimonyIndex].author}, {testimonies[testimonyIndex].role}</p>
                        <p className="font-thin">{testimonies[testimonyIndex].location}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
            </div>
            <div className="space-x-4">
              {testimonies.map((testimony, i) => {
                  return(
                    <span className={`h-3 w-3 rounded-full inline-block ${testimonyIndex === i ? 'bg-black' : 'bg-[#C4C4C4]'}`}></span>
                  )
              })}
            </div>
          </section>
    )
}

export default Testimony;