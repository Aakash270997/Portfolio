import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import ProfilePic from "../../public/images/profile/aakash.jpg";
// import ProfilePic from "../../public/images/profile/aakash-removebg-preview.png";
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';


const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true});

    useEffect(()=>{
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])
    
    useEffect(() => {
      springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
      })
    }, [springValue, value])
    

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <meta name="description" content='About page' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light dark:bg-dark'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium text-justify'>Hello, I&apos;m Aakash Srivastava, a seasoned front-end developer with over 3 years of hands-on experience in the industry. My expertise extends to HTML, CSS, JavaScript, React.js, Next.js and WordPress. I&apos;ve successfully integrated various APIs, seamlessly bridging the gap between front-end interfaces and backend services. Moreover, I&apos;m well-versed in CSS frameworks like Bootstrap and Tailwind CSS, dedicated to crafting exceptional user interfaces that deliver outstanding web experiences.</p>
                            <p className='font-medium my-4 text-justify'>My approach to web development is rooted in my passion for creating beautiful, functional, and user-centered digital experiences. I firmly believe that design is not just about aesthetics; it&apos;s about solving problems and crafting intuitive, enjoyable experiences for users.</p>
                            <p className='font-medium text-justify'>Whether I&apos;m working on a website, or any other digital product, I consistently bring my commitment to design excellence and user-centric thinking to every project I undertake. I&apos;m excited about the opportunity to bring my extensive skill set and unwavering enthusiasm to your next project.</p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={ProfilePic} alt='Aakash srivastava' className='w-full h-auto rounded-2xl' width={500} height={500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
                        </div>
                        <div className='col-span-2 flex flex-col justify-around items-end xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            {/* <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={50} />+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied clients</h2>
                            </div> */}
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={10} />+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Project Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={3} />+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Year of Experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about