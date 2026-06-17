import { SVGProps } from "react-html-props";

const StarHalf = (props: SVGProps) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 2.99976L22.635 12.3898L33 13.9048L25.5 21.2098L27.27 31.5298L18 26.6548L8.73 31.5298L10.5 21.2098L3 13.9048L13.365 12.3898L18 2.99976Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 26.6998L8.7 31.4998L10.5 21.1498L3 13.9498L13.5 12.4498L18 2.99976"
        fill="currentColor"
      />
    </svg>
  );
};

export default StarHalf;
