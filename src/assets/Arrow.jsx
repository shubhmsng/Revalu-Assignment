import PropTypes from "prop-types";

const Arrow = ({ rotate }) => (
  <svg
    style={{ rotate }}
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="#2B2B2B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Arrow.propTypes = {
  rotate: PropTypes.string,
};

export default Arrow;
