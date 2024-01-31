import Pagination from "@common/components/pagination";
import { Table } from "@common/components/table"
import { currencyFormatter } from "@common/helpers/current-formatter"
import { useMemo, useState } from "react"


export const MerchantTable = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber: number) => {
          setCurrentPage(pageNumber);
    }

    const tableData = useMemo(() => MOCK_DATA.map((item) => ({
            
        country: <p className="text-[#E41D1D]">{item.country}</p>,
        total_transaction: <p className="text-[#139E64]">{currencyFormatter(item.total_transaction, "NGN")}</p>,
        mid: <p>{item.mid}</p>,
        date_joined: <p>{item.date_joined}</p>,
        full_name: <p>{item.full_name}</p>,
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

const COLUMN = [
    {
        Header: "Full Name",
        accessor: "full_name"
    },
    {
        Header: "Country",
        accessor: "country"
    },
    {
        Header: "Total Transaction",
        accessor: "total_transaction"
    },
    {
        Header: "MID",
        accessor: "mid"
    },
    {
        Header: "Date Joined",
        accessor: "date_joined"
    },
]

const MOCK_DATA = [
   {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm"
   },
   {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm"
   },
   {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm"
   },
   {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm"
   },
   {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm"
   },
   {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm"
   },
   {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm"
   },
   {
    full_name: "John Doe T",
    country: "Nigeria",
    total_transaction: 400000,
    mid: "MID_0087h76v",
    date_joined: "12 Nov. 2023 12:34pm"
   },
]