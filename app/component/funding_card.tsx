import Image from "next/image";
import Link from "next/link";
import React from "react";
import convertToRupiah from "../helper/convertToRupiah";

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

  return (
    <div className="bg-white rounded-lg">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={405}
        height={100}
        className="rounded-t-lg h-60 object-cover w-full"
      />
      <div className="p-5">
        <h3 className="text-2xl mb-4 text-black font-bold">{title}</h3>
        <p className="text-md font-light mb-5 text-black">
          {desc}
        </p>
        <div className="funding-progress">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-color">
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
          <div className="flex justify-between text-black">
            <span>{progress}% </span>
            <span> { convertToRupiah(
              parseInt(fundingAmount)
            ) }</span>
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
  );
};

export default FundingCard; 
