import data from "../data.json";
import "./App.css";
import postcard from "/sharetinaswish.png";
import Links from "./components/Links";
import Header from "./components/Header.jsx";


const pdfUrl = `${window.location.origin}/${postcard}`;

function App() {
  return (
    <>
      <Header />
        <Links key={data.id} />
      <div className="postcardBox">
        <a href="https://tinaswish.org/" target="_blank">
          <img
            src={postcard}
            className="postcard"
            alt="Tinas Wish Postcard and link to website"
          />
        </a>
      </div>
    </>
  );
}

export default App;
