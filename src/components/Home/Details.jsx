import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
    const [details, setDetails] = useState();
    const {id} = useParams();
    const donations = useLoaderData();

    useEffect(() => {
        const findDonation = donations.find( donation => donation.id === id );
        setDetails(findDonation);
    },[donations, id])
    
    const {picture, text_button_bg, title, description, price} = details || {};


    const handleAddToDonation = () => {
        const addedDonation = [];
        const donationsData = JSON.parse(localStorage.getItem('donation'));
        if(!donationsData){
            addedDonation.push(details);
            localStorage.setItem('donation', JSON.stringify(addedDonation));
            Swal.fire(
                'Good job!',
                'You have donated successfully!',
                'success'
              )
        }
        else{
            const isExist = donationsData.find(data => data.id === id);
            if(!isExist){
                addedDonation.push(...donationsData, details);
                localStorage.setItem('donation', JSON.stringify(addedDonation));
                Swal.fire(
                    'Good job!',
                    'You have donated successfully!',
                    'success'
                  )
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You already donated for this!'
                  })
            }
        }
    }

    return (
        <div className="w-max mx-auto my-14">
            <div className="relative flex justify-center w-max mx-auto mb-10 border">
                <img className=" w-[310px] md:w-[700px] lg:w-[950px] xl:w-[1200px] h-[200px] md:h-[300px] lg:h-[450px] xl:h-[600px]" src={picture} alt="" />
                <div className="absolute bottom-0 left-0 bg-opacity-50 bg-black py-1.5 md:py-3 lg:py-6 w-full">
                  <button onClick={handleAddToDonation} className="text-white rounded-lg w-max py-1.5 lg:py-2.5 px-2 ml-3 mb-3 lg:px-3 font-bold text-xs md:text-base" style={{background: `${text_button_bg}`}}>Donate ${price}</button>
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