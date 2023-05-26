import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface ProgressCardProps {
  value: number;
  unit: string;
  label: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ value, unit, label }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true, // Memicu satu kali saat masuk ke dalam viewport
    threshold: 0.1, // Memicu saat 10% elemen masuk ke dalam viewport
  });

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  return (
    <div className="flex flex-col gap-2" ref={ref}>
      <h3 className="text-5xl font-bold text-white">
        {startAnimation ? (
          <CountUp start={0} end={value} duration={2} separator="," />
        ) : (
          "0"
        )}
        <span className="text-primary-color">{unit}</span>
      </h3>
      <span className="text-md font-light">{label}</span>
    </div>
  );
};

export default ProgressCard;
