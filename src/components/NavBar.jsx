import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import AddBtn from "./AddBtn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputBase from "@mui/material/InputBase";
import CloseIcon from '@mui/icons-material/Close';
import Selector from "./Selector";
import { Link } from "react-router-dom";
import BasicPie from "../components-2/BasicPie";
import { useSelector } from "react-redux";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";

export default function NavBar() {
  const [stats, setStats] = React.useState(false)

  const folders = useSelector((state) => state.folders)

  const highFolders = folders.filter((folder) => folder.level === 1)
  const mediumFolders = folders.filter((folder) => folder.level === 2)
  const lowFolders = folders.filter((folder) => folder.level === 3)
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Paper square sx={{ pb: '50px'}}> */}
      {/* <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Inbox
        </Typography> */}
      {/* <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}
              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItemButton>
            </React.Fragment>
          ))}
        </List> */}
      {/* </Paper> */}

      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0, backgroundColor: "white" }}
      >
        <Toolbar>
          <AddBtn />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={() => setStats(!stats)} className="w-[100px] h-[20px] absolute md:right-[100px]">
            {
              stats && (
                <div className="absolute bottom-[80px] w-[200px] h-[200px] flex justify-center items-center rounded-[20px]" style={{
                  backgroundColor: 'white'
                }}>
                  {
                    folders.length > 0 ? (
                      <BasicPie highFolder={highFolders} mediumFolder={mediumFolders} lowFolder={lowFolders}></BasicPie>
                    ) : (
                      <h3 className="text-black">No Data Yet</h3>
                    )
                  }
                </div>
              )
            }
            <div className="w-[100px] md:w-[120px] h-[40px] flex justify-center items-center gap-[0px] md:gap-[0px] rounded-[12px]" style={{
              backgroundColor: 'white'
            }}>
              <h4 className="w-[70px] md:w-[80px] text-[12px] md:text-[14px] rounded-[7px]" style={{
                // backgroundColor: 'black',
                color: 'white'
              }}>See Stats</h4>
              {
                stats ? (
                  <KeyboardArrowDownIcon sx={{
                    width: {
                      xs: '15px'
                    },
                    color: 'black'
                  }}></KeyboardArrowDownIcon>
                ) : (
                  <KeyboardArrowUpIcon sx={{
                    width: {
                      xs: '15px'
                    },
                    color: 'black'
                  }}></KeyboardArrowUpIcon>
                )
              }
            </div>
          </IconButton>
          {/* <IconButton color="inherit">
            <MoreIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}