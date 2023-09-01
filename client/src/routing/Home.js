<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { uploadFile } from "../services/api";

function Home() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
=======
import React, { useEffect, useRef,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {uploadFile} from "../services/api";

function Home() {
  const [file,setFile]=useState("")
  const [result,setResult]=useState("")
>>>>>>> 6d1c1cf80c7406f8561c8a4ad6f833156d1c01e8
  const FileInputRef = useRef();
  const on_upload_click = () => {
    FileInputRef.current.click();
  };
<<<<<<< HEAD
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
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

    <div className="bg-dark text-white text-center">
        <h3>
          Your Download Link Is Generated Here
        </h3>
        <a className="download_link" href={result}>
          {result}
        </a>
      </div>
      <h2 className="pt-5 text-center pb-4">Steps For Easy Share Files </h2>
      <div className="container">
        <div className="row">
          <div className="col md-4">
            <div
              className="card border-info mb-3"
              style={{ "max-width": "18rem" }}
            >
              <div className="card-header">Step-1</div>
              <div className="card-body">
                <p className="card-text">
                  Firstly Click on upload Button and select the file your want.
                </p>
              </div>
            </div>
          </div>
          <div className="col md-4">
            <div
              className="card border-info mb-3"
              style={{ "max-width": "18rem" }}
            >
              <div className="card-header">Step-2</div>
              <div className="card-body">
                <p className="card-text">
                  After Uploading the File the Link will be generated.
                </p>
              </div>
            </div>
          </div>
          <div className="col md-4">
            <div
              className="card border-info mb-3"
              style={{ "max-width": "18rem" }}
            >
              <div className="card-header">Step-3</div>
              <div className="card-body">
                <p className="card-text">
                  Just Copy the link and send this to anyone You Want.
                </p>
              </div>
            </div>
          </div>
=======
  useEffect(()=>{
    const getImage=async()=>{
    if (file){
      const data=new FormData()
      data.append("name",file.name)
      data.append("file",file)

     let response = await uploadFile(data)
     setResult(response.path)
    }
  }
  getImage()
  },[file])
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
          <input type="file" ref={FileInputRef} style={{ display: "none" }} 
            onChange={(e)=>setFile(e.target.files[0])}
          />
          <a href={result}>{result}</a>
          
>>>>>>> 6d1c1cf80c7406f8561c8a4ad6f833156d1c01e8
        </div>
      </div>
    </>
  );
}

export default Home;
