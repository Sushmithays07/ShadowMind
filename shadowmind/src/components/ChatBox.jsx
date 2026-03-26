import { useState, useRef, useEffect } from "react"

function ChatBox(){

const [text,setText] = useState("")
const [messages,setMessages] = useState([])
const messagesEndRef = useRef(null)

const recognitionRef = useRef(null)

function sendMessage(){

if(text.trim()==="") return

setMessages(prev => [
...prev,
{role:"user",content:text}
])

setText("")

}

function startMic(){

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition

if(!SpeechRecognition){
alert("Speech recognition not supported in this browser")
return
}

if(!recognitionRef.current){

recognitionRef.current = new SpeechRecognition()
recognitionRef.current.lang = "en-US"

recognitionRef.current.onresult = (event)=>{
const transcript = event.results[0][0].transcript
setText(transcript)
}

}

recognitionRef.current.start()

}

useEffect(()=>{
messagesEndRef.current?.scrollIntoView({behavior:"smooth"})
},[messages])

return(

<div className="border-t border-slate-700">

<div className="max-h-60 overflow-y-auto p-4 space-y-3">

{messages.map((msg,index)=>(

<div
key={index}
className={`p-3 rounded-lg max-w-xl ${
msg.role==="user"
? "bg-cyan-600 ml-auto"
: "bg-slate-700"
}`}
>

{msg.content}

</div>

))}

<div ref={messagesEndRef}/>

</div>

<div className="flex gap-2 p-4">

<input
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Ask ShadowMind..."
className="flex-1 p-3 rounded-lg bg-slate-800 text-white"
/>

<button
onClick={startMic}
className="bg-slate-700 px-4 rounded-lg"
>
🎤
</button>

<button
onClick={sendMessage}
className="bg-cyan-500 px-4 rounded-lg"
>
➤
</button>

</div>

</div>

)

}

export default ChatBox