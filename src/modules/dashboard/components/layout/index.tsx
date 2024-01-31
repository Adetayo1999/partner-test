import fuspayLogo from "@common/assets/images/logo.png.png";
import { Button } from "@common/components/forms/button";
import { Container } from "@common/components/skeleton/container"
import { Tabs } from "@common/components/tabs";
import { PATHS } from "@common/routes/paths";
import { Outlet } from "react-router-dom";


const TABS = [
    {
        id: 1,
        title: "Summary",
        path: PATHS.protected.home,
    },
    {
        id: 2,
        title: "Transactions",
        path: PATHS.protected.transactions,
    },
    {
        id: 3,
        title: "Merchants",
        path: PATHS.protected.merchants,
    },
    {
        id: 4,
        title: "Resolution Center",
        path: PATHS.protected.resolution_center,
    },
]

export const ProtectedLayout = () => {
    return(
        <Container>
            <div className="py-6">
                <div className="flex justify-between items-center mb-[2rem]">
                    <div className="">
                        <img src={fuspayLogo} className="w-[7rem]" alt="Fuspay" />
                    </div>
                    <div className="">
                        <Button size="sm" variant="danger" >Logout</Button>
                    </div>
                </div>
                 <div className="mb-[2rem]">
                    <Tabs tabs={TABS} />
                 </div>
                 <div className="">
                    <Outlet />
                 </div>
            </div>
        </Container>
    )
}