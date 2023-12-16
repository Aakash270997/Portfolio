import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import { motion } from 'framer-motion';

const project = () => {

  const FramerImage = motion(Image)

  const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
      <article className='relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
        <div className='absolute top-0 -right-2 left-0 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
        <a herf={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
          <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}} transition={{duration:0.2}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" priority />
        </a>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg-pt-6'>
          <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
          <a herf={link} target='_blank' className='hover:underline underline-offset-2 cursor-pointer'><h2 className='my-2 w-full text-left text-4xl font-bold dark:text-white sm:text-sm'>{title}</h2></a>
          <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
          <div className='mt-2 flex items-center'>
            <a herf={github} target='_blank' className='w-10'><GithubIcon /></a>
            <a herf={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-0 '>Visit Project</a>
          </div>
        </div>

      </article>
    )
  }

  const Project = ({ title, type, img, link, github }) => {
    return (
      <article className='relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl  border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark  xs:p-4'>
        <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]  ' />
        <a herf={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
          <FramerImage src={img} alt={title} className='w-full h-auto'  whileHover={{scale:1.05}} transition={{duration:0.2}} />
        </a>
        <div className='w-full flex flex-col items-start justify-between mt-4'>
          <span className='text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
          <a herf={link} target='_blank' className='hover:underline underline-offset-2 cursor-pointer'><h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2></a>
          <div className='w-full mt-2 flex items-center justify-between'>
            <a herf={github} target='_blank' className='rounded text-lg font-medium underline md:text-base'><GithubIcon /></a>
            <a herf={link} target='_blank' className='ml-4  text-lg font-semibold underline'>Visit</a>
          </div>
        </div>
      </article>
    )
  }

  return (
    <>
      <Head>
        <meta name="description" content='Project page' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text4xl' />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iste non alias, voluptates maxime omnis incidunt ullam. Ab nihil eligendi eius quam delectus. Magnam iure mollitia adipisci earum harum dolore quam ipsa nihil!"
                link="/"
                type="Featured Project"
                github="/"
                img={project1}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iste non alias, voluptates maxime omnis incidunt ullam. Ab nihil eligendi eius quam delectus. Magnam iure mollitia adipisci earum harum dolore quam ipsa nihil!"
                link="/"
                type="Featured Project"
                github="/"
                img={project1}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iste non alias, voluptates maxime omnis incidunt ullam. Ab nihil eligendi eius quam delectus. Magnam iure mollitia adipisci earum harum dolore quam ipsa nihil!"
                link="/"
                type="Featured Project"
                github="/"
                img={project1}
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iste non alias, voluptates maxime omnis incidunt ullam. Ab nihil eligendi eius quam delectus. Magnam iure mollitia adipisci earum harum dolore quam ipsa nihil!"
                link="/"
                type="Featured Project"
                github="/"
                img={project1}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iste non alias, voluptates maxime omnis incidunt ullam. Ab nihil eligendi eius quam delectus. Magnam iure mollitia adipisci earum harum dolore quam ipsa nihil!"
                link="/"
                type="Featured Project"
                github="/"
                img={project1}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Crypto Screener Application"
                summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iste non alias, voluptates maxime omnis incidunt ullam. Ab nihil eligendi eius quam delectus. Magnam iure mollitia adipisci earum harum dolore quam ipsa nihil!"
                link="/"
                type="Featured Project"
                github="/"
                img={project1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default project