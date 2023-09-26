import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCarts = ({ item }) => {
  console.log(item);
  const { id, picture, category, text_button_bg, category_bg, title, price, card_bg } = item || {};
  return (
    <div className="flex flex-col items-center bg-white border rounded-lg shadow md:flex-row w-max md:w-[500px] xl:w-[550px] mx-auto" style={{background: `${card_bg}`}}>
      <img
        className="object-cover w-[310px] rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={picture}
        alt=""
      ></img>
      <div className="flex flex-col justify-between items-start p-4 leading-normal lg:pr-20">
        <button className="py-1 px-3 font-bold rounded-md" style={{color: `${text_button_bg}` , background: `${category_bg}`}}>{category}</button>
        <h5 className="mb-2 my-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-bold" style={{color: `${text_button_bg}`}}>${price}</p>
        <div>
            <Link to={`/donation-details/${id}`}><button className="text-white py-2 px-3 rounded-lg mt-6" style={{background: `${text_button_bg}`}}>View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

DonationCarts.propTypes = {
  item: PropTypes.object,
};

export default DonationCarts;
