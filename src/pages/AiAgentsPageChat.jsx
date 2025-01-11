import { useState } from "react";
import Heading from "../components/global/Heading";
import { Chatbox } from "../components/pages/ai-agents-page-detail/Chatbox";
import { ScriptResultDetail } from "../components/pages/ai-agents-page-detail/ScriptResultDetail";

export default function AiAgentsPageChat() {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <Heading
            title={"Quantis"}
            description={
              "ETH - BTC Long Swing"
            }
            descriptionClass={"text-secondary-50 font-semibold"}
          />
          <Chatbox />
        </div>

        <ScriptResultDetail />
      </div>
    </div>
  );
}
