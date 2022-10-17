import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import TypeWriter from "typewriter-effect";

const Home: NextPage = () => {
  return (
    <div className="w-full mx-auto">
      <main>
        <section className="h-[85vh] sm:h-[95vh] md:h-[90vh] lg:h-screen mx-auto relative overflow-hidden bg-gradient-to-tl from-pink-300 via-orange-300 to-red-300">
        <Navbar />
          <div className="w-11/12 md:w-8/12 mx-auto h-[50vh] sm:h-[40vh] md:h-[90vh] lg:h-[75%] flex flex-col-reverse md:flex-row items-center justify-start md:justify-between gap-16 sm:gap-10 md:gap-8 lg:gap-10">
            <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-black mt-3 w-8/12 md:w-full mx-auto">
                The only <span className="text-red-500">digital marketing</span>{" "}
                team you will need to help your brand or product{" "}
                <span className="text-green-600">succeed</span>.
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <h1 className="text-black text-4xl sm:text-5xl md:text-6xl  text-center md:text-right font-light">
                <TypeWriter
                  options={{
                    strings: [
                      "Digital Marketing",
                      "Web Development",
                      "Paid Ads",
                      "Search Engine Optomization",
                      "Social Media Marketing",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 h-40 absolute -bottom-20 sm:-bottom-30 md:-bottom-40 -left-10 z-50 rotate-[8deg] w-[120vw] mx-auto "></div>
        </section>
        <section className="h-fit w-10/12 md:w-9/12 lg:w-8/12 mx-auto bg-white dark:bg-neutral-800 py-20 text-black dark:text-white">
          <div className="rounded-xl bg-slate-100 drop-shadow-xl hover:drop-shadow-2xl dark:drop-shadow-none dark:shadow-lg dark:shadow-gray-600 dark:hover:shadow-gray-600 dark:hover:shadow-xl dark:hover:drop-shadow-none border-2 border-gray-50 dark:border-gray-600 transition duration-500 flex flex-col-reverse lg:flex-row h-[450px] ">
            <div className="w-full lg:w-2/5 h-full lg:min-h-full p-5 px-10 bg-white dark:bg-neutral-800 rounded-b-lg lg:rounded-br-none lg:rounded-l-lg flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl">Purpose</h3>
              <p className="text-sm sm:text-lg md:text-xl text-slate-500 dark:text-slate-200 font-light leading-relaxed mt-3">
                At Digital Initiative we want to take the necessary steps to
                help you <span className="text-purple-400">succeed</span>. As your partner, we will work tirelesly to
                help improve your digital pressence in a variety of ways that
                will lead to an <span className="text-blue-400">increase</span> in your conversion rates.
              </p>
            </div>
            <div className="w-full lg:w-3/5 min-h-[200px] lg:min-h-full relative rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg overflow-hidden">
              <img
                src="/trend.png"
                className="absolute top-[-9999px] bottom-[-9999px] left-[-9999px] right-[-9999px] m-auto min-h-full min-w-full rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg"
              ></img>
            </div>
          </div>
        </section>
        <section className="h-fit w-10/12 md:w-9/12 lg:w-8/12 mx-auto bg-white dark:bg-neutral-800 py-20 text-black dark:text-white">
          <div className="bg-slate-100 drop-shadow-xl hover:drop-shadow-2xl dark:drop-shadow-none dark:shadow-lg dark:shadow-gray-600 dark:hover:shadow-gray-600 dark:hover:shadow-xl dark:hover:drop-shadow-none border-2 border-gray-50 dark:border-gray-600 transition duration-500 rounded-xl flex flex-col lg:flex-row h-[500px] lg:h-fit ">
            <div className="w-full min-h-[200px] md:h-[250px] lg:w-3/5  lg:min-h-full relative rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg overflow-hidden">
              <img
                src="/books-lightpulb.jpg"
                className="absolute top-[-9999px] bottom-[-9999px] left-[-9999px] right-[-9999px] m-auto min-h-full min-w-full rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg"
              ></img>
            </div>
            <div className="w-full lg:w-2/5 h-full lg:h-fit lg:min-h-full p-5 px-10 bg-white dark:bg-neutral-800 rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl">Initiative</h3>
              <p className="text-sm sm:text-lg md:text-xl text-slate-500 dark:text-slate-200 font-light leading-relaxed mt-3">
                The <span className="text-orange-400">Initiative</span> in Digital Initiative stands for <span className="text-green-400">taking action</span>. Our company strives to stay ahead of the game and keep up to date with the latest trends on the market. Keeping something relative can be hard in the age of the internet which is why we do extensive research to <span className="text-red-400">maximize</span> the effectiveness of our solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="h-fit w-full md:w-8/12 mx-auto bg-white dark:bg-neutral-800 pt-20">
          <h1 className="text-black text-xl sm:text-2xl md:text-3xl">
            Services
          </h1>
          <div className="w-full h-full mx-auto md:gap-20 grid grid-cols-1 md:grid-cols-2 md:mt-20">
            <div className="bg-slate-100 drop-shadow-md dark:drop-shadow-none dark:shadow-md dark:shadow-gray-600 rounded-lg h-20"></div>
            <div className="bg-slate-100 drop-shadow-md dark:drop-shadow-none dark:shadow-md dark:shadow-gray-600 rounded-lg h-20"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
