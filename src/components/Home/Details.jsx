import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const [details, setDetails] = useState();
    const {id} = useParams();
    const donations = useLoaderData();

    useEffect(() => {
        const findDonation = donations.find( donation => donation.id === id );
        setDetails(findDonation);
    },[donations, id])
    console.log(details);
    
    const {picture, text_button_bg, title, description, price} = details || {};
    return (
        <div className="w-max mx-auto my-14">
            <div className="relative flex justify-center w-max mx-auto mb-10 border">
                <img className=" w-[310px] md:w-[700px] lg:w-[950px] xl:w-[1200px] h-[200px] md:h-[300px] lg:h-[450px] xl:h-[600px]" src={picture} alt="" />
                <div className="absolute bottom-0 left-0 bg-opacity-50 bg-black py-1.5 md:py-3 lg:py-6 w-full">
                  <Link><button className="text-white rounded-lg w-max py-1.5 lg:py-2.5 px-2 ml-3 mb-3 lg:px-3 font-bold text-xs md:text-base" style={{background: `${text_button_bg}`}}>Donate ${price}</button></Link>
                </div>
            </div>
            <div className="px-3 space-y-5">
                <h1 className="text-lg md:text-3xl font-extrabold">{title}</h1>
                <p className="w-[300px] md:w-[700px] lg:w-[950px] xl:w-[1200px]">{description}</p>
            </div>
        </div>
    );
};

export default Details;