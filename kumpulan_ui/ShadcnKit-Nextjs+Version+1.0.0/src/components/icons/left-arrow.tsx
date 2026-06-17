import { SVGProps } from "react-html-props";

const LeftArrow = (props: SVGProps) => {
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
        d="M5.20327 7.44335C4.93224 7.74991 4.93224 8.24561 5.20327 8.5489L9.81643 13.7701C10.0875 14.0766 10.5257 14.0766 10.7938 13.7701C11.062 13.4635 11.0649 12.9678 10.7938 12.6645L6.67083 7.99776L10.7967 3.33424C11.0678 3.02769 11.0678 2.53199 10.7967 2.22869C10.5257 1.9254 10.0875 1.92214 9.81932 2.22869L5.20327 7.44335Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LeftArrow;
