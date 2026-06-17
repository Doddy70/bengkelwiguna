import Slate from "@/components/icons/slate";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import CheckCircle from "@/components/icons/check-circle";

const Pricing = () => {
  return (
    <div className="pricing container px-4">
      <div className="max-w-[526px] mx-auto mb-12 text-center">
        <h4 className="font-bold mb-7">Pricing (Limited Offer)</h4>
        <p className="font-medium text-secondary-foreground">
          Its time to Save hours of design development time & Thanks for your
          support toward ShadcnKit
        </p>

        {/* <div className="flex items-center justify-center space-x-2 mt-12">
          <Label htmlFor="airplane-mode" className="text-base font-medium">
            MONTHLY
          </Label>
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode" className="text-base font-medium">
            YEARLY (Save 15%)
          </Label>
        </div> */}
      </div>

      <div className="grid grid-cols-8 gap-4 max-w-screen-md m-auto   s   mb-6 ">
        <div className="p-10  col-span-8 flex flex-row justify-between rounded-2xl border border-border hover:border-primary group">
          <div>
            <p className="font-semibold text-secondary-foreground">
              Limited LTD 🎁 (Figma+NextJs)
            </p>

            <h4 className="font-bold mt-6">
              $79
              <p className="text-base  font-normal text-secondary-foreground">
                <p className="line-through">$197</p>
                (20 copy Left )
              </p>
            </h4>

            <div className="relative inline-flex mt-6 group">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                href="#"
                title="Get quote now"
                className="relative inline-flex items-center mr-4 justify-center px-4 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Save Time & Money
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-12">
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>Life Time updates</span>
            </p>
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>100+ Pages and Counting</span>
            </p>
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>500+ Components and Counting </span>
            </p>
          </div>
          {/* <div className="flex flex-col gap-4 mb-12">
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>Normal security</span>
            </p>
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>Permissions & workflows</span>
            </p>
          </div> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        <div className="p-10 rounded-2xl border border-border hover:border-primary group">
          <p className="font-semibold text-secondary-foreground">Figma</p>

          <h4 className="font-bold mt-6">
            $29
            <p className="text-base  font-normal text-secondary-foreground">
              <p className="line-through">$69</p>
              (23 copy Left )
            </p>
          </h4>
          <Slate className="my-12" />

          <div className="flex flex-col gap-4 mb-12">
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>All figma Components</span>
            </p>
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>6 Months of free Updates</span>
            </p>
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>1 Personal or Commercial Project</span>
            </p>
            {/* <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>Normal security</span>
            </p>
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>Permissions & workflows</span>
            </p> */}
          </div>

          <Button className="bg-icon w-full group-hover:bg-primary">
            Save Time & Money
          </Button>
        </div>

        <div className="p-10 rounded-2xl border border-border hover:border-primary group">
          <p className="font-semibold text-secondary-foreground">NextJs</p>
          <h4 className="font-bold mt-6">
            $49
            <p className="text-base  font-normal text-secondary-foreground">
              <p className="line-through">$99</p>
              (10 copy Left )
            </p>
          </h4>
          <Slate className="my-12" />

          <div className="flex flex-col gap-4 mb-12">
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>NextJs Version </span>
            </p>
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>6 Months of free Updates</span>
            </p>
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>1 Personal or Commercial Project</span>
            </p>
          </div>

          <Button className="bg-icon w-full group-hover:bg-primary">
            Save Time & Money
          </Button>
        </div>

        <div className="p-10 rounded-2xl border border-border hover:border-primary group">
          <p className="font-semibold">Figma+NextJs</p>
          <h4 className="font-bold mt-6">
            $69
            <p className="text-base  font-normal text-secondary-foreground">
              <p className="line-through">$159</p>
              (17 copy Left )
            </p>
          </h4>
          <Slate className="my-12" />

          <div className="flex flex-col gap-4 mb-12">
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>Figma + NextJs Version </span>
            </p>
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>6 Months of free Updates</span>
            </p>
            <p className="flex items-center">
              <CheckCircle className="mr-3 w-4 h-4" />
              <span>1 Personal or Commercial Project</span>
            </p>
          </div>

          <Button className="bg-icon w-full group-hover:bg-primary">
            Save Time & Money
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
