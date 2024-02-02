import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CardReveiveIcon } from "../../assets/icons";
import NumberFormatter from "../../helpers/number-formatter";

export interface DashboardCardProps {
    title: string;
    metric: number;
    link?: string;
    subText?: string;
}



export const DashboardCard = ({ metric, title, link, subText }: DashboardCardProps) => {

    return(
        <div className="border border-[#D3CBFB] flex flex-col justify-between rounded-2xl h-[10.313rem] max-w-[15.938rem] p-[1.563rem]">
          <div className="flex justify-between ">
            <div className="">
                <p className="text-[#797D8C] text-sm font-medium mb-2">{title}</p>
                <h1 className="text-[#04103B] text-2xl font-bold ">{NumberFormatter(metric)}</h1>
            </div>
            <div className="">
                <CardReveiveIcon />
            </div>
          </div>
          <div className="flex justify-between items-center">
            {subText &&  <p className="text-sm text-[#797D8C] font-semibold">{subText}</p>}
            {
                link && <Link to={link} > 
                <MdKeyboardArrowRight className="text-2xl text-[#6E707D]" />
                </Link>
            }
          </div>
        </div>
    )

}