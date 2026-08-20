import { useState } from "react";
import { Button,buttonVariants} from "./components/ui/button"
import {Plus} from "lucide-react"
function AddButton({Name="Button",Color="oklch(37.1% 0 none)",ColorHover="oklch(44.2% 0.017 285.786)",Lucide= <Plus></Plus>}){
let {Hover,setHover} = useState(false)
    return(<div style={{backgroundColor: Hover ? Color : "red"}} className="flex  p-2">
    
 {/* <button className=" p-3 bg-sky-300 hover:bg-zinc-500 transition-all">
       <div cla><Plus></Plus></div>Cread</button>  */}
<p className="mr-2 bg-emerald-600 rounded-4xl shadow-2xl">{Lucide}</p>
<h2>{Name}</h2>
    </div>)
}
export default AddButton;
// i think am gonna speed up production by searching up things i dont know
