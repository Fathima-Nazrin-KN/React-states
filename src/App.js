import './App.css';
import React,{useState} from 'react';

function App() {
  const [name,setName] = useState();
  const [names,setNames] = useState([]);

  function handleChange(event){
      setName(event.target.value);
  }
  function addData(){
    setNames([...names,name])
  }
  return (
    <div >
      <h1>{name}</h1>
      <input onChange={handleChange}/>
     { names.map(
      (n)=><h2>{n}</h2>
      )}
      <button onClick={addData}>submit</button>
    </div>
  );
}

export default App;
