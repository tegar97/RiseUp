import Image from "next/image";
import Link from "next/link";
import React,{useEffect,useState} from "react";
import convertToRupiah from "../helper/convertToRupiah";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
interface FundingCardProps {
  id: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
  progress: number;
  fundingAmount: string;
  desc : string;
}

const FundingCard: React.FC<FundingCardProps> = ({
  id,
  title,
  imageSrc,
  imageAlt,
  progress,
  fundingAmount,
  desc,
}) => {
 const [ref, inView] = useInView({
   triggerOnce: true, // Memicu satu kali saat masuk ke dalam viewport
   threshold: 0.1, // Memicu saat 10% elemen masuk ke dalam viewport
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
      <div className="bg-white rounded-lg">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={405}
          height={100}
          className="rounded-t-lg h-60 object-cover w-full"
        />
        <div className="p-5">
          <h3
            className="text-2xl mb-4 text-black font-bold whitespace-nowrap overflow-hidden"
          >
            {title}
          </h3>
          <p className="text-md font-light mb-5 text-black overflow-hidden">
            {desc.length > 100 ? `${desc.substring(0, 100)}...` : desc}
          </p>
          <div className="funding-progress">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-color">
              <div className="bg-gray-200 rounded-full h-2 w-full">
                <div
                  className="bg-primary-color rounded-full h-2"
                  style={{
                    width: `${progress > 100 ? 100 : progress}%`,
                    transition: "width 0.5s ease-in-out", // Menambahkan animasi transisi
                  }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between text-black">
              <span>{progress > 100 ? 100 : progress}% </span>
              <span> {convertToRupiah(parseInt(fundingAmount))}</span>
            </div>
          </div>
          <div className="mt-5">
            <Link href={`/funding/${id}`}>
              <button
                className="bg-primary-color text-black rounded-lg  font-semibold py-3 px-8 border  mt-5 w-full"
                style={{
                  borderRadius: "50px",
                }}
              >
                Funding now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default FundingCard; 
