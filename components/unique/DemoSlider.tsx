"use client";
import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Settings3 {
  focusOnSelect: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  speed: number;
  centerMode: boolean;
  centerPadding: string;
  arrows: boolean;
  fade: boolean;
}

interface Settings2 {
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  speed: number;
  centerMode: boolean;
  centerPadding: string;
  arrows: boolean;
  focusOnSelect: boolean;
}

interface Settings {
  focusOnSelect: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  speed: number;
  centerMode: boolean;
  centerPadding: string;
  arrows: boolean;
}

const FocusOnSelect: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlides, setActiveSlides] = React.useState([4, 0, 1]);
  const numberOfSlides = 5;

  const settings: Settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
  };

  const settings2: Settings2 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    focusOnSelect: true,
  };

  const settings3: Settings3 = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    fade: true,
  };

  // const [nav1, setNav1] = useState<Slider | null>(null);
  // const [nav2, setNav2] = useState<Slider | null>(null);
  // const [nav3, setNav3] = useState<Slider | null>(null);

  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);
  const [nav3, setNav3] = useState<Slider | undefined>(undefined);

  return (
    <>
      <div className="mt-[3rem] mb-[4rem] client-slider">
        <Slider
          asNavFor={nav1}
          ref={(slider: Slider) => setNav2(slider)}
          {...settings2}
        >
          <iframe
            width={1000}
            height={1000}
            src="https://www.youtube.com/embed/RVit6poGLRs?si=Pv8CCqx6Qtehy56N"
            title="YouTube video player trip law"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[350px] h-[275px]"
          ></iframe>

          <iframe
            width={1000}
            height={1000}
            src="https://www.youtube.com/embed/ohyUTzLiLbI?si=IrLApSH4eZOvcYPQ"
            title="YouTube video player apex"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[350px] h-[275px]"
          ></iframe>

          <iframe
            width={1000}
            height={1000}
            src="https://www.youtube.com/embed/iqHA7By9OAI?si=jhmzmTsMEhjIyqZa"
            title="YouTube video player catflix"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[350px] h-[275px]"
          ></iframe>
          <iframe
            width={1000}
            height={1000}
            src="https://www.youtube.com/embed/RVit6poGLRs?si=Pv8CCqx6Qtehy56N"
            title="YouTube video player trip law"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[350px] h-[275px]"
          ></iframe>

          <iframe
            width={1000}
            height={1000}
            src="https://www.youtube.com/embed/ohyUTzLiLbI?si=IrLApSH4eZOvcYPQ"
            title="YouTube video player apex"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[350px] h-[275px]"
          ></iframe>

          <iframe
            width={1000}
            height={1000}
            src="https://www.youtube.com/embed/iqHA7By9OAI?si=jhmzmTsMEhjIyqZa"
            title="YouTube video player catflix"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[350px] h-[275px]"
          ></iframe>
        </Slider>
      </div>
      <div className="testimonial-slider max-w-[470px] mx-auto ">
        <Slider
          {...settings}
          asNavFor={nav1}
          ref={(slider: Slider | any) => setNav3(slider)}
        >
          {/* <Slider {...settings} asNavFor={nav1} ref={(slider) => setNav3(slider)}> */}
          <div className="">
            <Image
              alt="test"
              src="/assets/about/Trip.jpg"
              height={120}
              width={120}
              className="rounded-full  ease-in-out duration-1000 transition-all"
            />
          </div>
          <div>
            <Image
              alt="test"
              src="/assets/about/Carlos.jpg"
              height={120}
              width={120}
              className="rounded-full  ease-in-out duration-1000 transition-all"
            />
          </div>
          <div>
            <Image
              alt="test"
              src="/assets/about/Cris.jpg"
              height={120}
              width={120}
              className="rounded-full  ease-in-out duration-1000 transition-all"
            />
          </div>
          <div className="">
            <Image
              alt="test"
              src="/assets/about/Trip.jpg"
              height={120}
              width={120}
              className="rounded-full  ease-in-out duration-1000 transition-all"
            />
          </div>
          <div>
            <Image
              alt="test"
              src="/assets/about/Carlos.jpg"
              height={120}
              width={120}
              className="rounded-full  ease-in-out duration-1000 transition-all"
            />
          </div>
          <div>
            <Image
              alt="test"
              src="/assets/about/Cris.jpg"
              height={120}
              width={120}
              className="rounded-full  ease-in-out duration-1000 transition-all"
            />
          </div>
        </Slider>
      </div>

      <div>
        <Slider
          asNavFor={nav2}
          ref={(slider: Slider) => setNav1(slider)}
          {...settings3}
        >
          <BoxContent
            title="Trip Law"
            subtitle=""
            content="1"
            text="Hello, I'm U.S. immigration attorney Hardam Tripathi from Trip Law. If you're a young attorney, know that success in starting your law firm requires a strong marketing team. Law school doesn't teach marketing, but it's vital. Invest in your marketing to avoid future problems and achieve growth. Salman from Bayshore can guide you with SEO and creative strategies. Marketing helps attract clients, establish authority, and grow financially. It's crucial for young attorneys. Best of luck as you grow your firm and help others."
          />
          <BoxContent
            title="Apex Advisor Group"
            subtitle=""
            content="2"
            text="As an owner of Apex Advisor Group, I have been very impressed with the service provided by Bayshore. They are a professional and reliable company that offers a range of services. They are committed to enabling and empowering their clients to be as independent as possible within their community. They also have friendly and helpful teams that always go the extra mile to meet the needs and expectations of their clients. I would highly recommend Bayshore's service to anyone who is looking for a quality and compassionate care provider."
          />
          <BoxContent
            title="Catflix"
            subtitle=""
            content="2"
            text="Hello,Chris here, I'm thrilled to say that I am the proud owner of Catflix, a journey that wasn't always easy. Thankfully, Bayshore Communications came to my rescue, transforming my dull website into a thriving business strategy. They treated me like family, addressing security concerns, improving customer communication, and optimizing our online presence. Entrusting them with every aspect of my business was a decision I'll never regret. Bayshore Communications handled it all with utmost care, and their dedication and expertise turned Catflix into a phenomenal success. I'm forever grateful for their genuine support and trust."
          />
          <BoxContent
            title="Trip Law"
            subtitle=""
            content="1"
            text="Hello, I'm U.S. immigration attorney Hardam Tripathi from Trip Law. If you're a young attorney, know that success in starting your law firm requires a strong marketing team. Law school doesn't teach marketing, but it's vital. Invest in your marketing to avoid future problems and achieve growth. Salman from Bayshore can guide you with SEO and creative strategies. Marketing helps attract clients, establish authority, and grow financially. It's crucial for young attorneys. Best of luck as you grow your firm and help others."
          />
          <BoxContent
            title="Apex Advisor Group"
            subtitle=""
            content="2"
            text="As an owner of Apex Advisor Group, I have been very impressed with the service provided by Bayshore. They are a professional and reliable company that offers a range of services. They are committed to enabling and empowering their clients to be as independent as possible within their community. They also have friendly and helpful teams that always go the extra mile to meet the needs and expectations of their clients. I would highly recommend Bayshore's service to anyone who is looking for a quality and compassionate care provider."
          />
          <BoxContent
            title="Catflix"
            subtitle=""
            content="2"
            text="Hello,Chris here, I'm thrilled to say that I am the proud owner of Catflix, a journey that wasn't always easy. Thankfully, Bayshore Communications came to my rescue, transforming my dull website into a thriving business strategy. They treated me like family, addressing security concerns, improving customer communication, and optimizing our online presence. Entrusting them with every aspect of my business was a decision I'll never regret. Bayshore Communications handled it all with utmost care, and their dedication and expertise turned Catflix into a phenomenal success. I'm forever grateful for their genuine support and trust."
          />
        </Slider>
      </div>
    </>
  );
};

export default FocusOnSelect;

interface demo {
  title: string;
  subtitle: string;
  content: string;
  text: string;
}
const BoxContent = ({ title, subtitle, content, text }: demo) => {
  return (
    <div className="fade-in-animation max-w-[650px] mx-auto mt-[3rem] flex flex-col items-center translate-x-[-2rem]">
      <h3 className="heading-tertiary ">{title}</h3>
      <p className="mb-4 font-semibold">{subtitle} </p>
      <p className="text-link !text-center">
        {text}
        {/* Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
        use. The Flat is great to put under any phone case(non-metal) Users can
        download our app to program any of our NFC’s with the click of a button.
        This will attach your profile to the NFC for easy sharing. You just tap
        the NFC on any compatible phone to share your digital business card. */}
      </p>
    </div>
  );
};

const slides: string[] = [
  "/assets/tab-1.png",
  "/assets/trip.png",
  "/assets/tab-1.png",
  "/assets/trip.png",
  "/assets/trip.png",
];

// const slides: string[] = [
//   "https://www.youtube.com/embed/rT53DKdj6dQ?si=FdY29cj8RYGALVXQassets/tab-1.png",
//   "https://www.youtube.com/embed/UuHB0efkhPE?si=FSlvXQfjEAeUcFKi",
//   "https://www.youtube.com/embed/tP-4B9MSMRU?si=JA5FRh7INcT7f6RZ",
//   "/assets/trip.png",
//   "/assets/trip.png",
// ];
