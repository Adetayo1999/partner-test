import { Tooltip } from "react-tooltip";
import { BsQuestionCircleFill } from "react-icons/bs";
import Pagination from "@common/components/pagination";
import { Table } from "@common/components/table";
import { currencyFormatter } from "@common/helpers/current-formatter";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useClipboardCopy } from "@common/hooks/useClipboardCopy";
import toast from "react-hot-toast";
import { IoCopy } from "react-icons/io5";
import { useAppSelector } from "@common/hooks/useAppSelector";
import { useAppDispatch } from "@common/hooks/useAppDispatch";
import { listPartnersMerchant } from "@common/redux/reducers/merchants/thunk";

export const MerchantTable = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.merchants);
  const [currentPage, setCurrentPage] = useState(1);
  const { copyTextToClipboard } = useClipboardCopy();

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleTextCopy = useCallback(
    (value: string) => {
      copyTextToClipboard(value)
        .then(() => toast.success("Text copied"))
        .catch(() => toast.error("Unable to copy..."));
    },
    [copyTextToClipboard]
  );

  const tableData = useMemo(
    () =>
      (data || []).map((item) => ({
        country: <p className="text-[#E41D1D]">{item.country}</p>,
        total_transaction: (
          <p className="text-[#139E64]">
            {currencyFormatter(item.total_transaction, item.currency)}
          </p>
        ),
        total_payout: (
          <p className="text-[#E41D1D]">
            {currencyFormatter(item.total_payout, item.currency)}
          </p>
        ),
        imid: (
          <div className="flex items-center gap-x-2">
            <p className="max-w-[6rem] truncate">
              {item.intrapay_merchant_id_imid}
            </p>
            <button
              className="  text-gray-400  text-sm"
              onClick={() => handleTextCopy(item.intrapay_merchant_id_imid)}
            >
              <IoCopy />
            </button>
          </div>
        ),
        bmid: (
          <div className="flex items-center gap-x-2">
            <p className="max-w-[6rem] truncate">
              {item.parnter_merchant_id_bmid}
            </p>
            <button
              className=" text-gray-400  text-sm"
              onClick={() => handleTextCopy(item.parnter_merchant_id_bmid)}
            >
              <IoCopy />
            </button>
          </div>
        ),
        status: (
          <button
            className={`${
              item.status.toLowerCase() === "active"
                ? "text-[#3E4244] bg-[#44CF9552]"
                : ""
            } text-xs px-4 py-1 rounded-md `}
          >
            {item.status}
          </button>
        ),
        date_joined: <p>{item.date_joined}</p>,
        full_name: <p>{item.full_name}</p>,
      })),
    [handleTextCopy, data]
  );

  useEffect(() => {
    dispatch(listPartnersMerchant());
  }, [dispatch]);

  return (
    <div className="">
      <Tooltip id="merchant__table__tooltip" />
      <Table columns={COLUMN} data={tableData} loading={loading} />
      <div className="flex justify-end mt-5">
        <Pagination
          currentPage={currentPage}
          totalItems={1000}
          setPage={handlePageChange}
          dataCount={20}
        />
      </div>
    </div>
  );
};

const COLUMN = [
  {
    Header: "Full Name",
    accessor: "full_name",
  },
  {
    Header: "Country",
    accessor: "country",
  },
  {
    Header: "Total Transaction",
    accessor: "total_transaction",
  },
  {
    Header: "Total Payout",
    accessor: "total_payout",
  },
  {
    Header: (
      <p
        data-tooltip-id="merchant__table__tooltip"
        data-tooltip-content="Intrapay Merchant ID"
        className="cursor-pointer flex gap-x-2 items-center"
      >
        <span>IMID</span>
        <span>
          <BsQuestionCircleFill />
        </span>
      </p>
    ),
    accessor: "imid",
  },
  {
    Header: (
      <p
        data-tooltip-id="merchant__table__tooltip"
        data-tooltip-content="Binance Merchant ID"
        className="cursor-pointer flex gap-x-2 items-center"
      >
        <span>BMID</span>
        <span>
          <BsQuestionCircleFill />
        </span>
      </p>
    ),
    accessor: "bmid",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Date Joined",
    accessor: "date_joined",
  },
];
