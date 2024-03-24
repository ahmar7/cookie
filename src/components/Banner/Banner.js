import chart__2 from "../../assets/img/chart (2).png";
import chart from "../../assets/img/chart.png";
import user from "../../assets/img/user.png";
import rocket from "../../assets/img/rocket.png";
import check from "../../assets/img/check.png";
import coin from "../../assets/img/coin.png";
import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-black">
      <section className="relative z-10 bg-black">
        <div className=" relative overflow-hidden pb-32">
          <div className=" absolute -left-12 bottom-80 hidden h-[400px] w-[400px] lg:block">
            <svg
              viewBox="0 0 234 234"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M139.966 117.86L211.377 117.86C223.945 117.86 234 107.656 234 95.1592L234 22.7006C234 10.2038 223.831 -4.44499e-07 211.377 -9.88885e-07L139.28 -4.14033e-06C126.712 -4.68971e-06 116.657 10.2038 116.657 22.7006L116.657 93.5541C116.657 106.166 106.488 116.255 94.0342 116.255L22.623 116.255C10.0547 116.255 -5.52768e-06 126.459 -6.07393e-06 138.955L-9.23619e-06 211.299C-9.78745e-06 223.911 10.1689 234 22.623 234L94.7197 234C107.288 234 117.343 223.796 117.343 211.299L117.343 140.446C117.343 127.834 127.512 117.745 139.966 117.745L139.966 117.86Z"
                stroke="#0FF378"
              />
            </svg>
          </div>
          <div className=" absolute -right-12 top-80 hidden h-[300px] w-[300px] lg:block ">
            <svg
              viewBox="0 0 234 234"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M139.966 117.86L211.377 117.86C223.945 117.86 234 107.656 234 95.1592L234 22.7006C234 10.2038 223.831 -4.44499e-07 211.377 -9.88885e-07L139.28 -4.14033e-06C126.712 -4.68971e-06 116.657 10.2038 116.657 22.7006L116.657 93.5541C116.657 106.166 106.488 116.255 94.0342 116.255L22.623 116.255C10.0547 116.255 -5.52768e-06 126.459 -6.07393e-06 138.955L-9.23619e-06 211.299C-9.78745e-06 223.911 10.1689 234 22.623 234L94.7197 234C107.288 234 117.343 223.796 117.343 211.299L117.343 140.446C117.343 127.834 127.512 117.745 139.966 117.745L139.966 117.86Z"
                stroke="#0FF378"
              />
            </svg>
          </div>
          <div className="slide-up-fade-in initial-opacity z-0">
            <div
              className="!absolute left-0 top-0 !h-screen !w-screen"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <canvas
                  style={{ display: "block", width: 1599, height: 1041 }}
                  data-engine="three.js r162"
                  width={3198}
                  height={2082}
                />
              </div>
            </div>
          </div>
          <div className="relative z-10 mx-auto max-w-content  px-2 py-16 text-white lg:px-4 lg:py-28 xl:px-4">
            <div className="lg:flex-start flex flex-col items-center justify-between px-0 lg:flex-row lg:items-start lg:gap-32">
              <div>
                <h1 className="slide-up-fade-in initial-opacity text-center font-display text-[32px] leading-[38px] lg:hidden">
                  <span className="text-reveal">MarketingFi protocol</span>
                  <br className=" " />
                  <span className="text-reveal delay-2">
                    {" "}
                    {/* */}&amp; AI data layer.
                  </span>
                  <br />
                  <span className="text-new-primary">
                    Get into the big game.
                  </span>
                </h1>
                <h1 className=" hidden max-w-3xl whitespace-nowrap text-center   font-display text-2xl font-medium text-white md:text-left md:text-5xl lg:block 2xl:max-w-3xl 2xl:text-left 2xl:text-6xl ">
                  <span>MarketingFi protocol</span>
                  <br />
                  <span>&amp; AI data layer.</span>
                  <br />
                  <span className="text-new-primary">
                    Get into the big game.
                  </span>
                </h1>
              </div>
              <div className="flex h-full max-w-lg  flex-col justify-between 2xl:max-w-96">
                <p className="slide-up-fade-in delay-2 initial-opacity mx-auto mt-2 max-w-[315px] text-center md:text-lg lg:mx-0 lg:text-left   2xl:text-xl  xl:mt-2">
                  Unlocking fair value exchange and redistribution of money in
                  Web3 and beyond.
                </p>
                <div className=" mt-4 flex items-center gap-2 px-2 lg:mt-8 lg:px-0">
                  <a href="https://discord.gg/cookie3" target="_blank">
                    <button className="inline-flex items-center whitespace-nowrap font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-new-primary text-neutral-950 hover:bg-green-400 rounded-md slide-up-fade-in initial-opacity delay-3 h-[52px] w-auto justify-between px-3 text-base tracking-tight">
                      <div className="text-left">
                        <div>Join our community</div>
                        <div className="text-[10px] font-medium leading-[12px] text-[#00843D]">
                          127k community members
                        </div>
                      </div>
                    </button>
                  </a>
                  <div data-state="closed">
                    <button className="inline-flex whitespace-nowrap font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-neutral-900 hover:bg-neutral-100/80 rounded-md slide-up-fade-in initial-opacity delay-4 pointer-events-none h-[52px] w-auto items-center justify-between bg-neutral-800/80 px-3 text-base tracking-tight backdrop-blur">
                      <div className="text-left text-neutral-300 opacity-30">
                        <div>Claim your reward</div>
                        <div className="text-[10px] font-medium leading-[12px] ">
                          Discover your score
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative z-0 mx-auto mt-16 h-[500px] w-full max-w-content lg:-mt-16 lg:h-[1000px]">
            <div>
              <div className=" mx-auto h-full w-full lg:hidden">
                <img
                  id="chart-m"
                  alt
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg={1}
                  className="slide-up-fade-in initial-opacity delay-1 absolute -top-12 left-8 object-contain"
                  style={{ color: "transparent" }}
                  src={chart}
                />
                <img
                  id="user-m"
                  alt
                  loading="lazy"
                  width={60}
                  height={60}
                  decoding="async"
                  data-nimg={1}
                  className="slide-up-fade-in initial-opacity delay-2 absolute -top-24 right-0 object-contain"
                  style={{ color: "transparent" }}
                  src={user}
                />
                <img
                  id="rocket-m"
                  alt
                  loading="lazy"
                  width={70}
                  height={70}
                  decoding="async"
                  data-nimg={1}
                  className="slide-up-fade-in initial-opacity delay-3 absolute bottom-72 right-4 object-contain"
                  style={{ color: "transparent" }}
                  src={rocket}
                />
                <img
                  id="check-m"
                  alt
                  loading="lazy"
                  width={60}
                  height={60}
                  decoding="async"
                  data-nimg={1}
                  className="slide-up-fade-in initial-opacity delay-4 absolute bottom-72 left-0 object-contain"
                  style={{ color: "transparent" }}
                  src={check}
                />
              </div>
              <div className=" mx-auto hidden h-full max-w-content  lg:block">
                <div
                  className="delay-1 absolute left-64 top-12 object-contain"
                  style={{ transform: "none" }}
                >
                  <img
                    id="chart"
                    alt
                    loading="lazy"
                    width={150}
                    height={150}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src={chart__2}
                  />
                </div>
                <div
                  className=" delay-2 absolute bottom-72 left-24 object-contain"
                  style={{ transform: "none" }}
                >
                  <img
                    id="user"
                    alt
                    loading="lazy"
                    width={120}
                    height={120}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src={user}
                  />
                </div>
                <div
                  className=" delay-3 absolute bottom-80 right-64 object-contain"
                  style={{ transform: "none" }}
                >
                  <img
                    id="rocket"
                    alt
                    loading="lazy"
                    width={120}
                    height={120}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src={rocket}
                  />
                </div>
                <div
                  className="absolute right-52 top-12  object-contain"
                  style={{ transform: "none" }}
                >
                  <img
                    id="check"
                    alt
                    loading="lazy"
                    width={140}
                    height={140}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src={check}
                  />
                </div>
              </div>
            </div>
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 lg:-top-32 lg:bottom-40 lg:block">
              <div className="hidden h-[1000px] w-[1000px] translate-y-32 items-start justify-center 3xl:flex">
                <img
                  alt
                  fetchpriority="high"
                  width={800}
                  height={800}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                  src={coin}
                />
              </div>
              <div className="hidden h-[900px] w-[900px] translate-y-32 items-start justify-center lg:flex">
                <img
                  alt
                  fetchpriority="high"
                  width={700}
                  height={700}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                  src={coin}
                />
              </div>
              <div className="h-[340px] w-[340px] overflow-visible lg:hidden">
                <img
                  alt
                  fetchpriority="high"
                  width={340}
                  height={340}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                  src={coin}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto -mt-96 max-w-content lg:-mt-96">
            <div className="flex items-center">
              <div className="mx-auto mt-8 hidden h-full max-w-6xl grid-cols-4 gap-4 lg:grid">
                <div className="flex h-full flex-col rounded-2xl !bg-background-dimmed/50 p-8 text-white backdrop-blur slide-up-fade-in delay-1 initial-opacity border-gradient-to-bl">
                  <h3 className="font-display text-5xl [&>span]:text-new-primary">
                    170<span>+</span>
                  </h3>
                  <p className="mt-2 font-medium">dApps</p>
                  <p className="mt-4 text-sm text-neutral-300">
                    trusted Cookie3 MarketingFi solutions including Analytics
                    and Affiliate
                  </p>
                </div>
                <div className="flex h-full flex-col rounded-2xl !bg-background-dimmed/50 p-8 text-white backdrop-blur slide-up-fade-in delay-2 initial-opacity">
                  <h3 className="font-display text-5xl [&>span]:text-new-primary">
                    26<span>%</span>
                  </h3>
                  <p className="mt-2 font-medium">of all Ethereum wallets</p>
                  <p className="mt-4 text-sm text-neutral-300">
                    used dApps integrated within the Cookie3 MarketingFi
                    ecosystem
                  </p>
                </div>
                <div className="flex h-full flex-col rounded-2xl !bg-background-dimmed/50 p-8 text-white backdrop-blur slide-up-fade-in delay-2 initial-opacity">
                  <h3 className="font-display text-5xl [&>span]:text-new-primary">
                    600M<span>+</span>
                  </h3>
                  <p className="mt-2 font-medium">processed wallets</p>
                  <p className="mt-4 text-sm text-neutral-300">
                    on 16+ EVM chains including Ethereum, Polygon, Arbitrum,
                    Avax, BNB Chain, and Base
                  </p>
                </div>
                <div className="flex h-full flex-col rounded-2xl !bg-background-dimmed/50 p-8 text-white backdrop-blur slide-up-fade-in delay-1 initial-opacity border-gradient-to-tr">
                  <h3 className="font-display text-5xl [&>span]:text-new-primary">
                    9B<span>+</span>
                  </h3>
                  <p className="mt-2 font-medium">multichain transactions</p>
                  <p className="mt-4 text-sm text-neutral-300">
                    processed by Cookie3 Tracking Engine and used for training
                    LLMs
                  </p>
                </div>
              </div>
              <div
                className="relative -ml-4 -mr-4 pr-8 pt-8 lg:hidden"
                style={{ overflow: "hidden" }}
              >
                <div
                  style={{
                    display: "flex",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <div
                    style={{ willChange: "transform" }}
                    className="shrink-0 grow-0 relative ml-4 basis-[70%] first:ml-8"
                  >
                    <div className="flex h-full flex-col rounded-2xl bg-neutral-900/80 p-4 text-white backdrop-blur slide-up-fade-in delay-1 initial-opacity border-gradient-to-bl">
                      <h3 className="font-display text-5xl [&>span]:text-new-primary">
                        170<span>+</span>
                      </h3>
                      <p className="font-medium">dApps</p>
                      <p className="mt-2 text-sm text-neutral-200">
                        trusted Cookie3 MarketingFi solutions including
                        Analytics and Affiliate
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ willChange: "transform" }}
                    className="shrink-0 grow-0 relative ml-4 basis-[70%] first:ml-8"
                  >
                    <div className="flex h-full flex-col rounded-2xl bg-neutral-900/80 p-4 text-white backdrop-blur slide-up-fade-in delay-2 initial-opacity">
                      <h3 className="font-display text-5xl [&>span]:text-new-primary">
                        26<span>%</span>
                      </h3>
                      <p className="font-medium">of all Ethereum wallets</p>
                      <p className="mt-2 text-sm text-neutral-200">
                        used dApps integrated within the Cookie3 MarketingFi
                        ecosystem
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ willChange: "transform" }}
                    className="shrink-0 grow-0 relative ml-4 basis-[70%] first:ml-8"
                  >
                    <div className="flex h-full flex-col rounded-2xl bg-neutral-900/80 p-4 text-white backdrop-blur slide-up-fade-in delay-2 initial-opacity">
                      <h3 className="font-display text-5xl [&>span]:text-new-primary">
                        600M<span>+</span>
                      </h3>
                      <p className="font-medium">processed wallets</p>
                      <p className="mt-2 text-sm text-neutral-200">
                        on 16+ EVM chains including Ethereum, Polygon, Arbitrum,
                        Avax, BNB Chain, and Base
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ willChange: "transform" }}
                    className="shrink-0 grow-0 relative ml-4 basis-[70%] first:ml-8"
                  >
                    <div className="flex h-full flex-col rounded-2xl bg-neutral-900/80 p-4 text-white backdrop-blur slide-up-fade-in delay-1 initial-opacity border-gradient-to-tr">
                      <h3 className="font-display text-5xl [&>span]:text-new-primary">
                        9B<span>+</span>
                      </h3>
                      <p className="font-medium">multichain transactions</p>
                      <p className="mt-2 text-sm text-neutral-200">
                        processed by Cookie3 Tracking Engine and used for
                        training LLMs
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
