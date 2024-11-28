import MySectionTitle from "@/components/common/my-section-title";
import MySpacer from "@/components/common/my-spacer";
import { Facebook, Instagram, Linkedin, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Tofajjol Hosen Raju",
    designation: "Leader",
    img: "/images/raju.png",
    social: {
      linkedIn: "/",
      insta: "/",
      fb: "/",
      share: "/",
    },
  },
  {
    name: "Rabeya Akter",
    designation: "Frontend Developer",
    img: "/images/rabeya.png",
    social: {
      linkedIn: "/",
      insta: "/",
      fb: "/",
      share: "/",
    },
  },
  {
    name: "Sarwar Hossain",
    designation: "Backend Developer",
    img: "/images/sarwar.png",
    social: {
      linkedIn: "/",
      insta: "/",
      fb: "/",
      share: "/",
    },
  },
  {
    name: "Nahid Hossain",
    designation: "UX/UI Designer",
    img: "/images/nahid.png",
    social: {
      linkedIn: "/",
      insta: "/",
      fb: "/",
      share: "/",
    },
  },
  {
    name: "Mehedi Hassan Tarek",
    designation: "Flutter Developer",
    img: "/images/mehedi.png",
    social: {
      linkedIn: "/",
      insta: "/",
      fb: "/",
      share: "/",
    },
  },
];

export const TeamMember = () => {
  return (
    <div className="pb-20" id="team">
      <MySectionTitle title="Team Member" />
      <p className="md:w-2/3 lg:w-1/2 mx-auto text-sm py-2 text-center">
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
      </p>

      <MySpacer className="h-10" />
      <div className="md:w-2/4 lg:w-1/4 mx-auto gap-16 lg:gap-8">
        {teamMembers
          .filter((item) => item.designation === "Leader")
          .map((mem, idx) => (
            <div key={idx} className="relative">
              <Image src={mem.img} width={450} height={450} alt={mem.name} />

              <div className="bg-white text-black rounded-md p-3 w-3/4 absolute right-0 -bottom-8">
                <h2 className="font-semibold">{mem.name}</h2>
                <p className="text-sm text-themePrimary">{mem.designation}</p>
              </div>

              <div className="flex flex-col gap-1 absolute right-4 -bottom-2">
                <Link
                  href={mem.social.linkedIn}
                  className="bg-themePrimary p-2 rounded-md"
                >
                  <Linkedin size={16} />
                </Link>
                <Link
                  href={mem.social.insta}
                  className="bg-themePrimary p-2 rounded-md"
                >
                  <Instagram size={16} />
                </Link>
                <Link
                  href={mem.social.fb}
                  className="bg-themePrimary p-2 rounded-md"
                >
                  <Facebook size={16} />
                </Link>
                <Link
                  href={mem.social.share}
                  className="bg-themePrimary p-2 rounded-md"
                >
                  <Share2 size={16} />
                </Link>
              </div>
            </div>
          ))}
      </div>

      <MySpacer className="h-16" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
        {teamMembers
          .filter((item) => item.designation !== "Leader")
          .map((mem, idx) => (
            <div key={idx} className="relative">
              <Image src={mem.img} width={450} height={450} alt={mem.name} />

              <div className="bg-white text-black rounded-md p-3 w-3/4 absolute right-0 -bottom-8">
                <h2 className="font-semibold">{mem.name}</h2>
                <p className="text-sm text-themePrimary">{mem.designation}</p>
              </div>

              <div className="flex flex-col gap-1 absolute right-4 -bottom-2">
                <Link
                  href={mem.social.linkedIn}
                  className="bg-themePrimary p-2 rounded-md"
                >
                  <Linkedin size={16} />
                </Link>
                <Link
                  href={mem.social.insta}
                  className="bg-themePrimary p-2 rounded-md"
                >
                  <Instagram size={16} />
                </Link>
                <Link
                  href={mem.social.fb}
                  className="bg-themePrimary p-2 rounded-md"
                >
                  <Facebook size={16} />
                </Link>
                <Link
                  href={mem.social.share}
                  className="bg-themePrimary p-2 rounded-md"
                >
                  <Share2 size={16} />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
