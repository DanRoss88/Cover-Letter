import React from "react";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const logo = document.getElementById("logo");
    logo.classList.add("animate-fill");
  }, []);

  
  return (
    <header className="header">
      <h1>
        <svg
          id="logo"
          width="347"
          height="57"
          viewBox="0 0 347 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block mt-5 mb-5 lg:mt-20"
        >
          <path
            d="M47.52 44V41.48C43.68 41.18 42.78 40.7 42.78 37.28V8.72001C42.78 5.24001 43.68 4.82 47.52 4.52V2H27.42V4.52C31.26 4.82 32.16 5.24001 32.16 8.72001V20.06H16.56V8.72001C16.56 5.24001 17.46 4.82 21.3 4.52V2H1.20001V4.52C5.04001 4.82 5.94001 5.24001 5.94001 8.72001V37.28C5.94001 40.7 5.04001 41.18 1.20001 41.48V44H21.3V41.48C17.46 41.18 16.56 40.7 16.56 37.28V24.14H32.16V37.28C32.16 40.7 31.26 41.18 27.42 41.48V44H47.52Z"
            stroke="black"
          ></path>
          <path
            d="M57.9914 1.7C54.5114 1.7 52.6514 4.22001 52.6514 6.74001C52.6514 9.20001 54.5114 11.66 57.9914 11.66C61.3514 11.66 63.3314 9.20001 63.3314 6.74001C63.3314 4.22001 61.3514 1.7 57.9914 1.7ZM65.7314 44V41.48C62.9714 41.18 62.3714 40.64 62.3714 38.84V15.44H59.0114L49.8314 20.48V22.82H51.6914C52.7714 22.82 53.1914 23.36 53.1914 24.62V38.84C53.1914 40.64 52.5314 41.18 49.8314 41.48V44H65.7314Z"
            stroke="black"
          ></path>
          <path
            d="M117.215 2H114.335L113.495 3.80001C111.095 2.18001 108.275 1.10001 103.775 1.10001C91.2952 1.10001 82.8952 9.74001 82.8952 23C82.8952 36.26 91.2952 44.9 103.775 44.9C113.315 44.9 118.715 39.92 121.475 32.18L117.515 30.86C115.955 36.08 111.575 41 104.855 41C96.8152 41 94.2952 33.44 94.2952 23C94.2952 12.56 96.8152 4.94001 104.855 4.94001C110.315 4.94001 114.935 9.14001 117.695 14.84L120.155 14.12L117.215 2Z"
            stroke="black"
          ></path>
          <path
            d="M139.795 15.44C130.255 15.44 124.195 21.62 124.195 30.14C124.195 38.72 130.255 44.9 139.795 44.9C149.335 44.9 155.395 38.72 155.395 30.14C155.395 21.62 149.335 15.44 139.795 15.44ZM139.795 41.3C135.175 41.3 133.675 37.22 133.675 30.14C133.675 23.06 135.175 19.04 139.795 19.04C144.415 19.04 145.915 23.06 145.915 30.14C145.915 37.22 144.415 41.3 139.795 41.3Z"
            stroke="black"
          ></path>
          <path
            d="M192.434 44V41.48C189.734 41.18 189.074 40.64 189.074 38.84V24.8C189.074 23.96 189.014 23.18 188.894 22.46C190.634 21.26 192.434 20.54 194.474 20.54C196.694 20.54 198.314 21.68 198.314 24.56V38.84C198.314 40.64 197.714 41.18 195.014 41.48V44H210.914V41.48C208.154 41.18 207.554 40.64 207.554 38.84V24.8C207.554 17 202.514 15.44 198.074 15.44C194.714 15.44 190.514 17.12 187.814 19.22C186.074 16.22 182.654 15.44 179.594 15.44C176.534 15.44 172.994 16.82 170.594 18.38V15.44H167.234L158.054 20.48V22.82H159.914C160.994 22.82 161.414 23.36 161.414 24.62V38.84C161.414 40.64 160.754 41.18 158.054 41.48V44H173.954V41.48C171.194 41.18 170.594 40.64 170.594 38.84V22.34C172.274 21.2 174.014 20.54 175.994 20.54C178.214 20.54 179.894 21.68 179.894 24.56V38.84C179.894 40.64 179.294 41.18 176.534 41.48V44H192.434Z"
            stroke="black"
          ></path>
          <path
            d="M228.732 55.04V52.52C225.972 52.22 225.372 51.68 225.372 49.94V43.04C227.112 44.24 229.272 44.9 231.972 44.9C240.672 44.9 245.892 39.14 245.892 30.14C245.892 21.2 240.672 15.44 233.172 15.44C229.932 15.44 227.352 16.46 225.372 18.2V15.44H222.012L212.772 20.48V22.82H214.692C215.772 22.82 216.192 23.36 216.192 24.62V49.94C216.192 51.68 215.532 52.22 212.832 52.52V55.04H228.732ZM225.372 22.22C226.452 20.54 228.072 19.76 230.172 19.76C234.612 19.76 236.412 23.06 236.412 30.14C236.412 37.22 234.612 40.64 230.172 40.64C228.072 40.64 226.452 39.8 225.372 38.18V22.22Z"
            stroke="black"
          ></path>
          <path
            d="M266.643 41C267.303 43.82 269.763 44.72 272.883 44.72C275.583 44.72 277.383 44.24 279.063 43.22V40.16C278.343 40.52 277.743 40.58 277.323 40.58C276.303 40.58 275.703 39.92 275.703 38.3V24.44C275.703 17.72 270.363 15.44 264.243 15.44C256.383 15.44 250.743 18.44 250.743 22.88C250.743 25.4 252.183 26.6 254.163 26.6C256.323 26.6 258.003 25.52 258.843 23C259.743 20.18 261.003 18.98 263.283 18.98C265.923 18.98 266.463 20.3 266.463 24.02V26.84C257.883 28.4 248.883 30.8 248.883 37.94C248.883 42.02 252.063 44.78 256.983 44.78C260.703 44.78 264.123 42.92 266.643 41ZM266.463 37.52C265.023 38.54 263.463 39.26 261.663 39.26C259.863 39.26 258.363 38.24 258.363 36.02C258.363 32.72 261.603 31.28 266.463 30.32V37.52Z"
            stroke="black"
          ></path>
          <path
            d="M315.715 44V41.48C313.015 41.18 312.355 40.64 312.355 38.84V24.8C312.355 17 307.315 15.44 302.875 15.44C299.815 15.44 296.275 16.82 293.875 18.38V15.44H290.515L281.335 20.48V22.82H283.195C284.275 22.82 284.695 23.36 284.695 24.62V38.84C284.695 40.64 284.035 41.18 281.335 41.48V44H297.235V41.48C294.475 41.18 293.875 40.64 293.875 38.84V22.34C295.555 21.2 297.295 20.54 299.275 20.54C301.495 20.54 303.175 21.68 303.175 24.56V38.84C303.175 40.64 302.575 41.18 299.815 41.48V44H315.715Z"
            stroke="black"
          ></path>
          <path
            d="M341.749 23.06C342.889 20.3 343.669 19.16 345.769 18.86V16.34H334.669V18.86C337.429 19.16 338.569 19.94 337.369 23.06L333.169 33.26L329.149 23.06C327.949 19.88 328.609 19.16 331.669 18.86V16.34H315.109V18.86C317.449 19.16 317.989 20.48 319.009 23.06L328.189 45.5L327.589 47C326.989 48.56 326.029 49.58 324.889 49.58C322.789 49.58 322.429 46.76 319.429 46.76C317.149 46.76 315.409 48.44 315.409 50.78C315.409 53.9 318.349 55.94 321.889 55.94C326.089 55.94 329.329 53.48 331.189 48.98L341.749 23.06Z"
            stroke="black"
          ></path>
        </svg>
      </h1>
      <p>
        I wanted to demonstrate how much I'd love to work at the company in my
        own way. This is my "cover letter" but on a webpage so it's not boring.
        Hope you enjoy!
      </p>
    </header>
  );
}
