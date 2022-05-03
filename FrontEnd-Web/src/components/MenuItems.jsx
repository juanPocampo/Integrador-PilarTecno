import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LandScapeIcon from "@mui/icons-material/Landscape";
import PolylineIcon from '@mui/icons-material/Polyline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useNavigate } from "react-router-dom";

const MenuItems = (props) => {
  const { color } = props.sx;
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate("/")} sx={{color}}>
        <ListItemIcon sx={{color}}>
          <LandScapeIcon />
        </ListItemIcon>
        <ListItemText primary="Sectores" sx={{color}}/>
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/vias")} sx={{color}}>
        <ListItemIcon sx={{color}}>
          <PolylineIcon />
        </ListItemIcon>
        <ListItemText primary="Vias"  sx={{color}}/>
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/admin")} sx={{color}}>
        <ListItemIcon sx={{color}}>
          <AdminPanelSettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Administración" sx={{color}}/>
      </ListItemButton>
    </React.Fragment>
  );
};

export default MenuItems;
