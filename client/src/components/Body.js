import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Body() {
  const FileInputRef = useRef();
  const on_upload_click = () => {
    FileInputRef.current.click();
  };
  return (
    <>
      <div className="main-container">
      <img className="main_img" src="filesharing.jpg" alt="Img not found"/>
        <div className="text_lbl">
        <h1 className="lbl">File Transfer Website</h1>
        <h4 className="lbl">Simple and reliable file transfers</h4>

        <button onClick={() => on_upload_click()} className="upload_btn">
            Upload
          </button>
          <input type="file" ref={FileInputRef} style={{ display: "none" }} />
        </div>
      </div>
    </>
  );
}

export default Body;
