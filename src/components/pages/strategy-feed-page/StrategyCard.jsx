import { useNavigate } from "react-router";
import { shortenAddress } from "../../../lib/utils";
import { Icons } from "../../icon/icons";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";

export default function StrategyCard({
  title,
  level,
  totalMessage,
  agentName,
  address,
  agentImage,
  gasEfficiency,
  securityScore,
  contractSize,
}) {
  const navigate = useNavigate();
  return (
    <div className="p-4 rounded-lg space-y-6 bg-background-150 text-foreground-50/70">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <Badge>{level}</Badge>
          <div className="flex items-center gap-2 text-primary">
            <Icons.message className="size-5" />
            <span className="font-semibold text-sm">{totalMessage}</span>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-secondary-50 font-semibold text-xl text-center">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <p>{shortenAddress(address, 4, 3)} use</p>
            <div className="size-4">
              <img
                src={agentImage}
                alt={agentName}
                className="size-full rounded-full object-cover"
              />
            </div>
            <p>Mikasa Agent</p>
          </div>
        </div>
      </div>
      {/* Body */}
      <ul className="space-y-[13px] text-xs">
        <li className="flex items-center justify-between">
          <span>Gas-efficiency</span>
          <span className="font-semibold text-foreground-50">
            {gasEfficiency}
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span>Security Score</span>
          <span className="font-semibold text-foreground-50">
            {securityScore}
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span>Contract Size</span>
          <span className="font-semibold text-foreground-50">
            {contractSize}
          </span>
        </li>
      </ul>
      {/* Footer */}
      <div className="space-y-2">
        <Button
          onClick={() => navigate("/strategy-feed/1")}
          className="w-full text-xs"
        >
          View Contract
        </Button>
        <Button variant="ghost" className="w-full text-xs">
          Get Telegram Bot
          <Icons.arrow className="-rotate-45" />
        </Button>
      </div>
    </div>
  );
}
