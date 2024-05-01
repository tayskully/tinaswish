import "./App.css";
import postcard from "/sharetinaswish.png";
import Links from "./components/Links";
import Header from "./components/Header";
import { Component } from "./components/Modal";

function App() {
  return (
    <>
      <Header />
      <Links />
      {/* <Component /> */}
      <div className="flex justify-center">
        <img
          src={postcard}
          className="postcard"
          alt="Tinas Wish Postcard and link to website"
          href="https://tinaswish.org/"
          target="_blank"

        />
      </div>
    </>
  );
}

export default App;
