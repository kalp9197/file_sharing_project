import React from 'react'
import '../App.css'

function Features() {
  return (
    <>
    {/* Features Page showing functionality of website */}
      <div className="features_lst">
  <h1 className="text-center display-4 mb-5">Features</h1>
  <div className="container">
    <div className="row">
      <div className="card col-lg-5">
      <img className='d-block mx-auto' width="40" height="40" src="https://img.icons8.com/office/40/password.png" alt="password"/>
        <h3 className='text-center'>Secure file transfer</h3>
        <p className='fs-6'>Send and share large files and other documents quickly and securely with our file transfer solution.</p>
      </div>
      <div className="card col-lg-5">
      <img className='d-block mx-auto' width="48" height="48" src="https://img.icons8.com/color/48/filled-sent.png" alt="filled-sent"/>
        <h3 className='text-center'>Send files up to 500MB per transfer</h3>
        <p className='fs-6'>Transfer large files and other sizable documents! The files are available up to 30 days and then it automatically erased data from our server permanently.</p>
      </div>
    </div>
    <div className='row'>
      <div className="card col-lg-5">
      <img className='d-block mx-auto' width="48" height="48" src="https://img.icons8.com/stickers/100/video.png" alt="video"/>
        <h3 className='text-center'>Share and send your long videos</h3>
        <p className='fs-6'>Today, video recording quality is improving daily and the size of video files is also increasing. We thus end up with files as large. Luckily we enables you to share videos of every size.</p>     
      </div>
      <div className="card col-lg-5">
      <img className='d-block mx-auto' width="48" height="48" src="https://img.icons8.com/cotton/64/gallery.png" alt="gallery"/>
        <h3 className='text-center'>Upload and Send Photos</h3>
        <p className='fs-6'>Share your family, professional, and all other photos with your friends, your family or any other recipient. Send numerous photos in high definition. Transfer images and photos without any loss in quality for your recipients!</p>
      </div>
    </div>
  </div>
  </div>


    </>
  )
}

export default Features