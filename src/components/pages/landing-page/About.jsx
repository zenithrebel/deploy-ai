import { CardBorderGradient } from "../../global/CardBorderGradient";
import Heading from "../../global/Heading";
import { Button } from "../../ui/button";

export const About = () => {
  return (
    <section className="relative py-10 px-[52px] z-0 min-h-screen w-full">
      <CardBorderGradient>
        <div className="flex flex-col gap-[139px]">
          <div className="flex items-end gap-[47px]">
            <img
              src="/assets/images/img-chatbox.png"
              alt="chat box image"
              className="md:w-[549px]"
            />
            <div className="py-8">
              <h1 className="text-[64px] leading-tight md:w-2/3 font-heading text-secondary-50">
                WHY DEPLOYAI
              </h1>
              <p className="text-xl font-light leading-[180%] mb-[37px] mt-[22px]">
                Our platform empowers you to design and refine your own trading
                strategies using advanced AI tools. Whether you&apos;re a
                beginner or an experienced trader, DEPLOY AI adapts to your
                needs, helping you create strategies that work for you.
              </p>
              <Button className="text-base w-[116px]">TRY NOW</Button>
            </div>
          </div>

          <div className="py-8 space-y-[52px]">
            <h1 className="text-[64px] leading-tight md:w-2/3 font-heading text-secondary-50">
              TAKE THE BENEFITS
            </h1>
            <div className="grid grid-cols-3 gap-[42px]">
              {BENEFITS.map((item, index) => (
                <Heading
                  key={index}
                  title={item.title}
                  description={item.description}
                  titleClass={"text-xl"}
                  descriptionClass={"text-base font-light text-muted"}
                />
              ))}
            </div>
          </div>
        </div>
      </CardBorderGradient>

      <div className="absolute -top-[50px] z-0 -right-[600px] w-[944px]">
        <img
          src="/assets/images/img-decoration-gradient.png"
          alt="app image"
          className="w-full h-[250px] rotate-6"
        />
      </div>
      <div className="absolute -top-[50px] z-0 -left-[700px] w-[944px]">
        <img
          src="/assets/images/img-decoration-gradient.png"
          alt="app image"
          className="w-full h-[250px] -rotate-6"
        />
      </div>
      <div className="absolute -bottom-[150px] z-0 -right-[600px] w-[944px]">
        <img
          src="/assets/images/img-decoration-gradient.png"
          alt="app image"
          className="w-full h-[250px]"
        />
      </div>
      <div className="absolute -bottom-[80px] z-0 -left-[700px] w-[944px]">
        <img
          src="/assets/images/img-decoration-gradient.png"
          alt="app image"
          className="w-full h-[250px] "
        />
      </div>
    </section>
  );
};

const BENEFITS = [
  {
    title: "Personalized Trading",
    description:
      "We provide the tools; you create the strategies that resonate with your unique trading style.",
  },
  {
    title: "Community",
    description:
      "Harness the collective knowledge of a thriving trader community.",
  },
  {
    title: "Dynamic Adaptation",
    description:
      "Adjust your strategies in real-time with AI-driven insights and market analysis.",
  },
];
