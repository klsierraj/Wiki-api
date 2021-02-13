import React, {useState} from 'react';
import './App.css';

function App() {

  const [search, setSearch] = useState('');
  const [names, setNames] = useState ([]);


  async function realizarBusqueda() {
    https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links%7Ccategories&generator=allpages&formatversion=2&gapfrom=Ba&gaplimit=3
    const url = `https://en.wikipedia.org/w/api.phpaction=opensearch&search=​${search}&format=json&origin=*`;
    const response = await fetch(url);
    const jsonRes= await response.json();
    

    setNames(jsonRes[1]);
    
  }
  return (
    <div className="App">
      <h3>Buscar wikipedia</h3>
      <input value={search} onChange={e => setSearch(e.target.value)}/>
      <button onClick={realizarBusqueda}>Buscar</button>

      {names.map(value => <div>{value} </div>)}
    </div>
  );
}

export default App;
