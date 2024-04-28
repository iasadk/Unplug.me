import * as React from "react";
const LockPadlock = (props) => (
    <svg
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        {...props}
    >
        <rect height={7.5} width={10.5} y={6.75} x={2.75} />
        <path d="m4.75 6.25s-1-4.5 3.25-4.5 3.25 4.5 3.25 4.5" />
    </svg>
);
export default LockPadlock;
