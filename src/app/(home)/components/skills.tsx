import MySectionTitle from "@/components/common/my-section-title";
import MySpacer from "@/components/common/my-spacer";
import Image from "next/image";

const skillsData = [
  {
    id: "1",
    title: "Figma",
    skill: "90%",
    img: "/images/figma.svg.png",
  },
  {
    id: "1",
    title: "Sketch",
    skill: "90%",
    img: "/images/sketch.svg.png",
  },
  {
    id: "1",
    title: "XD",
    skill: "80%",
    img: "/images/xd.svg.png",
  },
  {
    id: "1",
    title: "Wordpress",
    skill: "70%",
    img: "/images/wp.svg.png",
  },
  {
    id: "1",
    title: "React",
    skill: "80%",
    img: "/images/react.svg.png",
  },
  {
    id: "1",
    title: "JavaScript",
    skill: "90%",
    img: "/images/js.svg.png",
  },
];

export const Skills = () => {
  return (
    <div className="pb-20">
      <MySectionTitle title="My Skills" />
      <p className="md:w-2/3 lg:w-1/2 mx-auto text-sm py-2 text-center">
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
      </p>

      <MySpacer className="h-10" />
      <div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-10">
          {skillsData.map((item, idx) => (
            <div key={idx} className="">
              <div className="py-7 px-10 bg-[#140C1C] rounded-xl">
                <div className="flex items-center justify-center">
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt="hero image"
                  />
                </div>

                <p className="text-center pt-3 text-sm text-gray-500 font-semibold">
                  {item.skill}
                </p>
              </div>
              <p className="text-center py-3 text-themePrimary">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
