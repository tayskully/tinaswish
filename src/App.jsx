import data from "../data.json";
import "./App.css";
import postcard from "/postcard1.png";
import Links from "./Links";
import { DndContext } from "@dnd-kit/core";


function App() {

  return (
    <>
      <h1 className="text-3xl font-bold">Tina's Wish</h1>
      <div className="postcardBox">
        <a href="https://tinaswish.org/empoweru/" target="_blank">
          <img
            src={postcard}
            className="postcard"
            alt="Tinas Wish Postcard and link to website"
          />
        </a>
      </div>
      <div className="grid grid-cols-1">
        <DndContext>
          <Links />
        </DndContext>
      </div>
    </>
  );
}

export default App;
