import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { addFolder } from '../data/DataSlice';
import TransitionAlert from './Alert';
import Selector from './Selector';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

function AddBtn() {
    
    const [open, setOpen] = React.useState(false);
    const [add, setAdd] = React.useState(false);
    

    function FolderInput(){
        const [folderName, setFolderName] = React.useState("");
        const [description, setDescription] = React.useState("");

        const [showAlert, setShowAlert] = React.useState(false);

        const data = useSelector((state: any) => state.folders)
        const dispatch = useDispatch();

        const [importance, setImportance] = React.useState('');

        const handleChange = (event: any) => {
            setImportance(event.target.value);
        };

        const handleFolderSubmit = () => {
           const exists = data.some((folder: any) => folder.name === folderName);
          
            if (folderName === "") {
                alert("Folder name cannot be empty")
            } 

            else if (!exists) {
                dispatch(addFolder({ name : folderName, description : description, id : data.length + 1, level: importance ,tasks: []}));
                setFolderName("")
                setDescription("")

                setShowAlert(true)
                setTimeout(() => setShowAlert(false), 3000);
            } else {
                alert("Folder name already exists!");
            }
        }
        return (
            <>
                {
                    add ? (
                        <div className=" relative md:w-[400px] md:h-[500px] md:top-[-850%] md:rounded-[15px] w-[300px] h-[420px] top-[-830%] rounded-[15px]" style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.05)',
                            backdropFilter: 'blur(10px)',
                            position: 'absolute',
                            zIndex: 2,
                            left: 0,
                            right: 0,
                            margin: '0 auto',
                            display: 'flex',
                        }}>
                            <div className="md:p-[20px] p-[20px] text-black">
                                <ul>
                                    <li style={{
                                        marginBottom: '20px'
                                    }}>
                                        <label htmlFor="folder-name" className="block mb-2 font-bold" style={{
                                            color: 'white'
                                        }}>
                                            Folder Name
                                        </label>
                                        <input className='p-2' id='folder-name' type="text" placeholder='Enter . . .' autoFocus style={{
                                            backgroundColor: '#FFE58C',
                                            border: 'none',
                                            borderRadius: '8px'
                                        }} onChange={(e) => setFolderName(e.target.value)} value={folderName}/>
                                    </li>
                                    {/* <Divider className='md:w-[355px] w-[255px] md:mt-[20px]' sx={{backgroundColor: 'black', margin: '14px 0'}}></Divider> */}
                                    <li>
                                        <label htmlFor="folder-name" className="block mb-2 font-bold" style={{
                                            color: 'white'
                                        }}>
                                            Description
                                        </label>
                                        <textarea
                                            className="p-2 md:w-[355px] w-[255px] md:h-[130px] h-[80px] flex justify-start items-start"
                                            id="folder"
                                            placeholder="Enter . . ."
                                            autoFocus
                                            value={description}
                                            style={{
                                                backgroundColor: 'white',
                                                borderRadius: "8px",
                                            }}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </li>
                                    <li>
                                        <div>
                                            <FormControl required sx={{ m: 1, minWidth: 120, marginTop: '25px'}}>
                                                <InputLabel id="demo-simple-select-required-label" sx={{fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Importance</InputLabel>
                                                <Select
                                                  labelId="demo-simple-select-required-label"
                                                  id="demo-simple-select-required"
                                                  value={importance}
                                                  label="Importance"
                                                  onChange={handleChange}
                                                >
                                                  <MenuItem className='flex gap-11' value={1}><div className="">High</div><div className="w-[16px] h-[16px] bg-red-500 rounded-[50%]"></div></MenuItem>
                                                  <MenuItem className='flex gap-5' value={2}><div className="">Medium</div><div className="w-[16px] h-[16px] bg-yellow-300 rounded-[50%]"></div></MenuItem>
                                                  <MenuItem className='flex gap-12' value={3}><div className="">Low</div><div className="w-[16px] h-[16px] bg-green-400 rounded-[50%]"></div></MenuItem>
                                                </Select>
                                                {/* <FormHelperText>Required</FormHelperText> */}
                                            </FormControl>
                                        </div>
                                    </li>
                                </ul>
                                <button className='bg-green-300 md:w-[95px] md:h-[40px] w-[85px] h-[35px] bottom-5 right-5 rounded-[8px]' style={{
                                    position: 'absolute',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    // boxShadow: '3px -3px 12px #007A2F inset, -3px 3px 12px white inset, -3px 2px 3px #00240E',
                                    textShadow: '-3px 3px 1px black inset',
                                }} onClick={() => handleFolderSubmit()}>Submit</button>
                                
                            </div>
                            {
                                showAlert && <TransitionAlert text={`Folder created successfully`}></TransitionAlert>
                            }
                        </div>
                    ) : null    
                }
            </>
        )
    }
    
    
    const handleAdd = () => {
        setAdd(true);
    }

    const handleCancel = () => {
        setAdd(false)
    }
        
    const handleHover = () => {
        setOpen((prev) => !prev);
    };
    
    const handleHoverAway = () => {
        setOpen(false);
    };
    
  return (
    <>
        {open && !add ? (
            <Box sx={{fontSize: '14px', width: 'auto', height: 'auto', bgcolor: 'white', color: "#FCFFD1" , fontWeight: "bold" , p: 2, position: 'absolute', top: -85, left: 495, zIndex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomLeftRadius: 15, border: "1px solid #CAA3F3" }}>{!add && ("Create New Folder")}</Box>
        ) : null}
        <FolderInput></FolderInput>
        <StyledFab sx={{
            backgroundColor: add ? "#FF4F4F" : "#FED74E",
            "&:hover": {
                backgroundColor: add ? "#FF7373" : "#FEE077",
            }
            }} aria-label="add" onMouseOver={handleHover} onMouseOut={handleHoverAway} onClick={() => { add ? handleCancel() : handleAdd(); handleHoverAway()}}>
            {
                add ? (
                    <CloseIcon></CloseIcon>
                ) : 
                (
                    <AddIcon /> 
                )
            }
        </StyledFab>
    </>
  )
}

export default AddBtn