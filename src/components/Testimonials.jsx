'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    body: [
      'Sia Estates impresses with its',
      ' exceptional architecture',
      ', quality work, and professionalism. Our zonal office investment showcased impressive planning and infrastructure.',
    ],
    name: 'Canara Bank',
    role: 'Choice Center',
    n: '01',
  },
  {
    body: [
      'We trusted Sia Estates to build quality flats efficiently — with a sincere commitment to keeping our interest as owners foremost. They',
      ' exceeded our expectations',
      ' beyond limits.',
    ],
    name: 'Ms. Lakshmi',
    role: 'Resident',
    n: '02',
  },
  {
    body: [
      'I express my gratitude to Sia Estates for the outstanding facilities at',
      " Guru's Choice Residency",
      '. The quality of work is commendable. I highly recommend Sia Estates for anyone seeking a home.',
    ],
    name: 'Mr. T.N. Rajan',
    role: 'Homeowner',
    n: '03',
  },
  {
    body: [
      ' Sree Maha Lakshmi Meadows',
      '',
      ' is a blend of smart design and efficient use of space — comfortable living with all amenities at an easily reachable place.',
    ],
    leadingItalic: true,
    name: 'Mr. P.C. Garg',
    role: 'Homeowner',
    n: '04',
  },
  {
    body: [
      'Value for money — that is what you get with Sia Estates. Top class amenities and well thought out project design make Srinivasa Residency a',
      ' unique place to live in.',
      '',
    ],
    name: 'Mr. S. Anand Reddy',
    role: 'Homeowner',
    n: '05',
  },
  {
    body: [
      "We are happy to be a part of Guru's Choice Residency — especially the",
      ' quality of construction',
      ' is excellent.',
    ],
    name: 'Ms. Divya Reddy',
    role: 'Resident',
    n: '06',
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="legacy"
      className="py-24 md:py-32 bg-ink text-bone-light overflow-hidden"
    >
      <div className="gutter">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <div className="text-bronze text-xs uppercase tracking-[0.25em] mb-5">
              — 06 / Legacy speaks
            </div>
            <h2 className="font-display h-section font-light" data-reveal>
              30 years of
              <br />
              <span className="font-display-italic">happy thresholds.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <p
              className="text-bone-deep opacity-75 leading-relaxed"
              data-reveal
            >
              For over three decades, we have been shaping more than spaces - we have been creating enduring communities, meaningful investments, and places people proudly call home. Built on trust, vision, and lasting relationships, our legacy lives through every family, every neighbourhood, and every milestone we have been privileged to be a part of.
            </p>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={40}
          speed={850}
          loop
          pagination={{ el: '.testi-pagination', clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          className="testi-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="border-t border-bone/15 pt-8 md:pt-10">
                <div className="text-bronze font-display text-7xl md:text-8xl leading-none mb-4">
                  &ldquo;
                </div>
                <p className="font-display text-2xl md:text-4xl font-light leading-snug mb-10 md:mb-14 max-w-3xl">
                  {t.leadingItalic ? (
                    <>
                      <span className="font-display-italic">{t.body[0]}</span>
                      {t.body[2]}
                    </>
                  ) : (
                    <>
                      {t.body[0]}
                      <span className="font-display-italic">{t.body[1]}</span>
                      {t.body[2]}
                    </>
                  )}
                </p>
                <div className="flex items-baseline justify-between border-t border-bone/15 pt-5">
                  <div>
                    <div className="font-display text-lg">{t.name}</div>
                    <div className="text-xs uppercase tracking-[0.2em] opacity-60 mt-1">
                      {t.role}
                    </div>
                  </div>
                  <div className="font-mono text-xs opacity-50">
                    / {t.n} — 06
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-between mt-12 md:mt-16">
          <div className="testi-pagination !relative !w-auto"></div>
          <div className="flex items-center gap-3">
            <button
              ref={prevRef}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-bone/20 grid place-items-center hover:bg-bronze hover:border-bronze transition-all"
              aria-label="Previous"
            >
              <svg width="14" height="10" viewBox="0 0 16 10" fill="none">
                <path
                  d="M15 5H1m0 0l4-4M1 5l4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-bone/20 grid place-items-center hover:bg-bronze hover:border-bronze transition-all"
              aria-label="Next"
            >
              <svg width="14" height="10" viewBox="0 0 16 10" fill="none">
                <path
                  d="M1 5h14m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
