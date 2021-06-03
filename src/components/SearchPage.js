import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import SearchData from '../API/SearchData.json';
import SearchResult from './SearchResult';

function SearchPage() {
    const[data,setData] = useState(SearchData)

    const filteringPlace = (location) => {
        const filterPlace = data.filter( (item) => {
            return(
                item.location === location
            )
        })

        setData(filterPlace)
    }

    return (
        <div className="w-full h-screen max-w-screen-lg mx-auto mt-24 ">
            <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3  xl:grid-cols-3 ">
                <div className="m-5 col-span-2">
                    <span className="text-sm mt-5">300+ stays · Jun 19 - 25 · 2 guests</span>
                    <h1 className="font-bold text-3xl mt-2">Stays in selected map area</h1>

                    <div className="flex flex-row space-x-3 my-5">
                        <Button variant="outlined" className="SearchPageButton" onClick={()=>{setData(SearchData)}}>All</Button>
                        <Button variant="outlined" className="SearchPageButton" onClick={()=>{filteringPlace('Dhaka')}}>Dhaka</Button>
                        <Button variant="outlined" className="SearchPageButton" onClick={()=>{filteringPlace('Kolkata')}}>Kolkata</Button>
                        <Button variant="outlined" className="SearchPageButton" onClick={()=>{filteringPlace('London')}}>London</Button>
                        <Button variant="outlined" className="SearchPageButton" onClick={()=>{filteringPlace('Dorset')}}>Dorset</Button>
                    </div>


                    {/* Search result data  */}

                    <div className="col-span-1">
                        {data.map((items) => {
                            return (
                                <SearchResult
                                    key={items.id}
                                    image={items.image}
                                    location={items.location}
                                    category={items.category}
                                    title={items.title}
                                    description={items.description}
                                    price={items.price}
                                    totalPrice={items.totalPrice}
                                />
                            )
                        })}
                    </div>
                </div>

                {/* map  */}
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977760056!2d90.34928563247215!3d23.780777744825183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1622704462590!5m2!1sen!2sbd" width="500" style={{ border: '0px', height:'100%' }} allowFullScreen="" title="map"></iframe>
                </div>
            </div>

        </div>
    );
}

export default SearchPage;