import data from "../data.json";
import "./App.css";
import postcard from "/postcard1.png";
import Links from "./Links";
import { DndContext } from "@dnd-kit/core";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";

const pdfUrl = `${window.location.origin}/${postcard}`;

function App() {
  return (
    <>
    <div className="d-flex justify-center">
      <img
            src="./tinaswish.svg"
            className="tinaslogo"
            alt="Tina's wish foundation logo"
          />
      <h1 className="text-3xl font-bold" className="tina" >Tina's Wish</h1> 
      </div>
      <div className="grid grid-cols-1 ">
        <div className="share-buttons">
          <EmailShareButton
            subject="Tina's Wish Foundation for Spreading Ovarian Cancer Awareness, Symptoms, and Treatments"
            body="Tina's Wish hopes to share the symptoms and treatments of ovarian cancer with you. Please visit our website to learn more."
            url={pdfUrl}
          >
            EMAIL SHARE 
          </EmailShareButton>
<FacebookShareButton url={pdfUrl}>
FACEBOOK SHARE 
</FacebookShareButton>
<TwitterShareButton url={pdfUrl}>
TWITTER SHARE
</TwitterShareButton>
{/* tbh just hard code all the links so you can customize the color scheme to match the website
// need to fix title block (make image??) add color bg boxes to mimic header etc, write the copy from the website. link to donate at the top, update the icons (hard coding this would help import them from font awesome)  */}
        </div>
        <div id="fill"></div>
        <DndContext>
          <Links key= {data.id}/>
        </DndContext>
        <div className="postcardBox">
        <a href="https://tinaswish.org/empoweru/" target="_blank">
          <img
            src={postcard}
            className="postcard"
            alt="Tinas Wish Postcard and link to website"
          />
        </a>
      </div>
      </div>
    </>
  );
}

export default App;
