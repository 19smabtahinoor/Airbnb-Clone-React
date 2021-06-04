import React, { useState } from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NavLink } from 'react-router-dom';

function Header() {
    const [header, setHeader] = useState(false)
    const [logo, setLogo] = useState(false)
    const [hostText, setHostText] = useState(false)
    const [languageIcon, setLanguageIcon] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const changeHeader = () => {
        if (window.scrollY >= 80) {
            setHeader(true)
            setLogo(true)
            setHostText(true)
            setLanguageIcon(true)
            setShowSearch(true)
        } else {
            setHeader(false)
            setLogo(false)
            setHostText(false)
            setLanguageIcon(false)
            setShowSearch(false)
        }
    }

    window.addEventListener('scroll', changeHeader)
    
    return (
        <>
            <header className={header ? "header active shadow-lg" : "header"}>
                <div className="max-w-screen-lg mx-auto ">
                    <div className="flex flex-row flex-grow items-center px-5">
                        <div className="flex flex-row flex-grow">
                            <NavLink to="/">
                                <img className={logo ? "logo active w-28 h-20" : "w-28 h-20 filter brightness-0 invert"} src="images/airbnb.svg" alt="logo" />
                            </NavLink>

                        </div>
                        {/* Middle Part */}
                        <div className="flex flex-row items-center justify-center flex-grow relative">
                            <>
                                {showSearch ?
                                    <div>
                                        <input className="outline-none border-2 border-gray-200 rounded-full h-12 w-64 md:w-64 lg:w-64 xl:w-64 pl-4 placeholder-black shadow-sm cursor-pointer" type="text" placeholder="Start your search" />

                                        <SearchOutlinedIcon className="searchIcon absolute left-20 bg-red-500 text-white rounded-full w-10 h-10 p-2 cursor-pointer hover:bg-white hover:text-red-500" />
                                    </div>
                                    :
                                    <div>
                                        <span className="text-white px-3 cursor-pointer hover:bg-gray-200 hover:text-black rounded-full p-2 cursor-pointer">Place to stay</span>
                                        <span className="text-white px-3 cursor-pointer hover:bg-gray-200 hover:text-black rounded-full p-2 cursor-pointer">Experiences</span>
                                        <span className="text-white px-3 cursor-pointer hover:bg-gray-200 hover:text-black rounded-full p-2 cursor-pointer">Online Experiences</span>
                                    </div>

                                }
                            </>
                        </div>

                        {/* Right Part */}
                        <div className="flex flex-row items-center space-x-3 hidden md:inline-flex lg:inline-flex xl:inline-flex">
                            <span className=
                                {hostText ? "text-black text-sm hover:bg-gray-300 rounded-full p-2 cursor-pointer" : "text-gray-100 text-sm hover:bg-gray-300 rounded-full p-2 cursor-pointer hover:text-gray-900"}>Become a host</span>
                            <LanguageIcon className={languageIcon ? "text-black cursor-pointer languageIcon" : "text-gray-100 languageIcon  cursor-pointer"} />
                            <div className="flex flex-row items-center rounded-full p-1 w-20 justify-center cursor-pointer bg-gray-200">
                                <ClearAllIcon className="text-gray-400 usericon" />
                                <AccountCircleIcon className="text-gray-400 usericon" />
                            </div>

                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header
