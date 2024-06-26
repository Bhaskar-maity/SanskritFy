import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;

const sendUser = () => {
   user = document.getElementById("joinInput").value;
   document.getElementById("joinInput").value = "";
};

const Join = () => {
   const [name, setname] = useState("");

   return (
      <div className="JoinPage">
         <div className="JoinContainer">
            <img src={logo} alt="logo" className="logo" />
            <h1>संस्कृत-फाई</h1>
            <input
               onChange={(e) => setname(e.target.value)}
               placeholder="नाम"
               type="text"
               id="joinInput"
            />
            <Link
               onClick={(event) => (!name ? event.preventDefault() : null)}
               to={`/chat?name=${name}&room=${"admin"}`}
            >
               {" "}
               <button onClick={sendUser} className="joinbtn">
                  Log In
               </button>
            </Link>
         </div>
      </div>
   );
};

export default Join;
export { user };
