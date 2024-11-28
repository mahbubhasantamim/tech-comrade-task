"use client";

import MyButton from "@/components/common/form/my-button";
import { MyInputWithRHF } from "@/components/common/form/my-input";
import { MySelectWithRHF } from "@/components/common/form/my-select";
import MySectionTitle from "@/components/common/my-section-title";
import MyContainerWrapper from "@/layouts/my-container-wrapper";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { useHomeController } from "../home.controller";

export const Contacts = () => {
  const { control, isSubmitting, handleSubmit } = useHomeController();
  return (
    <div className="bg-black py-20" id="contact">
      <MyContainerWrapper>
        <div className="grid md:grid-cols-3 lg:grid-cols-2 gap-4 lg:gap-28 items-center">
          <div className="md:col-span-2 lg:col-span-1 bg-themeSecondary p-8 space-y-4">
            <MySectionTitle
              title="Let’s work together!"
              className="text-left"
            />
            <p className="text-sm py-2">
              I design and code beautifully simple things and i love what i do.
              Just simple like that!
            </p>
            <div className="grid grid-cols-2 gap-3">
              <MyInputWithRHF
                control={control}
                name="firstName"
                placeholder="First name"
                hideLabel
              />
              <MyInputWithRHF
                control={control}
                name="lastName"
                placeholder="Last name"
                hideLabel
              />
              <MyInputWithRHF
                type="email"
                control={control}
                name="email"
                placeholder="Email address"
                hideLabel
              />
              <MyInputWithRHF
                control={control}
                name="phone"
                placeholder="Phone number"
                hideLabel
              />
            </div>
            <MySelectWithRHF
              options={[
                {
                  label: "App Development",
                  value: "app-development",
                },
                {
                  label: "Web Development",
                  value: "web-development",
                },
                {
                  label: "UI/UX Design",
                  value: "uiux-design",
                },
              ]}
              control={control}
              name="service"
              placeholder="Select service"
            />
            <MyInputWithRHF
              isTextArea
              control={control}
              name="message"
              hideLabel
            />

            <MyButton
              title="Send Message"
              onClick={async () => await handleSubmit()}
              className="rounded-full"
              loading={isSubmitting}
            />
          </div>
          <div className="space-y-8 px-6 ">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-gradient-to-r from-black from-2%  to-themePrimary to-90% rounded-full">
                <PhoneCall size={18} />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-300 text-sm">012324234</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="p-4 bg-gradient-to-r from-black from-2%  to-themePrimary to-90% rounded-full">
                <Mail size={18} />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300 text-sm">012324234</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="p-4 bg-gradient-to-r from-black from-2%  to-themePrimary to-90% rounded-full">
                <MapPin size={18} />
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-300 text-sm">012324234</p>
              </div>
            </div>
          </div>
        </div>
      </MyContainerWrapper>
    </div>
  );
};
