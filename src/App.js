import { useState, useEffect } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import axios from 'axios';
import Info from './components/Info';



function App() {

  const [searchLyric, setSearchLyric] = useState({})
  const [lyric, setLyric] = useState('')
  const [info, setInfo] = useState({})

 


useEffect(() => {
  if(Object.entries(searchLyric).length===0)return;

  const consulApiLyric = async () => {

    const url = `https://api.lyric.ovh/v1/${searchLyric.artista}/${searchLyric.cancion}`;
    const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${searchLyric.artista}`
    
    const [ informacion] = await Promise.all([
      //axios(url),
      axios(url2)
    ]);

    //setLyric(letra)
    setInfo(informacion.data.artists[0])
    
    //setLyric(letra.data.lyrics)
  }
  consulApiLyric();

}, [searchLyric, info])
  return (
    <>
      <Formulario
        setSearchLyric={setSearchLyric}
      />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Info info={info}/>
          </div>
          <div className='col-md-6'>
            <Cancion
              lyric={lyric}
            />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
