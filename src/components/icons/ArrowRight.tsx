const ArrowRight = ({ color = 'white' }) => {
  return (
    <svg
      width="21"
      height="10"
      viewBox="0 0 21 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1858 3.16784H0.542234C0.242785 3.16784 0 3.41063 0 3.71007V6.2405C0 6.53995 0.242785 6.78273 0.542234 6.78273H14.1858V8.86396C14.1858 9.83013 15.3539 10.314 16.0371 9.63082L19.9258 5.74214C20.3493 5.31861 20.3493 4.63196 19.9258 4.20848L16.0371 0.319802C15.3539 -0.363368 14.1858 0.120486 14.1858 1.08666V3.16784Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowRight;