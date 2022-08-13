import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom/client";

const UserWebsite = () => {
  const location = useLocation();
  const { websiteName, websiteID, code } = location.state;
  const title = websiteName;

  useEffect(() => {
    document.title = title;
    document.getElementById("main").innerHTML = code;

    <style>
      {`
        .html {
            height: 100%;
            width: 100%;
            background-color: #f5f5f5;
        }
        `}
    </style>;
  });

  return (
    <>
      <div id="main"></div>
    </>
  );
};

export default UserWebsite;
