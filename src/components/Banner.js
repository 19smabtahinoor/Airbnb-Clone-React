import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Search from './Search';
import { NavLink } from 'react-router-dom';

function Banner() {

    const [showSearch, setShowSearch] = useState(false)
    const [showGuests, setShowGuests] = useState(false)
    const [adultsCounter, setAdultsCounter] = useState(0)
    const [childrenCounter, setChildrenCounter] = useState(0)
    const [infantCounter, setInfantCounter] = useState(0)

    return (
        <>
            <div className="relative banner bg-no-repeat bg-fixed bg-cover">
                <div className="max-w-screen-lg mx-auto">

                    {showSearch && <Search />}
                    {/* search */}
                    <div className="flex flex-row flex-grow w-full justify-center space-x-4 items-center bg-gray-100 rounded-full relative top-10 hidden lg:inline-flex xl:inline-flex m-5">
                        <div className=" px-5 py-3  rounded-full hover:bg-gray-200 hover:shadow-lg cursor-pointer">
                            <h2 className="text-sm font-bold text-gray-700">Location</h2>
                            <span className="text-gray-600 text-sm">Where are you going ?</span>
                        </div>

                        <div className=" px-8 py-3  rounded-full hover:bg-gray-200 hover:shadow-lg cursor-pointer" onClick={() => { setShowSearch(!showSearch) }}>
                            <h2 className="text-sm font-bold text-gray-700">Check in</h2>
                            <span className="text-gray-600 text-sm">
                                {!showSearch ? "Add Dates" : "Hide Dates"}</span>
                        </div>

                        <div className=" px-8 py-3  rounded-full hover:bg-gray-200 hover:shadow-lg cursor-pointer" onClick={() => { setShowSearch(!showSearch) }}>
                            <h2 className="text-sm font-bold text-gray-700">Check out</h2>
                            <span className="text-gray-600 text-sm">
                                {!showSearch ? "Add Dates" : "Hide Dates"}
                            </span>
                        </div>

                        <div className=" px-8 py-3  rounded-full hover:bg-gray-200 hover:shadow-lg cursor-pointer" onClick={() => { setShowGuests(!showGuests) }}>
                            <h2 className="text-sm font-bold text-gray-700">Guests</h2>
                            <span className="text-gray-600 text-sm">{adultsCounter +childrenCounter+ infantCounter} Guests</span>
                        </div>
                        <NavLink to="/search">
                        <SearchOutlinedIcon className="searchIconDate bg-red-500 text-white rounded-full p-1" />
                        </NavLink>
                    </div>

                    {/* guestes  */}
                    {showGuests &&
                        <div className="absolute bg-white right-60 rounded-xl shadow-xl p-8">

                            <div className="flex space-x-14 items-center border-b-2 border-gray-300 py-3">
                                <div>
                                    <h1 className="font-bold">Adults</h1>
                                    <span className="text-sm">Ages 13 or above</span>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <RemoveIcon className="text-gray-600 border border-gray-300 rounded-full cursor-pointer p-1"
                                    onClick={ () => {
                                        if(adultsCounter > 0 ){
                                            setAdultsCounter(adultsCounter - 1)
                                        }else{                                    
                                            setAdultsCounter(0)
                                        }
                                    }} />
                                    <span>{adultsCounter}</span>
                                    <AddIcon className="text-gray-600 border border-gray-300 rounded-full cursor-pointer p-1"
                                        onClick={() => {
                                            setAdultsCounter(
                                                adultsCounter + 1
                                            )
                                        }}
                                    />
                                </div>
                            </div>


                            <div className="flex flex-grow flex-row items-center border-b-2 border-gray-300 py-3">
                                <div className="w-full">
                                    <h1 className="font-bold">Children</h1>
                                    <span className="text-sm">Ages 2-12</span>
                                </div>

                                <div className="flex items-center flex-row justify-end space-x-3">
                                    <RemoveIcon className="text-gray-600 border border-gray-300 rounded-full cursor-pointer p-1" 
                                        onClick={ () => {
                                            if(childrenCounter > 0){
                                                setChildrenCounter(childrenCounter - 1)
                                            }else{
                                                setChildrenCounter(0)
                                            }
                                        }}
                                    />
                                    <span>{childrenCounter}</span>
                                    <AddIcon className="text-gray-600 border border-gray-300 rounded-full cursor-pointer p-1"
                                    onClick={ () => {
                                        setChildrenCounter(childrenCounter + 1)
                                    }}
                                    />
                                </div>
                            </div>


                            <div className="flex space-x-14 items-center border-b-2 border-gray-300 py-3">
                                <div className="w-full">
                                    <h1 className="font-bold">Infants</h1>
                                    <span className="text-sm">Under 2</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <RemoveIcon className="text-gray-600 border border-gray-300 rounded-full cursor-pointer p-1"
                                    onClick={ () => {
                                        if(infantCounter > 0){
                                            setInfantCounter(infantCounter - 1)
                                        }else{
                                            setInfantCounter(0)
                                        }
                                    }}
                                    />
                                    <span>{infantCounter}</span>
                                    <AddIcon className="text-gray-600 border border-gray-300 rounded-full cursor-pointer p-1"
                                    onClick={ () => {
                                        setInfantCounter(infantCounter + 1)
                                    }}
                                    />
                                </div>
                            </div>

                        </div>
                    }


                    <div className="bannerInfo px-5 py-2">
                        <h5 className="text-white font-bold text-xl pb-3">Airbnb <span className="bg-gray-900 text-white rounded-lg p-1">2021</span></h5>
                        <h1 className="text-white font-semibold text-4xl lg:text-5xl xl:text-5xl">Introducing 100+ <br /> upgrades across <br />our entire service</h1>
                        <NavLink to="/search">
                            <Button className="w-40 bannerButton my-4">Learn what's new</Button>
                        </NavLink>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;