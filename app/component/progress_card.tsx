interface ProgressCardProps {
  value: number;
  unit: string;
  label: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ value, unit, label }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-5xl font-bold text-white">
        {value}
        <span className="text-primary-color">{unit}</span>
      </h3>
      <span className="text-md font-light">{label}</span>
    </div>
  );
};

export default ProgressCard;
