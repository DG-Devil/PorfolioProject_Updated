import React from "react";
import "../resources/css/home.css";
import { Avatar, Typography } from "@mui/material";
import { userProfileDefaultData } from "../Utils/Constants";
import dpImage from "../resources/images/dpImage.JPG";
function Home() {
  const userName = userProfileDefaultData.Name;
  return (
    <div className="mainContainer">
      <Avatar
        src={dpImage}
        sx={{ width: "100px", height: "100px", display: "flex", mt: "50px", mb:'30px' }}
      />
      <Typography variant="h5" >I'm</Typography>
      <Typography variant="h4" sx={{ color: "yellow"}}>
        {userName}
      </Typography>
      <Typography variant="h5" sx={{textAlign:'center', m:'50px', mt:'px'}}>
        'Through my projects, I explore various facets of programming, from game development and software engineering to data structures and algorithms. This portfolio is a reflection of my growth as a developer, showcasing not only the skills I’ve learned but also my dedication to mastering the art of coding.'
      </Typography>

      {/* </Avatar> */}
    </div>
  );
}

export default Home;
