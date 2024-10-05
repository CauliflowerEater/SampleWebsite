import { useState } from "react";
import "./App.css";
import Title from "./components/title";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Title></Title>
    </div>
  );
}

export default App;
