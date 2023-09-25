import { useEffect, useState } from "react";
import DonationCarts from "./DonationCarts";
import { Link } from "react-router-dom";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noData, setNoData] = useState(false);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const donationsData = JSON.parse(localStorage.getItem("donation"));
    if (donationsData) {
      setDonation(donationsData);
    } else {
      setNoData("No Data Found");
    }
  }, []);
  return (
    <div>
      {noData ? (
        <p className="h-[80vh] flex justify-center items-center font-bold font-serif">
          {noData}
        </p>
      ) : (
        <div className="mb-20">
          <div className="w-max mx-auto grid grid-cols-1 xl:grid-cols-2 md:mt-36 gap-5">
            {donation.slice(0, dataLength).map((item) => (
              <DonationCarts key={item.id} item={item}></DonationCarts>
            ))}
          </div>
          <div className={ dataLength === donation?.length ? 'hidden' : 'flex justify-center my-5'}>
            <div className={donation.length < 5 && 'hidden'}>
              <Link><button onClick={() => setDataLength(donation.length)} className="btn bg-[#FF444A] text-white px-6 hover:bg-sky-500">See All</button></Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
