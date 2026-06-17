import { SVGProps } from "react-html-props";

const Dashboard = (props: SVGProps) => {
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
        d="M6.5 5.5C6.5 6.05198 6.05198 6.5 5.5 6.5H2.5C1.94777 6.5 1.5 6.05205 1.5 5.5V2.5C1.5 1.9477 1.9477 1.5 2.5 1.5H5.5C6.05205 1.5 6.5 1.94777 6.5 2.5V5.5ZM14.5 13.5C14.5 14.052 14.052 14.5 13.5 14.5H10.5C9.94802 14.5 9.5 14.052 9.5 13.5V10.5C9.5 9.94802 9.94802 9.5 10.5 9.5H13.5C14.052 9.5 14.5 9.94802 14.5 10.5V13.5Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        opacity="0.4"
        d="M15 5.75C15 6.44063 14.4406 7 13.75 7H10.25C9.55937 7 9 6.44063 9 5.75V2.25C9 1.55969 9.55937 1 10.25 1H13.75C14.4406 1 15 1.55969 15 2.25V5.75ZM7 13.75C7 14.4406 6.44063 15 5.75 15H2.25C1.55969 15 1 14.4406 1 13.75V10.25C1 9.55937 1.55969 9 2.25 9H5.75C6.44063 9 7 9.55937 7 10.25V13.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Dashboard;
