import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-stone-600 p-10 text-white rounded-lg">
      <h2>
        <span className="text-7xl"> {price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl my-5">{name}</h4>

      <div>
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
    </div>
  );
};

PriceOption.PropTypes = {
  option: PropTypes.object,
};

export default PriceOption;
