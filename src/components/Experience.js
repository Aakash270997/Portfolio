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
            <ul className='space-y-1 text-dark dark:text-light/75 mt-4 list-disc'>
              <li className='ml-5'>Spearheaded front end development, ensuring seamless UI/UX experiences through expert use of HTML, CSS, and JavaScript.</li>
              <li className='ml-5'>Managed the front end of e-commerce websites based on Magento2.</li>
              <li className='ml-5'>Crafted responsive websites, made sure the sites looked great and worked smoothly on any device, focusing on user-friendly experiences.</li>
              <li className='ml-5'>Optimized website performance, implementing strategic improvements to enhance speed and user experience.</li>
              <li className='ml-5'>Developed responsive and visually engaging websites on the WordPress platform.</li>
              <li className='ml-5'>Created visually appealing email templates, and campaigns.</li>
              <li className='ml-5'>Developed web applications using ReactJS for front-end, NodeJs for back-end, and MongoDB database.</li>
              <li className='ml-5'>Created company's official website on ReactJs, showcasing innovation and leadership.</li>
              <li className='ml-5'>Implemented RESTful APIs and utilized Postman for efficient testing and validation of APIs.</li>
              <li className='ml-5'>Lead a team, fostering collaboration with designers and back-end developers in achieving project milestones with effective leadership.</li>
              <li className='ml-5'>Worked closely with back end developers and learned many skills such as deploying websites, basics of PHP, and basics of AWS.</li>
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
                <Details position="Frontend Developer" company="Moretasks" companyLink="https://moretasks.com/" time="August 2021 - Present" address="405, 4th Floor, Centrum Plaza, Golf Course Rd, Gurugram" work="Designing, implementing, and maintaining user interfaces for seamless, responsive, and visually appealing web experiences. Responsibilities include coding, UI/UX design, performance optimization, and collaboration with teams." />
            </ul>
        </div>
    </div>
  )
}

export default Experience