import { SVGProps } from "react-html-props";

const Cube = (props: SVGProps) => {
  return (
    <svg
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Icon"
        d="M30.5 10.5L18.5 4.5L6.5 10.5M30.5 10.5L18.5 16.5M30.5 10.5V25.5L18.5 31.5M18.5 16.5L6.5 10.5M18.5 16.5V31.5M6.5 10.5V25.5L18.5 31.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cube;
