import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CardReveiveIcon } from "../../assets/icons";
import NumberFormatter from "../../helpers/number-formatter";

export interface DashboardCardProps {
  title: string;
  metric: number;
  link?: string;
  subText?: string;
  currency?: string;
}

export const DashboardCard = ({
  metric,
  title,
  link,
  subText,
  currency,
}: DashboardCardProps) => {
  return (
    <div className="border border-[#D3CBFB] flex flex-col justify-between rounded-2xl h-[10.313rem] max-w-[15.938rem] p-[1.563rem]">
      <div className="flex justify-between ">
        <div className="">
          <p className="text-[#797D8C] text-sm font-medium mb-2">{title}</p>
          <h1 className="text-[#04103B] text-2xl font-bold ">
            {NumberFormatter(metric, currency)}
          </h1>
        </div>
        <div className="">
          <CardReveiveIcon />
        </div>
      </div>
      <div className="flex justify-between items-center">
        {subText && (
          <p className="text-sm text-[#797D8C] font-semibold">{subText}</p>
        )}
        {link && (
          <Link to={link}>
            <MdKeyboardArrowRight className="text-2xl text-[#6E707D]" />
          </Link>
        )}
      </div>
    </div>
  );
};

export const DashboardCardLoading = () => {
  return (
    <div className="border border-[#D3CBFB] flex flex-col justify-between rounded-2xl h-[10.313rem] max-w-[15.938rem] p-[1.563rem]">
      <div className="flex justify-between ">
        <div className="flex-[0.7]">
          <div className="animate-pulse bg-slate-200 py-1 mb-3  w-[40%] rounded" />
          <div className="rounded animate-pulse bg-slate-200 py-2 w-[70%]" />
        </div>
        <div className="flex-[0.25] rounded-full bg-slate-200 animate-pulse h-10 w-10"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="animate-pulse bg-slate-200 py-1 mb-3  w-[40%] rounded" />
        <div className="animate-pulse bg-slate-200 py-1 mb-3  w-[15%] rounded" />
      </div>
    </div>
  );
};
