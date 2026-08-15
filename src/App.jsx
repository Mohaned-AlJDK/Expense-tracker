import SideBar from "./SideBar.jsx"
import Dashboard from "./DashBoard.jsx"
import { useState } from "react"
function App() {
let [MonthlyIncome,setMonthlyIncome] = useState("0$")
let [Expenses,setExpenses] = useState("0$")
let [Balance,setBalance] = useState("0$")

 
// am going to pass the setters as props too
  return (
    <div className="bg-mist-950 text-white min-h-[100vh] flex">
  <SideBar></SideBar>
  <div>
  <Dashboard Budget={MonthlyIncome} Balance={Balance} Expenses={Expenses}></Dashboard>
  </div>
    </div>
  )
}

export default App
// when you need an icon from Lucide you just search it up on their website
// to use lucide you just import the icon you want using destructuring from "lucide" then use it like an html elemnt and style it