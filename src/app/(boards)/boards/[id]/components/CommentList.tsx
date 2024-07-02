"use client";

/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import DefaultProfile from "@/assets/icons/defaultProfile.svg";
import EditIcon from "@/assets/icons/pencilIcon.svg";
import DeleteIcon from "@/assets/icons/trashIcon.svg";

function CommentList() {
  return (
    <li className="flex gap-[15px] rounded-[10px] px-5 py-4 shadow-custom-shadow sm:gap-5 sm:px-[30px] sm:py-5 lg:py-[22px]">
      <div className="h-10 w-10 sm:h-[50px] sm:w-[50px]">
        <DefaultProfile width="100%" height="100%" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between gap-1">
          <span className="font-semibold leading-[1.7] text-primary-gray-500 sm:text-lg sm:leading-[1.4]">김동욱</span>
          <div className="flex gap-[15px] sm:gap-5">
            <button className="flex h-5 w-5 items-center justify-center p-[3px] sm:h-6 sm:w-6 sm:p-[3.5px]">
              <EditIcon />
            </button>
            <button className="flex h-5 w-5 items-center justify-center px-[3.75px] py-[3px] sm:h-6 sm:w-6 sm:px-[4.5px] sm:pb-[3.5px] sm:pt-[3.62px]">
              <DeleteIcon />
            </button>
          </div>
        </div>
        <p className="mb-1 break-keep text-sm leading-[1.7] text-primary-gray-500 sm:mb-[10px] sm:mt-[6px] sm:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quo!
        </p>
        <span className="text-xs leading-[1.5] text-primary-gray-400 sm:text-sm">2024.02.26.</span>
      </div>
    </li>
  );
}

export default CommentList;