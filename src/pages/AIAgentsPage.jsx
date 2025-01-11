import React from "react";
import Heading from "../components/global/Heading";
import { AIAgentCard } from "../components/pages/ai-agents-page/AIAgentCard";

export default function AIAgentsPage() {
  return (
    <div className="space-y-[56px]">
      <Heading
        title={"Select Your AI Developer Agent"}
        description={"Choose your specialized AI agent to begin building"}
        titleClass={"max-lg:text-3xl"}
      />
      <div className="lg:ml-[38px] grid lg:grid-cols-2 gap-6">
        <AIAgentCard />
        <AIAgentCard />
        <AIAgentCard />
      </div>
    </div>
  );
}
