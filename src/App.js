import React from "react";
import { Frame, useCycle } from "framer";

import "./styles.css";

export default function App() {
  let [ mode, cycleMode ] = useCycle("off", "on")  

  return (
    <div className="App">
      <Frame width={120} 
            height={60} 
            borderRadius={30}
            center
            onTap={function handleTap() {
              console.log("tapped!")
              cycleMode()
            }}
            animate={mode}
            variants={{
              off: {background:"#999"},
              on: {background: "#15a33b"}
            }}>
        <Frame 
        size={60} 
        borderRadius={30} 
        background='white'
        animate={mode}
        variants = {{
          off: {x:0, scale:1},
          on: {x:60, scale: 1.2}
        }} 
        transition={{ duration:0.2 }}
        />
      </Frame>
    </div>
  );
}
