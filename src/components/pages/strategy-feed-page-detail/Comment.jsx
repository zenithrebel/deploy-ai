import React from "react";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import { Icons } from "../../icon/icons";
import { shortenAddress } from "../../../lib/utils";

export default function Comment() {
  return (
    <div className="lg:ml-[38px] mt-16 lg:mt-[86px]">
      <h1 className="text-[32px] font-heading text-primary mb-4 lg:mb-[22px]">
        13 Comments
      </h1>
      <div className="flex flex-col gap-2 items-end">
        <Textarea />
        <Button className="ml-auto">
          Post <Icons.send />
        </Button>
      </div>

      <div className="mt-6 space-y-6">
        <CommentItem
          address={"0x8739fdsd7dJSGNd980"}
          comment={
            "Sir who is best time frame use this indicator please reply sir"
          }
          time={"Jan 7"}
        />
        <div className="pl-8 border-l border-l-background-50">
          <CommentItem
            address={"0x8739fdsd7dJSGNd980"}
            comment={
              "Sir who is best time frame use this indicator please reply sir"
            }
            time={"Jan 7"}
          />
        </div>
        <CommentItem
          address={"0x8739fdsd7dJSGNd980"}
          comment={
            "Sir who is best time frame use this indicator please reply sir"
          }
          time={"Jan 7"}
        />
      </div>
    </div>
  );
}

const CommentItem = ({ address, image, time, comment }) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="size-[42px]">
          <img
            src="https://picsum.photos/250"
            alt="profile"
            className="size-full rounded-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <h2 className="text-secondary-50 text-sm">{shortenAddress(address, 4, 3)}</h2>
          <p className="text-xs">{time}</p>
        </div>
      </div>

      <p className="text-foreground-100 text-sm">{comment}</p>

      <div className="flex items-center gap-2 text-primary">
        <Icons.message className="size-5" />
        <span className="font-semibold text-sm">Reply</span>
      </div>
    </div>
  );
};
