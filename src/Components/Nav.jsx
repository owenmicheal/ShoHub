import { najjilogo } from '../assets/images/index.js'
import { hamburger } from '../assets/icons/index.js'
import { navLinks } from '../constants/index.js'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img
                src={najjilogo}
                alt="LOGO"
                width={150}
                height={35} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}
                           className='font-montserrat leading-normal text-lg text-slate-gray'
                           >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img 
                    src={hamburger} 
                    alt="Toggle Menu"
                    width={25}
                    height={25} 
                    />
            </div>
        </nav> 
    </header>
  )
}

export default Nav;