import { Button } from "@/components/ui/button";
import React from "react";

const AvailableJobs = () => {
  return (
    <div className="container px-4 py-[120px] md:py-[200px]">
      <div className="text-center mb-[60px]">
        <h4 className="font-bold mb-7">Available Jobs</h4>
        <p className="text-lg font-medium text-secondary-foreground">
          Join our dynamic team of professionals and shape the future of IT
          Industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {jobs.map((job, ind) => (
          <div
            key={ind}
            className="p-10 rounded-2xl border border-border hover:border-primary"
          >
            <p className="text-2xl font-semibold mb-7">{job.title}</p>
            <p className="text-secondary-foreground mb-14">{job.description}</p>
            <div className="flex flex-wrap gap-3 mb-7">
              {job.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-[7px] rounded bg-card-hover text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <Button variant="outline">View Details</Button>
              <Button>Apply this job</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const jobs = [
  {
    title: "Software Engineer",
    description:
      "We are excited to announce that our company is seeking a creative UI/UX designer to join our team.",
    features: ["Full-time", "Remote", "$500/monthly"],
  },
  {
    title: "UI and UX Designer",
    description:
      "We are excited to announce that our company is seeking a creative UI/UX designer to join our team.",
    features: ["Full-time", "Remote", "$500/monthly"],
  },
  {
    title: "Digital Marketer",
    description:
      "We are excited to announce that our company is seeking a creative UI/UX designer to join our team.",
    features: ["Full-time", "Remote", "$500/monthly"],
  },
  {
    title: "Digital Marketer",
    description:
      "We are excited to announce that our company is seeking a creative UI/UX designer to join our team.",
    features: ["Full-time", "Remote", "$500/monthly"],
  },
  {
    title: "Graphic Designer",
    description:
      "We are excited to announce that our company is seeking a creative UI/UX designer to join our team.",
    features: ["Full-time", "Remote", "$500/monthly"],
  },
  {
    title: "HR Manager",
    description:
      "We are excited to announce that our company is seeking a creative UI/UX designer to join our team.",
    features: ["Full-time", "Remote", "$500/monthly"],
  },
];

export default AvailableJobs;
