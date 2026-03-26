function Card({ title, value }){

return(

<div className="bg-slate-800 p-6 rounded-xl">

<p className="text-gray-400">{title}</p>
<h2 className="text-xl font-bold mt-2">{value}</h2>

</div>

)

}

export default Card