import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Icons } from "../../icon/icons";
import { ConnectWalletDialog } from "./ConnectWalletDialog";

export const Sidebar = () => {
  const { pathname } = useLocation();
  const [isConnected, setIsConnected] = useState(false);
  return (
    <aside className="relative max-lg:hidden z-10 flex flex-col items-center justify-between max-w-[264px] w-full h-full px-6 py-8">
      <div className="space-y-8 w-full">
        <Link to={"/"}>
          <h1 className="p-3 font-bold font-paragraph text-[32px] text-foreground">
            DeployAI
          </h1>
        </Link>
        <ul className="space-y-4">
          {NAV_ITEMS.map((item, index) => (
            <ListItem
              pathname={pathname}
              label={item.label}
              url={item.url}
              key={index}
            />
          ))}
        </ul>
      </div>
      {/* <ConnectWalletDialog
        isConnected={isConnected}
        setIsConnected={setIsConnected}
      /> */}
    </aside>
  );
};

const ListItem = ({ label, url, pathname }) => {
  return (
    <li>
      <Link
        to={url}
        className={`p-3 rounded-lg flex gap-4 hover:text-secondary hover:bg-secondary-100 transition-all ${
          pathname === url
            ? "text-secondary bg-secondary-100"
            : "text-muted bg-transparent"
        }`}
      >
        <Icons.target /> {label}
      </Link>
    </li>
  );
};

const NAV_ITEMS = [
  {
    url: "/strategy-feed",
    label: "Strategy Feed",
  },
  {
    url: "/ai-agents",
    label: "AI Agents",
  },
  // {
  //   url: "/my-strategies",
  //   label: "My Strategies",
  // },
  {
    url: "#",
    label: "Github",
  },
  {
    url: "#",
    label: "Twitter",
  },
];
