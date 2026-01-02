import React from "react";

 function ChatComponent() {

  const[prompt,setPrompt]=React.useState("");
  const [chatResponse,setChatResponse]=React.useState("");

  const askAI=async()=>{
    try{
      const response=await fetch(`http://localhost:8080/ask-ai?prompt=${prompt}`)
      const data=await response.text();
      setChatResponse(data);
        }catch(error){
        console.error("Error generating answer:",error);
  }
  }

  return (<div>
     <h2>Ask AI</h2>
     <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Start your dialog here..."
      />
      <button onClick={askAI}>Ask AI</button>
      <div className="output"> 
        <p>{chatResponse}</p>
      </div>
  </div>
 
  )
}
 
export default ChatComponent;