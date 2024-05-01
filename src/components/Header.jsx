import postcard from "/sharetinaswish.png";

const Header = () => {
  return (
    <>
      <header className="inline lg:flex lg:justify-center">
        <div className="lg:border-0 border-4 border-gray-200">
          <div className="flex justify-center items-baseline p-5 px-10">
            <img
              src="./tinaswish.svg"
              className="tinaslogo sm:px-10"
              alt="Tina's wish foundation logo"
              href="https://tinaswish.org/"
            />
            <h1 className="text-5xl text-nowrap lg:text-6xl lg:px-4 font-bold tina">
              Tina's Wish
            </h1>
          </div>
          <div className="bg-yellow-500 flex justify-between lg:bg-white">
            <button
              className="bg-rose-800 text-white p-5  px-8 m-2 text-lg tracking-wide cursor-pointer relative shadow"
              id="donate"
              onClick={() =>
                window.open("https://tinaswish.org/donate/", "_blank")
              }
            >
              DONATE
            </button>

            <button
              className="bg-rose-800 text-white p-5 m-2 text-lg tracking-wide cursor-pointer relative shadow"
              id="listen"
              onClick={() =>
                window.open("https://tinaswish.org/empoweru/", "_blank")
              }
            >
              PODCASTS
            </button>
          </div>
        </div>
      </header>
      <p className="text-lg p-10 lg:border-0  sm:text-md sm:border-4 sm:border-gray-200 sm:p-0">
        The Honorable Tina Brozman Foundation for Ovarian Cancer Research
        (Tina’s Wish) is an ovarian cancer non-profit organization dedicated to
        funding groundbreaking scientific research for the prevention and early
        detection of ovarian cancer and to educating women and people with
        ovaries about their gynecologic health. Know Early. Know Hope.® This is
        our mission.
        <br />
        <br />
        Use this page to help spread awareness about the symptoms Ovarian Cancer
        through sharing the link to our flier:
      </p>
    </>
  );
};

export default Header;
