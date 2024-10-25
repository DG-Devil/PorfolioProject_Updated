import {
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton, // Import IconButton to use with icons
} from "@mui/material";
import { PROJECTS_DETAILS } from "../Utils/projectDetails"; // Import project details
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete"; // Import Delete icon
import EditIcon from "@mui/icons-material/Edit"; // Import Edit icon

import '../resources/css/projects.css'; // Importing the CSS file

function Projects() {
  return (
    <div className="projects-container"> {/* Added container class */}
      <List
        className="projects-list" // Added class for the list
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: 'column',
          flexWrap: "wrap",
          gap: '15px',
        }}
      >
        {PROJECTS_DETAILS.map((data, index) => (
          <div className="listItem" key={index}> {/* Added key for list item */}
            <ListItem
              className="project-item" // Class for each project item
              alignItems="flex-start"
              sx={{
                width: "100%",
                height: "150px",
                cursor: "pointer",
                overflow: 'clip',
              }}
            >
              <DescriptionIcon className="project-icon" sx={{ width: 128, height: 128 }} /> {/* Icon class for styling */}
              <ListItemText
                className="project-title" // Class for title
                primary={data.name} // No need to wrap in a span
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className="project-date" // Class for date
                    >
                      {data.date}
                    </Typography>
                    <br />
                    <span className="project-description">{data.description}</span> {/* Class for description */}
                  </>
                }
              />
              {/* Action Icons */}
              <IconButton className="edit-button" aria-label="edit"> {/* Edit Button */}
                <EditIcon />
              </IconButton>
              <IconButton className="delete-button" aria-label="delete"> {/* Delete Button */}
                <DeleteIcon />
              </IconButton>
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
}

export default Projects;
