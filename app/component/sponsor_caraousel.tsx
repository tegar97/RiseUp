import Image from "next/image";
import { useTrail, animated } from "react-spring";

const SponsorCarousel: React.FC = () => {
  const sponsors = [
    "/sponsor1.png",
    "/sponsor2.png",
    "/sponsor3.png",
    "/sponsor4.png",
    "/sponsor5.png",
  ];

  const trail = useTrail(sponsors.length, {
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 500,
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 justify-center justify-items-center items-center md:gap-0 gap-10">
      {trail.map((style, index) => (
        <animated.div
          key={index}
          className="col-span-1 md:col-span-auto"
          style={style}
        >
          <Image src={sponsors[index]} alt="logo" width={91} height={30} />
        </animated.div>
      ))}
    </div>
  );
};

export default SponsorCarousel;
