import postcard from "/sharetinaswish.png";

const Header = () => {
  return (
    <>
      <header className="flex justify-between">
        <button
          className="bg-rose-800 text-white px-7 m-2 text-lg tracking-wide cursor-pointer relative shadow"
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
            href="https://tinaswish.org/"
          />
          <h1 className="text-6xl font-bold tina pe-10">Tina's Wish</h1>
        </div>
        <button
          className="bg-rose-800 text-white p-5 m-2 text-lg tracking-wide cursor-pointer relative shadow"
          id="listen"
          onClick={() =>
            window.open("https://tinaswish.org/empoweru/", "_blank")
          }
        >
          PODCASTS
        </button>
      </header>
      <p className="text-lg p-10">
        The Honorable Tina Brozman Foundation for Ovarian Cancer Research
        (Tina’s Wish) is an ovarian cancer non-profit organization dedicated to
        funding groundbreaking scientific research for the prevention and early
        detection of ovarian cancer and to educating women and people with
        ovaries about their gynecologic health. Know Early. Know Hope.® This is
        our mission.
      </p>
    </>
  );
};

export default Header;
