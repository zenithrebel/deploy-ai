import { useState } from "react";
import { Button } from "../../ui/button";
import { Icons } from "../../icon/icons";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { useScriptContext } from "../../../hooks/useScriptContext";
import { toast } from "sonner";
import { useLocation } from "react-router";

export const ScriptResultDetail = () => {
  const [isScript, setIsScript] = useState(true);
  const { script, message, deploy, isLoading } = useScriptContext();

  // scripts

  const handleCopyScript = () => {
    const newScript = script
      .replaceAll("/n", " ")
      .replaceAll("```", "")
      .replaceAll("pinescript", "");
    navigator.clipboard.writeText(newScript);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="rounded-lg sticky top-0 right-0 p-4 border max-h-[555px] w-full border-background-50 flex flex-col gap-4">
      <div className="flex max-lg:flex-col gap-2 lg:items-center justify-between lg:h-9">
        <div className="flex gap-2 lg:gap-2">
          <Button
            onClick={() => setIsScript(true)}
            className={` hover:bg-background-200 max-lg:w-full hover:text-primary ${
              isScript
                ? "bg-background-200 text-primary"
                : "bg-background-300 text-muted"
            }`}
            variant="tertiary"
          >
            SCRIPT
          </Button>
          {/* <Button
            onClick={() => setIsScript(false)}
            className={` hover:bg-background-200 max-lg:w-full hover:text-primary ${
              !isScript
                ? "bg-background-200 text-primary"
                : "bg-background-300 text-muted"
            }`}
            variant="tertiary"
          >
            RESULT
          </Button> */}
        </div>
        <div className="flex gap-2">
          {isScript && (
            <Button
              onClick={handleCopyScript}
              disabled={script.length > 0 ? false : true}
              className="max-lg:order-1"
              variant="outline"
            >
              <Icons.copy />
            </Button>
          )}
          <Button
            onClick={deploy}
            className="max-lg:w-full"
            disabled={script.length > 0 ? false : true}
          >
            DEPLOY
            <Icons.arrow className="-rotate-45" />
          </Button>
          {/* <DeployDialog /> */}
        </div>
      </div>
      {isScript ? (
        <>
          <div className="h-full max-w-full w-full rounded-lg overflow-auto">
            <SyntaxHighlighter
              customStyle={{
                backgroundColor: "#000000",
                padding: "24px 24px 48px 24px",
                overflow: "auto",
                height: "100%",
                width: "100%",
              }}
              style={a11yDark}
            >
              {script?.replaceAll("```", "").replaceAll("pinescript", "") ?? ""}
            </SyntaxHighlighter>
          </div>
          {/* <Button
            className="hover:bg-background-150 absolute inset-x-8 bottom-8 w shadow shadow-primary"
            variant="tertiary"
          >
            <Icons.code /> VIEW IN EDITOR
          </Button> */}
        </>
      ) : (
        <div className="size-full flex  flex-col lg:gap-[13px] py-2 rounded-lg overflow-auto">
          {message
            .filter((item) => item.role === "assistant")
            .map((item, index) => (
              <AiMessageCard key={index} message={item.content} />
            ))}
        </div>
      )}
    </div>
  );
};

const DeployDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="max-lg:w-full">
          DEPLOY TO TELEGRAM
          <Icons.arrow className="-rotate-45" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Coming Soon</DialogTitle>
        </DialogHeader>

        <DialogDescription className="text-center">
          This feature will release soon. Please kindly wait
        </DialogDescription>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button className="w-[212px]" variant="outline">
              CLOSE
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const CODE = `//@version=5
strategy("Moving Average Cross", overlay=true)
shortLength = input.int(30, minval=1, title="Short Moving Average Length")
longLength = input.int(200, minval=1, title="Long Moving Average Length")
shortMA = ta.sma(close, shortLength)
longMA = ta.sma(close, longLength)
plot(shortMA, title="Short Moving Average", color=color.red)
plot(longMA, title="Long Moving Average", color=color.blue)
longCondition = ta.crossover(shortMA, longMA)
longMA = ta.sma(close, longLength)
plot(shortMA, title="Short Moving Average", color=color.red)
plot(longMA, title="Long Moving Average", color=color.blue)
longCondition = ta.crossover(shortMA, longMA)
longMA = ta.sma(close, longLength)
plot(shortMA, title="Short Moving Average", color=color.red)
plot(longMA, title="Long Moving Average", color=color.blue)
longCondition = ta.crossover(shortMA, longMA)
longMA = ta.sma(close, longLength)
plot(shortMA, title="Short Moving Average", color=color.red)
plot(longMA, title="Long Moving Average", color=color.blue)
longCondition = ta.crossover(shortMA, longMA)
longMA = ta.sma(close, longLength)
plot(shortMA, title="Short Moving Average", color=color.red)
plot(longMA, title="Long Moving Average", color=color.blue)
longCondition = ta.crossover(shortMA, longMA)
longMA = ta.sma(close, longLength)
plot(shortMA, title="Short Moving Average", color=color.red)
plot(longMA, title="Long Moving Average", color=color.blue)
longCondition = ta.crossover(shortMA, longMA)
shortCondition = ta.crossunder(shortMA, longMA)
if (longCondition)
    strategy.entry("Long", strategy.long)
if (shortCondition)
    strategy.close("Long")
if (shortCondition)
    strategy.entry("Short", strategy.short)
if (longCondition)
    strategy.close("Short")
  `;
