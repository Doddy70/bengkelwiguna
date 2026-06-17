"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  //   console.log(watch("name"));

  return (
    <div className="bg-card py-20 mb-[120px] md:mb-[200px]">
      <div className="container px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-20">
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:max-w-[484px] gap-5"
          >
            <h4 className="font-bold mb-12">Say Hello!</h4>

            <div className="mb-5">
              <Input
                type="text"
                placeholder="Name"
                className="p-4 h-[52px] rounded-[10px]"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-5">
              <Input
                type="email"
                placeholder="Email"
                className="p-4 h-[52px] rounded-[10px]"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-5">
              <Input
                type="text"
                placeholder="Subject"
                className="p-4 h-[52px] rounded-[10px]"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <Textarea
                placeholder="Message"
                rows={8}
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <Button type="submit" className="h-12 px-7 mt-12">
              Submit
            </Button>
          </form>
        </div>
        <div className="w-full flex justify-center md:justify-start">
          <Image
            width={484}
            height={544}
            src="/assets/images/contact-map.png"
            alt="shadcnkit"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
