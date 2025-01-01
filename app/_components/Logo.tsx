import React from "react";

function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      className={className}
    >
      <circle cx='50' cy='50' r='45' />
      <path
        d='M35 35 L25 50 L35 65'
        fill='none'
        stroke='white'
        stroke-width='3'
        stroke-linecap='round'
      />
      <path
        d='M65 35 L75 50 L65 65'
        fill='none'
        stroke='white'
        stroke-width='3'
        stroke-linecap='round'
      />
      <path
        d='M38 65 L50 35 L62 65'
        fill='none'
        stroke='white'
        stroke-width='3'
        stroke-linecap='round'
      />
      <path
        d='M44 53 L56 53'
        stroke='white'
        stroke-width='3'
        stroke-linecap='round'
      />
      <ellipse
        cx='50'
        cy='50'
        rx='30'
        ry='10'
        fill='none'
        stroke='white'
        stroke-width='1'
        transform='rotate(60 50 50)'
      />
      <ellipse
        cx='50'
        cy='50'
        rx='30'
        ry='10'
        fill='none'
        stroke='white'
        stroke-width='1'
        transform='rotate(-60 50 50)'
      />
    </svg>
  );
}

export default Logo;
