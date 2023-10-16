import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Experience = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
          <LiIcon reference={ref} />
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type: "spring"}}>
            <h3 className='capitalize font-bold text2xl sm:text-xl xs:text-lg'>{position} &nbsp;
            <a href={companyLink} target='_blank' className="text-primary capitalize">@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>{time} | {address}</span>
            {/* <p className='font-medium w-full md:text-sm'>{work}</p> */}
            <ul className='max-w-md space-y-1 text-dark dark:text-light/75 mt-4 list-disc list-inside'>
              <li>Integrated with API to enhance website functionality.</li>
              <li>Utilized CSS frameworks like Bootstrap and Tailwind to create responsive websites.</li>
              <li>Designed and developed company websites to meet specific business requirements.</li>
              <li>Led and collaborated with a small team of professionals to achieve project goals.</li>
              <li>Designed and developed e-commerce websites using Magento, optimizing online shopping experiences.</li>
              <li>Created travel-related blog websites using WordPress and integrated e-commerce features using WooCommerce.</li>
              <li>Proficient in PHP, Laravel, and Node.js, enabling versatile web development capabilities.</li>
            </ul>
            </motion.div>
        </li>
    )
  }
  return (
    <div className='my-[11rem]'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16px'>Experience</h2>
        <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY: scrollYProgress}} ref={ref} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light dark:text-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
            <ul className='x-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
                <Details position="Frontend Developer" company="Moretasks" companyLink="https://moretasks.com/" time="22-Present" address="Centrum Plaza, 4th Floor, Golf Course Rd, Gurugram" work="Designing, implementing, and maintaining user interfaces for seamless, responsive, and visually appealing web experiences. Responsibilities include coding, UI/UX design, performance optimization, and collaboration with teams." />
            </ul>
        </div>
    </div>
  )
}

export default Experience