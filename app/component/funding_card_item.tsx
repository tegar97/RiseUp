import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FundingCardItemProps {
  id: number;
  title: string;
  imageSrc: string;
  fundingAmount: string;
  progress: number;
  targetAmount: string;
}

const FundingCardItem: React.FC<FundingCardItemProps> = ({
  id,
  title,
  imageSrc,
  fundingAmount,
  progress,
  targetAmount
}) => {
  return (
    <div className="bg-white rounded-lg">
      <Image
        src={imageSrc}
        width={500}
        height={100}
        alt={""}
        className="w-full object-cover h-36"
      />
      <div className="py-2 px-2 flex justify-between w-full flex-col h-full">
        <div className="mb-5">
          <h3 className="text-md  text-black mb-2">{title}</h3>
          <div className="flex justify-between mt-2 mb-2">
            <span className="text-subtitle-text-color font-regular text-sm">
              Rp {fundingAmount}
            </span>
            <span className="text-subtitle-text-color  font-regular text-sm">
              Rp {targetAmount}
            </span>
          </div>
          <div className="w-full">
            <div className="bg-gray-200 rounded-full h-2 w-full">
              <div
                className="bg-primary-color rounded-full h-2"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.5s ease-in-out", // Menambahkan animasi transisi
                }}
              ></div>
            </div>
          </div>
        </div>
        <Link href={`/funding/${id}`}>
          <button
            className="bg-primary-color text-sm w-full text-black rounded-lg  font-semibold py-2 px-2 border  mt-5"
            style={{
              borderRadius: "50px",
            }}
          >
            Fund Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FundingCardItem;
