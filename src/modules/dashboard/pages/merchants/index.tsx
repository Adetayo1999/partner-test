import { CustomSelect } from "@common/components/forms/select";
import { MerchantTable } from "@modules/dashboard/components/merchants-table";

function Merchants() {
    return(
        <div className="">
            <div className="flex gap-x-5 items-center mb-5">
                        <CustomSelect className="w-[8rem] h-[2.5rem] font-bold text-sm" 
                        options={[
                            {
                                label: "Nigeria",
                                value: "nigeria"
                            },
                            {
                                label: "Ghana",
                                value: "ghana"
                            },
                        ]} 
                        
                        />
                    </div>
            <MerchantTable />
        </div>
        )
}

export default Merchants;