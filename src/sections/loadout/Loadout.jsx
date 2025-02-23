import { useState, useRef } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width } = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / width;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(0.95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        autoPlay
        muted
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <img
        src={src}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <h1 className="bento-title">{title}</h1>
        {description && (
          <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
        )}
      </div>
    </div>
  );
};

function Loadout() {
  const title = "Ela Bosak";

  return (
    <section id="loadout" className="bg-black pb-60">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-white">LOADOUT</p>
          <p className="max-w-md font-circular-web text-lg text-green-10 mb-10">
            It's a brutal, dangerous world out there, but I've found my way.
            Chaos is my home, and I'll make sure you never escape it.
          </p>

          <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard
              src="img/feature-1.gif"
              title={title}
              description="I'm all grown up now, Zo."
            />
          </BentoTilt>
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="img/primaryw.webp"
              title="Primary"
              description="Scorpion EVO 3 A1 is a select-fire submachine gun manufactured by Česká zbrojovka Uherský Brod. The A1 variant features a select fire switch, giving the operator the choice of safe, semi-automatic, three-round burst, or fully automatic fire."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="img/RG15.webp"
              title="Secondary"
              description="The RG15 outputs the weakest damage out of all handguns at 38 damage per shot."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="img/grz.webp"
              title="Ability"
              description="Grzmot Mine this non-lethal explosive was specifically adapted to Ela, who is known to isolate targets from the local population to sabotage IED operations."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 col-span-2 row-span-2 md:col-span-2 md:row-span-2 flex items-center justify-center h-auto max-h-[90vh] md:h-[65vh]">
            <video
              src="/videos/feature-1.mp4"
              loop
              autoPlay
              muted
              className="w-full h-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}

export default Loadout;