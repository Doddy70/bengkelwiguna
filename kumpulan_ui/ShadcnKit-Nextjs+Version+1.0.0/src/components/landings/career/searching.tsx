import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

const Searching = () => {
  return (
    <div className="faqs-cta py-[30px] mt-6">
      <div className="container px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-20 md:gap-4">
        <div>
          <h4 className="font-bold">How can we help you?</h4>
          <div className="mt-[30px] relative">
            <Input
              type="text"
              placeholder="Search Question"
              className="p-4 pl-11 h-[52px] max-w-[484px] rounded-[10px] placeholder:text-muted-foreground"
            />
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-icon" />
          </div>
        </div>

        <Image
          width={260}
          height={256}
          src="/assets/images/searching.png"
          alt="shadcnkit"
        />
      </div>
    </div>
  );
};

export default Searching;
