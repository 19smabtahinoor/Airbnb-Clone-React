import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function SearchResult({ image, location, category, title, description, price, totalPrice }) {
    return (
<>
            {/* search item  */}
            <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 bg-white p-5 box-border shadow-xl rounded-xl cursor-pointer">

                <div className="overflow-hidden rounded-xl   cursor-pointer searchiMageWrapper">
                    <img className="cursor-pointer transform rounded-lg w-full object-fill hover:scale-125 transition duration-700 ease-in-out searchiMage" src={image} alt="images"/>
                </div>

                <div className="px-4">
                    <div className="pt-3">
                        <LocationOnIcon className="text-gray-400 w-5 h-5" />
                        <span className="text-sm">{location}</span>
                        <h2 className="font-semibold text-2xl mb-1">{title}</h2>
                        <h3 className="text-sm text-gray-500">{description}</h3>
                        <div className="flex flex-row items-end justify-start md:h-20 lg:h-20 xl:h-20">
                            <span className="my-5 bg-red-500 text-white text-sm p-2 rounded-full shadow-xl">{category}</span>
                        </div>

                    </div>
                </div>
                {/* flex flex-row items-center space-x-2 */}

                <div className="pr-5">
                    <div className="flex flex-row justify-end items-end">
                        <FavoriteBorderIcon />
                    </div>
                    <div className="flex flex-col justify-end items-end md:h-18 lg:h-18 xl:h-18">
                        <h3 className="text-xl font-semibold">{price}</h3>
                        <h4 className="hidden md:block lg:block xl:block texl-md font-normal hover:underline cursor-pointer">{totalPrice}</h4>
                    </div>

                </div>

            </div>

            </>
    );
}

export default SearchResult;



