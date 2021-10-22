import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import Pagination from "./Pagination";
import './index.css';


function App() {
  const [text, setText] = useState('');
  const [info, setInfo] = useState('');

  useEffect(() => {
    if (text) {
      console.log(text)
      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=10`)
        .then((res) => res.json())
        .then((res) => { setInfo(res) });
    }
  }, [text])

  return (
    <div className="App">
      <h1> Buscador de animes</h1>
      <SearchInput value={text} onChange={(txt) => setText(txt)} />

      {info.data && (
        <ul className='listItem'>
          {info.data.map((item) => (
            <li className='item' key={item.id}>
              <img className="image" src={item.attributes.posterImage.small} alt='img' />
              <span className='title'>{item.attributes.canonicalTitle}</span>
            </li>
          ))}
        </ul>
      )}
      <Pagination />
    </div>
  );
}

export default App;
