import postcard from "/sharetinaswish.png";

const Header = () => {
  return (
    <header className="flex justify-between">
      <button
        className="bg-rose-800 text-white p-5 m-2 text-lg tracking-wide cursor-pointer relative shadow"
        id="donate"
        onClick={() => window.open("https://tinaswish.org/donate/", "_blank")}
      >
        DONATE
      </button>
      <div className="flex justify-center align-baseline">
        <img
          src="./tinaswish.svg"
          className="tinaslogo ps-10"
          alt="Tina's wish foundation logo"
    
        />
        <h1 className="text-7xl font-bold tina pe-10">Tina's Wish</h1>
      </div>
      <button
        className="bg-rose-800 text-white p-5 m-2 text-lg tracking-wide cursor-pointer relative shadow"
        id="listen"
        onClick={() => window.open("https://tinaswish.org/empoweru/", "_blank")}
      >
        PODCASTS
      </button>
    </header>
  );
};

export default Header;
