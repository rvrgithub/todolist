import { useState } from "react";
import "../App.css"
export const TodoInput = ({ getData }) => {
  const [text, setText] = useState("");
  // console.log(text);
  return (
    <div>
      <input className="inputBox"
        onChange={(el) => {
          setText(el.target.value);
        }}
        type="text"
        placeholder="Write Something"
      />
      <button  className="button" onClick={()=>{
          getData(text);
      }}> +</button>
    </div>
  );
};
