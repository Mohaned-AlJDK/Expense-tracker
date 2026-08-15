import SideBarItem from "./SideBarItem";
import {GlobeOff, Landmark,DollarSign, Wallet, Flag, Settings2} from "lucide-react"
import { Badge } from "lucide-react";
import {House} from "lucide-react"
// i should have put all the lucide imports together
function SideBar(){





    return(<div className="flex flex-col w-70 h-[96vh] m-3 border rounded-xl p-2 bg-zinc-950">


<div className="flex  items-center w-full h-25  mt-2 p-2 ">
  <div className="bg-black rounded-[100px] w-20 h-20"></div>
  <div className="flex flex-col ml-2">
  <h2>JohnDarkSouls21</h2>
  <h3 className="text-slate-600 text-[12px]">Chosen Undead</h3></div>
</div>




<div className="h-full flex flex-col justify-between">
<div className="mt-4 flex flex-col ">
  <SideBarItem ItemName={"Dashboard"} icon={Landmark} ></SideBarItem>
   <SideBarItem ItemName={"Expenses"} icon={DollarSign}></SideBarItem>
    <SideBarItem ItemName={"Budget"} icon={Wallet}></SideBarItem>
     <SideBarItem ItemName={"Reports"} icon={Flag}></SideBarItem>
      <SideBarItem ItemName={"Settings"} icon={Settings2}></SideBarItem>
    
</div>
<h2 className="text-zinc-800"></h2>
{/* here i might write something along the lines of "Made by x" where x is replaced by my name */}
</div>


    </div>)
}
export default SideBar;
// when importing from Lucide an icon that has a dash like dollar-sign you can just write it in pascal case so it can work e,g DollarSign