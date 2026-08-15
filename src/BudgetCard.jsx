import { DollarSign } from "lucide-react";

function BudgetCard({Name="Money Spent",Amount="$1000",OptinalPadding=""}){
    return(
    <div className="flex h-35 mt-4 rounded-2xl border bg-zinc-950 p-2 items-center w-75">
{/* am only going to add tha padding temporarly  */}
        <div className="flex flex-col justify-center items-center w-25 h-25 rounded-2xl border bg-gray-500">
    <DollarSign></DollarSign>
        </div>
               
         <div className=" ml-8 p-2 flex flex-col justify-center items-center">
<h2 className="mb-5 text-zinc-600">{Name}</h2>
    <h1>{Amount}</h1>
         </div>


    </div>)
}
export default BudgetCard;