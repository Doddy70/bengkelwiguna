import { SVGProps } from "react-html-props";

const Facebook = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_1417_4500)">
        <path
          d="M16 8.50024C16 4.08196 12.4183 0.500244 8 0.500244C3.58172 0.500244 0 4.08196 0 8.50024C0 12.4932 2.92547 15.8029 6.75 16.4031V10.8127H4.71875V8.50024H6.75V6.73774C6.75 4.73274 7.94438 3.62524 9.77172 3.62524C10.6467 3.62524 11.5625 3.78149 11.5625 3.78149V5.75024H10.5538C9.56 5.75024 9.25 6.36696 9.25 7.00024V8.50024H11.4688L11.1141 10.8127H9.25V16.4031C13.0745 15.8029 16 12.4932 16 8.50024Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1417_4500">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.500244)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Facebook;
