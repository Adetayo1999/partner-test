import { DashboardCard } from "@common/components/dashboard-card";
import { CustomSelect } from "@common/components/forms/select";
import { PATHS } from "@common/routes/paths";



function Summary() {
    return(
        <div className="">
            <div className="mb-[2.25rem]">
                <div className="mb-8 flex justify-between ">
                    <h2 className="text-[#04103B] text-2xl font-bold">Welcome  Binance,</h2>
                    <div className="flex gap-x-5 items-center">
                        <p className="text-[#71717A] font-bold text-sm">Filter:</p>
                        <CustomSelect className="w-[10rem] font-bold text-sm" options={[{ label: "Monthly",  value: "monthly"},{ label: "Weekly",  value: "weekly"}, { label: "Daily",  value: "daily"}]} />
                    </div>
                </div>
                <div className="md:grid-cols-5 gap-4 grid">
                  {
                    MOCK_DATA.map((item) => (
                        <DashboardCard  key={item.id} {...item} />
                    ))
                  }
                </div>
            </div>
            <div className="">
            <div className="mb-6">
                    <h2 className="text-[#04103B] text-2xl font-bold">Support Channels</h2>
                </div>
            </div>
        </div>
    )
}


const MOCK_DATA = [
    {
        id: 1,
        title: "Total Order",
        subText: "10,234 txns",
        metric: 4350000000
    },
    {
        id: 2,
        title: "Pending Txn",
        subText: "1,234 txns",
        metric: 61435.67,
        link: PATHS.protected.transactions + "?type=pending"
    },
    {
        id: 3,
        title: "Mismatched Txn",
        subText: "10,234 txns",
        metric: 43500
    },
    {
        id: 4,
        title: "Total Expired",
        subText: "1,234 txns",
        metric: 1300
    },
    {
        id: 5,
        title: "Total Abandoned",
        subText: "10,234 txns",
        metric: 43500
    },
    {
        id: 6,
        title: "Total Users",
        subText: "10,234 txns",
        metric: 43500
    },
]

export default Summary;