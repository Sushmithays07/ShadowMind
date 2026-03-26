import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function ScreenTracker(){

const { userData,setUserData } = useContext(UserContext)

return(

<div className="p-10">

<h2 className="text-2xl mb-4">Tracker</h2>

<label>Study</label>
<input type="range" min="0" max="10"
value={userData.study}
onChange={(e)=>setUserData({...userData,study:Number(e.target.value)})}
/>

<label>Social</label>
<input type="range" min="0" max="10"
value={userData.social}
onChange={(e)=>setUserData({...userData,social:Number(e.target.value)})}
/>

<label>Entertainment</label>
<input type="range" min="0" max="10"
value={userData.entertainment}
onChange={(e)=>setUserData({...userData,entertainment:Number(e.target.value)})}
/>

</div>

)

}

export default ScreenTracker