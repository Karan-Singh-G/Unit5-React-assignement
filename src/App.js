import logo from './logo.svg';
import './App.css';
import Answer from './component/Answer';

function App() {
  const arr=["Android","Blackberry","Iphone","Windows Phone"];
  const manufacturer=["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
    {arr.map((value)=>(
      <Answer from={value}/>
    ))}
    <div>
      <h1>Mobile manufacturer</h1>
      <div>
        {manufacturer.map((value)=>(
          <Answer from={value}/>
        ))}
      </div>
    </div>

    </div>
  );
}

export default App;
