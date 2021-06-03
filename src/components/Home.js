import React, { useState } from 'react'
import Banner from './Banner'
import Card from './Card'
import CardData from '../API/data.json'
import CardData2 from '../API/data2.json'

function Home() {
    const [data] = useState(CardData)
    const [data2] = useState(CardData2)
    return (
        <>
            <Banner />
            {/* HOME SECTION  */}
            <main className="max-w-screen-lg mx-auto">
                <h1 className="text-gray-900 font-bold text-3xl py-4 m-5">Live anywhere</h1>

                <div className="grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-16">
                    {/* display first 3 cards from data.json  */}
                    {data.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                cardImage={item.image}
                                cardTitle={item.title}
                            />
                        )
                    })}
                </div>

                {/* displat a banner  */}
                <div className="grid grid-flow-row-dense grid-cols-1 relative w-full h-92">
                    <img className="w-full h-92 my-10 rounded-xl shadow-lg object-cover" src="https://a0.muscache.com/im/pictures/38100f6a-9a35-45b8-a503-cfe384d953b5.jpg?im_w=960" alt="bannerImage" />

                    <div className="absolute top-12 md:top-40 lg:top-40 xl:top-40 mx-10 my-15 p-5">
                        <h1 className="text-3xl md:text-6xl lg:text-6xl xl:text-6xl text-gray-900 font-semibold my-2 md:my-4 lg:my-4 xl:my-4 ">The Greatest <br /> Outdoors</h1>
                        <h3 className="hidden md:block lg:block xl:block  text-lg text-gray-800">Wishlists curated by Airbnb</h3>

                        <button className="tranistion duration-700 ease-in-out bg-gray-900 text-white px-5 py-3 rounded-lg my-4 hover:bg-white hover:text-gray-900 hover:font-semibold">Get inspired</button>
                    </div>

                </div>


                {/* another three cards */}
                <div className="m-5">
                <h1 className="text-3xl text-gray-900 font-bold md:text-4xl lg:text-4xl xl:text-4xl py-3 ">Discover Experiences</h1>
                <h4 className="font-light text-2xl text-gray-500 pb-4">Unique activities with local experts—in person or online.</h4>
                </div>


                <div className="grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-16">

                {data2.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                cardImage={item.image}
                                cardTitle={item.title}
                            />
                        )
                    })}
                </div>

                {/* Became host banner  */}
                <div className="grid grid-flow-row-dense grid-cols-1 relative w-full h-92">
                    <img className="w-full h-92 my-10 rounded-xl shadow-lg object-cover" src="https://i.ibb.co/YRmwgBt/b.jpg" alt="bannerImage" />

                    <div className="absolute top-0 md:top-30 lg:top-30 xl:top-30 mx-10 my-10 md:my-20 lg:my-20 xl:my-20p-5">
                        <h1 className="text-3xl md:text-6xl lg:text-6xl xl:text-6xl text-white font-semibold my-2 md:my-4 lg:my-4 xl:my-4 ">Become a Host</h1>
                        <h3 className="hidden md:block lg:block xl:block  text-lg text-white">Earn extra income and get opportunities</h3>

                        <button className="tranistion duration-700 ease-in-out bg-white text-gray-900 px-5 py-3 rounded-lg my-4 hover:bg-gray-900 hover:text-white white  font-bold hover:font-bold cursor-pointer">Learn more</button>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Home
