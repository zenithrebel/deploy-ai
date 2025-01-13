import React from "react";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Heading from "../../global/Heading";
import { Badge } from "../../ui/badge";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Button } from "../../ui/button";
import { Icons } from "../../icon/icons";

export default function Detail({ data }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
      <div className="space-y-6 lg:space-y-8">
        <Heading
          title={data.title}
          description={
            data.explanation
          }
          titleClass={"max-lg:text-3xl"}
        />
        <div className="lg:ml-[38px] grid grid-cols-2 gap-3">
          <DetailCard label={"Contract complexity"} value={"Medium"} />
          <DetailCard label={"Security Score"} value={"90%"} />
          <DetailCard label={"Gas Efficiency"} value={"85%"} />
          <DetailCard label={"Tokenomics"} value={"Neutral"} />
        </div>
        <ul className="lg:ml-[38px] space-y-4 lg:space-y-6">
          <li className="space-y-2">
            <h2 className="text-foreground-50/70 text-xs">Technologies</h2>
            <div className="flex items-center gap-3 flex-wrap">
              {data?.tags?.map((item, index) => (
                <Badge key={index} variant={"secondary"}>{item}</Badge>
              ))}
            </div>
          </li>
          {/* <li className="space-y-2">
            <h2 className="text-foreground-50/70 text-xs">
              Smart Contract Features
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant={"secondary"}>Initialize</Badge>
              <Badge variant={"secondary"}>buy_tokens</Badge>
              <Badge variant={"secondary"}>get_analysis</Badge>
            </div>
          </li>
          <li className="space-y-2">
            <h2 className="text-foreground-50/70 text-xs">Target Audience</h2>
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant={"secondary"}>Developers</Badge>
              <Badge variant={"secondary"}>Investors</Badge>
              <Badge variant={"secondary"}>Token Buyers</Badge>
            </div>
          </li>
          <li className="space-y-2">
            <h2 className="text-foreground-50/70 text-xs">Defi Metrics</h2>
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant={"secondary"}>token sale</Badge>
            </div>
          </li> */}
        </ul>
      </div>

      <div className="rounded-lg relative p-4 border max-h-[555px] border-background-50">
        <div className="absolute top-6 right-6 w-fit space-x-2">
          <Button
            className="shadow shadow-primary hover:bg-background-150"
            variant="tertiary"
          >
            <Icons.copy />
          </Button>
          <Button className="hover:bg-primary shadow hover:shadow-background-50">
            <Icons.robot />
            <Icons.arrow className="-rotate-45" />
          </Button>
        </div>
        <div className="size-full rounded-lg overflow-auto">
          <SyntaxHighlighter
            className
            customStyle={{
              backgroundColor: "#000000",
              padding: "24px 24px 48px 24px",
              overflow: "auto",
              height: "100%",
              width: "100%",
            }}
            style={a11yDark}
          >
            {data?.script?.replaceAll("```", "").replaceAll("pinescript", "") ??
              ""}
          </SyntaxHighlighter>
        </div>
        <Button
          className="hover:bg-background-150 absolute inset-x-8 bottom-8 w shadow shadow-primary"
          variant="tertiary"
        >
          <Icons.code /> VIEW IN EDITOR
        </Button>
      </div>
    </div>
  );
}

const DetailCard = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-3 bg-background-150 rounded-lg">
      <h2 className="text-foreground-50/70 text-xs">{label}</h2>
      <p className="text-secondary-50 text-sm font-semibold">{value}</p>
    </div>
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
