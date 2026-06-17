import Cloud from "@/components/icons/cloud";
import Pencil from "@/components/icons/pencil";
import VectorDown from "@/components/icons/vector-down";
import VectorUp from "@/components/icons/vector-up";
import ViewBoards from "@/components/icons/view-boards";
import React from "react";

const Features = () => {
  return (
    <div className="container px-4 mb-[100px] md:mb-[160px]">
      <div className="max-w-[600px] mx-auto text-center mb-[60px]">
        <p className="font-semibold text-secondary-foreground">HOW IT WORKS</p>
        <h4 className="font-bold my-[30px]">Stop wasting your time</h4>
        <p className="font-medium text-secondary-foreground">
          AI writers analyze text and generate content using NLP and machine
          learning.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="bg-card w-full md:w-[23.33%] py-[82px] px-10 rounded-2xl">
          <Cloud className="mx-auto mb-7" />
          <p className="text-xl font-bold text-center">Insert Topic</p>
        </div>

        <div className="w-full md:w-[15%] px-7 py-10">
          <VectorDown className="w-full text-card-hover" />
        </div>

        <div className="bg-card w-full md:w-[23.33%] py-[82px] px-10 rounded-2xl">
          <Pencil className="mx-auto mb-7" />
          <p className="text-xl font-bold text-center">Edit Documents</p>
        </div>

        <div className="w-full md:w-[15%] px-7 py-10">
          <VectorUp className="w-full text-card-hover" />
        </div>

        <div className="bg-card w-full md:w-[23.33%] py-[82px] px-10 rounded-2xl">
          <ViewBoards className="mx-auto mb-7" />
          <p className="text-xl font-bold text-center">Article Ready</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
