import React, { useEffect, useRef,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {uploadFile} from "../services/api";

function Home() {
  const [file,setFile]=useState("")
  const FileInputRef = useRef();
  const on_upload_click = () => {
    FileInputRef.current.click();
  };
  useEffect(()=>{
    const getImage=async()=>{
    if (file){
      const data=new FormData()
      data.append("name",file.name)
      data.append("file",file)

     let response = await uploadFile(data)
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
          
        </div>
      </div>
    </>
  );
}

export default Home;
