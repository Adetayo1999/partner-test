import { CustomSelect } from "@common/components/forms/select";
import { TRANSACTION_STATUS, getStatus } from "@common/helpers/tx-status";
import { useAppDispatch } from "@common/hooks/useAppDispatch";
import { setTransactionFilter } from "@common/redux/reducers/transactions";
import { PATHS } from "@common/routes/paths";
import { PartnersTransactionRequestFilter } from "@common/types";
import { TransactionTable } from "@modules/dashboard/components/transaction-table";
import { Link, useSearchParams } from "react-router-dom";

interface FilterType {
  label: string;
  value: PartnersTransactionRequestFilter;
}

const TRANSACTION_FILTERS: FilterType[] = [
  { label: "Monthly", value: "monthly" },
  { label: "Weekly", value: "weekly" },
  { label: "Daily", value: "daily" },
];

function Transactions() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "";

  return (
    <div className="">
      <div className="mb-[2rem] flex justify-between items-center">
        <ul className="flex gap-x-[2rem]">
          {TRANSACTION_TABS.map((item) => (
            <li className="capitalize" key={item}>
              <Link
                to={PATHS.protected.transactions + `?type=${item}`}
                className={`${
                  getStatus(type) === item
                    ? "text-white bg-[#1E3F52] rounded-lg"
                    : "text-[#1E3F52]"
                } font-bold text-sm px-6 py-2`}
                onClick={() => searchParams.set("type", item)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-5 items-center">
          <p className="text-[#71717A] font-bold text-sm">Filter:</p>

          <CustomSelect<PartnersTransactionRequestFilter>
            className="w-[8rem] h-[2.5rem] font-bold text-sm"
            options={TRANSACTION_FILTERS}
            onChange={(data) => {
              dispatch(setTransactionFilter(data?.value));
            }}
            defaultValue={TRANSACTION_FILTERS[0]}
          />
          <button className="h-[2.5rem] text-sm px-6 text-[#44CF95] border border-[#44CF95] font-bold min-w-[7rem] rounded-md">
            Export
          </button>
        </div>
      </div>
      <TransactionTable />
    </div>
  );
}

const TRANSACTION_TABS: TRANSACTION_STATUS[] = [
  "pending",
  "completed",
  "mismatched",
  "abandoned",
  "expired",
];

export default Transactions;
