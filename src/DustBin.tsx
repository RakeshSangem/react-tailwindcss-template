import type { SVGProps } from "react";

export function DustBin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1C5.44772 1 5 1.44772 5 2C5 2.55228 5.44772 3 6 3H12C12.5523 3 13 2.55228 13 2C13 1.44772 12.5523 1 12 1H6ZM2 4C1.44772 4 1 4.44772 1 5C1 5.55228 1.44772 6 2 6H3V14C3 15.6569 4.34315 17 6 17H12C13.6569 17 15 15.6569 15 14V6H16C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H2ZM5 14V6H13V14C13 14.5523 12.5523 15 12 15H6C5.44772 15 5 14.5523 5 14Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
