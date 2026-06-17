import { SVGProps } from "react-html-props";

const StarFull = (props: SVGProps) => {
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
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarFull;
