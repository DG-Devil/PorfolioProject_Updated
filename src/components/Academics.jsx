import { List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import "../resources/css/academics.css";
import { ACADEMIC_DETAILS } from "../Utils/academicDetails";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function Academics() {
  return (
    <div className="academics-container">
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {ACADEMIC_DETAILS.map((data, index) => (
          <ListItem alignItems="flex-start" key={index}>
            <ListItemAvatar>
              <InsertDriveFileIcon />
            </ListItemAvatar>
            <ListItemText
              primary={data.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    {data.date}
                  </Typography>
                  {data.description}
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Academics;
