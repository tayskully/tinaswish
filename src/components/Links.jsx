import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share";

const Links = () => {
  const postcard = "/sharetinaswish.png";
  const pdfUrl = `${window.location.origin}/${postcard}`;

  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      {/* share buttons */}
      <ul role="list" className="min-w-80 flex flex-col">
        {/* email button */}
        <EmailShareButton
          subject="A Message About Tina's Wish"
          body="Hi Friend, Tina's Wish Foundation hopes to share the symptoms and treatments of ovarian cancer with you. Please visit our website to learn more."
          url={pdfUrl}
        >
          <li className="flex justify-between gap-x-6 py-5" id="button">
            <div className="flex min-w-0 gap-x-4">
              <svg
                class="w-7 h-7 text-black me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              <div className="min-w-0 flex-auto">
                <p className="text-md font-semibold leading-6 text-gray-900">
                  SHARE VIA EMAIL
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500"></p>
              </div>
            </div>
          </li>
        </EmailShareButton>
        {/* facebook button */}
        <FacebookShareButton url={pdfUrl}>
          <li className="flex justify-between gap-x-6 py-5" id="button">
            <div className="flex min-w-0 gap-x-4">
              <svg
                className="w-8 h-8 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>

              <div className="min-w-0 flex-auto">
                <p className="text-md font-semibold leading-6 text-gray-900">
                  SHARE TO FACEBOOK
                </p>
              </div>
            </div>
          </li>
        </FacebookShareButton>
        <TwitterShareButton
          url={pdfUrl}
          title="Hello Friends, Please share Tina's Wish with your loved ones in order to spread the word about the symptoms of Ovarian Cancer."
        >
          <li className="flex justify-between gap-x-6 py-5" id="button">
            <div className="flex min-w-0 gap-x-4 ">
              <svg
                class="w-8 h-8 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="min-w-0 flex-auto">
                <p className="text-md font-semibold leading-6 text-gray-900">
                  SHARE TO X
                </p>
              </div>
            </div>
          </li>
        </TwitterShareButton>
        <LinkedinShareButton
          url={pdfUrl}
          title="Hello Friends, Please share Tina's Wish with your loved ones in order to spread the word about the symptoms of Ovarian Cancer."
        >
          <li className="flex justify-between gap-x-6 py-5" id="button">
            <div className="flex min-w-0 gap-x-4 ">
              <svg
                className="w-8 h-8 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>

              <div className="min-w-0 flex-auto">
                <p className="text-md font-semibold leading-6 text-gray-900">
                  SHARE TO LINKEDIN
                </p>
              </div>
            </div>
          </li>
        </LinkedinShareButton>
        <WhatsappShareButton>
          <li className="flex justify-between gap-x-6 py-5" id="button">
            <div className="flex min-w-0 gap-x-4 ">
              <svg
                className="w-8 h-8 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                  clip-rule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                />
              </svg>

              <div className="min-w-0 flex-auto">
                <p className="text-md font-semibold leading-6 text-gray-900">
                  SHARE VIA WHATSAPP
                </p>
              </div>
            </div>
          </li>{" "}
        </WhatsappShareButton>
      </ul>
    </div>
  );
};

{
  /* onClick="location.href=mailto:?subject=Check%20out%20Tina's%20Wish&body=Check%20out%20Tina's%20Wish%20at%20https%3A%2F%2Fwww.tinaswish.org%2F" */
  // onClick={() =>
  //   window.open("https://www.facebook.com/tinaswish", "_blank")
}

export default Links;
