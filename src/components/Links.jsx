import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share";

const Links = () => {
  // URL dynamic for each link - static now that it is established
  // const url = `${window.location.origin}`;
  const url = "https://tinaswish.org/share/";
  const imageUrl = "https://blue-pebble-0c15b7710.5.azurestaticapps.net/sharetinaswish.png";

  //texting
  const baseText = `Dear friend,
 
  I recently connected with Tina's Wish, a meaningful organization with a mission to find an early detection for ovarian cancer.
   
  The Foundation is committed to promoting awareness about this disease, also known as "the silent killer".
   
  Keep these signs and symptoms in mind and if you are experiencing any of them for more than two weeks, please seek out professional medical advice.
   
  Feel free to share this important information with others. This is a disease that often goes undiagnosed until far too late. Information is power.
   
  Please visit their website to learn more: https://tinaswish.org/share/`;
  const encodedText = encodeURIComponent(baseText);

  // email
  const subject = encodeURIComponent("A Message About Tina's Wish");
  const body = encodeURIComponent(baseText);

  //social
  const socialText = `Hi friends, Please share these signs & symptoms and the mission of Tina’s Wish with your loved ones to spread the word about ovarian cancer. This is a disease that often goes undiagnosed until far too late. Information is power!  https://tinaswish.org/share/`;
const socialTextTwitter='Hi friends, Please share these signs & symptoms and the mission of Tina’s Wish with your loved ones to spread the word about ovarian cancer. This is a disease that often goes undiagnosed until far too late. Information is power!'
  const handleDownloadAndCopy = async () => {
    try {
      await navigator.clipboard.writeText(baseText);
      alert("Text copied to clipboard");
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "sharetinaswish.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Failed to copy or download: ", err);
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-6 py-5 w-full">
      {/* share buttons */}
{/* Download Button  */}
      <ul role="list" className="w-full flex flex-col items-center">

      <li
        className="flex items-center justify-center gap-x-6 py-5 w-full"
        id="button"
        onClick={handleDownloadAndCopy}
      >
        <div className="flex items-center justify-center w-full">
          <svg
            className="w-8 h-8 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* SVG icon */}
            <path
              fillRule="evenodd"
              d="M5 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3zm2 2v12h10V5H7zm2 14v-2h6v2H9z"
              clipRule="evenodd"
            />
          </svg>
          <div className="flex-auto text-center">
            <p className="text-md font-semibold leading-6 text-white">
              DOWNLOAD IMAGE & COPY TEXT
            </p>
          </div>
        </div>
      </li>
      {/* text button */}
        <a href={`sms:&body=${encodedText}`} target="_parent">
          <li
            className="flex items-center justify-center gap-x-6 py-5 w-full"
            id="button"
          >
            <div className="flex items-center justify-center w-full">
              <svg
                className="w-8 h-8 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="flex-auto text-center">
                <p className="text-md font-semibold leading-6 text-white">
                  SHARE VIA TEXT
                </p>
              </div>
            </div>
          </li>
        </a>
        {/* email button */}

        <a href={`mailto:?subject=${subject}&body=${body}`} target="_parent">
          <li id="button">
            <div className="flex items-center justify-center w-full">
              <svg
                className="w-7 h-7 text-white me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              <div className="flex-auto text-center">
                <p className="text-md font-semibold leading-6 text-white">
                  SHARE VIA EMAIL
                </p>
              </div>
            </div>
          </li>
        </a>
        {/* facebook button */}
        <FacebookShareButton
          url={url}
          quote={socialText}
          hashtag={socialText}
          description={"Share Tinas Wish"}
        >
          <li
            className="flex items-center justify-center gap-x-6 py-5 w-full"
            id="button"
          >
            <div className="flex items-center justify-center w-full">
              <svg
                className="w-8 h-8 me-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="flex-auto text-center">
                <p className="text-md font-semibold leading-6 text-white">
                  SHARE TO FACEBOOK
                </p>
              </div>
            </div>
          </li>
        </FacebookShareButton>
        {/* twitter button */}
        <TwitterShareButton url={url} title={socialTextTwitter}>
          <li
            className="flex items-center justify-center gap-x-6 py-5 w-full"
            id="button"
          >
            <div className="flex items-center justify-center w-full">
              <svg
                className="w-8 h-8 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
              </svg>

              <div className="flex-auto text-center">
                <p className="text-md font-semibold leading-6 text-white">
                  SHARE TO X (TWITTER)
                </p>
              </div>
            </div>
          </li>
        </TwitterShareButton>

        {/* linkedin button */}

        <LinkedinShareButton
          url={url}
          title={socialText}
          summary="Share Tina's Wish- the signs and symptoms of ovarian cancer"
        >
          <li
            className="flex items-center justify-center gap-x-6 py-5 w-full"
            id="button"
          >
            <div className="flex items-center justify-center w-full">
              <svg
                className="w-8 h-8 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>

              <div className="flex-auto text-center">
                <p className="text-md font-semibold leading-6 text-white">
                  SHARE TO LINKEDIN
                </p>
              </div>
            </div>
          </li>
        </LinkedinShareButton>
        <WhatsappShareButton title={baseText} separator=" " url={url}>
          <li
            className="flex items-center justify-center gap-x-6 py-5 w-full"
            id="button"
          >
            <div className="flex items-center justify-center w-full">
              <svg
                className="w-8 h-8 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                />
              </svg>

              <div className="flex-auto text-center">
                <p className="text-md font-semibold leading-6 text-white">
                  SHARE VIA WHATSAPP
                </p>
              </div>
            </div>
          </li>
        </WhatsappShareButton>
        <li
          className="flex items-center justify-center gap-x-6 py-5 w-full specialButton"
          id="button"
          onClick={() =>
            window.open("https://tinaswish.org/empoweru/", "_blank")
          }
        >
          <div className="flex items-center justify-center w-full">
            <svg
              className="w-8 h-8 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 5a7 7 0 0 0-7 7v1.17c.313-.11.65-.17 1-.17h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2c.35 0 .687.06 1 .17V12a7 7 0 0 0-7-7Z"
                clipRule="evenodd"
              />
            </svg>

            <div className="flex-auto text-center">
              <p className="text-md font-semibold leading-6 text-white">
                LISTEN TO OUR PODCASTS
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

<button
  className="bg-rose-800 text-white p-5 m-2 text-lg tracking-wide cursor-pointer relative shadow"
  id="listen"
  onClick={() => window.open("https://tinaswish.org/empoweru/", "_blank")}
>
  PODCASTS
</button>;

export default Links;
