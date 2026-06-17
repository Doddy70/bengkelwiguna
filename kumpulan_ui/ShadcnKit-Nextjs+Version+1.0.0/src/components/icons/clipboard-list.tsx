import { SVGProps } from "react-html-props";

const ClipboardList = (props: SVGProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Icon"
        d="M12 6.66667H9.33329C7.86053 6.66667 6.66663 7.86057 6.66663 9.33333V25.3333C6.66663 26.8061 7.86053 28 9.33329 28H22.6666C24.1394 28 25.3333 26.8061 25.3333 25.3333V9.33333C25.3333 7.86057 24.1394 6.66667 22.6666 6.66667H20M12 6.66667C12 8.13943 13.1939 9.33333 14.6666 9.33333H17.3333C18.8061 9.33333 20 8.13943 20 6.66667M12 6.66667C12 5.19391 13.1939 4 14.6666 4H17.3333C18.8061 4 20 5.19391 20 6.66667M16 16H20M16 21.3333H20M12 16H12.0133M12 21.3333H12.0133"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ClipboardList;
