export const Hero = () => {
  return (
    <section className="relative h-screen w-full px-[52px]">
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="mb-10">
          <h2 className="text-2xl font-light">
            Your Next-Gen Trading Co-Pilot
          </h2>
          <h1 className="text-[64px] font-heading text-secondary-50">
            WELCOME TO DEPLOY AI
          </h1>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute z-0 top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/vid-background-lp.mp4" type="video/mp4" />
      </video>
      <div className="bg-gradient-to-t from-background-450 to-transparent absolute bottom-0 right-0 w-full h-20"></div>
    </section>
  );
};
