import { useState } from 'react';
import './App.css'
import CardForm from './components/CardForm';
import Card1 from './components/Card'
import 'bootstrap/dist/css/bootstrap.css';
import languages from './components/data';

function App() {
const [myData,setMyData]=useState(languages)
  return (
    <>
    <CardForm  myData={myData} setMyData={setMyData}/>
      <Card1 myData={myData} setMyData={setMyData}/>

    </>
  )
}

export default App
