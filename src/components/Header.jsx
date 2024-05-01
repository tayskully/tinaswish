// import postcard from "./sharetinaswish.svg";

const Header = () => {
  const postcard = "sharetinaswish.png";
  const pdfUrl = `${window.location.origin}/${postcard}`;
  return (
    <>
      <p
        id="blurb"
        className="leading-normal p-5 m-2 text-md text-left font-bold lg:text-3xl md:m-5 md:p-10 lg:m-5 lg:p-10"
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
          onClick={() => window.open({ pdfUrl }, "_blank", console.log(pdfUrl))}
        />
      </div>
    </>
  );
};

export default Header;
