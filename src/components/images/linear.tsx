import * as React from "react";
const Linear = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <rect width={44} height={44} fill="url(#a)" rx={22} />
    <path
      fill="#fff"
      d="M30.423 15.997a1 1 0 0 0 1.82 0l.602-1.322a1 1 0 0 1 .496-.497l1.323-.6c.781-.356.781-1.466 0-1.822l-1.323-.6a1 1 0 0 1-.496-.497l-.601-1.323a1 1 0 0 0-1.821 0l-.601 1.323a1 1 0 0 1-.497.496l-1.322.601c-.782.356-.782 1.466 0 1.821l1.322.601a1 1 0 0 1 .497.497l.6 1.322ZM32.244 28.003c-.356-.782-1.466-.782-1.821 0l-.601 1.322a1 1 0 0 1-.497.497l-1.322.601c-.782.355-.782 1.466 0 1.82l1.322.602a1 1 0 0 1 .497.496l.6 1.323a1 1 0 0 0 1.822 0l.6-1.323a1 1 0 0 1 .497-.496l1.323-.601c.781-.355.781-1.466 0-1.821l-1.323-.601a1 1 0 0 1-.496-.497l-.601-1.322ZM21.675 18.822a1 1 0 0 1-.497-.497l-2.268-4.989c-.355-.781-1.465-.781-1.82 0l-2.268 4.99a1 1 0 0 1-.497.496L9.336 21.09c-.782.355-.782 1.465 0 1.82l4.99 2.268a1 1 0 0 1 .496.497l2.268 4.989c.355.781 1.465.781 1.82 0l2.268-4.99a1 1 0 0 1 .497-.496l4.989-2.268c.781-.355.781-1.465 0-1.82l-4.99-2.268Zm-2.013 4.343a1 1 0 0 0-.497.497l-.255.56c-.355.782-1.465.782-1.82 0l-.255-.56a1 1 0 0 0-.497-.497l-.56-.255c-.782-.355-.782-1.465 0-1.82l.56-.255a1 1 0 0 0 .497-.497l.254-.56c.356-.782 1.466-.782 1.821 0l.255.56a1 1 0 0 0 .497.497l.56.255c.782.355.782 1.465 0 1.82l-.56.255Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={-0.604}
        x2={48.898}
        y1={23.594}
        y2={23.538}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#50BCD9" />
        <stop offset={1} stopColor="#F14DFF" />
      </linearGradient>
    </defs>
  </svg>
);
export default Linear;