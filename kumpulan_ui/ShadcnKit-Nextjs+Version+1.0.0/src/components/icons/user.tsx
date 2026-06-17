import { SVGProps } from "react-html-props";

const User = (props: SVGProps) => {
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
        d="M13.3043 14.5H13.3035H2.94779C2.70073 14.5 2.5 14.2994 2.5 14.0519C2.5 11.7111 4.3984 9.81299 6.73895 9.81299H9.51177C11.8526 9.81299 13.7507 11.7111 13.7507 14.0519C13.7507 14.3015 13.5502 14.5004 13.3043 14.5Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        opacity="0.4"
        d="M11.6256 4.5002C11.6256 6.43325 10.0587 8.00041 8.12536 8.00041C6.19204 8.00041 4.62515 6.43352 4.62515 4.5002C4.62515 2.56689 6.19231 1 8.12536 1C10.0587 1 11.6256 2.56716 11.6256 4.5002Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default User;
