import React from 'react'

function LoggedInPage() {
  return (
    <div className="loggedIn">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAr3xW1zPY4iJxL0CSJlQHDma2_UsuBOM0mw&usqp=CAU"
        alt="EZ_logo"
      />
      <div className="name-avatar">
        <h5>Hi Abhishek, </h5> &nbsp;
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="avatar_image"
          id="avatar_img"
        />
      </div>
    </div>
  );
}

export default LoggedInPage
