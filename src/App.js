import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  return (
    <div >
       <User></User>
    </div>
  );
}


function User()
{
   const[users,setuser]=useState([]);
   useEffect(
    ()=>{
       console.log('hahai')

       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        setuser(data);
       })
    },[]
   );

  return (<div>
    <h1>Dynamic users:{users.length}</h1>
    <ol>
      {
        users.map(name=><li>Name: {name.name} Email: {name.email}</li>)
      }
    </ol>
  </div>)
}






export default App;
