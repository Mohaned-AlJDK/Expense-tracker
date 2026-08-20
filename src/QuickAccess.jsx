import AddButton from "./AddButton";

function QuickAccess(){


    return(<div className=" w-100 bg-zinc-800 h-55 border">
    <h1  className="text-center mt-2">Quick Access</h1>
    <hr className="mt-1"></hr>
<div className="flex justify-center items-center h-[90%]">
    <div className="flex flex-col  p-4 h-40 justify-between mr-6">
 <AddButton Name="Add Expense"></AddButton>
    <AddButton Name="Set Budget"></AddButton>
    </div>
   <div className="flex flex-col  p-4 h-40 justify-between mr-6">
 <AddButton></AddButton>
    <AddButton></AddButton>
    </div>
    
</div>

    </div>)
}
export default QuickAccess;
// the plan is to add a quick access block and a block next to it that has recent transactions 