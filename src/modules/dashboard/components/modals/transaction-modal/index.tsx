import { Modal } from "@common/components/modal";
import { currencyFormatter } from "@common/helpers/current-formatter";
import { TRANSACTION_STATUS, getStatus } from "@common/helpers/tx-status";
import { FaCheck } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { HeadingComponent } from "../common/heading-component";
import { CopyButton } from "../common/copy-button";
import { TitleComponent } from "../common/title-component";
import { useAppSelector } from "@common/hooks/useAppSelector";
import { TransactionDetialsType } from "@common/redux/reducers/transactions";

interface TransactionModalProps {
  title: string;
  closeModal: () => void;
}

interface TransactionModalSectionProps {
  accessor: string;
  data: TransactionDetialsType;
}

const styles: { [key in TRANSACTION_STATUS]: string } = {
  pending: "bg-[#FFD1B7]",
  completed: "bg-[#44CF9552]",
  expired: "bg-[#F6C8C8]",
  abandoned: "bg-[#D3E2FE]",
  mismatched: "bg-[#FED7D7] text-[#E41D1D]",
};

const TransactionModalSection = ({
  accessor,
  data,
}: TransactionModalSectionProps) => {
  const currency = data.currency as "NGN" | "USD";
  const status = getStatus(data.txn_status);

  switch (accessor) {
    case "amount":
      return (
        <div className="flex  gap-x-5">
          <div className="">
            {<TitleComponent>Order Amount</TitleComponent>}
            <HeadingComponent className="font-bold text-[#6F6F6F]">
              {currencyFormatter(data.amount, currency)}
            </HeadingComponent>
          </div>
          {["mismatched", "completed"].includes(data.txn_status) ? (
            <div className="flex flex-col items-center gap-y-2">
              <span
                className={`${
                  data.txn_status === "completed"
                    ? "bg-[#44CF95] text-white"
                    : "text-[#E41D1D] bg-[#FED7D7]"
                } flex justify-center items-center   rounded-full w-[1.5rem] h-[1.5rem] `}
              >
                {data.txn_status === "completed" ? (
                  <FaCheck className="text-sm" />
                ) : (
                  <LiaTimesSolid className="text-sm" />
                )}
              </span>
              <span
                className={`text-[0.625rem] px-2 py-1 text-center     rounded font-semibold ${
                  data.txn_status === "completed"
                    ? "bg-[#44CF9552] text-[#3E4244]"
                    : "bg-[#FED7D7] text-[#E41D1D]"
                }`}
              >
                {data.txn_status === "completed" ? "Matched" : "Mismatched"}
              </span>
            </div>
          ) : null}
        </div>
      );

    case "amount_paid":
      return (
        <div className="">
          {<TitleComponent>Amount Paid</TitleComponent>}
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
          {<TitleComponent>Bank Reference</TitleComponent>}
          <div className="flex flex-wrap  gap-x-2  gap-y-1">
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
          {<TitleComponent>Order Number</TitleComponent>}
          <div className="flex flex-wrap gap-x-2 gap-y-1">
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
          {<TitleComponent>Sender's Name</TitleComponent>}
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
          {<TitleComponent>Session ID</TitleComponent>}
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <HeadingComponent className="font-bold text-[#6F6F6F] truncate">
              {data.session_id || "N/A"}
            </HeadingComponent>
            {data.session_id && <CopyButton text={data.session_id} />}
          </div>
        </div>
      );

    case "time_date":
      return (
        <div className="">
          {<TitleComponent>Date/Time</TitleComponent>}
          <div className="flex flex-wrap gap-y-1">
            <HeadingComponent className="font-bold text-[#6F6F6F] truncate">
              {data.time_date}
            </HeadingComponent>
          </div>
        </div>
      );

    case "transaction_duration":
      return (
        <div className="">
          {<TitleComponent>Transaction Duration</TitleComponent>}
          <div className="flex flex-wrap gap-y-1">
            <HeadingComponent className="font-bold text-[#6F6F6F] truncate">
              {data.transaction_duration}
            </HeadingComponent>
          </div>
        </div>
      );

    case "fee":
      return (
        <div className="">
          {<TitleComponent>Fee</TitleComponent>}
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
          {<TitleComponent>Currency</TitleComponent>}
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
  const transaction_details = useAppSelector(
    (state) => state.transactions.transaction_details!
  );

  return (
    <Modal {...rest} closeModal={closeModal}>
      <div className="">
        <div className="grid  grid-cols-2 gap-y-8 gap-x-20 mb-7">
          {Object.keys(transaction_details).map((item) => (
            <TransactionModalSection
              accessor={item}
              key={item}
              data={transaction_details}
            />
          ))}
        </div>
        {["mismatched", "expired"].includes(transaction_details.txn_status) && (
          <div className="">
            <p className="text-[#FF7A00] text-sm font-bold">
              By claiming this transaction, only the amount that the user paid
              will be settled to your wallet balance.
            </p>
          </div>
        )}
        <div className="mt-6 flex justify-between items-center">
          <div className="">
            {["mismatched", "expired"].includes(
              transaction_details.txn_status
            ) && (
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
