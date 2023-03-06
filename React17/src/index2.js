import * as ReactDOM from "react-dom";
import {useState} from 'react'
function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function handleClick() {  
    setTimeout(()=>{
      setNum1(c => c + 1);
      setNum2(c => c + 1);
    })
  }

  console.log("render");

  return (
    <div>
      num1:{num1}-num2:{num2}
      <button onClick={handleClick}>Next</button>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
