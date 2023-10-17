import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Education = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'>
          <LiIcon reference={ref} />
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type: "spring"}}>
            <h3 className='capitalize font-bold text2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>{time} | {place}</span>
            <p className='font-medium w-full md:text-sm'>{info}</p>
            </motion.div>
        </li>
    )
  }
  return (
    <div className='my-[11rem]'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16px'>Education</h2>
        <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY: scrollYProgress}} ref={ref} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light dark:text-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
            <ul className='x-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
                <Details type="Bachelor of Computer Applications" place="Swami Vivekanand Subharti University" time="2021-2024" info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence." />
                <Details type="Bachelor of Commerce" place="VEER BAHADUR SINGH PURVANCHAL UNIVERSITY" time="2018-2021" info="Relevant courses is an undergraduate degree in business and finance" />
                <Details type="S.V. Inter College" place="Swami Vivekanand Subharti University" time="2014-2016" info="I dedicated my studies to physics, chemistry, and mathematics, resulting in a noteworthy 84% achievement." />
            </ul>
        </div>
    </div>
  )
}

export default Education;