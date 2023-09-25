import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ data }) => {
  const { id, picture, title, category, category_bg, card_bg, text_button_bg } =
    data || {};
  return (
    <Link to={`/donation-details/${id}`}>
      <div className="p-1 rounded-xl h-[410px]" style={{ background: `${card_bg}` }}>
        <div className="">
          <img className="w-full rounded-lg h-72" src={picture} alt="" />
        </div>
        <div className="mt-3 ml-3">
          <button
            className="py-1 px-2 rounded-lg font-semibold"
            style={{ color: `${text_button_bg}`, background: `${category_bg}` }}
          >
            {category}
          </button>
          <h2
            className="my-3 text-lg font-bold"
            style={{ color: `${text_button_bg}` }}
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

DonationCard.propTypes = {
  data: PropTypes.object,
};

export default DonationCard;
