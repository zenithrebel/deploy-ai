import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Icons } from "../../icon/icons";
import { Button } from "../../ui/button";
import { DialogClose } from "../../ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { ConnectWalletDialog } from "./ConnectWalletDialog";

export const Header = () => {
  return (
    <header className="lg:hidden w-full flex items-center gap-5">
      <SidebarDialog />
      <h1 className="font-bold font-paragraph text-[32px] text-foreground">
        DeployAI
      </h1>
    </header>
  );
};

const SidebarDialog = () => {
  const [open, setOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const { pathname } = useLocation();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col justify-between">
        <div className="space-y-8">
          <SheetHeader>
            <Link to={"/"}>
              <SheetTitle className="font-bold font-paragraph text-left text-[32px] text-foreground">
                DeployAI
              </SheetTitle>
            </Link>
            <SheetDescription className="text-left">
              Your Next-Gen Trading Co-Pilot
            </SheetDescription>
          </SheetHeader>
          <ul className="space-y-4">
            {NAV_ITEMS.map((item, index) => (
              <ListItem
                pathname={pathname}
                setOpen={setOpen}
                label={item.label}
                url={item.url}
                key={index}
              />
            ))}
          </ul>
        </div>
        {/* <SheetFooter>
          <DialogClose asChild>
            <ConnectWalletDialog
              isConnected={isConnected}
              setIsConnected={setIsConnected}
            />
          </DialogClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};

const ListItem = ({ label, url, pathname, setOpen }) => {
  return (
    <li>
      <Link
        to={url}
        onClick={() => setOpen(false)}
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
