import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import AlertIcon from "@/assets/icons/snackbar_alert.svg";
import InfoIcon from "@/assets/icons/snackbar_info.svg";
import CheckIcon from "@/assets/icons/snackbar_check.svg";

export default function ToastPopup({
  message,
  position,
  color,
}: {
  message: string;
  position: "top" | "bottom";
  color: "red" | "green" | "gray";
}) {
  return createPortal(
    <AnimatePresence>
      <motion.aside
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="absolute top-10 flex h-[100dvh] w-[100dvw] justify-center py-[30px] xl:py-[50px]"
      >
        <div
          className={`absolute flex h-[42px] max-w-[860px] items-center justify-center gap-x-[15px] rounded-[1rem] px-[15px] py-[12px] md:h-[50px] md:px-[20px] md:py-[13px] ${`bg-primary-${color}-200`} shadow-[0px_2px_8px_rgba(0,0,0,0.25)] backdrop-opacity-5 ${
            position === "top" ? "animate-toast-top" : "animate-toast-bottom"
          }`}
        >
          {color === "red" && <AlertIcon width={20} height={20} />}
          {color === "green" && <CheckIcon width={20} height={20} />}
          {color === "gray" && <InfoIcon width={20} height={20} />}
          <p className={`text-Body text-sm font-normal leading-6 text-primary-${color}-100`}>{message}</p>
        </div>
      </motion.aside>
    </AnimatePresence>,
    document.body,
  );
}
