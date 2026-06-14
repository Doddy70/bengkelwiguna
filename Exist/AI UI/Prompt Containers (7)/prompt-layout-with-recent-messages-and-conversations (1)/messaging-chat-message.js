"use client";

import React, {useCallback} from "react";
import {Avatar, Image} from "@nextui-org/react";
import {cn} from "@nextui-org/react";

const MessagingChatMessage = React.forwardRef(
  ({avatar, name, time, message, isRTL, imageUrl, className, classNames, ...props}, ref) => {
    const messageRef = React.useRef(null);

    const MessageAvatar = useCallback(
      () => (
        <div className="relative flex-none">
          <Avatar src={avatar} />
        </div>
      ),

      [avatar],
    );

    const Message = () => (
      <div className="flex max-w-[70%] flex-col gap-4">
        <div
          className={cn(
            "relative w-full rounded-medium bg-content2 px-4 py-3 text-default-600",
            classNames?.base,
          )}
        >
          <div className="flex">
            <div className="w-full text-small font-semibold text-default-foreground">{name}</div>
            <div className="flex-end text-small text-default-400">{time}</div>
          </div>
          <div ref={messageRef} className="mt-2 text-small text-default-900">
            <div className="whitespace-pre-line">{message}</div>
            {imageUrl && (
              <Image
                alt={`Image sent by ${name}`}
                className="mt-2 border-2 border-default-200 shadow-small"
                height={96}
                src={imageUrl}
                width={264}
              />
            )}
          </div>
        </div>
      </div>
    );

    return (
      <div
        {...props}
        ref={ref}
        className={cn("flex gap-3", {"flex-row-reverse": isRTL}, className)}
      >
        <MessageAvatar />
        <Message />
      </div>
    );
  },
);

MessagingChatMessage.displayName = "MessagingChatMessage";

export default MessagingChatMessage;
