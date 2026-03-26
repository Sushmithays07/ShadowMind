import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Emotion(){

const { userData, setUserData } = useContext(UserContext)

return(

<div className="p-10">

<h2 className="text-xl mb-6">Emotion</h2>

<input
type="range"
min="1"
max="5"
value={userData.emotion}
onChange={(e)=>setUserData({...userData,emotion:Number(e.target.value)})}
/>

</div>

)

}

export default Emotion