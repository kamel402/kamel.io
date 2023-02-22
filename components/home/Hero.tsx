import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Imgae from 'next/image';

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Hey, I'm Kamel.</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I enjoy <span className="heroShiny1 text-fun-pink">building</span> and{" "}
          <span className="heroShiny2 text-fun-pink">designing</span> for the
          web.
          <div className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]" style={{ animationDelay: "0.1s" }}>
            <Imgae src={"/static/doodles/hero/html.svg"} width={64} height={65.5} />
          </div>

          <div className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11" style={{ animationDelay: "0.2s" }}>
            <Imgae src={"/static/doodles/hero/nextjs.svg"} width={64} height={65.5} />
          </div>

          <div className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] w-[400px]" style={{ animationDelay: "0.3s" }}>
            <Imgae src={"/static/doodles/hero/nextjs.svg"} width={76} height={77} />
          </div>

          <div className="sqD hidden sm:block bottom-[-340px] left-[-180px]" style={{ animationDelay: "0.4s" }}>
            <Imgae src={"/static/doodles/hero/coder.svg"} width={302} height={271} />
          </div>

          <div className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]" style={{ animationDelay: "0.5s" }}>
            <Imgae src={"/static/doodles/hero/js.svg"} width={106} height={94} />
          </div>

          <div className="sqD bottom-[-320px] right-[65%] sm:right-[45%]" style={{ animationDelay: "0.6s" }}>
            <Imgae src={"/static/doodles/hero/dino.svg"} width={187} height={173} />
          </div>

          <div className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]" style={{ animationDelay: "0.7s" }}>
            <Imgae src={"/static/doodles/hero/paintbrush.svg"} width={222} height={169} />
          </div>

          <div className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]">
            <Imgae src={"/static/doodles/hero/pop1.svg"} width={88} height={127} />
          </div>

          <div className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40" style={{ animationDelay: "0.9s" }}>
            <Imgae src={"/static/doodles/hero/code.svg"} width={76} height={77} />
          </div>
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Tell me more
          </div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
