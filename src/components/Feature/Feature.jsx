import PropTypes from "prop-types";

import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <AiFillCheckCircle className="text-gray-300 mr-3"></AiFillCheckCircle>{" "}
        {feature}
      </p>
    </div>
  );
};

Feature.PropTypes = {
  feature: PropTypes.object,
};

export default Feature;
