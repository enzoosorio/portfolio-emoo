import {Link} from 'react-router'
import gsap from 'gsap'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'

interface MenuItemsProps{
    isMenuOpen : boolean
}
export const MenuItems = ({isMenuOpen}: MenuItemsProps) => {

    gsap.registerPlugin(useGSAP);

    useEffect(() => {
            if(isMenuOpen){
                gsap.to(".nav-links", {
                    duration: 1,
                    height: '384px',
                    opacity: 1,
                    zIndex: 0,
                    // y: '0%',
                    ease: "back.out",
                    display: 'flex',
                })
            }
            else{ 
                gsap.to(".nav-links", {
                    duration: 1,
                    height: '0px',
                    // y: '-30%',
                    opacity: 0,
                    zIndex: -10,
                    ease: "power2.out",
                    display: 'flex',
                })
            }

            }, [isMenuOpen])

    const menuItems = [
        {
            title: 'Home',
            url: '/',
            cName: 'nav-links'
        },
        {
            title: 'About me',
            url: '/about-me',
            cName: 'nav-links'
        },
        {
            title: 'Projects',
            url: '/projects',
            cName: 'nav-links'
        },
        {
            title: 'Contact',
            url: '/contact',
            cName: 'nav-links'
        },
    ]

  return (
    <ul
    className={`
    absolute nav-links
    bg-primary-blue rounded-sm p-4 pl-10 pb-10 top-0 right-[5%]
    md:w-72
    lg:h-0
    opacity-0
    -z-10
    flex flex-col items-start justify-end gap-6 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        {
            menuItems.map((item, index) => {
                return (
                    <li key={index} className='font-sigmar text-2xl text-primary-purple'>
                        <Link to={item.url}>
                        {item.title}
                        </Link>
                    </li>
                )
            })
        }
    </ul>
  )
}
