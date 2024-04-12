import emptyImage from "@common/assets/images/empty.png.png";
import { Button } from "@common/components/forms/button";
import { Input } from "@common/components/forms/input";
import { currencyFormatter } from "@common/helpers/current-formatter";
import { useClipboardCopy } from "@common/hooks/useClipboardCopy";
import { ResolutionResultType } from "@common/types";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";

interface ResolutionResultProps {
  data: ResolutionResultType[];
}

type ResolutionRecordProps = {
  title: string;
  value: string;
  hasMatched?: boolean;
  hasCompleted?: boolean;
  hasCopy?: boolean;
};

const ResolutionRecord = ({
  hasCompleted,
  hasCopy,
  hasMatched,
  title,
  value,
}: ResolutionRecordProps) => {
  const { copyTextToClipboard } = useClipboardCopy();

  const handleTextCopy = () => {
    copyTextToClipboard(value)
      .then(() => toast.success("Text copied"))
      .catch(() => toast.error("Unable to copy..."));
  };

  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-sm text-[#C3C0C0] font-bold">{title}</p>
      <div className="">
        <div className="flex gap-x-5">
          <h3 className="text-[#6F6F6F] font-bold text-sm">{value}</h3>
          {hasMatched && (
            <div className="flex flex-col items-center gap-y-2">
              <span className="bg-[#44CF95] flex justify-center items-center  text-white rounded-full w-[1.5rem] h-[1.5rem]">
                <FaCheck className="text-sm" />
              </span>
              <span className="text-[0.625rem] px-1 text-center text-[#3E4244] bg-[rgba(68,_207,_149,_0.32)]   rounded font-semibold">
                Matched
              </span>
            </div>
          )}
          {hasCompleted && (
            <div className="">
              <span className="text-xs px-2 py-1 text-center text-[#3E4244] bg-[rgba(68,_207,_149,_0.32)]   rounded font-semibold">
                Completed
              </span>
            </div>
          )}
        </div>
        {hasCopy && (
          <div className="mt-1">
            <button
              className="bg-[rgba(68,_207,_149,_0.25)] px-4 py-1 text-[#42A87D] font-bold text-xs  rounded"
              onClick={handleTextCopy}
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const ResolutionResult = ({ data }: ResolutionResultProps) => {
  const isDataEmpty = data.length === 0;

  const renderEmptyState = () => (
    <div className="py-5 flex justify-center items-center flex-col gap-y-3 min-h-[20rem]">
      <div className="">
        <img src={emptyImage} alt="" />
      </div>
      <p className="text-[#797D8C] text-lg">No Search Data</p>
    </div>
  );

  return (
    <div className="">
      <div className=" border-b border-[#C0C0C0] pb-3 mb-12">
        <h2 className="text-[#6F6F6F] font-bold text-lg px-4">
          {data.length || null} Search Result
        </h2>
      </div>
      {isDataEmpty ? renderEmptyState() : null}

      <div className="flex flex-col gap-y-6 mb-8">
        {data.map((item, idx) => {
          return (
            <div
              className="border-b border-[#C0C0C0] pb-8 grid grid-cols-5 gap-y-14"
              key={idx}
            >
              <ResolutionRecord
                title="Order Amount "
                value={currencyFormatter(item.total_transaction, item.currency)}
                hasMatched
              />
              <ResolutionRecord
                title="Amount Paid"
                value={currencyFormatter(item.total_payout, item.currency)}
                hasCompleted
              />
              <ResolutionRecord title="Sender’s name" value={item.full_name} />
              <ResolutionRecord title="Session ID" value="NIL" hasCopy />
              <ResolutionRecord title="Currency" value={item.currency} />
              <ResolutionRecord title="Bank Reference" value="NIL" />
              <ResolutionRecord title="Order Number" value="NIL" hasCopy />
              <ResolutionRecord title="Date/time" value={item.date_joined} />
              <ResolutionRecord title="Transaction Duration" value={"NIL"} />
              <ResolutionRecord
                title="Merchant Details"
                value={"NIL"}
                hasCopy
              />
            </div>
          );
        })}
      </div>
      {!isDataEmpty ? (
        <div className="">
          <form className="flex gap-x-5 items-end">
            <div className="flex-[0.5]">
              <Input labelText="Send to Email" required />
            </div>
            <div className="flex flex-col gap-y-1  ">
              <Button>Send</Button>
              <div className="h-4" />
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};
