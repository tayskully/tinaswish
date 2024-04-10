import { useState } from "react";
import postcard from "/postcard1.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="postcardBox">
        <a href="https://tinaswish.org/empoweru/" target="_blank">
          <img
            src={postcard}
            className="postcard"
            alt="Tinas Wish Postcard and link to website"
          />
        </a>
      </div>
      <h1>Tina's Wish</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click me {count}
        </button>
      </div>
    </>
  );
}

export default App;
