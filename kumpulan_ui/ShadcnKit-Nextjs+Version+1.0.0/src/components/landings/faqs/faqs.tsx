import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { nanoid } from "nanoid";
import Image from "next/image";

const FAQs = () => {
  return (
    <div className="container px-4 flex flex-col md:flex-row items-start justify-between gap-12 md:gap-7 my-[120px] md:my-[200px]">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <h4 className="font-bold mb-[60px]">Frequently asked questions</h4>

        <div className="flex flex-col gap-4">
          {faqs.map(({ id, name, question, answer }) => (
            <AccordionItem
              key={id}
              value={name}
              className="border border-border rounded-2xl"
            >
              <AccordionTrigger className="text-start text-lg px-7 py-6 font-medium hover:no-underline">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-start px-7 py-6">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>

      <Image
        width={494}
        height={560}
        src="/assets/profiles/Base-4.png"
        alt="shadcnkit"
      />
    </div>
  );
};

const faqs = [
  {
    id: nanoid(),
    name: "item-1",
    question: "What is project management software?",
    answer:
      "Project management software helps teams to stay organized and on track by providing a central hub for project information, task assignment & progress tracking.",
  },
  {
    id: nanoid(),
    name: "item-2",
    question: "How does project management software help teams?",
    answer:
      "Project management software helps teams to stay organized and on track by providing a central hub for project information, task assignment & progress tracking.",
  },
  {
    id: nanoid(),
    name: "item-3",
    question: "What features should I look for in project management software?",
    answer:
      "Project management software helps teams to stay organized and on track by providing a central hub for project information, task assignment & progress tracking.",
  },
  {
    id: nanoid(),
    name: "item-4",
    question: "Is project management software easy to use?",
    answer:
      "Project management software helps teams to stay organized and on track by providing a central hub for project information, task assignment & progress tracking.",
  },
  {
    id: nanoid(),
    name: "item-5",
    question: "Can project management software be used by remote teams?",
    answer:
      "Project management software helps teams to stay organized and on track by providing a central hub for project information, task assignment & progress tracking.",
  },
];

export default FAQs;
