import Pagination from "@common/components/pagination";
import { Table } from "@common/components/table";
import { currencyFormatter } from "@common/helpers/current-formatter";
import { useCallback, useMemo, useState } from "react";
import { useClipboardCopy } from "@common/hooks/useClipboardCopy";
import toast from "react-hot-toast";
import { IoCopy } from "react-icons/io5";

export const MerchantTable = () => {
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
      MOCK_DATA.map((item) => ({
        country: <p className="text-[#E41D1D]">{item.country}</p>,
        total_transaction: (
          <p className="text-[#139E64]">
            {currencyFormatter(item.total_transaction, "NGN")}
          </p>
        ),
        total_payout: (
          <p className="text-[#E41D1D]">
            {currencyFormatter(item.total_payout, "NGN")}
          </p>
        ),
        imid: (
          <div className="flex items-center gap-x-2">
            <p className="max-w-[6rem] truncate">{item.mid}</p>
            <button
              className="  text-gray-400  text-sm"
              onClick={() => handleTextCopy(item.mid)}
            >
              <IoCopy />
            </button>
          </div>
        ),
        bmid: (
          <div className="flex items-center gap-x-2">
            <p className="max-w-[6rem] truncate">{item.bmid}</p>
            <button
              className=" text-gray-400  text-sm"
              onClick={() => handleTextCopy(item.bmid)}
            >
              <IoCopy />
            </button>
          </div>
        ),
        status: (
          <button
            className={`${
              item.active ? "text-[#3E4244] bg-[#44CF9552]" : ""
            } text-xs px-4 py-1 rounded-md `}
          >
            {item.active ? "Active" : "Inactive"}
          </button>
        ),
        date_joined: <p>{item.date_joined}</p>,
        full_name: <p>{item.full_name}</p>,
      })),
    [handleTextCopy]
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
    Header: "IMID",
    accessor: "imid",
  },
  {
    Header: "BMID",
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

const MOCK_DATA = [
  {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    total_payout: 65000000,
    active: true,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm",
    bmid: "0xf07373bb489AB0957E932515261fbCE433EF988c",
  },
  {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    total_payout: 65000000,
    active: true,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm",
    bmid: "0xf07373bb489AB0957E932515261fbCE433EF988c",
  },
  {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    total_payout: 65000000,
    active: true,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm",
    bmid: "0xf07373bb489AB0957E932515261fbCE433EF988c",
  },
  {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    total_payout: 65000000,
    active: true,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm",
    bmid: "0xf07373bb489AB0957E932515261fbCE433EF988c",
  },
  {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    total_payout: 65000000,
    active: true,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm",
    bmid: "0xf07373bb489AB0957E932515261fbCE433EF988c",
  },
  {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    total_payout: 65000000,
    active: true,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm",
    bmid: "0xf07373bb489AB0957E932515261fbCE433EF988c",
  },
  {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    total_payout: 65000000,
    active: true,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm",
    bmid: "0xf07373bb489AB0957E932515261fbCE433EF988c",
  },
  {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    total_payout: 65000000,
    active: true,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm",
    bmid: "0xf07373bb489AB0957E932515261fbCE433EF988c",
  },
];
