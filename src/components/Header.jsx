const Header = () => {
  return (
    <>
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
