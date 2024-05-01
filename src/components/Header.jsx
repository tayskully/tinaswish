import postcard from "/sharetinaswish.png";

const Header = () => {
  return (
    <>
      <header className="bg-white flex flex-col lg:flex-row justify-center items-center border-b-4 border-gray-200">
        <div className="block">
          <div className="flex justify-center items-baseline p-5 px-10">
            <img
              src="./tinaswish.svg"
              className="tinaslogo sm:px-10"
              alt="Tina's wish foundation logo"
              href="https://tinaswish.org/"
            />
            <h1 className="text-5xl text-bold text-nowrap lg:text-6xl lg:px-4 tina">
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

      <p
        id="blurb"
        className="p-10 m-10 text-lg text-left font-bold p-10 lg:border-0  sm:text-md sm:border-4 sm:border-gray-200 sm:p-0"
      >
        Dear friend,
        <br />
        <br />
        I recently connected with Tina's Wish, a meaningful organization with a
        mission to find an early detection for ovarian cancer.
        <br />
        <br />
        The Foundation is committed to promoting awareness about this disease,
        also known as "the silent killer".
        <br />
        <br />
        Keep these signs and symptoms in mind and if you are experiencing any of
        them for more than two weeks, please seek out professional medical
        advice.
        <br />
        <br />
        Feel free to share this important information with others. This is a
        disease that often goes undiagnosed until far too late. Information is
        power.
      </p>
      <div className="flex justify-center">
        <img
          src="./symptoms.svg"
          className="symptoms w-10/12"
          alt="symptoms of ovarian cancer info graphic"
          href="https://tinaswish.org/"
        />
      </div>
    </>
  );
};

export default Header;
