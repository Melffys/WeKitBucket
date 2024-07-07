/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CodeType } from "@/types/apiType";
import LockerIcon from "@/assets/icons/lock.svg";
import postProfilesCodePing from "@/apis/profile/postProfilesCodePing";
import CommonButton from "../Common/CommonButton";
import Input from "../Common/Input";
import Label from "../Common/Label";

const modalFirstText = `text-md-regular2 text-grayscale-400`;
const modalSecondText = `text-xs-regular2 text-grayscale-400`;

type QuizModalProps = {
  question: string;
  onClose: (value: void) => void;
  setEditingMode: (value: void) => void;
  code: CodeType;
  setAnswer: (value: string) => void;
};

type IForm = {
  securityAnswer: string;
};

function QuizModalTemplete({ question, onClose, setEditingMode, code, setAnswer }: QuizModalProps) {
  const {
    register,
    handleSubmit,
    setFocus,
    setError,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onSubmit",
  });

  const handleSubmitData: SubmitHandler<IForm> = async data => {
    try {
      await postProfilesCodePing(code, data);
      setEditingMode();
      setAnswer(data.securityAnswer);
      onClose();
    } catch (error: unknown) {
      setError("securityAnswer", {
        type: "required",
        message: "정답이 아닙니다. 다시 시도해 주세요.",
      });
    }
  };

  useEffect(() => setFocus("securityAnswer"), [setFocus]);

  return (
    <>
      <LockerIcon className="mx-auto mb-3 mt-5" />
      <div className="mx-auto mb-9 text-center">
        <p className={modalFirstText}>다음 퀴즈를 맞추고</p>
        <p className={modalFirstText}>위키를 작성해보세요.</p>
      </div>

      <Label htmlFor="quizInput" className="text-grayscale-500 text-2lg-semibold mb-3" label={question} />

      <form onSubmit={handleSubmit(handleSubmitData)}>
        <Input
          type="text"
          id="quizInput"
          className={`rounded-[10px} mb-2 h-[45px] w-full bg-gray-100 pl-4 ${
            errors.securityAnswer ? "bg-red-50 focus:border-red-400" : ""
          } outline-none focus:border-2 focus:border-primary-green-200`}
          placeholder="답안을 입력해주세요"
          {...register("securityAnswer", { required: "답안을 입력해주세요" })}
        />

        {errors.securityAnswer && <p className="text-xs-regular2 text-red-400">{errors.securityAnswer.message}</p>}

        <CommonButton variant="primary" className="mt-8 w-full" type="submit">
          확인
        </CommonButton>
      </form>

      <div className="mx-auto mt-5 text-center">
        <p className={modalSecondText}>위킷버킷은 사용자의 의견을 존중합니다.</p>
        <p className={modalSecondText}>사용자 간의 에티킷을 지킵시다.</p>
      </div>
    </>
  );
}

export default QuizModalTemplete;
