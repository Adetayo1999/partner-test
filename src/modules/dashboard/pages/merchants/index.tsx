import { Input } from "@common/components/forms/input";
import { CustomSelect } from "@common/components/forms/select";
import { useAppSelector } from "@common/hooks/useAppSelector";
import { MerchantTable } from "@modules/dashboard/components/merchants-table";
import { GoSearch } from "react-icons/go";

function Merchants() {
  const countriesState = useAppSelector((state) => state.countries.data);

  const formattedCountries = countriesState?.map((item) => ({
    label: item.name,
    value: item.currency,
  }));

  return (
    <div className="">
      <div className="flex gap-x-5 items-center justify-between mb-5 ">
        <CustomSelect
          className="w-[8rem] h-[2.5rem] font-bold text-sm"
          options={formattedCountries || []}
          // defaultValue={OPTIONS[0]}
        />
        <div className="">
          <form>
            <div className="min-w-[20rem] h-[2.5rem] relative">
              <span className="absolute z-10 text-lg top-[0.55rem] left-3">
                <GoSearch />
              </span>
              <Input
                placeholder="Search by Merchant ID"
                className=" !text-sm !h-full !w-full pl-10 !rounded-md"
                hideErrorText
                type="search"
              />
            </div>
          </form>
        </div>
      </div>
      <MerchantTable />
    </div>
  );
}

export default Merchants;
