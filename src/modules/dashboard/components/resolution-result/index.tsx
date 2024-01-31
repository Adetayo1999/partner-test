// import emptyImage from "@common/assets/images/empty.png.png";
import { Button } from "@common/components/forms/button";
import { Input } from "@common/components/forms/input";
import { currencyFormatter } from "@common/helpers/current-formatter";
import { FaCheck } from "react-icons/fa6";

type ResolutionRecordProps = {
   title: string;
   value: string;
   hasMatched?: boolean;
   hasCompleted?: boolean;
   hasCopy?: boolean;
}

const ResolutionRecord = ({ hasCompleted, hasCopy, hasMatched, title, value}: ResolutionRecordProps) => {
    return(
        <div className="flex flex-col gap-y-2">
         <p className="text-sm text-[#C3C0C0] font-bold">{title}</p>
        <div className="">
        <div className="flex gap-x-5">
        <h3 className="text-[#6F6F6F] font-bold text-sm">{value}</h3>
        {hasMatched && (
            <div className="flex flex-col items-center gap-y-2">
                <span className="bg-[#44CF95] flex justify-center items-center  text-white rounded-full w-[1.5rem] h-[1.5rem]">
                    <FaCheck className="text-sm"/>
                </span>
                <span className="text-[0.625rem] px-1 text-center text-[#3E4244] bg-[rgba(68,_207,_149,_0.32)]   rounded font-semibold">Matched</span>
            </div>
        )}
        {
            hasCompleted && (
                <div className="">
                    <span className="text-xs px-2 py-1 text-center text-[#3E4244] bg-[rgba(68,_207,_149,_0.32)]   rounded font-semibold">Completed</span>
                </div>
            )
        }
        </div>
        {
            hasCopy && (
                <div className="mt-1">
                   <button className="bg-[rgba(68,_207,_149,_0.25)] px-4 py-1 text-[#42A87D] font-bold text-xs  rounded">Copy</button>
                </div>
            )
        }
        </div>
        </div>
    )
}


export const ResolutionResult = () => {
    

    // const renderEmptyState = () => (
    //     <div className="py-5 flex justify-center items-center flex-col gap-y-3">
    //         <div className="">
    //             <img src={emptyImage} alt="" />
    //         </div>
    //         <p className="text-[#797D8C] text-lg">No Search Data</p>
    //     </div>
    // )

    return(
        <div className="">
            <div className=" border-b border-[#C0C0C0] pb-3 mb-5">
                <h2 className="text-[#6F6F6F] font-bold text-lg px-4">Search Result</h2>
            </div>
            {/* {renderEmptyState()} */}

           <div className="flex flex-col gap-y-6 mb-8">
                {
                    MOCK_DATA.map((item) => {

                        return(
                            <div className="border-b border-[#C0C0C0] pb-8 grid grid-cols-5 gap-y-14 ">
                                <ResolutionRecord title="Order Amount " value={currencyFormatter(item.order_amount, "NGN")} 
                                hasMatched
                                />
                                <ResolutionRecord title="Amount Paid" value={currencyFormatter(item.amount_paid, "NGN")} hasCompleted  />
                                <ResolutionRecord title="Sender’s name" value={item.sender_name} />
                                <ResolutionRecord title="Session ID" value={item.session_id} hasCopy />
                                <ResolutionRecord title="Currency" value={item.currency} />
                                <ResolutionRecord title="Bank Reference" value="REF2023110912345758393_1" />
                                <ResolutionRecord title="Order Number" value={item.order_number} hasCopy />
                                <ResolutionRecord title="Date/time" value={item.date} />
                                <ResolutionRecord title="Transaction Duration" value={item.transaction_duration} />
                                <ResolutionRecord title="Merchant Details" value={item.merchant_details} hasCopy />
                                
                            </div>
                        )

                    })
                }
           </div>
           <div className="">
            <form className="flex gap-x-5 items-end">
                <div className="flex-[0.5]">
                <Input  labelText="Send to Email"   />
                </div>
                <div className="flex flex-col gap-y-1  ">
                    <Button>Send</Button>
                    <div className="h-4" />
                    </div>
            </form>
           </div>
        </div>
    )
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
        merchant_details: "Charles Avis A"
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
        merchant_details: "Charles Avis A"
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
        merchant_details: "Charles Avis A"
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
        merchant_details: "Charles Avis A"
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
        merchant_details: "Charles Avis A"
    },
]