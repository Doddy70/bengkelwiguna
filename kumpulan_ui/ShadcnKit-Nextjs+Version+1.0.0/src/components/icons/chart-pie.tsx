import { SVGProps } from "react-html-props";

const ChartPie = (props: SVGProps) => {
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
        d="M17 4.58203C10.2501 5.3282 5 11.0508 5 17.9996C5 25.4555 11.0442 31.4996 18.5 31.4996C25.4488 31.4996 31.1714 26.2496 31.9176 19.4996H17V4.58203Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.2317 13.4996H23V5.26809C26.8358 6.62384 29.8759 9.66391 31.2317 13.4996Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChartPie;
