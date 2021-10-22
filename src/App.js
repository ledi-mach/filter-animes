import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import Pagination from "./Pagination";
import qs from 'qs';
import './index.css';


function App() {
  const [text, setText] = useState('');
  const [info, setInfo] = useState('');
  const [offset, setOffset] = useState(0);

  const LIMIT = 10;

  useEffect(() => {

    const query = {
      page: {
        limit: LIMIT,
        offset,
      }
    }

    if (text) {
      query.filter = {
        text,
      }
    }

    fetch(`https://kitsu.io/api/edge/anime?${qs.stringify(query)}`)
      .then((res) => res.json())
      .then((res) => { setInfo(res) });

  }, [text, offset])

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

      {info.meta && (
        <Pagination
          limit={LIMIT}
          total={info.meta.count}
          offset={offset}
          setOffset={setOffset} />
      )}
    </div>
  );
}

export default App;
