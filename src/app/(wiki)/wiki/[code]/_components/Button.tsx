import React from "react";

function Button({ type, children, onClick }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="max-w-[400px] rounded-[10px] bg-primary-green-200 px-5 py-[11px] text-sm font-semibold leading-[1.7] text-white"
    >
      {children}
    </button>
  );
}

export default Button;
