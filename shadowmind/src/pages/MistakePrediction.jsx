import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Mistake(){

const { userData } = useContext(UserContext)

return(

<div className="p-10">

<h2 className="text-2xl mb-4">Mistake Prediction</h2>

{userData.social > userData.study && (
<p className="text-red-400">
Too much social media usage
</p>
)}

{userData.study < 2 && (
<p className="text-yellow-400">
Low productivity detected
</p>
)}

</div>

)

}

export default Mistake
