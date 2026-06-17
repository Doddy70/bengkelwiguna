import { SVGProps } from "react-html-props";

const DocumentTextOutline = (props: SVGProps) => {
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
        d="M14 18H23M14 24H23M26 31.5H11C9.34315 31.5 8 30.1569 8 28.5V7.5C8 5.84315 9.34315 4.5 11 4.5H19.3787C19.7765 4.5 20.158 4.65804 20.4393 4.93934L28.5607 13.0607C28.842 13.342 29 13.7235 29 14.1213V28.5C29 30.1569 27.6569 31.5 26 31.5Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DocumentTextOutline;
