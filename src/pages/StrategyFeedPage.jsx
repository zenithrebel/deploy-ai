import React from "react";
import Heading from "../components/global/Heading";
import { Icons } from "../components/icon/icons";
import StrategyCard from "../components/pages/strategy-feed-page/StrategyCard";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";

export default function StrategyFeedPage() {
  const navigate = useNavigate();
  return (
    <div className="space-y-[56px]">
      <div className="flex max-lg:flex-col gap-4 lg:items-center justify-between">
        <Heading
          title={"Strategy Feed"}
          description={"Choose your specialized AI agent to begin building"}
          titleClass={"max-lg:text-3xl"}
        />
        <Button
          onClick={() => navigate("/ai-agents")}
          variant={"tertiary"}
          className="group text-sm"
        >
          CREATE YOUR OWN STRATEGY
          <Icons.arrow className="group-hover:translate-x-1 transition-all" />
        </Button>
      </div>
      <div className="lg:ml-[38px] grid lg:grid-cols-3 gap-6">
        <StrategyCard
          title={"ETH - BTC Long Swing"}
          level={"Medium"}
          totalMessage={20}
          address={"0x82JsODI2D0ozY212"}
          agentImage={"https://picsum.photos/250"}
          agentName={"Agent Mikasa"}
          contractSize={"24.7 KB"}
          gasEfficiency={"80%"}
          securityScore={"45%"}
        />
        <StrategyCard
          title={"ETH - BTC Long Swing"}
          level={"Medium"}
          totalMessage={20}
          address={"0x82JsODI2D0ozY212"}
          agentImage={"https://picsum.photos/250"}
          agentName={"Agent Mikasa"}
          contractSize={"24.7 KB"}
          gasEfficiency={"80%"}
          securityScore={"45%"}
        />
        <StrategyCard
          title={"ETH - BTC Long Swing"}
          level={"Medium"}
          totalMessage={20}
          address={"0x82JsODI2D0ozY212"}
          agentImage={"https://picsum.photos/250"}
          agentName={"Agent Mikasa"}
          contractSize={"24.7 KB"}
          gasEfficiency={"80%"}
          securityScore={"45%"}
        />
        <StrategyCard
          title={"ETH - BTC Long Swing"}
          level={"Medium"}
          totalMessage={20}
          address={"0x82JsODI2D0ozY212"}
          agentImage={"https://picsum.photos/250"}
          agentName={"Agent Mikasa"}
          contractSize={"24.7 KB"}
          gasEfficiency={"80%"}
          securityScore={"45%"}
        />
      </div>
    </div>
  );
}
