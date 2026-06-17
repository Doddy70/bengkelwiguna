import { SVGProps } from "react-html-props";

const CollectionOutline = (props: SVGProps) => {
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
        d="M29 16.5H8M29 16.5C30.6569 16.5 32 17.8431 32 19.5V28.5C32 30.1569 30.6569 31.5 29 31.5H8C6.34315 31.5 5 30.1569 5 28.5V19.5C5 17.8431 6.34315 16.5 8 16.5M29 16.5V13.5C29 11.8431 27.6569 10.5 26 10.5M8 16.5V13.5C8 11.8431 9.34315 10.5 11 10.5M11 10.5V7.5C11 5.84315 12.3431 4.5 14 4.5H23C24.6569 4.5 26 5.84315 26 7.5V10.5M11 10.5H26"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CollectionOutline;
