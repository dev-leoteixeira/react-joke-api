import React, { useEffect, useState } from 'react';
import './App.css';
import Bob from './bob.gif';


const API_URL = "http://api.icndb.com/jokes/random"


function App(){
  const [joke, setJoke] = useState('');

  const generateJoke = () =>{
    fetch(API_URL).then(res => res.json()).then(data => setJoke(data.value.joke));

  }

    

  useEffect(() => {
    generateJoke();

}, [])



  return (
    <><div className="container">
      <div className="row">
        <div className="center">
          <h1 className="title">GERADOR DE PIADAS: API JOKE</h1>
          <img src={Bob} alt="API JOKE" width="307" height="200"/>
          
     
        </div>
      </div>


      <div className="center">
        <div className="card" >
          <div className="card-header">
            Escolha a Categoria!
          </div>

          <div className="card-body">
            <select type="list" />
          </div>
        </div>

        <div>
        <button onClick={generateJoke}>Gerar Piadas</button>   
          
        </div>

      </div>
    </div><h2 className="subTitle">Aqui está a Piada:</h2>
    <p dangerouslySetInnerHTML={{__html: joke}} />
    <h4>{generateJoke}</h4></>
    
      



  );
}

export default App;
