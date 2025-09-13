import React, { useState } from "react";
import x11 from "./assets/ThreePhones.png";
import x31 from "./assets/ThreePhones.png";
import frame65 from "./assets/ThreePhones.png";
import group5111 from "./assets/ThreePhones.png";
import group52 from "./assets/ThreePhones.png";
import group64 from "./assets/ThreePhones.png";
import untitledDesign121 from "./assets/ThreePhones.png";
import untitledDesign131 from "./assets/ThreePhones.png";

export const Desktop = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white overflow-hidden w-[1440px] h-[6328px] relative">
        <header className="absolute w-[1440px] h-[1024px] top-0 left-0 bg-[#f2efe4]">
          <p className="absolute w-[1015px] h-[152px] top-[330px] left-[213px] [font-family:'DynaPuff-Regular',Helvetica] font-normal text-[#553019] text-[32px] text-center tracking-[0] leading-[normal]">
            With hundreds of expert-informed guided meditations, lessons, and
            daily wellness activities, Capy&apos;s Journey transforms
            mindfulness into something immersive, simple, and fun.
          </p>

          <img
            className="absolute w-[586px] h-[262px] top-[54px] left-[427px] aspect-[2.24] object-cover"
            alt="Capy's Journey Logo"
            src={group5111}
          />

          <img
            className="absolute w-[1100px] h-[493px] top-[531px] left-[170px]"
            alt="App Interface Preview"
            src={frame65}
          />
        </header>

        <main className="absolute w-[1496px] h-[4152px] top-[1088px] -left-7">
          <div className="absolute w-[1440px] h-[4152px] top-0 left-7 bg-[#f2efe4]" />

          <section
            className="absolute w-[883px] h-[539px] top-[72px] left-[306px] bg-[#d9d9d9]"
            aria-label="Video Section"
          >
            <div className="absolute h-12 top-[302px] left-[689px] [font-family:'DynaPuff-Regular',Helvetica] font-normal text-black text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              VIDEO
            </div>
          </section>

          <p className="absolute w-[1163px] h-[145px] top-[682px] left-[166px] [font-family:'DynaPuff-Regular',Helvetica] font-normal text-[#553019] text-2xl text-center tracking-[0] leading-[normal]">
            Capy&apos;s Journey helps kids, teens, and adults reclaim their most
            valuable resource—attention. Guided by Capy the capybara,
            you&apos;ll explore beautifully designed worlds filled with
            meditations and lessons that feel fresh and relatable. Level by
            level, you&apos;ll deepen your practice and carry new insights into
            your everyday life. Collect carrots, customize your Capy, and build
            Capy&apos;s Den as you cultivate focus and calm—one mindful moment
            at a time.
          </p>

          <section
            className="absolute w-[631px] h-[630px] top-[988px] left-[76px]"
            aria-label="Game Levels"
          >
            <img
              className="w-full h-full aspect-[1] object-cover"
              alt="Game levels interface showing meditation activities"
              src={untitledDesign121}
            />
            <p className="absolute w-[537px] h-[174px] top-[226px] left-[687px] [font-family:'DynaPuff-Regular',Helvetica] font-normal text-[#553019] text-5xl text-center tracking-[0] leading-[normal]">
              Over __ fun, expert-certified level to play through.
            </p>
          </section>

          <section
            className="absolute w-[630px] h-[630px] top-[1775px] left-[789px]"
            aria-label="Thematic Regions"
          >
            <img
              className="w-full h-full aspect-[1] object-cover"
              alt="Six unique thematic regions to explore"
              src={x31}
            />
            <p className="absolute w-[589px] h-[174px] top-[224px] left-[-591px] [font-family:'DynaPuff-Regular',Helvetica] font-normal text-[#553019] text-5xl text-center tracking-[0] leading-[normal]">
              Choose from six unique, thematic regions to explore with Capy!
            </p>
          </section>

          <section
            className="absolute w-[795px] h-[820px] top-[2562px] left-[76px]"
            aria-label="Daily Activities"
          >
            <img
              className="w-full h-full"
              alt="Daily wellness activities and meditation creation interface"
              src={group52}
            />
            <p className="absolute w-[537px] h-[232px] top-[254px] left-[717px] [font-family:'DynaPuff-Regular',Helvetica] font-normal text-[#553019] text-5xl text-center tracking-[0] leading-[normal]">
              Complete daily wellness activities for rewards or create your own
              meditation!
            </p>
          </section>

          <section
            className="absolute w-[1496px] h-[613px] top-[3461px] left-0"
            aria-label="Customization Features"
          >
            <img
              className="absolute w-[585px] h-[613px] top-0 left-[883px] aspect-[1] object-cover"
              alt="Capy customization options"
              src={x11}
            />

            <img
              className="absolute w-[585px] h-[613px] top-0 left-7 aspect-[1] object-cover"
              alt="Capy's Den customization interface"
              src={untitledDesign131}
            />

            <p className="absolute w-[507px] h-[232px] top-[189px] left-[494px] [font-family:'DynaPuff-Regular',Helvetica] font-normal text-[#553019] text-5xl text-center tracking-[0] leading-[normal]">
              Give Capy a fresh fit and customize Capy&apos;s Den to your
              liking!
            </p>
          </section>
        </main>

        <div
          className="absolute w-[1440px] h-16 top-[1024px] left-0 bg-[#ffd542]"
          role="separator"
        />

        <div
          className="absolute w-[1440px] h-16 top-[5240px] left-1.5 bg-[#ffd542]"
          role="separator"
        />

        <footer className="absolute w-[1440px] h-[1024px] top-[5304px] left-0 bg-[#f2efe4]">
          <section
            className="absolute w-[682px] h-[596px] top-[219px] left-[648px]"
            aria-label="Waitlist Signup"
          >
            <div className="absolute w-[680px] h-[509px] top-[87px] left-0 bg-white rounded-[30px]">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-[524px] items-center gap-14 relative top-[83px] left-[78px]"
              >
                <div className="flex flex-col items-start gap-[43px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                    <label
                      htmlFor="name"
                      className="relative self-stretch mt-[-1.00px] [font-family:'DynaPuff-Medium',Helvetica] font-medium text-[#553019] text-2xl tracking-[0] leading-[normal]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="relative self-stretch w-full h-[55px] bg-white rounded-[20px] border-2 border-solid border-[#553019] px-4 py-2 text-[#553019] [font-family:'DynaPuff-Regular',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#ffd542] focus:border-[#ffd542]"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                    <label
                      htmlFor="email"
                      className="relative self-stretch mt-[-1.00px] [font-family:'DynaPuff-Medium',Helvetica] font-medium text-[#553019] text-2xl tracking-[0] leading-[normal]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="relative self-stretch w-full h-[55px] bg-white rounded-[20px] border-2 border-solid border-[#553019] px-4 py-2 text-[#553019] [font-family:'DynaPuff-Regular',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#ffd542] focus:border-[#ffd542]"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="all-[unset] box-border relative w-[296px] h-[66px] rounded-[50px] cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#553019] focus:ring-offset-2"
                  aria-label="Submit waitlist form"
                >
                  <div className="relative w-[301px] h-[77px] -top-1 -left-0.5 bg-[#ffd542] rounded-[50px] border-[15px] border-solid border-[#e6e7d9]">
                    <div className="absolute w-[298px] h-[74px] -top-3.5 -left-3.5 bg-[#ffd542] rounded-[50px] border-[12px] border-solid border-white" />
                    <div className="absolute w-[286px] h-[62px] -top-2 -left-2 bg-[#ffd542] rounded-[50px]" />
                    <div className="absolute h-[29px] top-2 left-[92px] [font-family:'DynaPuff-Regular',Helvetica] font-normal text-[#553019] text-2xl text-center tracking-[0] leading-[normal]">
                      Submit
                    </div>
                  </div>
                </button>
              </form>
            </div>

            <h2 className="absolute h-[72px] top-0 left-[78px] [font-family:'DynaPuff-SemiBold',Helvetica] font-semibold text-[#553019] text-6xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Join the Waitlist!
            </h2>
          </section>

          <img
            className="absolute w-[564px] h-[411px] top-[316px] left-10"
            alt="Capy the capybara mascot"
            src={group64}
          />
        </footer>
      </div>
    </div>
  );
};
