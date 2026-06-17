import { SVGProps } from "react-html-props";

const Lightbulb = (props: SVGProps) => {
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
        d="M6 12.0004H10M6.66667 14.6671H9.33333M10.06 9.33374C10.18 8.68041 10.4933 8.17374 11 7.66707C11.3219 7.37074 11.5774 7.00962 11.7498 6.60746C11.9221 6.2053 12.0074 5.77121 12 5.33374C12 4.27287 11.5786 3.25546 10.8284 2.50531C10.0783 1.75517 9.06087 1.33374 8 1.33374C6.93913 1.33374 5.92172 1.75517 5.17157 2.50531C4.42143 3.25546 4 4.27287 4 5.33374C4 6.00041 4.15333 6.82041 5 7.66707C5.4827 8.10845 5.812 8.69231 5.94 9.33374"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Lightbulb;
