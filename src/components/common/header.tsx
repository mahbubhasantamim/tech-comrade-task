"use client";

import { LinkConstant } from "@/constants/nav-link.constant";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const MyHeader = () => {
  return (
    <div className="bg-themeSecondary py-3 fixed top-0 w-full mb-4 px-6 md:px-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image
            src={"/images/logo.png"}
            width={60}
            height={60}
            alt="tech comrade logo"
          />
        </div>
        <div className="hidden md:block">
          <ul className="space-x-7 font-medium">
            {LinkConstant.navLinks.map((item) => (
              <Link
                href={item.value}
                key={item.value}
                className={`hover:underline`}
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={"/"}
            className="flex gap-2 items-center w-fit py-2.5 px-5 bg-gradient-to-r from-themePrimary from-20%  via-black via-50% to-themePrimary to-90% rounded-full text-sm font-medium hover:opacity-80 transition duration-300"
          >
            Order Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};
