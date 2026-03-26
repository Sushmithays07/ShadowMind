import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Input from "../components/Input"
import Button from "../components/Button"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [error,setError] = useState("")

function login(e){

e.preventDefault()

if(!email || !password){
setError("Please enter email and password")
return
}

setError("")

// navigate to dashboard
navigate("/dashboard")

}

return(

<div className="min-h-screen flex items-center justify-center bg-slate-950">

<form
onSubmit={login}
className="bg-slate-900 p-8 rounded-xl w-96 shadow-lg"
>

<h2 className="text-2xl mb-6 text-center font-bold">
Login
</h2>

<div className="space-y-4">

<Input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<Input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

{error && (
<p className="text-red-400 text-sm">
{error}
</p>
)}

<Button
text="Login"
type="submit"
/>

</div>

<p className="text-sm text-center mt-5 text-slate-400">

Don't have account ?

<Link
to="/signup"
className="text-cyan-400 ml-2 hover:underline"
>

Signup

</Link>

</p>

</form>

</div>

)

}

export default Login