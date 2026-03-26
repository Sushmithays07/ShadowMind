import Sidebar from "./Sidebar"
import ChatBox from "./ChatBox"
import { Outlet } from "react-router-dom"

function Layout(){

return(

<div className="flex h-screen">

<Sidebar/>

<div className="flex-1 flex flex-col">

<div className="flex-1 overflow-y-auto">

<Outlet/>

</div>

<ChatBox/>

</div>

</div>

)

}

export default Layout