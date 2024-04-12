import Pagination from "@common/components/pagination";
import { Table } from "@common/components/table";
import { currencyFormatter } from "@common/helpers/current-formatter";
import { getStatus, PAYOUT_STATUS } from "@common/helpers/payout-status";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PayoutModal } from "../modals/payout-modal";
import { useAppSelector } from "@common/hooks/useAppSelector";
import { useAppDispatch } from "@common/hooks/useAppDispatch";
import {
  getPayoutDetials,
  listPartnersPayoutThunk,
} from "@common/redux/reducers/payout/thunk";
import { resetPayoutDetials } from "@common/redux/reducers/payout";

const styles: { [key in PAYOUT_STATUS]: string } = {
  completed: "bg-[#44CF9552]",
  failed: "bg-[#F6C8C8]",
  initiated: "bg-[#FFD1B7]",
};

export const PayoutTable = () => {
  const { data, filter, loading, loading_payout_details, payout_details } =
    useAppSelector((state) => state.payout);
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
      dispatch(getPayoutDetials({ order_no: order_no.toString() }))
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
    dispatch(resetPayoutDetials());
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
        order_no: <p className="max-w-[10rem] truncate">{item.order_no}</p>,
        time: <p>{item.time_date}</p>,
        status: (
          <button
            className={`${
              styles[item.type || item.status]
            } text-xs text-[#3E4244] px-4 py-1 rounded-md w-fit capitalize`}
          >
            {item.type || item.status}
          </button>
        ),
        action: (
          <button
            className={`px-4 text-xs py-1 rounded-md w-fit text-[#3E4244] min-w-[7rem] bg-[rgba(0,_117,_226,_0.37)] ${
              selectedTxOrderNo === item.order_no && loading_payout_details
                ? "animate-pulse"
                : ""
            }`}
            onClick={() => handleModalOpen(item.order_no)}
            disabled={loading_payout_details}
          >
            {selectedTxOrderNo === item.order_no && loading_payout_details
              ? "Loading"
              : "View"}
          </button>
        ),
      })),
    [handleModalOpen, data, loading_payout_details, selectedTxOrderNo]
  );

  useEffect(() => {
    dispatch(listPartnersPayoutThunk({ type, filter }));
  }, [type, filter, dispatch]);

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
      {isModalOpen && payout_details ? (
        <PayoutModal closeModal={handleModalClose} title="Payout Summary" />
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
