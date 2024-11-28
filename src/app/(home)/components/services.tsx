import MySectionTitle from "@/components/common/my-section-title";
import MySpacer from "@/components/common/my-spacer";
import { ArrowUpRight } from "lucide-react";

const servicesData = [
  {
    title: "Branding Design",
    desc: "I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people",
  },
  {
    title: "App Design",
    desc: "I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people",
  },
  {
    title: "Web Design",
    desc: "I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people",
  },
  {
    title: "UI/UX Design",
    desc: "I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people",
  },
];
export const Services = () => {
  return (
    <div className="pb-20 md:py-20" id="services">
      <MySectionTitle title="Innovative Digital Services" />
      <p className="md:w-2/3 lg:w-1/2 mx-auto text-sm py-2 text-center">
        Tech Comrade delivers custom software solutions designed to accelerate
        your business growth. We combine innovation with practicality to ensure
        your digital transformation is smooth, efficient, and impactful.
      </p>

      <MySpacer className="h-10" />
      <div className="divide-y border-t border-b border-themePrimary divide-themePrimary">
        {servicesData.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-12 gap-2 px-4 lg:px-10 py-3 items-center hover:bg-gradient-to-r from-bgColor to-themePrimary"
          >
            <p className="col-span-1">{idx + 1}</p>
            <h3 className="col-span-3 text-base md:text-xl font-semibold">
              {item.title}
            </h3>
            <p className="col-span-7 lg:col-span-5 text-sm md:text-base">
              {item.desc}
            </p>
            <div className="col-span-1 lg:col-span-3 text-right flex justify-end items-center">
              <ArrowUpRight size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
