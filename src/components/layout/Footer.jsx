import React from "react";
import { Link } from "react-router-dom";

import Logo from "../logo";

function Footer() {
  return (
    <div className="w-full flex flex-col px-8 lg:px-16 bg-slate-600">
      <div className="w-full min-h-fit flex flex-row flex-wrap lg:flex-nowrap justify-center items-start">
        <div className="w-full lg:w-1/2 lg:pr-24 flex flex-col justify-start items-center lg:items-start my-4">
          <div className="flex flex-row justify-between lg:flex-col text-left items-center lg:items-start gap-6 my-4">
            <Logo
              imageOnly={
                window.innerWidth < 640
                  ? true
                  : window.innerWidth > 640 && window.innerWidth < 1024
                  ? true
                  : window.innerWidth > 1024 && window.innerWidth < 1280
                  ? false
                  : false
              }
              iconWidth={window.innerWidth < 640 ? "8rem" : "4rem"}
            />
            <p className="font-semibold text-center lg:text-left opacity-50 w-1/2 lg:w-full text-slate-100">
              Our mission is to unite artists and liberate creativity. Being
              Canada's first NFT marketplace, we love working with local artists
              of all genres and walks of life.
            </p>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/3 flex flex-col justify-start items-center lg:items-start my-4">
          <div className="flex flex-col text-center lg:text-left gap-3 my-4">
            <p className="text-xl font-extrabold" style={{ color: "#BC7BDC" }}>
              Resources
            </p>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Help & Support
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Getting Started
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Blog
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Community
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Socials
            </Link>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/3 flex flex-col justify-start items-center lg:items-start my-4">
          <div className="flex flex-col text-center lg:text-left gap-3 my-4">
            <p className="text-xl font-extrabold" style={{ color: "#BC7BDC" }}>
              Marketplace
            </p>
            <Link to="https://artisancoin.io" className="text-slate-100">
              All Assets
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Art
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Music
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Video
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Utility
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Collectibles
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Photography
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Cinematography
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Sports
            </Link>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/3 flex flex-col justify-start items-center lg:items-start my-4">
          <div className="flex flex-col text-center lg:text-left gap-3 my-4">
            <p className="text-xl font-extrabold" style={{ color: "#BC7BDC" }}>
              My Account
            </p>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Profile
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Notifications
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Inbox
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Bookmarked
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              My Assets
            </Link>
          </div>
          <div className="flex flex-col text-center lg:text-left gap-3 my-4">
            <p className="text-xl font-extrabold" style={{ color: "#BC7BDC" }}>
              Rewards
            </p>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Refer a friend
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Stream and earn
            </Link>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/3 flex flex-col justify-start items-center lg:items-start my-4">
          <div className="flex flex-col text-center lg:text-left gap-3 my-4">
            <p className="text-xl font-extrabold" style={{ color: "#BC7BDC" }}>
              Company
            </p>
            <Link to="https://artisancoin.io" className="text-slate-100">
              About
            </Link>
            <Link to="https://artisancoin.io" className="text-slate-100">
              Careers
            </Link>
          </div>
        </div>
      </div>
      <div
        className="w-full flex flex-row justify-center items-center border-t-2 px-12 py-6"
        style={{ borderColor: "#BC7BDC" }}
      >
        <div
          className="w-full flex flex-row flex-wrap justify-center lg:justify-between gap-3 items-center font-bold"
          style={{ fontSize: "10px" }}
        >
          <p className="text-slate-100">&copy; 2022 Artisan NFT</p>
          <div className="flex flex-row items-center gap-3 text-slate-100">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
