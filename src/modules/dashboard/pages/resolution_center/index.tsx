import { Button } from "@common/components/forms/button";
import { Dropdown } from "@common/components/forms/dropdown";
import { Input } from "@common/components/forms/input";
import { ResolutionResult } from "@modules/dashboard/components/resolution-result";
import { SubmitHandler, useForm } from "react-hook-form";

interface ResolutionCenterFormType {
  type: string;
  query: string;
  data: string;
  country: string;
}

function ResolutionCenter() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ResolutionCenterFormType>();

  const handleQuerySearch: SubmitHandler<ResolutionCenterFormType> = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <div className="mb-10">
        <p className=" text-gray-800 text-sm  font-bold mb-10">
          The “Resolution Center” is designed to search transaction by order
          number and to be bale to escalate to Fuspay for any needed customer
          support.
        </p>

        <form onSubmit={handleSubmit(handleQuerySearch)}>
          <div className="flex  items-end gap-x-5 w-full">
            <div className="flex-[0.2]">
              <Dropdown
                options={[
                  {
                    label: "Type",
                    value: "",
                  },
                  {
                    label: "Payout",
                    value: "payout",
                  },
                  {
                    label: "Collection",
                    value: "collection",
                  },
                ]}
                {...register("type", { required: true })}
                error={errors.type}
              />
            </div>
            <div className="flex-[0.2]">
              <Dropdown
                options={[
                  {
                    label: "Query",
                    value: "",
                  },
                  {
                    label: "Session ID",
                    value: "session_id",
                  },
                  {
                    label: "Order Number",
                    value: "order_number",
                  },
                  {
                    label: "Bank Ref",
                    value: "bank_ref",
                  },
                  {
                    label: "Virtual Account",
                    value: "virtual_account",
                  },
                ]}
                {...register("query", { required: true })}
                error={errors.query}
              />
            </div>
            <div className="flex-[0.35]">
              <Input
                placeholder="PE33WS553jdjs83sy83hsh...."
                {...register("data", { required: true })}
                error={errors.data}
              />
            </div>
            <div className="flex-[0.2]">
              <Dropdown
                options={[
                  {
                    label: "Nigeria",
                    value: "nigeria",
                  },
                  {
                    label: "Ghana",
                    value: "ghana",
                  },
                  {
                    label: "Kenya",
                    value: "kenya",
                  },
                  {
                    label: "Saudi Arabia",
                    value: "saudi arabia",
                  },
                ]}
                {...register("country", { required: true })}
                error={errors.country}
              />
            </div>
            <div className="flex flex-col gap-y-1  ">
              <Button>Search</Button>
              <div className="h-4" />
            </div>
          </div>
        </form>
      </div>
      <ResolutionResult data={MOCK_DATA} />
    </div>
  );
}

const MOCK_DATA = [
  {
    id: 1,
    order_amount: 100000,
    amount_paid: 1000,
    sender_name: "AVIS CHARLES AYODEJI",
    session_id: "1000020220000303003383....",
    currency: "NGN",
    bank_ref: "REF2023110912345758393_1",
    order_number: "PE33WS553jdjs83sy83hsh....",
    date: "2023-11-12   10:09PM",
    transaction_duration: "12min 10 sec",
    merchant_details: "Charles Avis A",
  },
  {
    id: 1,
    order_amount: 100000,
    amount_paid: 1000,
    sender_name: "AVIS CHARLES AYODEJI",
    session_id: "1000020220000303003383....",
    currency: "NGN",
    bank_ref: "REF2023110912345758393_1",
    order_number: "PE33WS553jdjs83sy83hsh....",
    date: "2023-11-12   10:09PM",
    transaction_duration: "12min 10 sec",
    merchant_details: "Charles Avis A",
  },
  {
    id: 2,
    order_amount: 100000,
    amount_paid: 1000,
    sender_name: "AVIS CHARLES AYODEJI",
    session_id: "1000020220000303003383....",
    currency: "NGN",
    bank_ref: "REF2023110912345758393_1",
    order_number: "PE33WS553jdjs83sy83hsh....",
    date: "2023-11-12   10:09PM",
    transaction_duration: "12min 10 sec",
    merchant_details: "Charles Avis A",
  },
  {
    id: 3,
    order_amount: 100000,
    amount_paid: 1000,
    sender_name: "AVIS CHARLES AYODEJI",
    session_id: "1000020220000303003383....",
    currency: "NGN",
    bank_ref: "REF2023110912345758393_1",
    order_number: "PE33WS553jdjs83sy83hsh....",
    date: "2023-11-12   10:09PM",
    transaction_duration: "12min 10 sec",
    merchant_details: "Charles Avis A",
  },
  {
    id: 4,
    order_amount: 100000,
    amount_paid: 1000,
    sender_name: "AVIS CHARLES AYODEJI",
    session_id: "1000020220000303003383....",
    currency: "NGN",
    bank_ref: "REF2023110912345758393_1",
    order_number: "PE33WS553jdjs83sy83hsh....",
    date: "2023-11-12   10:09PM",
    transaction_duration: "12min 10 sec",
    merchant_details: "Charles Avis A",
  },
];

export default ResolutionCenter;
