import { SVGProps } from "react-html-props";

const LightningBolt = (props: SVGProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Icon"
        d="M8.6665 6.66667V2L2.6665 9.33333H7.33317L7.33317 14L13.3332 6.66667L8.6665 6.66667Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LightningBolt;
