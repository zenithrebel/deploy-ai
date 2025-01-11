import { useNavigate } from "react-router";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Progress } from "../../ui/progress";

export const AIAgentCard = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 rounded-lg bg-background-150 space-y-6">
      <div className="flex gap-6 min-h-[181px]">
        <div className="h-[181px] max-w-[148px] w-full">
          <img
            src="/assets/images/img-agent-1.png"
            alt="agent"
            className="size-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col justify-between h-[172px] w-full">
          <h1 className="text-lg font-semibold text-secondary-50">Quantis</h1>
          <StatusBar />
          <StatusBar />
          <StatusBar />
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="text-foreground-50/70 text-xs">Personality</h2>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant={"secondary"}>Analytical</Badge>
          <Badge variant={"secondary"}>Detail-oriented</Badge>
          <Badge variant={"secondary"}>Precise</Badge>
        </div>
      </div>
      <Button onClick={() => navigate("/ai-agents/1")} className="w-full">START</Button>
    </div>
  );
};

const StatusBar = () => {
  return (
    <div className="space-y-2 w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-foreground-50/70 text-xs">Analytics</h2>
        <p className="text-[10px] font-medium text-secondary-50">90%</p>
      </div>
      <Progress value={90} />
    </div>
  );
};
