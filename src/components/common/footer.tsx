import MyContainerWrapper from "@/layouts/my-container-wrapper";
import Image from "next/image";
import Link from "next/link";
import MySpacer from "./my-spacer";

const footerLink = [
  {
    label: "Services",
    value: "/",
  },
  {
    label: "Portfolio",
    value: "/",
  },
  {
    label: "Team",
    value: "/",
  },
  {
    label: "Contact",
    value: "/#how-it-works",
  },
];
export default function MyFooter() {
  return (
    <div className="py-20">
      <MyContainerWrapper className="px-6 md:px-0">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <Image
              src={"/images/logo.png"}
              width={60}
              height={60}
              alt="tech comrade logo"
            />
          </div>

          <MySpacer className="h-10" />
          <div>
            <ul className="space-x-7 font-medium">
              {footerLink.map((item) => (
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
          <MySpacer className="h-6" />
          <p className="text-sm text-gray-500">
            © 2024 All rights reserved by{" "}
            <span className="uppercase text-white font-semibold ml-5">
              Tech comrade
            </span>
          </p>
        </div>
      </MyContainerWrapper>
    </div>
  );
}
