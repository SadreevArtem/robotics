"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { orbitron } from "@/app/page";
import clsx from "clsx";
import Link from "next/link";

export const Header: React.FC = () => {
  useEffect(() => {
    const updateScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header?.classList.add("header-scroll");
      } else {
        header?.classList.remove("header-scroll");
      }
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header
      className={`md:p-5 p-4 fixed top-0 z-20 bg-transparent w-full transition-colors duration-500 delay-300  ${orbitron.className}`}
    >
      <div className={"container flex items-center justify-between min-h-6"}>
        <div className="max-md:flex items-center gap-[10px] hidden lg:flex">
          <div className="flex gap-4  w-[70px] h-[70px]">
            <Image
              className="object-cover rounded-full"
              src={"/logo.jpg"}
              alt="log"
              width={70}
              height={70}
            />
          </div>
          <div className="text-[20px] font-extrabold">
            <p className="text-white uppercase">Robotics and</p>
            <p className="text-white uppercase">motors</p>
          </div>
        </div>

        <div className="text-white max-md:hidden text-[20px] lg:px-8 px-2 py-2">
          <ul className="flex gap-[55px] max-lg:text-sm items-center">
            <li>
              <Link className="hover:text-active-link" href={"/"}>
                Automated Production Lines
              </Link>
            </li>
            <li>
              <Link className="hover:text-active-link" href={"/"}>
                AI & Software
              </Link>
            </li>
            <li>
              <Link className="hover:text-active-link" href={"/"}>
                Biological Robots
              </Link>
            </li>
            <li>
              <Link className="hover:text-active-link" href={"/"}>
                Space
              </Link>
            </li>
          </ul>
        </div>
        <nav className="flex items-center gap-4">
          <ul className="flex gap-[28px] items-center">
            <li className="max-md:hidden">
              <div className={clsx("flex flex-col gap-1 ")}>
                <div className={clsx("bg-white w-[22px] h-[2px]")} />
                <div className={clsx("bg-white w-[22px] h-[2px]")} />
                <div className={clsx("bg-white w-[22px] h-[2px]")} />
                <div className={clsx("bg-white w-[22px] h-[2px]")} />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
