"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../public/logo_perfectteam.png'
import Link from 'next/link'
import Menu from '../../public/menu.svg'
import Close from '../../public/close.svg'
import { AnimatePresence, motion } from 'framer-motion'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const OpenMenu = () => {
        setOpen(!open)
    }

    if(typeof window !== "undefined") {
        window.addEventListener('resize', () => {
                if (window.innerWidth > 1024) {
                    setOpen(false)
                }
        })
    }

    const containterVariant = {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: 0.02
          }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.02
            }
        }
    }

    const divVariants = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.200,0.005,0.000,0.995]
            }
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.5,
                ease: [0.200,0.005,0.000,0.995]
            }
        }
    }
  return (
    <div className='bg-background flex justify-center items flex-row fixed top-0 left-0 z-50 w-full'>
        <div className='w-full max-w-[1300px] flex justify-between items-center flex-row py-5 px-5'>
            <div className='relative h-16 w-16 z-50'>
                <Image src={Logo} fill alt="Logo" />
            </div>
            <ul className='hidden lg:flex list-none flex-row justify-center items-center gap-10'>
                <li className='text-[20px]'>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className='text-[20px]'>
                    <Link href="/about">
                        Info
                    </Link>
                </li>
                <li className='text-[20px]'>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Mobile menu */}
            <div onClick={OpenMenu} className='relative w-12 h-12 cursor-pointer z-50 block lg:hidden'>
                <Image quality={100} src={open ? Close : Menu} fill alt="Menu" />
            </div>
            <AnimatePresence mode='wait'>
                {open && (
                    <motion.div initial="initial" animate="animate" exit="exit" variants={containterVariant} className='fixed bg-background top-0 left-0 h-full w-full flex justify-center items-center flex-col gap-5'>
                        <motion.div variants={divVariants} className='text-[20px]'>
                            <Link href="/">
                                Home
                            </Link>
                        </motion.div>
                        <motion.div variants={divVariants} className='text-[20px]'>
                            <Link href="/about">
                                Aanbod
                            </Link>
                        </motion.div>
                        <motion.div variants={divVariants} className='text-[20px]'>
                            <Link href="/about">
                                Rooster
                            </Link>
                        </motion.div>
                        <motion.div variants={divVariants} className='text-[20px]'>
                            <Link href="/about">
                                Lesgevers
                            </Link>
                        </motion.div>
                        <motion.div variants={divVariants} className='text-[20px]'>
                            <Link href="/about">
                                Reservatie
                            </Link>
                        </motion.div>
                        <motion.div variants={divVariants} className='text-[20px]'>
                            <Link href="/about">
                                Proefles
                            </Link>
                        </motion.div>
                        <motion.div variants={divVariants} className='text-[20px]'>
                            <Link href="/about">
                                Tarieven
                            </Link>
                        </motion.div>
                        <motion.div variants={divVariants} className='text-[20px]'>
                            <Link href="/about">
                                Infrastructuur
                            </Link>
                        </motion.div>
                        <motion.div variants={divVariants} className='text-[20px]'>
                            <Link href="/about">
                                Locatie
                            </Link>
                        </motion.div>
                        <motion.div variants={divVariants} className='text-[20px]'>
                            <Link href="/about">
                                Team of Champions
                            </Link>
                        </motion.div>
                        <motion.div variants={divVariants} className='text-[20px]'>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default NavBar