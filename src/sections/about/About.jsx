import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/all";
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

function About() {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        });

        clipAnimation.to('.mask-clip-path', {
            width: '100%',
            height: '100%',
            borderRadius: '0%',
        });
    });

    useGSAP(() => {
        gsap.fromTo(".heading-animation",
            { opacity: 0, x: 0, y: 100 },
            { 
                opacity: 1, x: 0, y: 0, duration: 1.2, ease: "power2.out",
                scrollTrigger: {
                    trigger: ".heading-animation",
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                    toggleActions: "play reverse play reverse", 
                }
            }
        );
    }, []);

    return (
        <div id="about" className="min-h-screen w-full">

            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text-[10]">
                    Who is Ela Bosak?
                </h2>

                <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem] heading-animation font-tupovyazbold">
                    UNIQUE ABILITIES AND PLAYSTYLE
                </div>

                <div className="about-subtext">
                    <p>
                        Inspired by the 1939 anti-tank Polish grenades used by the iconic Cichociemny during WWII, the sticky Grzmot mines can be anchored on surfaces, impairing hearing and causing a dizzying effect.
                    </p>

                    <p>
                        These concussion mines are triggered upon proximity, affecting anyone within its radius.
                    </p>
                </div>
            </div>

            <div className="h-screen w-full" id="clip">
                <div className="mask-clip-path about-image relative w-full h-full">
                    <img
                        src="img/about.jpg"
                        alt="Background"
                        className="absolute left-0 top-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;