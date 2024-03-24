import kyberswap from "../../assets/img/kyberswap.png";
import mantle from "../../assets/img/mantle.png";
import woo from "../../assets/img/woo.png";
import polkastarter from "../../assets/img/polkastarter.png";
import linea from "../../assets/img/linea.png";
import gameswift from "../../assets/img/gameswift.png";
import dodo from "../../assets/img/dodo.png";
import eesee from "../../assets/img/eesee.png";
import insomnia from "../../assets/img/insomnia.png";
import React from "react";

const Ecosystem = () => {
  return (
    <section
      id="ecosystem"
      className="relative z-50 overflow-hidden bg-black pt-8 text-center text-white lg:pt-16"
    >
      <svg
        viewBox="0 0 122 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="lg:blockhidden absolute hidden h-[300px] lg:-left-32 lg:block 3xl:-left-4"
      >
        <path
          d="M-28.8233 161.437L5.04667 161.437C10.7874 161.437 15.3799 156.791 15.3799 151.1L15.3799 118.311C15.3799 112.568 20.0246 107.973 25.7131 107.973L56.9737 107.973C62.7144 107.973 67.307 112.62 67.307 118.311L67.307 151.1C67.307 156.843 71.9517 161.437 77.6402 161.437L111.667 161.437C117.355 161.437 122 156.791 122 151.1L122 117.214C122 111.471 117.355 106.877 111.667 106.877L79.1015 106.877C73.3608 106.877 68.7682 102.23 68.7682 96.5388L68.7682 64.8987C68.7682 59.1555 73.413 54.5609 79.1015 54.5609L111.667 54.5609C117.407 54.5609 122 49.914 122 44.223L122 10.3378C122 4.5946 117.355 -4.06055e-07 111.667 -9.03359e-07L77.7968 -3.86437e-06C72.0561 -4.36624e-06 67.4635 4.6468 67.4635 10.3378L67.4635 43.1266C67.4635 48.8698 62.8188 53.4644 57.1303 53.4644L24.565 53.4644C18.8243 53.4644 14.2318 58.1112 14.2318 63.8023L14.2318 96.591C14.2318 102.334 9.58703 106.929 3.89854 106.929L-28.6668 106.929C-34.4075 106.929 -39 111.576 -39 117.267L-39 151.1C-39 156.843 -34.3553 161.437 -28.6668 161.437L-28.8233 161.437Z"
          fill="#0FF378"
        />
      </svg>
      <svg
        viewBox="0 0 234 234"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="absolute -right-48 hidden h-[300px] lg:block 3xl:-right-8"
      >
        <path
          d="M139.966 117.86L211.377 117.86C223.945 117.86 234 107.656 234 95.1592L234 22.7006C234 10.2038 223.831 -4.44499e-07 211.377 -9.88885e-07L139.28 -4.14033e-06C126.712 -4.68971e-06 116.657 10.2038 116.657 22.7006L116.657 93.5541C116.657 106.166 106.488 116.255 94.0342 116.255L22.623 116.255C10.0547 116.255 -5.52768e-06 126.459 -6.07393e-06 138.955L-9.23619e-06 211.299C-9.78745e-06 223.911 10.1689 234 22.623 234L94.7197 234C107.288 234 117.343 223.796 117.343 211.299L117.343 140.446C117.343 127.834 127.512 117.745 139.966 117.745L139.966 117.86Z"
          fill="#0FF378"
        />
      </svg>
      <div
        style={{
          willChange: "transform, opacity",
          opacity: 1,
          transform: "none",
        }}
      >
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-medium text-white lg:text-5xl [&>span]:text-new-primary">
          The <span>first open MarketingFi economy</span> shared between users,
          creators, and businesses.
        </h2>
      </div>
      <div
        style={{
          willChange: "transform, opacity",
          opacity: 1,
          transform: "none",
        }}
      >
        <p className="reveal mt-8 text-xl lg:mt-14 lg:text-2xl">
          Used by 170+ leading projects, including:
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-3 place-content-center content-center justify-center justify-items-center gap-x-2 gap-y-4 lg:mb-52 lg:grid-cols-5">
        <div
          style={{
            willChange: "transform, opacity",
            opacity: 1,
            transform: "none",
          }}
        >
          <div className="flex h-[40px] w-[115px] items-center justify-center rounded-xl border border-white/20 lg:h-[60px] lg:w-[160px]">
            <img
              alt="detail"
              loading="lazy"
              width={80}
              height={30}
              decoding="async"
              data-nimg={1}
              className="object-contain object-center"
              style={{ color: "transparent" }}
              src={kyberswap}
            />
          </div>
        </div>
        <div
          style={{
            willChange: "transform, opacity",
            opacity: 1,
            transform: "none",
          }}
        >
          <div className="flex h-[40px] w-[115px] items-center justify-center rounded-xl border border-white/20 lg:h-[60px] lg:w-[160px]">
            <img
              alt="detail"
              loading="lazy"
              width={80}
              height={30}
              decoding="async"
              data-nimg={1}
              className="object-contain object-center"
              style={{ color: "transparent" }}
              src={mantle}
            />
          </div>
        </div>
        <div
          style={{
            willChange: "transform, opacity",
            opacity: 1,
            transform: "none",
          }}
        >
          <div className="flex h-[40px] w-[115px] items-center justify-center rounded-xl border border-white/20 lg:h-[60px] lg:w-[160px]">
            <img
              alt="detail"
              loading="lazy"
              width={80}
              height={30}
              decoding="async"
              data-nimg={1}
              className="object-contain object-center"
              style={{ color: "transparent" }}
              src={woo}
            />
          </div>
        </div>
        <div
          style={{
            willChange: "transform, opacity",
            opacity: 1,
            transform: "none",
          }}
        >
          <div className="flex h-[40px] w-[115px] items-center justify-center rounded-xl border border-white/20 lg:h-[60px] lg:w-[160px]">
            <img
              alt="detail"
              loading="lazy"
              width={80}
              height={30}
              decoding="async"
              data-nimg={1}
              className="object-contain object-center"
              style={{ color: "transparent" }}
              src={polkastarter}
            />
          </div>
        </div>
        <div
          style={{
            willChange: "transform, opacity",
            opacity: 1,
            transform: "none",
          }}
        >
          <div className="flex h-[40px] w-[115px] items-center justify-center rounded-xl border border-white/20 lg:h-[60px] lg:w-[160px]">
            <img
              alt="detail"
              loading="lazy"
              width={80}
              height={30}
              decoding="async"
              data-nimg={1}
              className="object-contain object-center"
              style={{ color: "transparent" }}
              src={linea}
            />
          </div>
        </div>
        <div
          style={{
            willChange: "transform, opacity",
            opacity: 1,
            transform: "none",
          }}
        >
          <div className="flex h-[40px] w-[115px] items-center justify-center rounded-xl border border-white/20 lg:h-[60px] lg:w-[160px]">
            <img
              alt="detail"
              loading="lazy"
              width={80}
              height={30}
              decoding="async"
              data-nimg={1}
              className="object-contain object-center"
              style={{ color: "transparent" }}
              src={gameswift}
            />
          </div>
        </div>
        <div
          style={{
            willChange: "transform, opacity",
            opacity: 1,
            transform: "none",
          }}
        >
          <div className="flex h-[40px] w-[115px] items-center justify-center rounded-xl border border-white/20 lg:h-[60px] lg:w-[160px]">
            <img
              alt="detail"
              loading="lazy"
              width={80}
              height={30}
              decoding="async"
              data-nimg={1}
              className="object-contain object-center"
              style={{ color: "transparent" }}
              src={dodo}
            />
          </div>
        </div>
        <div
          style={{
            willChange: "transform, opacity",
            opacity: 1,
            transform: "none",
          }}
        >
          <div className="flex h-[40px] w-[115px] items-center justify-center rounded-xl border border-white/20 lg:h-[60px] lg:w-[160px]">
            <img
              alt="detail"
              loading="lazy"
              width={80}
              height={30}
              decoding="async"
              data-nimg={1}
              className="object-contain object-center"
              style={{ color: "transparent" }}
              src={eesee}
            />
          </div>
        </div>
        <div
          style={{
            willChange: "transform, opacity",
            opacity: 1,
            transform: "none",
          }}
        >
          <div className="flex h-[40px] w-[115px] items-center justify-center rounded-xl border border-white/20 lg:h-[60px] lg:w-[160px]">
            <img
              alt="detail"
              loading="lazy"
              width={80}
              height={30}
              decoding="async"
              data-nimg={1}
              className="object-contain object-center"
              style={{ color: "transparent" }}
              src={insomnia}
            />
          </div>
        </div>
        <div className="hidden items-center lg:flex">
          <div>
            <p className="gap-2 text-4xl font-bold">
              170<span className="text-new-primary">+</span>
            </p>
          </div>
          <div className="ml-2">
            <p className="scroll-reveal max-w-24 text-left text-[9px] font-bold leading-[9px]">
              Other leading projects
            </p>
          </div>
        </div>
      </div>
      <div className="scroll-reveal mx-auto mt-4 flex items-center justify-center lg:hidden">
        <div>
          <p className="gap-2 text-2xl font-bold">
            170<span className="text-new-primary">+</span>
          </p>
        </div>
        <div className="ml-2">
          <p className="max-w-20 text-left text-[10px] font-bold leading-[12px]">
            Other leading projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
