import { Link, useLocation } from "react-router-dom"

function Sidebar(){

const location = useLocation()

const menu = [
{ name:"Dashboard", path:"/" },
{ name:"Emotion", path:"/emotion" },
{ name:"Tracker", path:"/tracker" },
{ name:"Career", path:"/career" },
{ name:"Mistake", path:"/mistake" }
]

return(

<div className="w-60 bg-slate-900 h-screen p-6">

<h1 className="text-cyan-400 text-xl mb-8">
ShadowMind
</h1>

{menu.map(item => (

<Link
key={item.name}
to={item.path}
className={`block p-3 rounded mb-2 ${
location.pathname === item.path
? "bg-slate-700 text-white"
: "text-gray-400"
}`}
>

{item.name}

</Link>

))}

</div>

)

}

export default Sidebar