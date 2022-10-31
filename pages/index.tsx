import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import TypeWriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCheckCircle,
  faComputer,
  faDollar,
  faDollarSign,
  faPaperPlane,
  faSearch,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Home: NextPage = () => {
  const [fullName, setFullName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  const [unfilledError, setUnfilledError] = useState<boolean>(true);
  const [submissionError, setSubmissionError] = useState<boolean>(false);

  const [contactColor, setContactColor] = useState<string>("[#4d22f4]");
  const [contactSubmitted, setContactSumbitted] = useState<boolean>(false);

  const contact = (e: any) => {
    e.preventDefault();

    if (!fullName || !email || !message) {
      setUnfilledError(true);
      return;
    }

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullName,
        email: email,
        message: message,
      }),
    }).then((response) => {
      if (response.ok) {
        setContactSumbitted(true);
        setContactColor("green-300");
      } else {
        setSubmissionError(true);
        setContactColor("red-300");
      }
    });
  };

  useEffect(() => {
    if (fullName && email?.includes("@") && message) setUnfilledError(false);
    else setUnfilledError(true);
  }, [fullName, email, message]);

  return (
    <div className="w-full mx-auto font-outfit">
      <Head>
        <title>Digital Initiative</title>
        <link rel="shortcut icon" href="" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Based out of Los Angeles, California, our agency works to improve companies and brands though various aspects of digital marketing."
        />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
        <meta
          name="keywords"
          content="marketing, seo, target ad, digital marketing, affiliate marketing, social media marketing, marketing strategy, email marketing, marketing plan, advertising agency, internet marketing, e marketing, seo services, direct marketing, digital marketing agency, seo company, what is digital marketing, b2b marketing, social media marketing, marketing agency,  web marketing, online advertising"
        />
        <meta property="og:title" content="Digital Initiative" />
        <meta
          property="og:description"
          content="Los Angeles based digital marketing agency"
        />
        <meta
          property="og:image"
          content="/images/digital_initiative_logo_cropped.PNG"
        />

        <meta name="twitter:title" content="Digital Intiative" />
        <meta
          name="twitter:description"
          content="Los Angeles based digital marketing agency"
        />
        <meta
          name="twitter:image"
          content="/images/digital_initiative_logo_cropped.PNG"
        />
      </Head>
      <main className="min-h-full">
        <section className="h-[85vh] sm:h-[95vh] md:h-[90vh] lg:h-screen mx-auto relative overflow-hidden bg-gradient-to-tl from-pink-400 via-purple-400 to-green-400">
          <Navbar />
          <div className="w-11/12 md:w-8/12 mx-auto h-[50vh] sm:h-[40vh] md:h-[90vh] lg:h-[75%] flex flex-col-reverse md:flex-row items-center justify-start md:justify-between gap-16 sm:gap-10 md:gap-8 lg:gap-10">
            <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-3 w-8/12 md:w-full mx-auto text-[#3f12f1]">
                The only
                  digital marketing
                team you will need to help your brand or product{" "}
                <span className="text-green-300">succeed</span>.
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <h1 className="text-gray-800 text-4xl sm:text-5xl md:text-6xl  text-center md:text-right font-light font-outfit">
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
                    delay: 100,
                  }}
                />
              </h1>
            </div>
          </div>
          <div className="bg-gray-900 h-40 absolute -bottom-20 sm:-bottom-30 md:-bottom-40 -left-10 z-50 rotate-[8deg] w-[120vw] mx-auto "></div>
        </section>
        <section className="h-fit w-10/12 md:w-9/12 lg:w-8/12 mx-auto text-black my-20">
          <div className="w-fit h-fit bg-rose-300 rounded-xl translate-x-1 translat-y-1">
            <div className="rounded-xl shadow-2xl shadow-rose-200 transition duration-500 flex flex-col-reverse lg:flex-row h-fit lg:h-[400px] overflow-hidden border-[1px] border-rose-300 -translate-x-2 -translate-y-2">
              <div className="w-full lg:w-2/5 h-full lg:min-h-full p-5 px-10 bg-white border-t-[1px] border-rose-300 lg:border-t-0 lg:border-r-[1px] lg:border-rose-300 rounded-b-lg lg:rounded-br-none lg:rounded-l-lg flex flex-col justify-around ">
                <h3 className="text-lg sm:text-xl md:text-2xl text-black">
                  Purpose
                </h3>
                <p className="text-sm sm:text-lg md:text-xl text-black font-light leading-relaxed mt-3">
                  At Digital Initiative we want to take the necessary steps to
                  help you <span className="text-purple-400">succeed</span>. As
                  your partner, we will work tirelesly to help improve your
                  digital pressence in a variety of ways that will lead to an{" "}
                  <span className="text-blue-400">increase</span> in your
                  conversion rates.
                </p>
              </div>
              <div className="w-full lg:w-3/5 min-h-[200px] lg:min-h-full relative rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg overflow-hidden">
                <img
                  src="/images/trend.png"
                  className="absolute top-[-9999px] bottom-[-9999px] left-[-9999px] right-[-9999px] m-auto min-h-full min-w-full rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg"
                ></img>
              </div>
            </div>
          </div>
        </section>
        <section className="h-fit w-10/12 md:w-9/12 lg:w-8/12 mx-auto text-black my-20">
          <div className="w-fit h-fit bg-purple-300 rounded-xl translate-x-1 translate-y-1">
            <div className="shadow-2xl shadow-purple-300 transition duration-500 rounded-xl flex flex-col lg:flex-row h-fit lg:h-[400px] overflow-hidden border-[1px] border-purple-300 -translate-x-2 -translate-y-2">
              <div className="w-full min-h-[200px] lg:w-3/5  lg:min-h-full relative rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg overflow-hidden">
                <img
                  src="/images/books-lightpulb.jpg"
                  className="absolute top-[-9999px] bottom-[-9999px] left-[-9999px] right-[-9999px] m-auto min-h-full min-w-full rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg"
                ></img>
              </div>
              <div className="w-full lg:w-2/5 h-full lg:h-fit lg:min-h-full p-5 px-10 bg-white border-t-[1px] border-purple-300 lg:border-t-0 lg:border-l-[1px] lg:border-purple-300 rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg flex flex-col justify-around">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-left text-black">
                  Initiative
                </h3>
                <p className="text-sm sm:text-lg md:text-xl text-black font-light leading-relaxed mt-3 lg:text-left">
                  The <span className="text-orange-400">Initiative</span> in
                  Digital Initiative stands for{" "}
                  <span className="text-green-400">taking action</span>. Our
                  company strives to stay ahead of the game and keep up to date
                  with the latest trends on the market. We do extensive research
                  to <span className="text-red-400">maximize</span> the
                  effectiveness of our solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="h-fit w-10/12 md:w-9/12 lg:w-8/12 mx-auto my-44"
          id="services"
        >
          <div className="w-full mb-14 bg-blue-600 rounded-lg translate-x-1 translate-y-1">
            <h1 className=" text-black text-base sm:text-lg md:text-xl lg:text-2xl w-full h-full border-[1px] border-blue-600 rounded-lg p-3 bg-white -translate-x-2 -translate-y-2 saturate-150 shadow-lg shadow-blue-600">
              Well what do we offer?
            </h1>
          </div>
          <div className="min-w-full h-fit mx-auto gap-10 sm:gap-8 md:gap-12 lg:gap-x-32 grid grid-cols-1 lg:grid-cols-2 text-black">
            <div className="h-[200px] md:h-[180px] min-w-[100%] sm:min-w-[80%] md:min-w-[43%] lg:min-w-[28%] bg-green-300 rounded-lg translate-x-1 translate-y-1 ">
              <div className="flex flex-col items-start justify-between gap-3 w-full bg-white shadow-green-300 shadow-xl -translate-x-2 -translate-y-2  transition p-5 rounded-lg border-[1px] border-green-300 saturate-200 min-h-full">
                <div className="flex flex-row w-full justify-between ">
                  <h1 className="text-base md:text-lg lg:text-xl text-center h-full">
                    Web Development
                  </h1>
                  <FontAwesomeIcon
                    icon={faComputer}
                    className=" text-lg mr-6"
                  />
                </div>
                <p>
                  We have top of the line developers that are capable of making
                  just about any web project you could dream of.
                </p>
              </div>
            </div>
            <div className=" h-[200px] md:h-[180px] min-w-[100%] sm:min-w-[80%] md:min-w-[43%] lg:min-w-[28%] bg-red-300 rounded-lg translate-x-1 translate-y-1">
              <div className="flex flex-col items-start justify-between gap-3 w-full bg-white shadow-red-300 shadow-2xl -translate-x-2 -translate-y-2 transition p-5 rounded-lg border-[1px] border-red-300 saturate-200 min-h-full">
                <div className="flex flex-row w-full justify-between">
                  <h1 className="text-base md:text-lg lg:text-xl text-center h-full">
                    SEO
                  </h1>
                  <FontAwesomeIcon icon={faSearch} className=" text-lg mr-6" />
                </div>
                <p>
                  We want you to be found! We take on the process of moving your
                  website up in the ranks so you can be seen on google searches.
                </p>
              </div>
            </div>
            <div className="h-[200px] md:h-[180px] min-w-[100%] sm:min-w-[80%] md:min-w-[43%] lg:min-w-[28%] bg-blue-300 rounded-lg translate-x-1 translate-y-1">
              <div className="flex flex-col items-start justify-between gap-3 w-full bg-white shadow-blue-300 shadow-2xl -translate-x-2 -translate-y-2 transition p-5 rounded-lg border-[1px] border-blue-300 saturate-200 min-h-full">
                <div className="flex flex-row w-full justify-between">
                  <h1 className="text-base md:text-lg lg:text-xl text-center h-full">
                    Paid Ads
                  </h1>
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className=" text-lg mr-6"
                  />
                </div>
                <p className="">
                  Get your product or brand in front of more people! We help
                  organize and run campaigns on plaforms like facebook and
                  tiktok to help drive greater traffic to your site.
                </p>
              </div>
            </div>
            <div className="h-[200px] md:h-[180px] min-w-[100%] sm:min-w-[80%] md:min-w-[43%] lg:min-w-[28%] bg-orange-300 rounded-lg translate-x-1 translate-y-1">
              <div className="flex flex-col items-start justify-between gap-3 w-full bg-white shadow-orange-300 shadow-2xl -translate-x-2 -translate-y-2 transition p-5 rounded-lg border-[1px] border-orange-300 saturate-200 min-h-full">
                <div className="flex flex-row w-full justify-between">
                  <h1 className="text-base md:text-lg lg:text-xl text-center h-full ">
                    Influencer Marketing
                  </h1>
                  <FontAwesomeIcon icon={faCamera} className="text-lg mr-6" />
                </div>
                <p className="">
                  Utilizing our network of social media influencers, we can
                  provide exposure for your brand or product without having to
                  pay insane rates.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="h-fit w-10/12 md:w-9/12 lg:w-8/12 mx-auto my-20">
          <div className="w-full h-full bg-red-500 shadow-lg shadow-red-500 rounded-lg translate-x-1 translate-y-1">
            <div className="bg-white border-[1px] border-red-500 rounded-lg -translate-x-2 -translate-y-2 overflow-hidden grid grid-cols-1 lg:grid-cols-2 h-full items-center p-5 lg:px-5">
              <div className="flex flex-col p-4">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-left text-black pb-2">
                  Our Work
                </h1>
                <p className="pb-5">
                  We work with clients accross many different intdustries. From
                  publishing companies to clothing brands, we are confident we
                  are the right fit for you.
                </p>
              </div>
              <div className="h-fit rounded-lg overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  className="h-full w-full"

                >
                  <SwiperSlide>
                    <img src="/images/mad_vibes_home.png"></img>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/mad_vibes_1.png"></img>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/esa_1.JPG"></img>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/sandman_productions.JPG"></img>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section
          className="h-fit md:h-[60vh] w-10/12 md:w-9/12 lg:w-8/12 mx-auto my-24"
          id="about"
        >
          <div className="w-full h-full bg-amber-200 rounded-lg translate-x-1 translate-y-1">
            <div className="h-full bg-white p-5 rounded-lg border-[1px] border-amber-200 shadow-xl shadow-amber-200 -translate-x-2 -translate-y-2">
              <div className="grid crod-cols-1 md:grid-cols-2 gap-10 h-full overflow-hidden">
                <div className="md:px-10 flex flex-col justify-start items-start md:justify-center md:items-start bg-contain bg-no-repeat h-full pb-5">
                  <h1 className="text-lg md:text-xl lg:text-2xl h-fit w-full">
                    About Us
                  </h1>
                  <p className="mt-4 text-lg md:text-xl font-light">
                    Digital Initiative, founded by Clark Holden, is a Digital
                    Marketing agency based out of Los Angeles, California. We
                    take on tedious tasks like website building and ad
                    placements so that you can have more time on your hands to
                    focus on your business.
                  </p>
                </div>
                <div className="flex flex-row gap-5 justify-center items-center relative rounded-lg h-[300px] max-h-[300px] md:max-h-full md:h-[auto] overflow-hidden">
                  <img
                    src="/images/clark-holden-fullshot.png"
                    className="absolute top-[-9999px] bottom-[-9999px] left-[-9999px] right-[-9999px] m-auto min-w-full lg:min-h-full lg:min-w-[auto] rounded-lg overflow-hidden"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-fit w-10/12 md:w-9/12 lg:w-8/12 mx-auto my-36 mt-40">
          <div className={`w-full h-fit bg-${contactColor} rounded-lg translate-x-1 translate-y-1`}>
            <div
              className={`w-full h-fit bg-white border-[1px] border-${contactColor} shadow-xl shadow-${contactColor}/75 rounded-lg p-4 pb-8 -translate-x-2 -translate-y-2`}
            >
              {!submissionError ? (
                <div className="w-full h-full">
                  {!contactSubmitted ? (
                    <div className="w-full h-full">
                      <h1 className="text-lg md:text-xl lg:text-2xl">
                        Contact
                      </h1>
                      <p className="text-slate-500">
                        Want to work with us?{" "}
                        <span className="text-black">Drop us a message!</span>
                      </p>
                      <form onSubmit={(e) => contact(e)}>
                        <div className="flex flex-col w-full h-fit group">
                          <label
                            htmlFor="fullName"
                            className="bg-white mt-4 translate-y-3 translate-x-3 h-fit w-fit group-focus-within:translate-x-2 group-focus-within:translate-y-2 duration-500 transition z-50"
                          >
                            Full Name
                          </label>
                          <div className="w-full h-fit bg-[#4d22f4] rounded-lg">
                            <input
                              type="fullName"
                              id="fullName"
                              name="fullName"
                              className="p-2 border-[1px] rounded-lg focus-within:-translate-x-1 focus-within:-translate-y-1 w-full transition duration-500 outline-none"
                              onChange={(e) => setFullName(e.target.value)}
                            ></input>
                          </div>
                        </div>
                        <div className="flex flex-col w-full h-fit group">
                          <label
                            htmlFor="email"
                            className="bg-white mt-4 translate-y-3 translate-x-3 h-fit w-fit group-focus-within:translate-x-2 group-focus-within:translate-y-2 duration-500 transition z-50"
                          >
                            Email
                          </label>
                          <div className="w-full h-fit bg-[#4d22f4] rounded-lg">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="p-2 border-[1px] rounded-lg focus-within:-translate-x-1 focus-within:-translate-y-1 w-full transition duration-500 outline-none invalid:text-red-400"
                              onChange={(e) => setEmail(e.target.value)}
                            ></input>
                          </div>
                        </div>
                        <div className="flex flex-col w-full h-fit group">
                          <label
                            htmlFor="email"
                            className="bg-white mt-4 translate-y-3 translate-x-3 h-fit w-fit group-focus-within:translate-x-2 group-focus-within:translate-y-2 duration-500 transition z-50"
                          >
                            Message
                          </label>
                          <div className="w-full bg-[#4d22f4] rounded-lg">
                            <textarea
                              id="message"
                              name="message"
                              className="-mb-2 p-5 border-[1px] rounded-lg focus-within:-translate-x-1 focus-within:-translate-y-1 w-full transition duration-500 outline-none resize-none"
                              onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                        {unfilledError ? (
                          <button
                            disabled
                            className="w-full p-3 mt-8 ] focus:text-white rounded-lg bg-white text-black/50 border-[1px] border-[#4d22f4] transition"
                          >
                            Send{" "}
                            <FontAwesomeIcon
                              icon={faPaperPlane}
                              className="ml-1"
                              size="sm"
                            />
                          </button>
                        ) : (
                          <button className="w-full p-3 mt-8 bg-[#4d22f4]/25 border-[#4d22f4] hover:bg-[#4d22f4] text-black hover:text-white rounded-lg border-[1px]   transition">
                            Send{" "}
                            <FontAwesomeIcon
                              icon={faPaperPlane}
                              className="ml-1"
                              size="sm"
                            />
                          </button>
                        )}
                      </form>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col items-center justify-center pt-4">
                        <h1 className="text-lg md:text-xl lg:text-2xl">
                          Good news! Your message was sent!
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl mb-3 text-slate-500">
                          Expect to hear back from us soon.
                        </p>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-2xl lg:text-4xl text-green-400"
                        />
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center pt-4">
                    <h1 className="text-lg md:text-xl lg:text-2xl">
                      Bad news! There was an error sumbitting your message!
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl mb-3 text-slate-500">
                      Please try again later.
                    </p>
                    <FontAwesomeIcon
                      icon={faXmarkCircle}
                      className="text-2xl lg:text-4xl text-red-400"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="h-fit w-10/12 md:w-9/12 lg:w-8/12 mx-auto flex flex-row items-center justify-between py-5 text-white">
        <h1 className="">Copyright Digital Initiative 2022</h1>
        <div className="flex flex-row w-fit gap-2">
          <a href="https://www.instagram.com/digital_initative/"><FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-pink-400" /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-blue-400" /></a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
