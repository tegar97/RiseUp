import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg h-full w-full ">
      <div className="skeleton-image"></div>
      <div className="py-2 px-2 flex justify-between w-full flex-col h-full">
        <div className="mb-5">
          <div className="skeleton-line mb-2"></div>
          <div className="flex justify-between mt-2 mb-2">
            <div className="skeleton-line-small"></div>
            <div className="skeleton-line-small"></div>
          </div>
          <div className="w-full">
            <div className="skeleton-progress"></div>
          </div>
        </div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
