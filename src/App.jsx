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
      <div className="flex flex-col md:flex-row items-center bg-white text-black p-5">
        <h1 className="text-4xl md:text-6xl flex-grow">
          About
          <img
            src="./tinaswish.svg"
            className="inline-block h-12 md:h-20 px-5 align-middle"
            alt="Tina's Wish Foundation logo"
            href="https://tinaswish.org/"
          />
          Tina's Wish
        </h1>
      </div>
      <p className="text-xl bg-white text-black p-5">
        Tina's Wish funds groundbreaking research for the early detection and
        prevention of ovarian cancer, and provides education on a variety of
        gynecologic health topics. Know Early. Know Hope®. This is our mission.
        Families deserve to know earlier and have a fighting chance against
        ovarian cancer. Together, we can make Tina Brozman's wish for early
        detection a reality.
        <br />
        <br />
        <div className="justify-between">
        <a
          className="text-black hover:text-yellow-500"
          href="https://tinaswish.org/empoweru"
        >
          TINASWISH.ORG/EMPOWERU
        </a>{" "}
        <br />
        <br />
        <a
          className="text-black hover:text-yellow-500"
          href="mailto:info@tinaswish.org"
        >
          INFO@TINASWISH.ORG
        </a>
        </div>
      </p>
    </>
  );
}

export default App;
