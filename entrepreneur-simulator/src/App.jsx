import {Routes, Route} from "react-router-dom";
import SignIn from "./Pages/SignIn.jsx"
import Home from "./Pages/Home.jsx";


function App() {
  return (
          <div className="">
              <Routes>
                  <Route path="/" element={ <SignIn /> } />
                  <Route path="/home" element={ <Home />}/>
              </Routes>
          </div>
    )
}

export default App
