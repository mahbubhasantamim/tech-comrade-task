import Image from "next/image";

export const Testimonial = () => {
  return (
    <div className="border-2 border-dashed border-themePrimary rounded-md rounded-tl-[120px] rounded-br-[120px] p-10 my-10">
      <div className="grid md:grid-cols-3 gap-10 items-center justify-center">
        <div className="md:col-span-1 flex justify-center items-center">
          <Image
            src={"/images/testimonial-sec.png"}
            width={450}
            height={450}
            alt={"testimonial"}
          />
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-center">
            What Our Clients Say
          </h3>
          <p className="md:w-2/3 mx-auto text-sm py-2 text-center">
            &quot;The team at NexasBiz provided exceptional service and support
            throughout our project. Their expertise and dedication to our
            success were evident from day one. The results exceeded our
            expectations, and we continue to benefit from their ongoing
            optimization efforts.&quot;
          </p>

          <div className="h-0.5 bg-themePrimary my-8"></div>

          <div className="flex gap-2 items-center justify-center">
            <Image
              src={"/images/avatar.png"}
              width={60}
              height={60}
              alt={"avatar"}
            />

            <div>
              <h2 className="font-medium">Michael Brown</h2>
              <p className="text-sm">CTO of DEF Ltd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
