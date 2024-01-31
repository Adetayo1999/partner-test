import fuspayLogo from "@common/assets/images/logo.png.png";
import { Container } from "@common/components/skeleton/container"
import { Outlet } from "react-router-dom";


export const AuthLayout = () => {
    return(
        <Container>
            <div className="p-10 h-screen flex  items-center ">
                <div className="fixed top-8">
                    <div className="">
                        <img src={fuspayLogo} className="w-[8rem]" alt="Fuspay Logo" />
                    </div>
                </div>
                <div className="pt-10 flex justify-between items-center w-full">
                    <div className="flex-[0.5] ">
                        <h1 className="text-[#6A6A77] tracking-[-1.431px] font-bold text-[2.4rem] capitalize leading-[3rem]">Welcome to <br /> Fuspay Resolution Center</h1>
                    </div>
                    <div className="flex-[0.48] ">
                       <Outlet />
                    </div>
                </div>
            </div>
        </Container>
    )
}