import { Avatar, Badge, Timeline } from "flowbite-react";

export function EventScheduleTimelineThreeColumns() {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            The schedule
          </h2>
          <p className="text-xl font-medium leading-tight text-gray-500 dark:text-gray-400">
            April 27th, 28th, &amp; 29th 2023
          </p>
          <Badge className="inline-flex w-fit">
            <svg
              aria-hidden="true"
              className="mr-1 h-3 w-3"
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
        <div className="-mx-8 mt-12 grid grid-cols-1 gap-y-12 lg:mt-16 lg:grid-cols-3">
          <div className="space-y-12 px-8">
            <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
              Wednesday 27th
            </h3>
            <Timeline className="border-0">
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      9:00 - 10:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>Opening remarks</Timeline.Title>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      11:00 - 12:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    Bergside LLC: Controlling the video traffic flows
                  </Timeline.Title>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      11:00 - 12:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    Bergside LLC: Controlling the video traffic flows
                  </Timeline.Title>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3 rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      12:00 - 13:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>Coffee &amp; networking</Timeline.Title>
                  <Timeline.Body>
                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Sponsors:
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-4">
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
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/spotify-grayscale.svg"
                        alt=""
                      />
                      <img
                        className="h-7 w-auto object-contain"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/salesforce-grayscale.svg"
                        alt=""
                      />
                      <img
                        className="h-5 w-auto object-contain"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/google-grayscale.svg"
                        alt=""
                      />
                      <img
                        className="h-5 w-auto object-contain"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/sap-grayscale.svg"
                        alt=""
                      />
                    </div>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      15:00 - 16:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    Updates from the Open Source Multimedia community
                  </Timeline.Title>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      15:00 - 16:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    Updates from the Open Source Multimedia community
                  </Timeline.Title>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      17:00 - 18:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    Scaling your brand from €0 to multimillion euros
                  </Timeline.Title>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
          <div className="space-y-12 border-x border-gray-200 px-8 dark:border-gray-700">
            <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
              Thursday 28th
            </h3>
            <Timeline className="border-0">
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      10:00 - 11:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    Women in Streaming Media Networking
                  </Timeline.Title>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/leslie-livingston.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      13:00 - 14:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    The importance of platform optimisation in times of
                    expensive ads
                  </Timeline.Title>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                      rounded
                      className="justify-start"
                    >
                      <div>
                        <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                          Joseph McFall
                        </p>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          Engineer at Google
                        </p>
                      </div>
                    </Avatar>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3 rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      12:00 - 13:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>Coffee &amp; networking</Timeline.Title>
                  <Timeline.Body>
                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Sponsors:
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-4">
                      <img
                        className="h-7 w-auto object-contain"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/salesforce-grayscale.svg"
                        alt=""
                      />
                      <img
                        className="h-5 w-auto object-contain"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/google-grayscale.svg"
                        alt=""
                      />
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
                        className="h-5 w-auto object-contain"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/sap-grayscale.svg"
                        alt=""
                      />
                    </div>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      14:00 - 15:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    Flowbite - An Open Framework for Forensic Watermarking
                  </Timeline.Title>
                  <Timeline.Body className="space-y-3">
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                      rounded
                      className="justify-start"
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
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      14:00 - 15:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    Flowbite - An Open Framework for Forensic Watermarking
                  </Timeline.Title>
                  <Timeline.Body className="space-y-3">
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                      rounded
                      className="justify-start"
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
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      14:00 - 15:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    Exploring the balance between customer acquisition and
                    retention
                  </Timeline.Title>
                  <Timeline.Body className="space-y-3">
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                      rounded
                      className="justify-start"
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
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
          <div className="space-y-12 px-8">
            <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
              Friday 29th
            </h3>
            <Timeline className="border-0">
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      9:00 - 10:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>Opening remarks</Timeline.Title>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      11:00 - 12:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    Bergside LLC: Controlling the video traffic flows
                  </Timeline.Title>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      11:00 - 12:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    Bergside LLC: Controlling the video traffic flows
                  </Timeline.Title>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3 rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      12:00 - 13:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>Coffee &amp; networking</Timeline.Title>
                  <Timeline.Body>
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
                      <img
                        className="h-5 w-auto object-contain"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/google-grayscale.svg"
                        alt=""
                      />
                      <img
                        className="h-5 w-auto object-contain"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/sap-grayscale.svg"
                        alt=""
                      />
                    </div>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      15:00 - 16:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    Updates from the Open Source Multimedia community
                  </Timeline.Title>
                  <Timeline.Body>
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      17:00 - 18:00
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>
                    Scaling your brand from €0 to multimillion euros
                  </Timeline.Title>
                  <Timeline.Body className="space-y-3">
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                      rounded
                      className="justify-start"
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
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                      rounded
                      className="justify-start"
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
                    <Avatar
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                      rounded
                      className="justify-start"
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
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Content className="space-y-3 rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                  <Timeline.Time>
                    <Badge className="w-fit">
                      <svg
                        aria-hidden="true"
                        className="mr-1 h-3 w-3"
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
                      Wednesday 18:00 - 20:00 PDT
                    </Badge>
                  </Timeline.Time>
                  <Timeline.Title>Drinks &amp; networking</Timeline.Title>
                  <Timeline.Body>
                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Sponsors:
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-4">
                      <img
                        className="h-5 w-auto object-contain"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/google-grayscale.svg"
                        alt=""
                      />
                      <img
                        className="h-5 w-auto object-contain"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/sap-grayscale.svg"
                        alt=""
                      />
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
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
}
