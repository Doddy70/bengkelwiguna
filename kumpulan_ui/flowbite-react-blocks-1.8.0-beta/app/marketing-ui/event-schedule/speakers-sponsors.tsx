import { Avatar, Badge, Timeline } from "flowbite-react";

export function EventScheduleSpeakersSponsors() {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Wednesday
          </h2>
          <p className="text-xl font-medium leading-tight text-gray-500 dark:text-gray-400">
            October 27, 2023
          </p>
          <Badge className="inline-flex w-fit">
            <svg
              aria-hidden="true"
              className="mb-1 mr-1 h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            Central Standard Time (GMT-6)
          </Badge>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 lg:mt-16 lg:grid-cols-2">
          <div className="space-y-8">
            <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
              Morning
            </h3>
            <Timeline className="border-0">
              <Timeline.Item className="mb-0">
                <Timeline.Content>
                  <div className="mb-0 md:flex">
                    <Timeline.Time className="flex-[0_0_7rem] py-1 pr-3 text-sm text-gray-500 dark:text-gray-400">
                      07:00 - 08:00
                    </Timeline.Time>
                    <div className="border-gray-300 pb-8 dark:border-gray-600 md:border-l md:pl-3">
                      <Timeline.Title>Opening remarks</Timeline.Title>
                      <Timeline.Body className="space-y-3">
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Welcoming attendees, introducing the purpose of the
                          event, and set the tone for the rest of the
                          proceedings.
                        </p>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Jese Leos
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                CEO &amp; Co Founder Bergside LLC
                              </p>
                            </div>
                          </Avatar>
                        </div>
                      </Timeline.Body>
                    </div>
                  </div>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="mb-0">
                <Timeline.Content>
                  <div className="mb-0 md:flex">
                    <Timeline.Time className="flex-[0_0_7rem] py-1 pr-3 text-sm text-gray-500 dark:text-gray-400">
                      08:00 - 09:00
                    </Timeline.Time>
                    <div className="border-gray-300 pb-8 dark:border-gray-600 md:border-l md:pl-3">
                      <Timeline.Title>
                        Bergside LLC: Controlling the video traffic flows
                      </Timeline.Title>
                      <Timeline.Body className="space-y-3">
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          With an open scripting format for video manipulation,
                          you can publish your own movie smarter.
                        </p>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Lana Byrd
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Video Engineer
                              </p>
                            </div>
                          </Avatar>
                        </div>
                      </Timeline.Body>
                    </div>
                  </div>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="mb-0">
                <Timeline.Content>
                  <div className="mb-0 md:flex">
                    <Timeline.Time className="flex-[0_0_7rem] py-1 pr-3 text-sm text-gray-500 dark:text-gray-400">
                      10:00 - 11:00
                    </Timeline.Time>
                    <div className="border-gray-300 pb-8 dark:border-gray-600 md:border-l md:pl-3">
                      <Timeline.Title>
                        Flowbite - An Open Framework for Forensic Watermarking
                      </Timeline.Title>
                      <Timeline.Body className="space-y-3">
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Start developing with an open-source library of over
                          450+ UI components, sections, and pages.
                        </p>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Micheal Gough
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                CTO at Flowbite
                              </p>
                            </div>
                          </Avatar>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Karen Nelson
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                React developer at Flowbite
                              </p>
                            </div>
                          </Avatar>
                        </div>
                      </Timeline.Body>
                    </div>
                  </div>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="mb-0">
                <Timeline.Content>
                  <div className="mb-0 md:flex">
                    <Timeline.Time className="flex-[0_0_7rem] py-1 pr-3 text-sm text-gray-500 dark:text-gray-400">
                      11:00 - 11:30
                    </Timeline.Time>
                    <div className="border-gray-300 pb-8 dark:border-gray-600 md:border-l md:pl-3">
                      <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                        <Timeline.Title>Coffee &amp; networking</Timeline.Title>
                        <Timeline.Body className="space-y-3">
                          <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                            Sponsors:
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-4">
                            <img
                              className="h-7 w-auto object-contain"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/spotify-grayscale.svg"
                              alt=""
                            />
                            <img
                              className="h-5 w-auto object-contain"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/microsoft-grayscale.svg"
                              alt=""
                            />
                            <img
                              className="h-5 w-auto object-contain"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/slack-grayscale.svg"
                              alt=""
                            />
                            <img
                              className="h-7 w-auto object-contain"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/salesforce-grayscale.svg"
                              alt=""
                            />
                          </div>
                        </Timeline.Body>
                      </div>
                    </div>
                  </div>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="mb-0">
                <Timeline.Content>
                  <div className="mb-0 md:flex">
                    <Timeline.Time className="flex-[0_0_7rem] py-1 pr-3 text-sm text-gray-500 dark:text-gray-400">
                      11:30 - 12:00
                    </Timeline.Time>
                    <div className="border-gray-300 pb-8 dark:border-gray-600 md:border-l md:pl-3">
                      <Timeline.Title>
                        Scaling your brand from €0 to multimillion euros
                      </Timeline.Title>
                      <Timeline.Body className="space-y-3">
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Scaling a business means setting the stage to enable
                          and support growth in your company.
                        </p>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Thomas Lean
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                COO Salesforce
                              </p>
                            </div>
                          </Avatar>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Neil Sims
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                CTO Salesforce
                              </p>
                            </div>
                          </Avatar>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Bonnie Green
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Python Developer
                              </p>
                            </div>
                          </Avatar>
                        </div>
                      </Timeline.Body>
                    </div>
                  </div>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="mb-0">
                <Timeline.Content>
                  <div className="mb-0 md:flex">
                    <Timeline.Time className="flex-[0_0_7rem] py-1 pr-3 text-sm text-gray-500 dark:text-gray-400">
                      12:00 - 13:00
                    </Timeline.Time>
                    <div className="border-gray-300 pb-0 dark:border-gray-600 md:border-l md:pl-3">
                      <Timeline.Title>
                        Updates from the Open Source Multimedia community
                      </Timeline.Title>
                      <Timeline.Body className="space-y-3">
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          This year, we will share updates from the open source
                          multimedia community.
                        </p>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Robert Brown
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Videolan
                              </p>
                            </div>
                          </Avatar>
                        </div>
                      </Timeline.Body>
                    </div>
                  </div>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
          <div className="space-y-8">
            <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
              Afternoon
            </h3>
            <Timeline className="border-0">
              <Timeline.Item className="mb-0">
                <Timeline.Content>
                  <div className="mb-0 md:flex">
                    <Timeline.Time className="flex-[0_0_7rem] py-1 pr-3 text-sm text-gray-500 dark:text-gray-400">
                      13:00 - 14:00
                    </Timeline.Time>
                    <div className="border-gray-300 pb-8 dark:border-gray-600 md:border-l md:pl-3">
                      <Timeline.Title>
                        Women in Streaming Media Networking
                      </Timeline.Title>
                      <Timeline.Body className="space-y-3">
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Our mission is to increase diversity and give more
                          visibility to women leaders in the streaming media
                          industry.
                        </p>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/leslie-livingston.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Leslie Livingston
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                CEO &amp; Co Founder Meta
                              </p>
                            </div>
                          </Avatar>
                        </div>
                      </Timeline.Body>
                    </div>
                  </div>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="mb-0">
                <Timeline.Content>
                  <div className="mb-0 md:flex">
                    <Timeline.Time className="flex-[0_0_7rem] py-1 pr-3 text-sm text-gray-500 dark:text-gray-400">
                      14:00 - 15:00
                    </Timeline.Time>
                    <div className="border-gray-300 pb-8 dark:border-gray-600 md:border-l md:pl-3">
                      <Timeline.Title>
                        Exploring the balance between customer acquisition and
                        retention
                      </Timeline.Title>
                      <Timeline.Body className="space-y-3">
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          It is easier and also cheaper to retain existing
                          customers than onboard new ones.
                        </p>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Helene Engels
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Senior VP Amazon
                              </p>
                            </div>
                          </Avatar>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Roberta Casas
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Head Designer Amazon
                              </p>
                            </div>
                          </Avatar>
                        </div>
                      </Timeline.Body>
                    </div>
                  </div>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="mb-0">
                <Timeline.Content>
                  <div className="mb-0 md:flex">
                    <Timeline.Time className="flex-[0_0_7rem] py-1 pr-3 text-sm text-gray-500 dark:text-gray-400">
                      15:00 - 15:30
                    </Timeline.Time>
                    <div className="border-gray-300 pb-8 dark:border-gray-600 md:border-l md:pl-3">
                      <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                        <Timeline.Title>Coffee Break</Timeline.Title>
                        <Timeline.Body className="space-y-3">
                          <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                            Sponsors:
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-4">
                            <img
                              className="h-7 w-auto object-contain"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/spotify-grayscale.svg"
                              alt=""
                            />
                            <img
                              className="h-5 w-auto object-contain"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/microsoft-grayscale.svg"
                              alt=""
                            />
                            <img
                              className="h-5 w-auto object-contain"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/slack-grayscale.svg"
                              alt=""
                            />
                            <img
                              className="h-7 w-auto object-contain"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/salesforce-grayscale.svg"
                              alt=""
                            />
                          </div>
                        </Timeline.Body>
                      </div>
                    </div>
                  </div>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="mb-0">
                <Timeline.Content>
                  <div className="mb-0 md:flex">
                    <Timeline.Time className="flex-[0_0_7rem] py-1 pr-3 text-sm text-gray-500 dark:text-gray-400">
                      15:30 - 16:00
                    </Timeline.Time>
                    <div className="border-gray-300 pb-8 dark:border-gray-600 md:border-l md:pl-3">
                      <Timeline.Title>
                        Flowbite - An Open Framework for Forensic Watermarking
                      </Timeline.Title>
                      <Timeline.Body className="space-y-3">
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Start developing with an open-source library of over
                          450+ UI components, sections, and pages.
                        </p>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Micheal Gough
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                CTO at Flowbite
                              </p>
                            </div>
                          </Avatar>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Karen Nelson
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                React developer at Flowbite
                              </p>
                            </div>
                          </Avatar>
                        </div>
                      </Timeline.Body>
                    </div>
                  </div>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="mb-0">
                <Timeline.Content>
                  <div className="mb-0 md:flex">
                    <Timeline.Time className="flex-[0_0_7rem] py-1 pr-3 text-sm text-gray-500 dark:text-gray-400">
                      16:00 - 17:00
                    </Timeline.Time>
                    <div className="border-gray-300 pb-8 dark:border-gray-600 md:border-l md:pl-3">
                      <Timeline.Title>
                        Scaling your brand from €0 to multimillion euros
                      </Timeline.Title>
                      <Timeline.Body className="space-y-3">
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Scaling a business means setting the stage to enable
                          and support growth in your company.
                        </p>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Thomas Lean
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                COO Salesforce
                              </p>
                            </div>
                          </Avatar>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Neil Sims
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                CTO Salesforce
                              </p>
                            </div>
                          </Avatar>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar
                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                            rounded
                          >
                            <div>
                              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                                Bonnie Green
                              </p>
                              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Python Developer
                              </p>
                            </div>
                          </Avatar>
                        </div>
                      </Timeline.Body>
                    </div>
                  </div>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="mb-0">
                <Timeline.Content>
                  <div className="mb-0 md:flex">
                    <Timeline.Time className="flex-[0_0_7rem] py-1 pr-3 text-sm text-gray-500 dark:text-gray-400">
                      17:00 - 19:00
                    </Timeline.Time>
                    <div className="border-gray-300 pb-0 dark:border-gray-600 md:border-l md:pl-3">
                      <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                        <Timeline.Title>Drinks &amp; networking</Timeline.Title>
                        <Timeline.Body className="space-y-3">
                          <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                            Sponsors:
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-4">
                            <img
                              className="h-7 w-auto object-contain"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/spotify-grayscale.svg"
                              alt=""
                            />
                            <img
                              className="h-5 w-auto object-contain"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/microsoft-grayscale.svg"
                              alt=""
                            />
                            <img
                              className="h-5 w-auto object-contain"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/slack-grayscale.svg"
                              alt=""
                            />
                            <img
                              className="h-7 w-auto object-contain"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/salesforce-grayscale.svg"
                              alt=""
                            />
                          </div>
                        </Timeline.Body>
                      </div>
                    </div>
                  </div>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
}
