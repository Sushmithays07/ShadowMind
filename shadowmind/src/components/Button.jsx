function Button({text,onClick,type="button"}){

return(

<button
type={type}
onClick={onClick}
className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-lg text-white transition"
>

{text}

</button>

)

}

export default Button