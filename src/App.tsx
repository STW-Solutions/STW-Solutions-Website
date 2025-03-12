import './App.css'
import Company from "./Pages/Company/Company";
import Values from "./Pages/values/Values";
import Team from "./Pages/Team/Team";
import WhatWeDo from "./Pages/whatweDo/WhatWeDo";

function App() {
 

  return (
    <div className="App">
      {/*<Home/>*/}
        <Company/>
        <Values/>
        <Team/>
        <WhatWeDo/>
    </div>
  )
}

export default App
