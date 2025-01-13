import { useLocation } from "react-router";
import { useScriptContext } from "../../../hooks/useScriptContext";
import { Icons } from "../../icon/icons";
import { Input } from "../../ui/input";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export const Chatbox = () => {
  const { message, apiCall, isLoading } = useScriptContext();
  const [chat, setChat] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  const onSubmit = async () => {
    if (chat.length > 0) {
      const newChat = chat;
      setChat("");
      await apiCall(newChat);
    } else {
      toast.error("Plz tell me what u want");
    }
  };

  return (
    <div className="h-[535px] lg:px-4 py-6 flex flex-col gap-6 justify-end">
      <div className="overflow-auto py-2 flex flex-col gap-[13px]">
        {message.map((item, index) => {
          if (item.role === "user") {
            return <UserMessageCard key={index} message={item.content} />;
          } else {
            return <AiMessageCard key={index} message={item.content} />;
          }
        })}
        <div ref={messagesEndRef} />
      </div>
      <div className="relative">
        <Input
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          placeholder="Ask Quantis"
          className="pr-12"
        />
        {isLoading ? (
          <div className="absolute top-3 right-4">
            <Icons.loading className="text-primary size-6 animate-spin" />
          </div>
        ) : (
          <button
            disabled={isLoading}
            onClick={onSubmit}
            className="absolute top-3 right-4"
          >
            <Icons.send className="text-primary size-6 hover:-translate-x-1 transition-all active:translate-x-1" />
          </button>
        )}
      </div>
    </div>
  );
};

const AiMessageCard = ({ message }) => {
  return (
    <div className="flex items-end gap-2">
      <div className="max-w-6 w-full h-6">
        <img
          src={`/assets/images/Quantis.png`}
          alt="agent"
          className="size-full object-cover rounded-full"
        />
      </div>
      <div className="p-[10px] break-words rounded-2xl border border-primary-100 bg-primary-150 text-primary max-w-[283px] w-full">
        {message}
      </div>
    </div>
  );
};

const UserMessageCard = ({ message }) => {
  return (
    <div className="p-[10px] break-words ml-auto rounded-2xl border border-background-350 bg-background-200 text-foreground-100 max-w-[283px] w-full">
      {message}
    </div>
  );
};
