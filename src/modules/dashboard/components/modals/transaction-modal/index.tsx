import toast from "react-hot-toast";
import { Modal } from "@common/components/modal";
import { currencyFormatter } from "@common/helpers/current-formatter";
import { TRANSACTION_STATUS, getStatus } from "@common/helpers/tx-status";
import { useClipboardCopy } from "@common/hooks/useClipboardCopy";
import { ButtonHTMLAttributes } from "react";
import { FaCheck } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

interface TransactionModalProps {
  title: string;
  closeModal: () => void;
}

interface HeadingComponentProps {
  children: React.ReactNode | string;
  className?: string;
}

interface TransactionModalSectionProps {
  accessor: string;
  data: typeof MOCK_DATA;
}

const styles: { [key in TRANSACTION_STATUS]: string } = {
  pending: "bg-[#FFD1B7]",
  completed: "bg-[#44CF9552]",
  expired: "bg-[#F6C8C8]",
  abandoned: "bg-[#D3E2FE]",
  mismatched: "bg-[#FED7D7] text-[#E41D1D]",
};

const renderSectionTitle = (title: string) => (
  <p className="capitalize text-[#C3C0C0]  mb-2 text-xs  font-bold">{title}</p>
);

const HeadingComponent = ({ children, className }: HeadingComponentProps) => (
  <h3 className={`${className || ""} text-sm font-bold text-[#6F6F6F]  `}>
    {children}
  </h3>
);

const CopyButton = ({
  className,
  text,
  ...rest
}: ButtonHTMLAttributes<any> & { text: string }) => {
  const { copyTextToClipboard } = useClipboardCopy();

  const handleCopy = () => {
    copyTextToClipboard(text)
      .then(() => toast.success("Text copied"))
      .catch(() => toast.error("Unable to copy text"));
  };

  return (
    <button
      onClick={handleCopy}
      className={`${
        className || ""
      } bg-[#44CF9540] px-4 py-1 rounded text-[#42A87D] text-[0.625rem] font-bold`}
      {...rest}
    >
      Copy
    </button>
  );
};

const TransactionModalSection = ({
  accessor,
  data,
}: TransactionModalSectionProps) => {
  const currency = data.currency as "NGN" | "USD";
  const status = getStatus(data.status);

  switch (accessor) {
    case "amount":
      return (
        <div className="flex  gap-x-5">
          <div className="">
            {renderSectionTitle("Order Amount")}
            <HeadingComponent className="font-bold text-[#6F6F6F]">
              {currencyFormatter(data.amount, currency)}
            </HeadingComponent>
          </div>
          {["mismatched", "completed"].includes(data.status) ? (
            <div className="flex flex-col items-center gap-y-2">
              <span
                className={`${
                  data.status === "completed"
                    ? "bg-[#44CF95] text-white"
                    : "text-[#E41D1D] bg-[#FED7D7]"
                } flex justify-center items-center   rounded-full w-[1.5rem] h-[1.5rem] `}
              >
                {data.status === "completed" ? (
                  <FaCheck className="text-sm" />
                ) : (
                  <LiaTimesSolid className="text-sm" />
                )}
              </span>
              <span
                className={`text-[0.625rem] px-2 py-1 text-center     rounded font-semibold ${
                  data.status === "completed"
                    ? "bg-[#44CF9552] text-[#3E4244]"
                    : "bg-[#FED7D7] text-[#E41D1D]"
                }`}
              >
                {data.status === "completed" ? "Matched" : "Mismatched"}
              </span>
            </div>
          ) : null}
        </div>
      );

    case "amount_paid":
      return (
        <div className="">
          {renderSectionTitle("Amount Paid")}
          <div className="">
            <div className="flex gap-x-3 items-center">
              <HeadingComponent
                className={`${status === "mismatched" ? "text-[#F00]" : ""}`}
              >
                {data.amount_paid && typeof data.amount_paid === "number"
                  ? currencyFormatter(data.amount_paid, currency)
                  : "N/A"}
              </HeadingComponent>
              <button
                className={`${styles[status]} text-[0.625rem] font-semibold text-[#3E4244] px-4 py-1 rounded-md w-fit capitalize`}
              >
                {status}
              </button>
            </div>
            {status === "mismatched" && (
              <p className="text-[0.625rem] text-[#F00]">
                {data.amount_paid < data.amount ? "Under-Paid" : "Over-Paid"}
              </p>
            )}
          </div>
        </div>
      );

    case "bank_ref":
      return (
        <div className="">
          {renderSectionTitle("Bank Reference")}
          <div className="flex flex-wrap gap-y-1">
            <HeadingComponent className="font-bold text-[#6F6F6F] truncate">
              {data.bank_ref || "N/A"}
            </HeadingComponent>
            {data.bank_ref && <CopyButton text={data.bank_ref} />}
          </div>
        </div>
      );

    case "order_no":
      return (
        <div className="">
          {renderSectionTitle("Order Number")}
          <div className="flex flex-wrap gap-y-1">
            <HeadingComponent className="font-bold text-[#6F6F6F] truncate">
              {data.order_no}
            </HeadingComponent>
            <CopyButton text={data.order_no} />
          </div>
        </div>
      );

    case "sender_name":
      return (
        <div className="">
          {renderSectionTitle("Sender's Name")}
          <div className="flex flex-wrap gap-y-1">
            <HeadingComponent className="font-bold text-[#6F6F6F] truncate">
              {data.sender_name || "N/A"}
            </HeadingComponent>
          </div>
        </div>
      );

    case "session_id":
      return (
        <div className="">
          {renderSectionTitle("Session ID")}
          <div className="flex flex-wrap gap-y-1">
            <HeadingComponent className="font-bold text-[#6F6F6F] truncate">
              {data.session_id || "N/A"}
            </HeadingComponent>
            {data.session_id && <CopyButton text={data.session_id} />}
          </div>
        </div>
      );

    case "tx_date":
      return (
        <div className="">
          {renderSectionTitle("Date/Time")}
          <div className="flex flex-wrap gap-y-1">
            <HeadingComponent className="font-bold text-[#6F6F6F] truncate">
              {data.tx_date}
            </HeadingComponent>
          </div>
        </div>
      );

    case "tx_duration":
      return (
        <div className="">
          {renderSectionTitle("Transaction Duration")}
          <div className="flex flex-wrap gap-y-1">
            <HeadingComponent className="font-bold text-[#6F6F6F] truncate">
              {data.tx_duration}
            </HeadingComponent>
          </div>
        </div>
      );

    case "fee":
      return (
        <div className="">
          {renderSectionTitle("Fee")}
          <div className="flex flex-wrap gap-y-1">
            <HeadingComponent className="text-[#FF0000]">
              -{currencyFormatter(data.fee, currency)}
            </HeadingComponent>
          </div>
        </div>
      );

    case "currency":
      return (
        <div className="">
          {renderSectionTitle("Currency")}
          <div className="flex flex-wrap gap-y-1">
            <HeadingComponent className=" truncate uppercase">
              {data.currency}
            </HeadingComponent>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export const TransactionModal = ({
  closeModal,
  ...rest
}: TransactionModalProps) => {
  return (
    <Modal {...rest} closeModal={closeModal}>
      <div className="">
        <div className="grid  grid-cols-2 gap-y-8 gap-x-20 mb-7">
          {Object.keys(MOCK_DATA).map((item) => (
            <TransactionModalSection
              accessor={item}
              key={item[0]}
              data={MOCK_DATA}
            />
          ))}
        </div>
        {["mismatched", "expired"].includes(MOCK_DATA.status) && (
          <div className="">
            <p className="text-[#FF7A00] text-sm font-bold">
              By claiming this transaction, only the amount that the user paid
              will be settled to your wallet balance.
            </p>
          </div>
        )}
        <div className="mt-6 flex justify-between items-center">
          <div className="">
            {["mismatched", "expired"].includes(MOCK_DATA.status) && (
              <button className="bg-[#0F3DB4] text-gray-50  rounded-xl py-2 h-11 font-bold text-sm px-10">
                Claim
              </button>
            )}
          </div>
          <button
            className="text-gray-50 bg-[#9EA0A6] rounded-xl py-2 h-11 font-bold text-sm px-10"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

const MOCK_DATA = {
  amount: 100000000.34,
  amount_paid: 1000,
  bank_ref: "REF2023110912345758393_1REF2023110912345758393_1",
  order_no: "PE33WS553jdjs83sy83hshPE33WS553jdjs83sy83hsh",
  sender_name: "AVIS CHARLES AYODEJI",
  session_id: "10000202200003030033831000020220000303003383",
  tx_date: "2023-11-12  10:09PM",
  tx_duration: "12min 10 sec",
  status: "mismatched",
  action: "View",
  fee: 100.34,
  currency: "NGN",
};
