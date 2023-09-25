import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import DonationCard from "./DonationCard";

const Home = () => {
  const donationData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-20">
        {donationData.map((data) => (
          <DonationCard key={data.id} data={data}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
