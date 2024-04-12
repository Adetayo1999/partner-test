import { Modal } from "@common/components/modal";
import { currencyFormatter } from "@common/helpers/current-formatter";
import { FaCheck } from "react-icons/fa";
import { HeadingComponent } from "../common/heading-component";
import { CopyButton } from "../common/copy-button";
import { TitleComponent } from "../common/title-component";
import { PAYOUT_STATUS } from "@common/helpers/payout-status";
import { useAppSelector } from "@common/hooks/useAppSelector";
import { PayoutDetailsType } from "@common/redux/reducers/payout";

interface PayoutModalProps {
  title: string;
  closeModal: () => void;
}

interface PayoutModalSectionProps {
  accessor: string;
  data: PayoutDetailsType;
}

const styles: { [key in PAYOUT_STATUS]: string } = {
  completed: "bg-[#44CF9552]",
  failed: "bg-[#F6C8C8]",
  initiated: "bg-[#FFD1B7]",
};

const PayoutModalSection = ({ accessor, data }: PayoutModalSectionProps) => {
  const currency = data.currency;

  switch (accessor) {
    case "amount":
      return (
        <div className="flex  gap-x-5">
          <div className="">
            {<TitleComponent>Amount</TitleComponent>}
            <HeadingComponent className="font-bold text-[#6F6F6F]">
              {currencyFormatter(data.amount, currency)}
            </HeadingComponent>
          </div>
          {data.txn_status === "completed" ? (
            <div className="flex flex-col items-center gap-y-2">
              <span
                className={`flex justify-center items-center  bg-[#44CF95] text-white  rounded-full w-[1.5rem] h-[1.5rem] `}
              >
                <FaCheck className="text-sm" />
              </span>
              <span
                className={`text-[0.625rem] px-2 py-1 text-center bg-[#44CF9552] text-[#3E4244]     rounded font-semibold`}
              >
                Matched
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
              <HeadingComponent>
                {data.amount_paid && typeof data.amount_paid === "number"
                  ? currencyFormatter(data.amount_paid, currency)
                  : "N/A"}
              </HeadingComponent>
            </div>
          </div>
        </div>
      );

    case "bank_ref":
      return (
        <div className="">
          {<TitleComponent>Bank Reference</TitleComponent>}
          <div className="flex flex-wrap gap-x-2 gap-y-1">
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
          {<TitleComponent>Order Ref</TitleComponent>}
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

    case "bank_name":
      return (
        <div className="">
          {<TitleComponent>Bank Name</TitleComponent>}
          <div className="flex flex-wrap gap-y-1">
            <HeadingComponent className=" truncate uppercase">
              {data.bank_name}
            </HeadingComponent>
          </div>
        </div>
      );

    case "account_number":
      return (
        <div className="">
          {<TitleComponent>Account Number</TitleComponent>}
          <div className="flex flex-wrap gap-y-1">
            <HeadingComponent className=" truncate uppercase">
              {data.account_number}
            </HeadingComponent>
          </div>
        </div>
      );

    case "account_name":
      return (
        <div className="">
          {<TitleComponent>Account Name</TitleComponent>}
          <div className="flex flex-wrap gap-y-1">
            <HeadingComponent className=" truncate uppercase">
              {data.account_name}
            </HeadingComponent>
          </div>
        </div>
      );

    case "status":
      return (
        <div className="">
          {<TitleComponent>TX Status</TitleComponent>}
          <div className="flex flex-wrap gap-y-1">
            <button
              className={`${
                styles[(data.txn_status as PAYOUT_STATUS) || "initiated"]
              } text-xs text-[#3E4244] px-4 py-1 rounded-md w-fit capitalize`}
            >
              {(data.txn_status as PAYOUT_STATUS) || "initiated"}
            </button>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export const PayoutModal = ({ closeModal, ...rest }: PayoutModalProps) => {
  const payoutDetails = useAppSelector((state) => state.payout.payout_details!);

  return (
    <Modal {...rest} closeModal={closeModal}>
      <div className="">
        <div className="grid  grid-cols-2 gap-y-8 gap-x-20 mb-7">
          {Object.keys(payoutDetails).map((item) => (
            <PayoutModalSection
              accessor={item}
              key={item}
              data={payoutDetails}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-end items-center">
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
