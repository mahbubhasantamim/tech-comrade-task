"use client";

import MyButton from "@/components/common/form/my-button";
import MySectionTitle from "@/components/common/my-section-title";
import MySpacer from "@/components/common/my-spacer";
import Image from "next/image";
import Link from "next/link";

const portfolioData = [
  {
    id: "1",
    img: "/images/portfolio-img.png",
  },
  {
    id: "2",
    img: "/images/portfolio-img.png",
  },
  {
    id: "3",
    img: "/images/portfolio-img.png",
  },
  {
    id: "4",
    img: "/images/portfolio-img.png",
  },
];

const tabs = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "UI/UX",
    value: "uiux",
  },
  {
    label: "Branding",
    value: "branding",
  },
  {
    label: "Apps",
    value: "apps",
  },
];
export const RecentWork = () => {
  return (
    <div className="pb-20" id="portfolio">
      <MySectionTitle title="My Recent Works" />
      <p className="md:w-2/3 lg:w-1/2 mx-auto text-sm py-2 text-center">
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
      </p>

      <MySpacer className="h-10" />
      <div>
        <div className="text-center">
          {tabs.map((item) => (
            <MyButton
              key={item.value}
              title={item.label}
              onClick={() => {}}
              className="rounded-full"
              variant={"secondary"}
            />
          ))}
        </div>

        <MySpacer className="h-4 md:h-8" />
        <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-10 bg-[url('/images/gradient_blur.png')] bg-contain bg-center">
          {portfolioData.map((item, idx) => (
            <Link
              href={"/"}
              key={idx}
              className="p-5 md:p-8 lg:p-10 pb-0 bg-[#140C1C] rounded-lg"
            >
              <Image src={item.img} width={800} height={800} alt="hero image" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
