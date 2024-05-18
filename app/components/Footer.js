import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className=" p-10  mt-20">
        <div className="flex flex-col items-center gap-4  hover:rotate-1 rounded-lg bg-indigo-600 p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl text-white sm:text-xl">
            
            Get your Professional website now.
          </strong>

          <a
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-indigo-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
            href="#"
          >
            <span className="text-sm font-medium"> Let's Get Started </span>

            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block rounded-full bg-indigo-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
              href="#MainContent"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <Link href="/" className="text-blue-600 text-3xl font-bold">
                  <img
                    src="/Mitchtop.png"
                    width={50}
                    height={50}
                    className="  rounded-full object-cover"
                  ></img>
                </Link>
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed  lg:text-left">
              I live in Nairobi, where I develop beautiful functional websites</p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <Link
                  className=" transition hover:text-gray-700/75"
                  href="/about"
                >
                  
                  About
                </Link>
              </li>

              <li>
                <Link
                  className=" transition hover:text-gray-700/75"
                  href="/services"
                >
                  {" "}
                  Services{" "}
                </Link>
              </li>

              <li>
                <Link
                  className=" transition hover:text-gray-700/75"
                  href="/projects"
                >
                  {" "}
                  Projects{" "}
                </Link>
              </li>

              <li>
                <Link
                  className=" transition hover:text-gray-700/75"
                  href="/blog"
                >
                  {" "}
                  Blog{" "}
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
