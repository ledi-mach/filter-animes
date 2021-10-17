import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import './index.css';


function App() {
const [text, setText] = useState('');
const [info, setInfo] = useState('');

useEffect(()=>{
if(text){
  fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
  .then((res) => res.json())
  .then((res)=>{setInfo(res)});
}
}, [text])

  return (
    <div className="App">
      <h1> oioi</h1>
      <SearchInput  value={text} onChange={(txt) => setText(txt)}/>

{info.data && (
  <ul className='listItem'>
    {info.data.map((item)=>(
      <li key={item.id}>
        <img src={item.attributes.posterImage.small} alt='img'/>
        {item.attributes.canonicalTitle}
      </li>
    ))}
  </ul>
)}

    </div>
  );
}

export default App;
