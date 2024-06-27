import React from "react";
import LikeIcon from "@/assets/icons/like.svg";
import CameraIcon from "@/assets/icons/camera.svg";

function BestPostCard() {
  return (
    <div className="h-[200px] w-[250px]">
      <div className="flex h-full flex-col overflow-visible rounded-[10px] shadow-custom-shadow">
        <div className="flex-1">
          <div className="flex h-full items-center justify-center rounded-t-[10px] bg-primary-gray-100">
            <CameraIcon />
          </div>
        </div>
        <div className="grid px-5 py-[14px]">
          <h3 className="w-full truncate font-semibold leading-[1.6]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos.
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <p className="text-xs leading-[1.5] text-primary-gray-400">박동욱</p>
              <p className="text-xs leading-[1.5] text-primary-gray-400">2024.02.24.</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex h-4 w-4 items-center justify-center">
                <LikeIcon width="12.67" height="11" />
              </div>
              <span className="text-xs leading-[1.2] text-primary-gray-400">135</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestPostCard;
