import BudgetCard from "./BudgetCard"
import QuickAccess from "./QuickAccess"
import RecentTransactions from "./RecentTransactions"
function Dashboard({Budget="Unknown",Expenses="Unknown",Balance="Unknown"}){
    return(<div className=" text-white flex flex-col ">
<div className="flex justify-around w-260">
        <BudgetCard Name="Monthly Income" Amount={Budget}></BudgetCard>
         <BudgetCard Name="Expenses" Amount={Expenses}></BudgetCard>
          <BudgetCard Name="Balance" Amount={Balance}></BudgetCard>
          </div>
          <div className="flex justify-around mt-8">
            <QuickAccess></QuickAccess>
            <RecentTransactions></RecentTransactions>
          </div>
    </div>)
}
export default Dashboard
// i couldnt make the the budget card div take up all the space availebel