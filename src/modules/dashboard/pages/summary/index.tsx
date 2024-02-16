import { FaCircleUser } from "react-icons/fa6";
import { DashboardCard } from "@common/components/dashboard-card";
import { CustomSelect } from "@common/components/forms/select";
import { PATHS } from "@common/routes/paths";

function Summary() {
  return (
    <div className="">
      <div className="mb-[2.25rem]">
        <div className="mb-8 flex justify-between ">
          <h2 className="text-[#04103B] text-2xl font-bold">
            Welcome Binance,
          </h2>
          <div className="flex gap-x-5 items-center">
            <p className="text-[#71717A] font-bold text-sm">Filter:</p>
            <CustomSelect
              className="w-[10rem] font-bold text-sm"
              options={[
                { label: "Monthly", value: "monthly" },
                { label: "Weekly", value: "weekly" },
                { label: "Daily", value: "daily" },
              ]}
            />
          </div>
        </div>
        <div className="md:grid-cols-5 gap-4 grid">
          {MOCK_DATA.map((item) => (
            <DashboardCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="">
        <div className="mb-6">
          <h2 className="text-[#04103B] text-2xl font-bold">
            Support Channels
          </h2>
        </div>
        <div className="grid grid-cols-4">
          <div className="flex items-center gap-x-5">
            <div className="">
              <FaCircleUser className="text-3xl text-[#04103B]" />
            </div>
            <div className="">
              <h3 className="text-[#04103B] font-bold">Charles Avis</h3>
              <a
                href="mailto:avis@fuspay.us"
                className="text-sm text-[#696969]"
              >
                avis@fuspay.us
              </a>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx="15.5873"
                  cy="16.0909"
                  r="14.8387"
                  stroke="#686161"
                  strokeWidth="1.48387"
                />
                <path
                  d="M8.34033 23.3334C8.34033 21.869 8.92205 20.4646 9.95751 19.4291C10.993 18.3937 12.3974 17.812 13.8617 17.812C15.3261 17.812 16.7305 18.3937 17.7659 19.4291C18.8014 20.4646 19.3831 21.869 19.3831 23.3334H8.34033ZM13.8617 17.1218C11.5738 17.1218 9.72068 15.2687 9.72068 12.9808C9.72068 10.6928 11.5738 8.83972 13.8617 8.83972C16.1496 8.83972 18.0028 10.6928 18.0028 12.9808C18.0028 15.2687 16.1496 17.1218 13.8617 17.1218Z"
                  stroke="#6C6C6C"
                  strokeWidth="1.48387"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.6929 9.53003C20.4088 9.53003 21.7986 11.2067 21.7986 13.2767C21.7986 15.3467 20.4088 16.9576 18.6929 16.9576C19.7911 16.9576 20.8444 17.4839 21.621 18.4208C22.3976 19.3576 22.8339 20.6282 22.8339 21.9531H21.0592"
                  stroke="#6C6C6C"
                  stroke-width="1.48387"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-[#04103B] font-bold">Chat Support</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

const MOCK_DATA = [
  {
    id: 1,
    title: "Total Order",
    subText: "10,234 txns",
    metric: 4350000000,
  },
  {
    id: 2,
    title: "Pending Txn",
    subText: "1,234 txns",
    metric: 61435.67,
    link: PATHS.protected.transactions + "?type=pending",
  },
  {
    id: 3,
    title: "Mismatched Txn",
    subText: "10,234 txns",
    metric: 43500,
    link: PATHS.protected.transactions + "?type=mismatched",
  },
  {
    id: 4,
    title: "Total Expired",
    subText: "1,234 txns",
    metric: 1300,
    link: PATHS.protected.transactions + "?type=expired",
  },
  {
    id: 5,
    title: "Total Abandoned",
    subText: "10,234 txns",
    metric: 43500,
  },
  {
    id: 6,
    title: "Total Users",
    metric: 43500,
  },
];

export default Summary;
