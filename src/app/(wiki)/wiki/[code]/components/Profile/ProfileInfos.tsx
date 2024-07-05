import React, { ChangeEvent, memo } from "react";

const ProfileInfos = memo(
  ({
    label,
    value,
    id,
    onChange,
    editMyPage,
  }: {
    label: string;
    value: string;
    id: string;
    // eslint-disable-next-line no-shadow
    onChange: (name: string, value: string | File | null) => void;
    editMyPage: boolean;
  }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      // eslint-disable-next-line no-shadow
      const { id, value } = e.target;
      onChange(id, value);
    };

    return (
      <div
        className={`flex h-7 w-full items-center ${editMyPage ? "justify-center md:mx-auto xl:mb-1" : ""} gap-[10px]`}
      >
        {editMyPage ? (
          <>
            <label
              htmlFor={id}
              className="text-grayscale-400 text-xs-regular2 md:text-md-regular2 min-w-14 flex-none xl:min-w-16"
            >
              {label}
            </label>
            <input
              name="profileInput"
              id={id}
              maxLength={13}
              className="rounded-10 bg-grayscale-100 text-grayscale-400 text-xs-regular2 md:text-md-regular2 flex-none py-2 pl-3 outline-none focus:border-2 focus:border-primary-green-200 sm:w-[70%] md:ml-2 md:w-[70%] lg:ml-0 lg:w-3/4 xl:w-[68%] xl:min-w-16"
              placeholder={value}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <p className="text-grayscale-400 text-xs-regular2 md:text-md-regular2 min-w-14 flex-none xl:min-w-16">
              {label}
            </p>
            <p className="text-grayscale-500 text-xs-regular2 md:text-md-regular2">{value}</p>
          </>
        )}
      </div>
    );
  },
);

ProfileInfos.displayName = "ProfileInfos";

export default ProfileInfos;
