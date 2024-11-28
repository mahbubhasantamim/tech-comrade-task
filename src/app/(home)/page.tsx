import MySpacer from "@/components/common/my-spacer";
import MyContainerWrapper from "@/layouts/my-container-wrapper";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Contacts } from "./components/contact";
import { RecentWork } from "./components/recent-work";
import { Services } from "./components/services";
import { Skills } from "./components/skills";
import { TeamMember } from "./components/team-member";
import { Testimonial } from "./components/testimonial";

export default function Home() {
  return (
    <>
      {/* HERO SECTION  */}
      <div className="bg-[url('/images/hero-bg.png')] bg-cover lg:bg-center py-28">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid md:grid-cols-5 pt-16 lg:pt-32">
            <div className="col-span-3">
              <div>
                <div className=" flex gap-2 items-center text-sm justify-center md:justify-start">
                  <TrendingUp size={16} className="text-themePrimary" />
                  <p>&quot;Innovating Solutions, Empowering Success&quot;</p>
                </div>
                <MySpacer className="h-3 md:h-6" />

                <h1 className="text-4xl lg:text-6xl font-bold text-center md:text-left">
                  Seamless software for <br /> limitless possibilities
                </h1>
              </div>

              <MySpacer className="h-14" />
              <div className="flex items-center gap-3 md:gap-5 justify-center md:justify-start">
                <Link
                  href={"/"}
                  className="flex gap-2 items-center w-fit py-3 px-5 bg-gradient-to-r from-themePrimary from-20%  via-black via-50% to-themePrimary to-90% rounded-full text-sm font-medium hover:opacity-80 transition duration-300"
                >
                  Explore Our Service
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href={"/"}
                  className="border-2 border-themePrimary flex gap-2 items-center w-fit py-2 px-5 rounded-full text-themePrimary"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>

              <MySpacer className="h-16" />
              <div className="flex items-center gap-5 justify-center md:justify-start">
                <div>
                  <p className="text-4xl font-semibold text-center py-3">1k+</p>
                  <p>Satisfied Customer</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold text-center py-3">
                    1.2k+
                  </p>
                  <p>Project Complete</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 mx-auto hidden md:block">
              <Image
                src={"/images/hero-img.png"}
                width={450}
                height={450}
                alt="hero image"
                className="w-64 lg:w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <MyContainerWrapper className="px-4 md:px-0">
        <Services />
        <RecentWork />
        <Skills />
        <TeamMember />
        <Testimonial />
      </MyContainerWrapper>
      <Contacts />
    </>
  );
}
