import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const [isScroll, setIsScroll] = useState(false);

  const handleIsScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 1) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleIsScroll);

    return () => {
      window.removeEventListener("scroll", handleIsScroll);
    };
  }, []);
  return (
    <header
      className={`flex fixed inset-x-0 z-50 top-0 items-center justify-between py-8 px-[42px] max-w-[1440px]  ${
        isScroll
          ? "bg-background-450/50 backdrop-blur-sm"
          : "bg-background-450/0"
      } text-foreground duration-300`}
    >
      <h1 className="font-bold font-paragraph text-[32px] text-foreground">
        DeployAI
      </h1>
      <nav className="flex items-center gap-12 text-lg">
        {NAV_ITEMS.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-foreground-50 hover:text-foreground transition-all"
          >
            {item.label}
          </a>
        ))}
        <Button
          onClick={() => navigate("/strategy-feed")}
          className="w-[119px] text-base"
        >
          TRY NOW
        </Button>
      </nav>
    </header>
  );
}

const NAV_ITEMS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Feature",
    href: "#feature",
  },
];
