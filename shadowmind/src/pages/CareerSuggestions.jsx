import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Career(){

const { userData,setUserData } = useContext(UserContext)

function toggle(val){

if(userData.interests.includes(val)){
setUserData({
...userData,
interests:userData.interests.filter(i=>i!==val)
})
}else{
setUserData({
...userData,
interests:[...userData.interests,val]
})
}

}

return(

<div className="p-10">

<h2 className="text-2xl mb-4">Career Interests</h2>

<button
onClick={()=>toggle("coding")}
className="bg-slate-700 px-4 py-2 rounded mr-4"
>
Coding
</button>

<button
onClick={()=>toggle("design")}
className="bg-slate-700 px-4 py-2 rounded"
>
Design
</button>

</div>

)

}

export default Career