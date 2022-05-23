import './App.css';
import FirstPage from './page/firstPage/FirstPage';
import SecondPage from './page/secondPage/SecondPage';

function App() {

  const users = [
    { 
      name:"Naelya",
      age: 16
    }, 
    {
      name:"Rakyp",
      age: 15
    },
    {
      name:"Vlad",
      age: 16
    },
  ]
  return (
    <div>
      <FirstPage users={users} />
      <SecondPage/>
    </div>
   
  );
}

export default App;
