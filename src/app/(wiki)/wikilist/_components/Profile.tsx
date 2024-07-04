"use client";

import React, { useState } from "react";
import { ProfileCatalog } from "@/types/profiles";
import NoProfilePicture from "@/assets/icons/noProfilePicture.svg";
import LinkIcon from "@/assets/icons/link.svg";
import ProfileIcon from "@/assets/icons/userProfileIcon.svg";
import Link from "next/link";
import Image from "next/image";

function Profile({ item }: { item: ProfileCatalog }) {
  const { code, city, nationality, job, name, image } = item;
  const [isImgError, setIsImgError] = useState<boolean>(false);
  const copyLinkUrl = `${process.env.VERCEL_URL}/wiki/${code}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(copyLinkUrl);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <Link
      href={`/wiki/${code}`}
      className="flex w-full gap-5 px-5 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:gap-8 md:px-9 md:py-6"
    >
      {image ? (
        <div className="relative h-[60px] w-[60px] rounded-full md:h-[85px] md:w-[85px]">
          <Image
            src={isImgError ? ProfileIcon : image}
            alt={`${name}'s profile`}
            fill
            className="rounded-full"
            style={{ objectFit: "cover" }}
            onError={() => setIsImgError(true)}
          />
        </div>
      ) : (
        <NoProfilePicture className="min-h-[60px] min-w-[60px] md:min-h-[85px] md:min-w-[85px]" />
      )}
      <div className="flex flex-col">
        <h1 className="mb-3 text-md-semibold leading-6 text-primary-gray-500 md:mb-4 md:text-lg-semibold">{name}</h1>
        <p className="mb-1 text-xs font-normal leading-4 text-primary-gray-400 md:text-sm md:leading-6">
          {city}, {nationality}
        </p>
        <div className="flex flex-col justify-normal gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-normal leading-4 text-primary-gray-400 md:flex-row md:text-sm md:leading-6">
            {job}
          </p>
          <div className="ml-auto flex w-fit items-center gap-1 rounded-xl bg-primary-green-100 px-2 py-1">
            <LinkIcon width={16} height={16} />
            <button
              onClick={e => {
                e.preventDefault(); // 버튼 클릭 시 링크 이동을 막음
                handleCopyLink();
              }}
              className="bg-primary-green-100 text-left text-xs font-normal leading-4 text-primary-green-200 md:text-sm md:leading-6"
            >
              {truncateText(copyLinkUrl, 34)}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Profile;