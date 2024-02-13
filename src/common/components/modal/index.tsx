import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { LiaTimesSolid } from "react-icons/lia";

export interface ModalProps {
  children: React.ReactNode;
  title: string;
  closeModal: () => void;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Modal = ({ children, closeModal, title }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed min-h-screen h-full overflow-y-auto p-16 top-0 left-0  bg-black bg-opacity-60 w-full"
        onClick={closeModal}
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className="mx-auto pb-8 bg-white w-[80%] md:w-[45%] rounded-2xl md:rounded-3xl min-h-[30rem] "
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-[1.438rem] px-10 py-6 border-b border-[#EAECF0]">
            <h1 className="text-[#101828] font-bold text-lg capitalize">
              {title}
            </h1>
            <div className="">
              <button onClick={closeModal}>
                <LiaTimesSolid className="text-[#667085] " size={24} />
              </button>
            </div>
          </div>
          <div className="px-10">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
