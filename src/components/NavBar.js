import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {  GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>{title}
      <span className={`
    h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
    ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href)
  }
  return (
    <button href={href} id={`mob-nav-${title}`} aria-label={title} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>{title}
      <span className={`
    h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
    ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`}>&nbsp;</span>
    </button>
  )
}

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false)

  const handleMobMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header
      className='w-full px-32 py-8 font-medium flex item-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'
    >
      <button className='flex-col justify-center items-center hidden lg:flex' id='hamburger-menu' aria-label="Hamburger Menu" onClick={handleMobMenu}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 easy-oiut h-0.5 w-5 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 easy-oiut h-0.5 w-5 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 easy-oiut h-0.5 w-5 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/about" title="About" className='mx-4' />
          <CustomLink href="/project" title="Project" className='mx-4' />
          {/* <CustomLink href="/articles" title="Articles" className='mx-4' /> */}
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} href="https://github.com/Aakash270997" title='GitHub' target={"_blank"} className='w-6 mx-3'><GithubIcon /></motion.a>
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/aakash-srivastava-dev/" title='linkedin' target={"_blank"} className='w-6 mx-3'><LinkedInIcon /></motion.a>
          <button onClick={() => setMode(mode === "light" ? "dark" : "light")} id='mode' aria-label='light & dark mode'
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`} >
            {
              mode === "dark" ?
                <SunIcon className={"fill-dark"} />
                : <MoonIcon className={"fill-dark"} />
            }
          </button>
        </nav>
      </div>
      {
        isOpen ?
          <motion.div initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}} animate={{scale:1, opacity:1}} className='min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 transition-transform'>
            <nav className='flex items-center justify-center flex-col'>
              <CustomMobileLink toggle={handleMobMenu} href="/" title="Home" className='mx-4' />
              <CustomMobileLink toggle={handleMobMenu} href="/about" title="About" className='mx-4' />
              <CustomMobileLink toggle={handleMobMenu} href="/project" title="Project" className='mx-4' />
              {/* <CustomMobileLink toggle={handleMobMenu} href="/articles" title="Articles" className='mx-4' /> */}
            </nav>
            <nav className='flex items-center justify-center flex-wrap mt-2'>
              <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} href="https://github.com/Aakash270997" title='GitHub' target={"_blank"} className='w-6 mx-3 sm:mx-1 bg-light dark:bg-dark rounded-full'><GithubIcon /></motion.a>
              <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/aakash-srivastava-dev/" title='linkedin' target={"_blank"} className='w-6 mx-3 sm:mx-1'><LinkedInIcon /></motion.a>
              <button onClick={() => setMode(mode === "light" ? "dark" : "light")} id='mode-mobile' aria-label='light & dark mode'
                className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`} >
                {
                  mode === "dark" ?
                    <SunIcon className={"fill-dark"} />
                    : <MoonIcon className={"fill-dark"} />
                }
              </button>
            </nav>
          </motion.div> : null
      }
      <div className='absolute left-[50%] top-3 translate-x-[-50%] sm:top-0'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar