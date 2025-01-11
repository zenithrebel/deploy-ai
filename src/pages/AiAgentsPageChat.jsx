import { useState } from "react";
import Heading from "../components/global/Heading";
import { Chatbox } from "../components/pages/ai-agents-page-detail/Chatbox";
import { ScriptResultDetail } from "../components/pages/ai-agents-page-detail/ScriptResultDetail";

export default function AiAgentsPageChat() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
      <div className="space-y-2 w-full">
        <Heading
          title={"Quantis"}
          description={"ETH - BTC Long Swing"}
          descriptionClass={"text-secondary-50 font-semibold"}
          titleClass={"max-lg:text-3xl"}
        />
        <Chatbox />
      </div>

      <ScriptResultDetail />
    </div>
  );
}
