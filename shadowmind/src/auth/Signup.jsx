import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(){

const navigate = useNavigate()

const [step,setStep] = useState(1)
const [error,setError] = useState("")

const [user,setUser] = useState({
name:"",
email:"",
password:"",
interests:[],
permissions:[]
})

const interestsList = [
"Technology",
"Design",
"Data Science",
"Marketing",
"Business",
"Arts"
]

const permissionsList = [
{
id:"mic",
title:"Microphone Access",
description:"Use voice input to talk with ShadowMind"
},
{
id:"camera",
title:"Camera Access",
description:"Allow camera to detect facial emotions"
},
{
id:"notification",
title:"Notifications",
description:"Receive productivity reminders"
},
{
id:"activity",
title:"Activity Insights",
description:"Analyze your messages to understand behaviour"
}
]

function handleChange(e){
setUser({...user,[e.target.name]:e.target.value})
}

function toggleInterest(item){

if(user.interests.includes(item)){

setUser({
...user,
interests:user.interests.filter(i=>i!==item)
})

}else{

setUser({
...user,
interests:[...user.interests,item]
})

}

}

function togglePermission(id){

if(user.permissions.includes(id)){

setUser({
...user,
permissions:user.permissions.filter(p=>p!==id)
})

}else{

setUser({
...user,
permissions:[...user.permissions,id]
})

}

}

function nextStep(){

if(step===1){

if(!user.name || !user.email || !user.password){
setError("Please fill all fields")
return
}

}

setError("")
setStep(step+1)

}

function prevStep(){
setStep(step-1)
}

function createAccount(){

if(user.interests.length === 0){
setError("Please select at least one interest")
return
}

setError("")

// simulate account creation
navigate("/")
}

return(

<div className="min-h-screen bg-slate-950 flex justify-center items-center">

<div className="bg-slate-900 p-8 rounded-xl w-[420px] shadow-lg">

<h1 className="text-2xl text-white mb-6 font-bold text-center">
Create ShadowMind Account
</h1>

{/* STEP INDICATOR */}

<div className="flex justify-between mb-6 text-sm text-gray-400">

<span className={step===1?"text-cyan-400":""}>Account</span>
<span className={step===2?"text-cyan-400":""}>Interests</span>
<span className={step===3?"text-cyan-400":""}>Permissions</span>

</div>

{error && (
<p className="text-red-400 text-sm mb-4 text-center">
{error}
</p>
)}

{/* STEP 1 */}

{step===1 && (

<div className="flex flex-col gap-4">

<input
name="name"
placeholder="Full Name"
value={user.name}
onChange={handleChange}
className="p-3 rounded bg-slate-800 text-white outline-none"
/>

<input
name="email"
placeholder="Email"
value={user.email}
onChange={handleChange}
className="p-3 rounded bg-slate-800 text-white outline-none"
/>

<input
name="password"
type="password"
placeholder="Password"
value={user.password}
onChange={handleChange}
className="p-3 rounded bg-slate-800 text-white outline-none"
/>

<button
onClick={nextStep}
className="bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded mt-2 transition"
>
Continue
</button>

</div>

)}

{/* STEP 2 */}

{step===2 && (

<div>

<p className="text-gray-300 mb-4">
Select your interests
</p>

<div className="grid grid-cols-2 gap-3">

{interestsList.map((item)=>(

<button
key={item}
onClick={()=>toggleInterest(item)}
className={`p-2 rounded border transition ${
user.interests.includes(item)
? "bg-cyan-600 text-white border-cyan-500"
: "bg-slate-800 text-gray-300 border-slate-700"
}`}
>

{item}

</button>

))}

</div>

<div className="flex justify-between mt-6">

<button
onClick={prevStep}
className="text-gray-400 hover:text-white"
>
Back
</button>

<button
onClick={nextStep}
className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded transition"
>
Continue
</button>

</div>

</div>

)}

{/* STEP 3 */}

{step===3 && (

<div>

<p className="text-gray-300 mb-4">
Enable Smart Features
</p>

<div className="flex flex-col gap-3">

{permissionsList.map((perm)=>(

<div
key={perm.id}
className="bg-slate-800 p-3 rounded flex justify-between items-center"
>

<div>

<h3 className="text-white text-sm">
{perm.title}
</h3>

<p className="text-gray-400 text-xs">
{perm.description}
</p>

</div>

<input
type="checkbox"
checked={user.permissions.includes(perm.id)}
onChange={()=>togglePermission(perm.id)}
/>

</div>

))}

</div>

<div className="flex justify-between mt-6">

<button
onClick={prevStep}
className="text-gray-400 hover:text-white"
>
Back
</button>

<button
onClick={createAccount}
className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded transition"
>
Create Account
</button>

</div>

</div>

)}

</div>

</div>

)

}

export default Signup