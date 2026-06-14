"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {Card, CardHeader, CardBody} from "@nextui-org/react";

import SidebarContainer from "./sidebar-with-clear-with-toggle-button";

import PromptInputWithEnclosedActions from "./prompt-input-with-enclosed-actions";

const messages = [
  {
    key: "message1",
    description: "Study Italian vocabulary",
    icon: <Icon className="text-primary-700" icon="solar:notebook-square-bold" width={24} />,
  },
  {
    key: "message2",
    description: "Message inviting friend to wedding",
    icon: <Icon className="text-danger-600" icon="solar:chat-square-like-bold" width={24} />,
  },
  {
    key: "message3",
    description: "Experience Buenos Aires like a local",
    icon: <Icon className="text-warning-600" icon="solar:user-id-bold" width={24} />,
  },
  {
    key: "message4",
    description: "Design a fun Tetris game",
    icon: <Icon className="text-success-600" icon="solar:gameboy-bold" width={24} />,
  },
];

export default function Component() {
  return (
    <div className="h-full w-full max-w-full">
      <SidebarContainer
        classNames={{
          header: "min-h-[40px] h-[40px] py-[12px] justify-center overflow-hidden",
        }}
        header={
          <Dropdown className="bg-content1">
            <DropdownTrigger>
              <Button
                disableAnimation
                className="w-full min-w-[120px] items-center text-default-400 data-[hover=true]:bg-[unset]"
                endContent={
                  <Icon
                    className="text-default-400"
                    height={20}
                    icon="solar:alt-arrow-down-linear"
                    width={20}
                  />
                }
                variant="light"
              >
                ACME v4
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="acme model version" className="p-0 pt-2" variant="faded">
              <DropdownSection
                classNames={{
                  heading: "text-tiny px-[10px]",
                }}
                title="Model"
              >
                <DropdownItem
                  key="acme-v4"
                  className="text-default-500 data-[hover=true]:text-default-500"
                  classNames={{
                    description: "text-default-500 text-tiny",
                  }}
                  description="Newest and most advanced model"
                  endContent={
                    <Icon
                      className="text-default-foreground"
                      height={24}
                      icon="solar:check-circle-bold"
                      width={24}
                    />
                  }
                  startContent={
                    <Icon
                      className="text-default-400"
                      height={24}
                      icon="solar:star-rings-linear"
                      width={24}
                    />
                  }
                >
                  ACME v4
                </DropdownItem>

                <DropdownItem
                  key="acme-v3.5"
                  className="text-default-500 data-[hover=true]:text-default-500"
                  classNames={{
                    description: "text-default-500 text-tiny",
                  }}
                  description="Advanced model for complex tasks"
                  startContent={
                    <Icon
                      className="text-default-400"
                      height={24}
                      icon="solar:star-shine-outline"
                      width={24}
                    />
                  }
                >
                  ACME v3.5
                </DropdownItem>

                <DropdownItem
                  key="acme-v3"
                  className="text-default-500 data-[hover=true]:text-default-500"
                  classNames={{
                    description: "text-default-500 text-tiny",
                  }}
                  description="Great for everyday tasks"
                  startContent={
                    <Icon
                      className="text-default-400"
                      height={24}
                      icon="solar:star-linear"
                      width={24}
                    />
                  }
                >
                  ACME v3
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        }
      >
        <div className="relative flex h-full flex-col px-6">
          <div className="flex h-full flex-col items-center justify-center gap-10">
            <div className="flex rounded-full bg-foreground">
              <svg
                className="text-background"
                fill="none"
                height="56"
                viewBox="0 0 56 64"
                width="56"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M30.8843 21.7283L27.7874 16.2952L12.3021 43.4623H18.4236L30.8843 21.7283ZM34.7896 28.5799L31.6925 34.097L33.9395 38.0394H29.4793L26.4348 43.4623H43.2726L34.7896 28.5799Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
              {messages.map((message) => (
                <Card
                  key={message.key}
                  className="h-auto bg-default-100 px-[20px] py-[16px]"
                  shadow="none"
                >
                  <CardHeader className="p-0 pb-[9px]">{message.icon}</CardHeader>
                  <CardBody className="p-0 text-small text-default-400">
                    {message.description}
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-auto flex max-w-full flex-col gap-2">
            <PromptInputWithEnclosedActions
              classNames={{
                button:
                  "bg-default-foreground opacity-100 w-[30px] h-[30px] !min-w-[30px] self-center",
                buttonIcon: "text-background",
                input: "placeholder:text-default-500",
              }}
              placeholder="Send a message to AcmeAI"
            />
            <p className="px-2 text-center text-small font-medium leading-5 text-default-500">
              AcmeAI can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </SidebarContainer>
    </div>
  );
}
