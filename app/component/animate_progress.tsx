import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import ProgressCard from "./progress_card";

const AnimatedProgressCard = ({ value, unit, label } :any) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Hanya memicu satu kali saat masuk ke dalam viewport
    threshold: 0.1, // Memicu saat 10% elemen masuk ke dalam viewport
  });

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
  });

  return (
    <animated.div ref={ref} style={spring}>
      <ProgressCard value={value} unit={unit} label={label} />
    </animated.div>
  );
};

const ProgressSection = () => {
  return (
    <div className="progress flex flex-col gap-10 items-center">
      <h2 className="text-4xl font-semibold text-center costume-line-height-header mb-20">
        We made <br />
        <span className="text-primary-color">Big progress</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-20 text-center">
        <AnimatedProgressCard
          value={10}
          unit="M"
          label="Total Funding"
        />
        <AnimatedProgressCard value={19} unit="B" label="Total Donation" />
        <AnimatedProgressCard value={420} unit="K" label="Donator" />
        <AnimatedProgressCard value={3} unit="K" label="Global Countries" />
        <AnimatedProgressCard value={113} unit="K" label="Global Companies" />
      </div>
    </div>
  );
};

export default ProgressSection;
