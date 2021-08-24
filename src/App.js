import React from 'react'
import {ChatEngine} from "react-chat-engine";
import "./App.css"
function App() {
  return (
    <div className="App">
      <ChatEngine 
         height="100vh"
         projectID="bf516f39-e7e2-4ebc-8a45-d722cdb79793"
         userName="Saiprasath"
         userSecret="sai21"
      />
    </div>
  )
}

export default App
