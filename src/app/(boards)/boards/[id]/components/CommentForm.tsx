"use client";

import React, { useState } from "react";

const LIMIT = 500;

function CommentForm() {
  const [commentValue, setCommentValue] = useState("");
  const [commentCount, setCommentCount] = useState(0);

  const handleChangeComment: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
    const { value } = e.target;
    setCommentValue(value);
    setCommentCount(value.length);
  };

  return (
    <form className="mb-6 mt-2 grid h-[140px] gap-1 rounded-[10px] bg-primary-gray-100 pb-[14px] pl-5 pr-[14px] pt-4 sm:mt-[15px] sm:pt-5 lg:mb-10 lg:px-[15px] lg:py-[13px]">
      <textarea
        value={commentValue}
        maxLength={LIMIT}
        onChange={handleChangeComment}
        placeholder="댓글을 입력해 주세요"
        className="w-full resize-none bg-transparent text-sm leading-[1.7] text-primary-gray-500 outline-none placeholder:text-primary-gray-400"
      />
      <div className="flex items-end justify-between gap-1">
        <p className="text-sm leading-[1.7] text-primary-gray-300">
          <span>{commentCount}</span> / <span>{LIMIT}</span>
        </p>
        <button
          type="submit"
          className="w-[140px] rounded-[10px] bg-primary-green-200 py-[10.5px] text-sm font-semibold leading-[1.7] text-white sm:w-[120px]"
        >
          댓글 등록
        </button>
      </div>
    </form>
  );
}

export default CommentForm;