import React from "react";
import Image from "next/image";

const Testy = () => {
  return (
    <div className="  min-h-screen w-full flex flex-col  p-5 mt-10 items-center justify-center  overflow-hidden ">
      <h1 className=" text-3xl md:text-5xl font-bold text-center">
        
        My services
      </h1>
      <p className=" p-5  text-center">
        Comprehensive Web solutions to enhance productivity, streamline
        operations, and safeguard your technology infrastructure.
      </p>
      <div className="carousel mt-30 gap-2 rounded-box mt-20 ">
        <div className="carousel-item float-start max-w-96 ">
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            
          <div className="p-4 sm:p-6">
          <Image
           src='/api.svg'
           width={50}
           height={50}
           ></Image>
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  {" "}
                  Front-End Developer
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi
              </p>

              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        </div>
        <div className="carousel-item max-w-96">
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            
        <div className="p-4 sm:p-6">
           <Image
           src='/front.svg'
           width={50}
           height={50}
           ></Image>

              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  {" "}
                  Front-End Developer
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi
              </p>

              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        
        </div>
        <div className="carousel-item max-w-96">
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            
        <div className="p-4 sm:p-6">
        <Image
           src='/database.svg'
           width={50}
           height={50}
           ></Image>

              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  {" "}
                  Front-End Developer
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi
              </p>

              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        
        </div>
        <div className="carousel-item max-w-96">
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            
        <div className="p-4 sm:p-6">
        <Image
           src='/backend.svg'
           width={50}
           height={50}
           ></Image>

              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  {" "}
                  Front-End Developer
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi
              </p>

              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        
        </div>
        <div className="carousel-item max-w-96">

        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            
        <div className="p-4 sm:p-6">
        <Image
           src='/sms.svg'
           width={50}
           height={50}
           ></Image>

              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  {" "}
                  Front-End Developer
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi
              </p>

              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        
        </div>
     
       
      </div>
    </div>
  );
};

export default Testy;
