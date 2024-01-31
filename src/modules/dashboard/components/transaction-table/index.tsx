import Pagination from "@common/components/pagination"
import { Table } from "@common/components/table"
import { currencyFormatter } from "@common/helpers/current-formatter"
import { useMemo, useState } from "react"



export const TransactionTable = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber: number) => {
          setCurrentPage(pageNumber);
    }

    const tableData = useMemo(() => MOCK_DATA.map((item) => ({
            
        amount: <p>{ currencyFormatter(item.amount, "NGN")}</p>,
        fee: <p className="text-[#E41D1D]">{currencyFormatter(item.fee, "NGN")}</p>,
        settled: <p className="text-[#139E64]">{currencyFormatter(item.settled, "NGN")}</p>,
        order_no: <p className="max-w-[10rem] truncate">{item.order_no}</p>,
        time: <p>{item.time}</p>,
        status: <p className={`${item.status.toLowerCase() === "completed" ? "text-[#3E4244] bg-[rgba(68,_207,_149,_0.32)]" : ""} text-xs px-4 py-1 rounded-md w-fit`}>{item.status}</p>,
        action:   <button className="px-4 py-1 rounded-md w-fit text-[#3E4244] min-w-[7rem] bg-[rgba(0,_117,_226,_0.37)]">View</button>

    })), [])

    return(
        <div className="">
            <Table columns={COLUMN} data={tableData} />
            <div className="flex justify-end mt-5">
            <Pagination currentPage={currentPage} totalItems={1000} setPage={handlePageChange} dataCount={20} />
            </div>
        </div>
    )
}


const MOCK_DATA = [
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
    {
        amount: 100000000.34,
        fee: 100.34,
        settled: 1000,
        order_no: "PE33WS553jdjs83sy83hsh....",
        time: "12 Nov. 2023 12:34pm",
        status: "Completed",
        action: "View"
    },
]

const COLUMN = [
    {
        Header: "Amount",
        accessor: "amount"
    },
    {
        Header: "Fee",
        accessor: "fee"
    },
    {
        Header: "Settled",
        accessor: "settled"
    },
    {
        Header: "Order No.",
        accessor: "order_no"
    },
    {
      Header: "Status",
      accessor: "status"
    },
    {
        Header: "Time/Date",
        accessor: "time"
    },
    {
        Header: "Action",
        accessor: "action"
    },
]
