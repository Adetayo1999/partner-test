import Pagination from "@common/components/pagination";
import { Table } from "@common/components/table";
import { currencyFormatter } from "@common/helpers/current-formatter";
import { getStatus, TRANSACTION_STATUS } from "@common/helpers/tx-status";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TransactionModal } from "../modals/transaction-modal";
import { useAppSelector } from "@common/hooks/useAppSelector";
import { useAppDispatch } from "@common/hooks/useAppDispatch";
import {
  getTransactionDetials,
  listPartnersTransactionThunk,
} from "@common/redux/reducers/transactions/thunk";
import { resetTransactionDetials } from "@common/redux/reducers/transactions";

const styles: { [key in TRANSACTION_STATUS]: string } = {
  pending: "bg-[#FFD1B7]",
  completed: "bg-[#44CF9552]",
  expired: "bg-[#F6C8C8]",
  abandoned: "bg-[#D3E2FE]",
  mismatched: "bg-[#FED7D7] text-[#E41D1D]",
};

export const TransactionTable = () => {
  const { data, loading, filter, loading_tx_details, transaction_details } =
    useAppSelector((state) => state.transactions);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const type = getStatus(searchParams.get("type")?.toLowerCase() || "");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTxOrderNo, setSelectedTxOrderNo] = useState<number | null>(
    null
  );

  const handleModalOpen = useCallback(
    (order_no: number) => {
      setSelectedTxOrderNo(order_no);
      dispatch(getTransactionDetials({ order_no: order_no.toString() }))
        .unwrap()
        .then(() => {
          setSelectedTxOrderNo(null);
          setIsModalOpen(true);
        });
    },
    [dispatch]
  );

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    dispatch(resetTransactionDetials());
  }, [dispatch]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tableData = useMemo(
    () =>
      (data || []).map((item) => ({
        amount: <p>{currencyFormatter(item.amount, "NGN")}</p>,
        fee: (
          <p className="text-[#E41D1D]">{currencyFormatter(item.fee, "NGN")}</p>
        ),
        settled: (
          <p className="text-[#139E64]">
            {currencyFormatter(item.settled, "NGN")}
          </p>
        ),
        order_no: <p className="max-w-[10rem] truncate">{item.order_no}</p>,
        time: <p>{item.time_date}</p>,
        status: (
          <p
            className={`${
              styles[item?.type || item.status]
            } text-xs text-[#3E4244] px-4 py-1 rounded-md w-fit capitalize`}
          >
            {item?.type || item.status}
          </p>
        ),
        action: (
          <button
            className={`px-4 text-xs py-1 rounded-md w-fit text-[#3E4244] min-w-[7rem] bg-[rgba(0,_117,_226,_0.37)] ${
              selectedTxOrderNo === item.order_no && loading_tx_details
                ? "animate-pulse"
                : ""
            }`}
            onClick={() => handleModalOpen(item.order_no)}
            disabled={loading_tx_details}
          >
            {selectedTxOrderNo === item.order_no && loading_tx_details
              ? "Loading"
              : "View"}
          </button>
        ),
      })),
    [handleModalOpen, data, loading_tx_details, selectedTxOrderNo]
  );

  useEffect(() => {
    dispatch(
      listPartnersTransactionThunk({ type, filter: filter || undefined })
    );
  }, [type, dispatch, filter]);

  return (
    <div className="">
      <Table columns={COLUMN} data={tableData} loading={loading} />
      <div className="flex justify-end mt-5">
        <Pagination
          currentPage={currentPage}
          totalItems={1000}
          setPage={handlePageChange}
          dataCount={20}
        />
      </div>
      {isModalOpen && transaction_details ? (
        <TransactionModal
          closeModal={handleModalClose}
          title="Transaction Summary"
        />
      ) : null}
    </div>
  );
};

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
    Header: "Settled",
    accessor: "settled",
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
