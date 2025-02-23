import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/all"; 


const Hero = () => {

    useGSAP(() => {
        gsap.set("#video-frame", {
          clipPath: "polygon(13% 0, 80% 0, 100% 90%, 0% 100%)",
          borderRadius: "0% 0% 50% 15%",
        });
        gsap.from("#video-frame", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          borderRadius: "0% 0% 0% 0%",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: "#video-frame",
            start: "center center",
            end: "bottom center",
            scrub: true,
          },
        });
      });


    const getVideoSrc = () => `/videos/ela.mp4`;

    return (
        <section className="relative h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden">
                <div>
                    <video
                        autoPlay muted loop
                        className="absolute left-0 top-0 size-full object-cover object-center"
                    >
                        <source src={getVideoSrc()} type="video/mp4" />
                    </video>
                </div>

                <h1 className=" hero-heading absolute bottom-5 right-5 z-40 text-green-10">
                    Defender
                </h1>

                <div className="absolute left-0 top-0 z-40 size-full ">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="hero-heading text-green-10">Ela Bosak</h1>
                        <p className="mb-5 max-w-64 font-robert-regular text-green-10">
                            Together, we can shake the very stars from the sky.
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="hero-heading absolute bottom-5 right-5  text-black">
                Ela Bosak
            </h1>


        </section>
    );
};

export default Hero;