import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { uploadFile } from "../services/api";

function Home() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const [showDownloadLink, setShowDownloadLink] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const FileInputRef = useRef();

  const on_upload_click = () => {
    FileInputRef.current.click();
  };

  const copyToClipboard = () => {
    const linkToCopy = result;
    const textArea = document.createElement("textarea");
    textArea.value = linkToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopySuccess(true);
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
        setShowDownloadLink(true);
      }
    };
    getImage();
  }, [file]);

  return (
    <>
      <div className="main-container pt-2 pb-5">
        <h1 className="text-secondary text-center">File Transfer Website</h1>
        <h4 className="text-secondary text-center pt-3">
          Simple and reliable file transfers
        </h4>
        <h3 className="text-dark text-center pt-4">Select Your file</h3>
        <div className="upload_ctr">
          {/* Upload Functionality */}
          <button onClick={() => on_upload_click()} className="upload_btn mt-3">
            Upload
          </button>
          <input
            type="file"
            ref={FileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
      {/* Show and Hide Download Link */}
      {showDownloadLink && (
        <div className="pt-3 pb-3 bg-dark text-white text-center">
          <h3>Your Download Link Is Generated Here</h3>
          <a className="download_link" href={result}>
            <div>{result}</div>
          </a>
          <button className="btn btn-outline-success mt-3 mb-2" onClick={copyToClipboard}>
            Copy to Clipboard
          </button>
          {copySuccess && (
            <div className="text-outline-success">Link copied to clipboard!</div>
          )}
        </div>
      )}

      <h2 className="pt-5 text-center pb-4">Steps For Easy Share Files</h2>
      <div className="container">
        <div className="row">
          <div className="col md-4">
            <div
              className="card border-info mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">Step-1</div>
              <div className="card-body">
                <p className="card-text">
                  Firstly Click on upload Button and select the file you want.
                </p>
              </div>
            </div>
          </div>
          <div className="col md-4">
            <div
              className="card border-info mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">Step-2</div>
              <div className="card-body">
                <p className="card-text">
                  After Uploading the File, the Link will be generated.
                </p>
              </div>
            </div>
          </div>
          <div className="col md-4">
            <div
              className="card border-info mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">Step-3</div>
              <div className="card-body">
                <p className="card-text">
                  Just Copy the link and send this to anyone you want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
