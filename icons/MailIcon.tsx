import React from "react";

type MailIconProps = {
  color?: string;
};

const MailIcon = ({ color = "white" }: MailIconProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          // fill="white"
          fill={color}
          d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116l8-5.231L19.692 6L12 11L4.308 6L4 6.885z"
        />
      </svg>
    </>
  );
};

export default MailIcon;
