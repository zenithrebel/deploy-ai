import { Icons } from "../../icon/icons";
import { Input } from "../../ui/input";

export const Chatbox = () => {
  return (
    <div className="h-[535px] px-4 py-6 flex flex-col gap-6 justify-end">
      <div className="overflow-auto py-2 flex flex-col gap-[13px]">
        <UserMessageCard />
        <AiMessageCard />
        <UserMessageCard />
        <AiMessageCard />
        <UserMessageCard />
        <AiMessageCard />
        <UserMessageCard />
        <AiMessageCard />
      </div>
      <div className="relative">
        <Input placeholder="Ask Quantis" className="pr-12" />
        <button className="absolute top-3 right-4"><Icons.send className="text-primary size-6 hover:-translate-x-1 transition-all active:translate-x-1" /></button>
      </div>
    </div>
  );
};

const AiMessageCard = () => {
  return (
    <div className="flex items-end gap-2">
      <div className="size-6">
        <img
          src="/assets/images/img-agent-1.png"
          alt="agent"
          className="size-full object-cover rounded-full"
        />
      </div>
      <div className="p-[10px] break-words rounded-2xl border border-primary-100 bg-primary-150 text-primary max-w-[283px] w-fit">
        I've added flying mechanics to the car! You can now press 'space' to
        make the car fly up and 'shift' to fly down. The car will maintain its
      </div>
    </div>
  );
};

const UserMessageCard = () => {
  return (
    <div className="p-[10px] break-words ml-auto rounded-2xl border border-background-350 bg-background-200 text-foreground-100 max-w-[283px] w-fit">
      I've added flying mechanics to the car! You can now press 'space' to make
      the car fly up and 'shift' to fly down. The car will maintain its
    </div>
  );
};
