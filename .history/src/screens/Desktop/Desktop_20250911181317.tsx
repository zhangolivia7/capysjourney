import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const featureSections = [
  {
    title: "Over __ fun, expert-certified level to play through.",
    image:
      "https://c.animaapp.com/mffyboa2iIQBsB/img/untitled-design--12--1.png",
    imagePosition: "left",
    top: "top-[988px]",
    left: "left-[76px]",
    textTop: "top-[1214px]",
    textLeft: "left-[763px]",
  },
  {
    title: "Choose from six unique, thematic regions to explore with Capy!",
    image: "https://c.animaapp.com/mffyboa2iIQBsB/img/3-1.png",
    imagePosition: "right",
    top: "top-[1775px]",
    left: "left-[789px]",
    textTop: "top-[1999px]",
    textLeft: "left-[198px]",
  },
  {
    title:
      "Complete daily wellness activities for rewards or create your own meditation!",
    image: "https://c.animaapp.com/mffyboa2iIQBsB/img/group-52.png",
    imagePosition: "left",
    top: "top-[2562px]",
    left: "left-[76px]",
    textTop: "top-[2816px]",
    textLeft: "left-[793px]",
  },
];

const customizationImages = [
  {
    src: "https://c.animaapp.com/mffyboa2iIQBsB/img/untitled-design--13--1.png",
    position: "left-7",
  },
  {
    src: "https://c.animaapp.com/mffyboa2iIQBsB/img/1-1.png",
    position: "left-[883px]",
  },
];

export const Desktop = (): JSX.Element => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
      data-model-id="1421:1014"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[6328px] relative">
        {/* Hero Section */}
        <section className="absolute w-[1440px] h-[1024px] top-0 left-0 bg-[#f2efe4]">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] absolute w-[1015px] h-[152px] top-[330px] left-[213px] [font-family:'DynaPuff',Helvetica] font-normal text-[#553019] text-[32px] text-center tracking-[0] leading-[normal]">
            With hundreds of expert-informed guided meditations, lessons, and
            daily wellness activities, Capy&apos;s Journey transforms
            mindfulness into something immersive, simple, and fun.
          </div>

          <img
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] absolute w-[586px] h-[262px] top-[54px] left-[427px] object-contain"
            alt="Group"
            src="https://c.animaapp.com/mffyboa2iIQBsB/img/group-51--1--1.png"
          />

          <img
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] absolute w-[1100px] h-[493px] top-[531px] left-[170px] object-contain"
            alt="Frame"
            src="https://c.animaapp.com/mffyboa2iIQBsB/img/frame-65.png"
          />

        </section>

        {/* Main Content Section */}
        <section className="absolute w-[1496px] h-[4152px] top-[1088px] -left-7">
          <div className="absolute w-[1440px] h-[4152px] top-0 left-7 bg-[#f2efe4]" />

          {/* Video Section */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] absolute w-[883px] h-[539px] top-[72px] left-[306px] bg-[#d9d9d9] flex items-center justify-center">
            <div className="[font-family:'DynaPuff',Helvetica] font-normal text-black text-[40px] text-center tracking-[0] leading-[normal]">
              VIDEO
            </div>
          </div>

          {/* Description Text */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] absolute w-[1163px] h-[145px] top-[682px] left-[166px] [font-family:'DynaPuff',Helvetica] font-normal text-[#553019] text-2xl text-center tracking-[0] leading-[normal]">
            Capy&apos;s Journey helps kids, teens, and adults reclaim their most
            valuable resource—attention. Guided by Capy the capybara,
            you&apos;ll explore beautifully designed worlds filled with
            meditations and lessons that feel fresh and relatable. Level by
            level, you&apos;ll deepen your practice and carry new insights into
            your everyday life. Collect carrots, customize your Capy, and build
            Capy&apos;s Den as you cultivate focus and calm—one mindful moment
            at a time.
          </div>

          {/* Feature Sections */}
          {featureSections.map((section, index) => (
            <div key={`feature-${index}`}>
              <img
                className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${1000 + index * 200}ms] absolute w-[630px] h-[630px] ${section.top} ${section.left} object-contain`}
                alt="Feature"
                src={section.image}
              />

              <div
                className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${1200 + index * 200}ms] absolute w-[537px] h-[232px] ${section.textTop} ${section.textLeft} [font-family:'DynaPuff',Helvetica] font-normal text-[#553019] text-5xl text-center tracking-[0] leading-[normal]`}
              >
                {section.title}
              </div>
            </div>
          ))}

          {/* Customization Section */}
          <div className="absolute w-[589px] h-[174px] top-[3350px] left-[494px] [font-family:'DynaPuff',Helvetica] font-normal text-[#553019] text-5xl text-center tracking-[0] leading-[normal] z-10">
            Give Capy a fresh fit and customize Capy&apos;s Den to your liking!
          </div>

          <div className="absolute w-[1496px] h-[613px] top-[3550px] left-0">
            {customizationImages.map((image, index) => (
              <img
                key={`customization-${index}`}
                className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${1800 + index * 200}ms] absolute w-[585px] h-[613px] top-0 ${image.position} object-contain`}

                alt={index === 0 ? "Untitled design" : "Element"}
                src={image.src}
              />
            ))}
          </div>
        </section>

        {/* Separator Bars */}
        <div className="absolute w-[1440px] h-16 top-[1024px] left-0 bg-[#ffd542]" />
        <div className="absolute w-[1440px] h-16 top-[5240px] left-1.5 bg-[#ffd542]" />

        {/* Waitlist Section */}
        <section className="absolute w-[1440px] h-[1024px] top-[5304px] left-0 bg-[#f2efe4]">
          <div className="absolute w-[682px] h-[596px] top-[219px] left-[648px]">
            <Card className="absolute w-[680px] h-[509px] top-[87px] left-0 bg-white rounded-[30px] border-0 shadow-none">
              <CardContent className="flex flex-col w-[524px] items-center gap-14 relative top-[83px] left-[78px] p-0">
                <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2200ms] flex flex-col items-start gap-[43px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                    <Label className="relative self-stretch mt-[-1.00px] [font-family:'DynaPuff',Helvetica] font-medium text-[#553019] text-2xl tracking-[0] leading-[normal]">
                      Name
                    </Label>
                    <Input className="relative self-stretch w-full h-[55px] bg-white rounded-[20px] border-2 border-solid border-[#553019]" />
                  </div>

                  <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                    <Label className="relative self-stretch mt-[-1.00px] [font-family:'DynaPuff',Helvetica] font-medium text-[#553019] text-2xl tracking-[0] leading-[normal]">
                      Email
                    </Label>
                    <Input className="relative self-stretch w-full h-[55px] bg-white rounded-[20px] border-2 border-solid border-[#553019]" />
                  </div>
                </div>

                <Button className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2400ms] relative w-[296px] h-auto rounded-[50px] bg-[#ffd542] hover:bg-[#ffd542]/90 border-[3px] border-solid border-[#e6e7d9] p-0 overflow-hidden">
                  <div className="relative w-[298px] h-[74px] bg-[#ffd542] rounded-[50px] border-[3px] border-solid border-white flex items-center justify-center">
                    <span className="[font-family:'DynaPuff',Helvetica] font-normal text-[#553019] text-2xl text-center tracking-[0] leading-[normal]">
                      Submit
                    </span>
                  </div>
                </Button>

              </CardContent>
            </Card>

            <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2000ms] absolute h-[72px] top-0 left-[78px] [font-family:'DynaPuff',Helvetica] font-semibold text-[#553019] text-6xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Join the Waitlist!
            </h2>
          </div>

          <img
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2600ms] absolute w-[564px] h-[411px] top-[316px] left-10 object-contain"
            alt="Group"
            src="https://c.animaapp.com/mffyboa2iIQBsB/img/group-64.png"
          />

        </section>
      </div>
    </div>
  );
};
