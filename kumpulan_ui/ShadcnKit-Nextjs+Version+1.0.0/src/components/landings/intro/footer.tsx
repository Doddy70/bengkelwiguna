import ShadcnKit from "@/components/icons/shadcn-kit";

const Footer = () => {
  return (
    <div className="container px-4">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-16">
        <div className="w-full md:max-w-[420px]">
          <ShadcnKit className="text-primary w-[212px] h-[50px] mx-auto md:mx-0" />
          <p className="font-medium text-secondary-foreground mt-6">
            ShadcnKit SaaS template is a powerful and versatile software
            application that provides a comprehensive framework for building and
            delivering cloud-based solutions.
          </p>
        </div>
        <div className="w-full md:max-w-[650px] flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="text-xl font-semibold mb-[30px]">Products</p>
            <ul className="flex flex-col gap-5 text-secondary-foreground">
              <li>Project Management</li>
              <li>Multi-tenancy</li>
              <li>Scalability</li>
              <li>Customization</li>
              <li>Integration</li>
              <li>Mobile accessibility</li>
              <li>Analytics and reporting</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold mb-[30px]">Features</p>
            <ul className="flex flex-col gap-5 text-secondary-foreground">
              <li>User management</li>
              <li>Workflow automation</li>
              <li>API access</li>
              <li>Data visualization</li>
              <li>Version control</li>
              <li>Upgrades</li>
              <li>Billing and invoicing</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold mb-[30px]">Explore</p>
            <ul className="flex flex-col gap-5 text-secondary-foreground">
              <li>Docs</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Blog</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-lg text-secondary-foreground p-6 text-center">
        Copyright © 2023 UI-Lib. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
