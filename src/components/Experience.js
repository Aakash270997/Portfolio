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
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
          <LiIcon reference={ref} />
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type: "spring"}}>
            <h3 className='capitalize font-bold text2xl'>{position} &nbsp;
            <a href={companyLink} target='_blank' className="text-primary capitalize">@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>{time} | {address}</span>
            <p className='font-medium w-full'>{work}</p>
            </motion.div>
        </li>
    )
  }
  return (
    <div className='my-[11rem]'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>
        <div className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} ref={ref} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
            <u className='x-full flex flex-col items-center justify-between ml-4'>
                <Details position="Frontend Developer" company="Moretasks" companyLink="https://moretasks.com/" time="22-Present" address="Centrum Plaza, 4th Floor, Golf Course Rd, Gurugram" work="Designing, implementing, and maintaining user interfaces for seamless, responsive, and visually appealing web experiences. Responsibilities include coding, UI/UX design, performance optimization, and collaboration with teams." />
            </u>
        </div>
    </div>
  )
}

export default Experience