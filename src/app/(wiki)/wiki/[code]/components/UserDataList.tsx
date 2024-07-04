"use client";

import React, { useState } from "react";
import Image from "next/image";
import ToggleIcon from "@/assets/icons/arrowdown.svg";
import DefaultProfile from "@/assets/icons/defaultProfile.svg";
import { RequestProfileCode } from "@/apis/profile/getProfilesCode";
import dayjs from "dayjs";
import UserData from "./UserData";

export interface userDataProps {
  privateData: RequestProfileCode;
}

function UserDataList({ privateData }: userDataProps) {
  const { city, mbti, job, sns, birthday, nickname, bloodType, nationality, image } = privateData;
  const formattedDate = dayjs(birthday).format("YYYY.MM.DD.");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex gap-5 px-5">
        <div className="h-[62px] w-[62px]">
          {image ? <Image src={image} alt="프로필 이미지" /> : <DefaultProfile width="100%" height="100%" />}
        </div>
        <div className="grid w-[175px] gap-3">
          <UserData dataProp={city}>거주 도시</UserData>
          <UserData dataProp={mbti}>MBTI</UserData>
          <UserData dataProp={job}>직업</UserData>
          <ul className={`grid gap-3 ${isOpen ? "" : "hidden"}`}>
            <UserData dataProp={sns}>SNS 계정</UserData>
            <UserData dataProp={formattedDate}>생일</UserData>
            <UserData dataProp={nickname}>별명</UserData>
            <UserData dataProp={bloodType}>혈액형</UserData>
            <UserData dataProp={nationality}>국적</UserData>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-6 w-6">
          <ToggleIcon width="100%" height="100%" alt="arrow" onClick={handleToggle} />
        </div>
      </div>
    </>
  );
}

export default UserDataList;