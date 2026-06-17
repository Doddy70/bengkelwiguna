import { SVGProps } from "react-html-props";

const DatabaseOutline = (props: SVGProps) => {
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
        d="M6.5 10.5V25.5C6.5 28.8137 11.8726 31.5 18.5 31.5C25.1274 31.5 30.5 28.8137 30.5 25.5V10.5M6.5 10.5C6.5 13.8137 11.8726 16.5 18.5 16.5C25.1274 16.5 30.5 13.8137 30.5 10.5M6.5 10.5C6.5 7.18629 11.8726 4.5 18.5 4.5C25.1274 4.5 30.5 7.18629 30.5 10.5M30.5 18C30.5 21.3137 25.1274 24 18.5 24C11.8726 24 6.5 21.3137 6.5 18"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
};

export default DatabaseOutline;
