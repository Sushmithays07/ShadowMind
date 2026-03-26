import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./context/UserContext"

import Layout from "./components/Layout"

import Login from "./auth/Login"
import Signup from "./auth/Signup"

import Dashboard from "./pages/Dashboard"
import Emotion from "./pages/Emotion"
import ScreenTracker from "./pages/ScreenTracker"
import CareerSuggestions from "./pages/CareerSuggestions"
import MistakePrediction from "./pages/MistakePrediction"

function App(){

return(

<UserProvider>

<BrowserRouter>

<Routes>

{/* LOGIN PAGES */}

<Route path="/" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>

{/* MAIN APP WITH SIDEBAR */}

<Route element={<Layout/>}>

<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/emotion" element={<Emotion/>}/>
<Route path="/tracker" element={<ScreenTracker/>}/>
<Route path="/career" element={<CareerSuggestions/>}/>
<Route path="/mistake" element={<MistakePrediction/>}/>

</Route>

</Routes>

</BrowserRouter>

</UserProvider>

)

}

export default App