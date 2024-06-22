// import React from "react";
// import Work from "../components/Work";
import { personalDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Who We Are? – Know Us Better
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">
          {personalDetails.about}
        </p>
      </section>
      <section className=" mt-8">
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                data-darkreader-inline-stroke=""
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                ></path>
              </svg>
            </div>
            <div className="mt-5">
              <dt className="text-lg sm:text-2xl leading-6 font-bold mb-3 sm:mb-5">
                Client-centric Approach
              </dt>
              <dd className="mt-2 text-base">
                Client, customer and business are the center and we use
                innovation to convert their vision into a technical reality.
                Being a global Software development company, we make sure that
                your ideas get justified with an application that suits you. Our
                teams deal every project with zero communication gap to develop
                client-centric web app that push their business to next-level of
                success.
              </dd>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                data-darkreader-inline-stroke=""
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                ></path>
              </svg>
            </div>
            <div className="mt-5">
              <dt className="text-lg sm:text-2xl leading-6 font-bold mb-3 sm:mb-5">
                Effective Collaboration
              </dt>
              <dd className="mt-2 text-base">
                Businesses run on collaboration, communication and creative
                aspects of executing a certain idea. Our team of top app
                developers in India are best at offering technical consultation,
                feasibility study, technical analysis, budget definition,
                quality checks, final deployment and maintenance of web apps. We
                do all this with absolute precision and offer technical
                solutions with complete finesse.
              </dd>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                data-darkreader-inline-stroke=""
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="mt-5">
              <dt className="text-lg sm:text-2xl leading-6 font-bold mb-3 sm:mb-5">
                Execution before Deadline
              </dt>
              <dd className="mt-2 text-base">
                With decades of experience to our credit, we design, develop and
                deploy software solutions that are matchless in technical
                ingenuity. Moreover, we make sure that everything is done within
                pre-defined deadlines to finish the entire project on dot time.
                By clubbing agile and modular aspects, we ensure every phase of
                project development is completed as per pre-planned timeline.
              </dd>
            </div>
          </div>
        </dl>
      </section>

      {/* <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section> */}
    </main>
  );
}

export default About;
