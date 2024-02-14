import { Button } from "@common/components/forms/button";
import { Dropdown } from "@common/components/forms/dropdown";
import { Input } from "@common/components/forms/input";
import { ResolutionResult } from "@modules/dashboard/components/resolution-result";

function ResolutionCenter() {
  return (
    <div className="">
      <div className="mb-10">
        <p className=" text-gray-800 text-sm  font-bold mb-10">
          The “Resolution Center” is designed to search transaction by order
          number and to be bale to escalate to Fuspay for any needed customer
          support.
        </p>

        <form action="">
          <div className="flex  items-end gap-x-5 w-full">
            <div className="flex-[0.2]">
              <Dropdown
                options={[
                  {
                    label: "Payout",
                    value: "payout",
                  },
                  {
                    label: "Collection",
                    value: "collection",
                  },
                ]}
                className=""
              />
            </div>
            <div className="flex-[0.4]">
              <Input labelText="Order Number" className="" />
            </div>
            <div className="flex-[0.2]">
              <Dropdown
                options={[
                  {
                    label: "Nigeria",
                    value: "nigeria",
                  },
                ]}
                className=""
              />
            </div>
            <div className="flex flex-col gap-y-1  ">
              <Button>Search</Button>
              <div className="h-4" />
            </div>
          </div>
        </form>
      </div>
      <ResolutionResult />
    </div>
  );
}

export default ResolutionCenter;
