import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all"; 
import gsap from 'gsap';

export default function Skins() {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.fromTo(".skin-animation",
            { opacity: 0, x: 0, y: 100 },
            { 
                opacity: 1, x: 0, y: 0, duration: 1.2, ease: "power2.out",
                scrollTrigger: {
                    trigger: ".skin-animation",
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                    toggleActions: "play reverse play reverse", 
                }
            }
        );
    }, []);

    return (
        <section id="elite skins" className='container mx-auto px-3 md:px-10'>
            <div>
                <h1 className="mt-10 text-center text-4xl uppercase leading-[0.8] md:text-[6rem] heading-animation font-tupovyazbold">
                    Elite Skin
                </h1>
            </div>
            <div className="skin-animation flex justify-center items-center mt-5">
                <img
                    src='img/eliteskin.webp'
                    alt="Ela Bosak Elite Skin"
                    className='object-cover max-w-full h-auto'
                />
            </div>
        </section>
    );
}