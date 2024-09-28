import React from "react";

import Slider from "react-slick";
const Testimonialsdata = [
  {
    id: 1,
    name: "Rohan",
    image: "https://picsum.photos/id/65/200/300",
    text: "I had an exceptional shopping experience with . The product quality exceeded my expectations.",
  },
  {
    id: 2,
    name: "Sanchit",
    image: "https://picsum.photos/id/168/200/300",
    text: " I highly recommend this store to anyone looking for quality products and a seamless shopping experience  ",
  },
  {
    id: 3,
    name: "Rakshu",
    image: "https://picsum.photos/id/177/200/300",
    text: "Amazing products and fast delivery! I’m a repeat customer for a reason.  ",
  },
  {
    id: 4,
    name: "Atul",
    image: "https://picsum.photos/id/215/200/300",
    text: "Easy to shop, quick to deliver—this app never disappoints! ",
  },
  {
    id: 5,
    name: "Saksham",
    image: "https://picsum.photos/id/201/200/300",
    text: "Fantastic service and excellent product quality. Love shopping here!  ",
  },
];
const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    Infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2200,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 2, // Show 2 slides at a time by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slideToshow: 3,
          slideToscroll: 1,
          Infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToshow: 2,
          slideToscroll: 1,
          intialSlider: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToshow: 1,
          slideToscroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10 ">
      <div className="container ">
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-primary ">
            What our customer are saying{" "}
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 ">
          Our customers are at the heart of everything we do. Here’s what they have to say about their experiences with us.
          </p>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {Testimonialsdata.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-cols gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative"
                >
                  <div className="mb-4 ">
                    <img
                      src={data.image}
                      alt=""
                      className="rounded-full   w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 ">
                    <div className="space-y-3 ">
                      <p className="text-xs dark:text-slate-300 text-gray-500 ">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 texxt-9xl font-sm font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
