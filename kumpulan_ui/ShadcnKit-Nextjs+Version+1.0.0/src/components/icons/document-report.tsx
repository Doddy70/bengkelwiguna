import { SVGProps } from "react-html-props";

const DocumentReport = (props: SVGProps) => {
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
        id="Icon"
        d="M13.5 25.5V22.5M18 25.5V19.5M22.5 25.5V16.5M25.5 31.5H10.5C8.84315 31.5 7.5 30.1569 7.5 28.5V7.5C7.5 5.84315 8.84315 4.5 10.5 4.5H18.8787C19.2765 4.5 19.658 4.65804 19.9393 4.93934L28.0607 13.0607C28.342 13.342 28.5 13.7235 28.5 14.1213V28.5C28.5 30.1569 27.1569 31.5 25.5 31.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DocumentReport;
