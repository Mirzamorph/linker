import Link from "next/link";
import { memo } from "react";

const Logo = memo(() => {
  return (
    <Link href="/">
      <a className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </a>
    </Link>
  );
});

export default Logo;
