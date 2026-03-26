function Input({placeholder,type="text",value,onChange}){

return(

<input
type={type}
value={value}
onChange={onChange}
placeholder={placeholder}
className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none focus:border-cyan-500"
/>

)

}

export default Input