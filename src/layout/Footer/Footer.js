import logo_dark from "../../assets/img/logo-dark.png";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="relative bg-neutral-950 px-4 py-20">
      <div className="mx-auto max-w-content">
        <div className="item-start flex flex-col items-center gap-16 text-center lg:flex-row lg:items-start lg:gap-28 lg:text-left">
          <div>
            <p className="mb-6 text-sm text-neutral-600">SOLUTIONS</p>
            <ul className="space-y-4 font-medium text-white">
              <li>
                <a href="https://app.cookie3.co" target="_blank">
                  Cookie3 Analytics
                </a>
              </li>
              <li className="opacity-50">Cookie3 Affiliate</li>
              <li className="opacity-50">MarketingFi</li>
            </ul>
          </div>
          <div>
            <p className="mb-6 text-sm text-neutral-600">RESOURCES</p>
            <ul className="space-y-4 font-medium text-white">
              <li>
                <a href="https://docs.cookie3.co" target="_blank">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://app.cookie3.co/plans" target="_blank">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/brand" target="_blank">
                  Brand kit
                </a>
              </li>
              <li>
                <a href="/contact" target="_blank">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" target="_blank">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-8 lg:flex-row">
          <img
            alt
            loading="lazy"
            width={180}
            height={40}
            decoding="async"
            data-nimg={1}
            className="invert"
            style={{ color: "transparent" }}
            src={logo_dark}
          />
          <div className="flex items-center gap-8">
            <div className=" flex items-center gap-8 text-sm text-white">
              <a
                href="https://discord.gg/cookie3"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-2 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 256 256"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z" />
                  </svg>
                  <p className="hidden font-medium lg:block">Discord</p>
                </div>
              </a>
              <a
                href="https://twitter.com/cookie3_com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                  <p className="hidden font-medium lg:block">X (Twitter)</p>
                </div>
              </a>
              <a
                href="https://t.me/cookie3_co"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 256 256"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19ZM183.53,208,100.85,135.5l119-85.29Z" />
                  </svg>
                  <p className="hidden font-medium lg:block">Telegram</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/cookie3/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 256 256"
                    className="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z" />
                  </svg>
                  <p className="hidden font-medium lg:block">LinkedIn</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-neutral-600 lg:text-left">
          Copyright © 2024 Cookie3. All Rights Reserved.{/* */}{" "}
          <br className="lg:hidden" />{" "}
          <a href="/privacy" target="_blank">
            Privacy policy
          </a>{" "}
          {/* */}|{/* */}{" "}
          <a href="/terms" target="_blank">
            Terms of service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
