
import './App.css';
import List from './components/List';
import Input from './components/Input';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div className="App container my-5">
      <div className='col-8 mx-auto p-2' style={{backgroundColor:'#46529D',}}>
      <Input />
     <List />
      </div>
    </div>
  );
}

export default App;
