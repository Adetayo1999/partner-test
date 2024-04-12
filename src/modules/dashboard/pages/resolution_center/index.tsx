import { Button } from "@common/components/forms/button";
import { Dropdown } from "@common/components/forms/dropdown";
import { Input } from "@common/components/forms/input";
import { useAppSelector } from "@common/hooks/useAppSelector";
import { requests } from "@common/services";
import {
  PartnersSearchRecordsRequestQuery,
  PartnersSearchRecordsRequestType,
  ResolutionResultType,
} from "@common/types";
import { ResolutionResult } from "@modules/dashboard/components/resolution-result";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface ResolutionCenterFormType {
  type: PartnersSearchRecordsRequestType;
  query: PartnersSearchRecordsRequestQuery;
  data: string;
  country: string;
}

function ResolutionCenter() {
  const countriesState = useAppSelector((state) => state.countries.data);
  const [loading, setLoading] = useState(false);
  const [resolutionResult, setResolutionResult] = useState<
    ResolutionResultType[]
  >([]);

  const formattedCountries = countriesState?.map((item) => ({
    label: item.name,
    value: item.name,
  }));

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ResolutionCenterFormType>();

  const handleQuerySearch: SubmitHandler<ResolutionCenterFormType> = async (
    data
  ) => {
    try {
      setLoading(true);
      const { data: responseData } = await requests.searchRecords(
        { text: data.data },
        data.type,
        data.query
      );
      setResolutionResult(responseData.data);
      reset();
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
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
                options={
                  formattedCountries
                    ? [{ label: "Country", value: "" }, ...formattedCountries]
                    : []
                }
                {...register("country", { required: true })}
                error={errors.country}
              />
            </div>
            <div className="flex flex-col gap-y-1  ">
              <Button loading={loading} className="min-w-[6rem]">
                Search
              </Button>
              <div className="h-4" />
            </div>
          </div>
        </form>
      </div>
      <ResolutionResult data={resolutionResult} />
    </div>
  );
}

export default ResolutionCenter;
