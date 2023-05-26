import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const ImageGallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  const animationProps = useSpring({
    opacity: startAnimation ? 1 : 0,
    transform: startAnimation ? "translateY(0)" : "translateY(50px)",
  });

  return (
    <animated.div ref={ref} style={animationProps}>
      <div className="grid grid-cols-3 gap-3 w-full">
        <div className="w-full col-span-2 relative">
          <Image
            src="/image_gallery1.jpg"
            alt="logo"
            width={641}
            height={500}
            className="w-full rounded-2xl"
          />
          <div className="overlay"></div>
        </div>

        <div className="w-full flex flex-col justify-between">
          <div className="relative">
            <Image
              src="/image_login.webp"
              alt="logo"
              width={405}
              height={247.5}
              className="rounded-xl h-full"
            />
            <div className="overlay"></div>
          </div>
          <div className="relative">
            <Image
              src="/image_gallery3.jpeg"
              alt="logo"
              width={405}
              height={247.5}
              className="rounded-xl h-full"
            />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default ImageGallery;
