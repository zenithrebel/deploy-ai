import { CardBorderGradient } from "../../global/CardBorderGradient";
import Heading from "../../global/Heading";

export const Feature = () => {
  return (
    <section className="relative py-10 px-[52px] w-full">
      <CardBorderGradient>
        <div className="flex gap-[121px]">
          <div className="grid gap-[56px] w-full max-w-[550px]">
            {FEATURES.map((item, index) => (
              <Heading
                key={index}
                title={item.title}
                description={item.description}
                titleClass={"text-xl"}
                descriptionClass={"text-base font-light text-muted text-xl"}
              />
            ))}
          </div>

          <div className="flex flex-col items-end justify-between gap-[47px] text-right">
            <p className="text-xl font-light leading-[180%]">
              Our platform empowers you to design and refine your own trading
              strategies using advanced AI tools.
            </p>
            <h1 className="text-[64px] uppercase leading-tight md:w-4/5 font-heading text-secondary-50">
              Create, Deploy, and Profit
            </h1>
          </div>
        </div>
      </CardBorderGradient>
    </section>
  );
};

const FEATURES = [
  {
    title: "Create Your Strategy",
    description:
      "Leverage our AI assistant to forge a trading approach that matches your risk tolerance and objectives.",
  },
  {
    title: "Optimize With AI",
    description:
      "Get real-time advice from DEPLOY AI to fine-tune your strategy for optimal performance.",
  },
  {
    title: "Automate Your Success",
    description:
      "Once perfected, let our automated system execute your strategy in the market.",
  },
];
