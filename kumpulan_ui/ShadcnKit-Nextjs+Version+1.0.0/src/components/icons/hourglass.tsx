import { SVGProps } from "react-html-props";

const Hourglass = (props: SVGProps) => {
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
        d="M3.33331 14.6671H12.6666M3.33331 1.33374H12.6666M11.3333 14.6671V11.8857C11.3332 11.5321 11.1927 11.1931 10.9426 10.9431L7.99998 8.00041M7.99998 8.00041L5.05731 10.9431C4.80725 11.1931 4.66672 11.5321 4.66665 11.8857V14.6671M7.99998 8.00041L5.05731 5.05774C4.80725 4.80775 4.66672 4.46867 4.66665 4.11507V1.33374M7.99998 8.00041L10.9426 5.05774C11.1927 4.80775 11.3332 4.46867 11.3333 4.11507V1.33374"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Hourglass;
