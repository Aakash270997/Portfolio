import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'

const project = () => {
  const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
      <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl'>
        <a herf={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>12
          <Image src={img} alt={title} className='w-full h-auto' />
        </a>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
          <span className='text-primary font-medium text-xl'>{type}</span>
          <a herf={link} target='_blank' className='hover:underline underline-offset-2 cursor-pointer'><h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2></a>
          <p className='my-2 font-medium text-dark'>{summary}</p>
          <div>
            <a herf={github} target='_blank'><GithubIcon /></a>
            <a herf={link} target='_blank'>Visit Project</a>
          </div>
        </div>

      </article>
    )
  }

  return (
    <>
      <Head>
        <title>Coder | About Page</title>
        <meta name="description" content='About page' />
      </Head>
      <main className='w-full mb-16'>
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!" />
          <div className='grid grid-cols-12 gap-24'>
            <div className='col-span-12'>
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                type="Featured Project"
                github="/"
                img={project1}
              />
            </div>
            <div className='col-span-6'>
              Project-1
            </div>
            <div className='col-span-6'>
              Project-2
            </div>
            <div className='col-span-12'>
              Featured Project
            </div>
            <div className='col-span-6'>
              Project-3
            </div>
            <div className='col-span-6'>
              Project-4
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default project