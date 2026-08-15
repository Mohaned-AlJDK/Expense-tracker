import {GlobeOff} from "lucide-react"

function SideBarItem({ItemName="SideBarItem",icon:Icon = GlobeOff}){
    return(<div className="flex items-center h-10 rounded  border-white mt-4 p-2 hover:border-sky-200 hover:border hover:pl-6 hover:bg-zinc-800 transition-all">
<h2 className="pr-1"><Icon></Icon></h2>
<h2 className="pl-1">{ItemName}</h2>
    </div>)
}
export default SideBarItem;
// the rule of thuimb of passing icons as props is to write icon:Icon = "PlaceHolder" 
// first is lowercase secend is uppercase
// this way is mostly just used for icons, othor reasons to use this are very niche
// on the parent when passing props use the uppercase version e.g Icon:{Phone}