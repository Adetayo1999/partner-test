import Pagination from "@common/components/pagination";
import { Table } from "@common/components/table";
import { currencyFormatter } from "@common/helpers/current-formatter";
import { getStatus, PAYOUT_STATUS } from "@common/helpers/payout-status";
import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PayoutModal } from "../modals/payout-modal";

const styles: { [key in PAYOUT_STATUS]: string } = {
  completed: "bg-[#44CF9552]",
  failed: "bg-[#F6C8C8]",
  initiated: "bg-[#FFD1B7]",
};

export const PayoutTable = () => {
  const [searchParams] = useSearchParams();
  const type = getStatus(searchParams.get("type")?.toLowerCase() || "");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = useCallback(() => setIsModalOpen(true), []);

  const handleModalClose = useCallback(() => setIsModalOpen(false), []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tableData = useMemo(
    () =>
      MOCK_DATA.map((item) => ({
        amount: <p>{currencyFormatter(item.amount, "NGN")}</p>,
        fee: (
          <p className="text-[#E41D1D]">{currencyFormatter(item.fee, "NGN")}</p>
        ),
        order_no: <p className="max-w-[10rem] truncate">{item.order_no}</p>,
        time: <p>{item.time}</p>,
        status: (
          <button
            className={`${styles[type]} text-xs text-[#3E4244] px-4 py-1 rounded-md w-fit capitalize`}
          >
            {type}
          </button>
        ),
        action: (
          <button
            className="px-4 text-xs py-1 rounded-md w-fit text-[#3E4244] min-w-[7rem] bg-[rgba(0,_117,_226,_0.37)]"
            onClick={handleModalOpen}
          >
            View
          </button>
        ),
      })),
    [type, handleModalOpen]
  );

  return (
    <div className="">
      <Table columns={COLUMN} data={tableData} />
      <div className="flex justify-end mt-5">
        <Pagination
          currentPage={currentPage}
          totalItems={1000}
          setPage={handlePageChange}
          dataCount={20}
        />
      </div>
      {isModalOpen && (
        <PayoutModal closeModal={handleModalClose} title="Payout Summary" />
      )}
    </div>
  );
};

const MOCK_DATA = [
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },

  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
  {
    amount: 100000000.34,
    fee: 100.34,
    order_no:
      "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
    time: "12 Nov. 2023 12:34pm",
    status: "Completed",
  },
];

const COLUMN = [
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Fee",
    accessor: "fee",
  },
  {
    Header: "Order No.",
    accessor: "order_no",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Time/Date",
    accessor: "time",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
