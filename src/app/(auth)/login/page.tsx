import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Form from "./_components/Form.tsx";

export const metadata: Metadata = {
  title: "WeKitBucket | 로그인",
};

function Login() {
  return (
    <div className="mx-auto flex min-h-[calc(100dvh-60px)] w-full max-w-[440px] items-center justify-center px-5 py-5 xl:min-h-[calc(100dvh-80px)]">
      <div className="flex-1">
        <h2 className="text-center text-2xl font-semibold leading-[1.3] text-primary-gray-500">로그인</h2>
        <Form />
        <div className="mt-[40px] flex items-center justify-center gap-[10px]">
          <Link href="/signup" className="text-center text-sm leading-[1.7] text-primary-green-200">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
