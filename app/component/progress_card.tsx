import { useEffect, useState } from "react";
import CountUp from "react-countup";

interface ProgressCardProps {
  value: number;
  unit: string;
  label: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ value, unit, label }) => {
  const [startAnimation, setStartAnimation] : any = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-5xl font-bold text-white">
        <CountUp
          start={startAnimation && 0 }
          end={value}
          duration={2}
          separator=","
        />
        <span className="text-primary-color">{unit}</span>
      </h3>
      <span className="text-md font-light">{label}</span>
    </div>
  );
};

export default ProgressCard;
