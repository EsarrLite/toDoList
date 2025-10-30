import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FolderCard from './FolderCard'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import curveArrow from '../imgs/curve-arrow.png';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';


function FolderCards() {
  const [search, setSearch] = useState("")
  const [focus, setFocus] = useState(false)
  const folders = useSelector((state) => state.folders)

  const highFolders = folders.filter((folder) => folder.level === 1)
  const mediumFolders = folders.filter((folder) => folder.level === 2)
  const lowFolders = folders.filter((folder) => folder.level === 3)

  const filteredFolders = folders.filter((folder) => folder.name.toLowerCase().includes(search.toLowerCase()))

  const [importance, setImportance] = React.useState("");

  const handleChange = (event) => {
    setImportance(event.target.value);
  };

  return (
    <>
      {folders.length > 0 &&
        (
          <div>
            <FormControl
              required
              sx={{
                m: 1,
                // minWidth: 120, 
                marginTop: '25px',
                position: 'absolute',
                backgroundColor: '#1ec7c3',
                border: 'none',
                width: {
                  xs: '100px'
                },
                bottom: {
                  sm: '93.5%',
                  md: '70px',
                  xs: '629px',
                },
                left: {
                  sm: '40px',
                  xs: '50px',
                  md: '10px'
                }
              }}>
              <InputLabel id="demo-simple-select-required-label" sx={{
                fontSize: {
                  md: '15px',
                  xs: '13px'
                }, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                justifySelf: 'center'
              }}>Sort By</InputLabel>
              <button className=' md:left-[110px] left-[110px] top-[0px]' style={{
                position: 'absolute',
              }} onClick={() => setImportance("")}>
                <CloseIcon sx={{
                  width: '20px',
                  height: '20px'
                }}></CloseIcon>
              </button>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={importance}
                label="Importance"
                onChange={handleChange}
                sx={{ 
                  textAlign: 'center',
                  height: {
                    xs: '35px',
                    md: '50px'
                  }
                 }}
              >
                <MenuItem value={1}>High</MenuItem>
                <MenuItem value={2}>Medium</MenuItem>
                <MenuItem value={3}>Low</MenuItem>
                <MenuItem value={"All"}>
                  All
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        )
      }
      {!search && (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 row-auto lg:w-[1000px] md:w-[100vw] md:m-[100px] md:ml-[40px] md:mr-[40px]  mt-[100px] mb-[100px]" style={{
          display: 'grid',
          padding: '7px',
          // gridTemplateColumns: "repeat(3, 1fr)",
          justifyContent: 'center',
          alignItems: 'center',
          gap: '25px',
          overflow: 'auto',
          // margin: '100px',
        }}>
          {
            importance === 1 && (
              highFolders.map((folder, index) => (
                <FolderCard key={index} folder={folder} />
              ))
            )
          }
          {
            importance === 2 && (
              mediumFolders.map((folder, index) => (
                <FolderCard key={index} folder={folder} />
              ))
            )
          }
          {
            importance === 3 && (
              lowFolders.map((folder, index) => (
                <FolderCard key={index} folder={folder} />
              ))
            )
          }
          {
            importance === "All" && (
              folders.map((folder, index) => (
                <FolderCard key={index} folder={folder}></FolderCard>
              ))
            )
          }
          {
            importance === "" && (
              folders.map((folder, index) => (
                <FolderCard folder={folder}></FolderCard>
              ))
            )
          }
        </div>
      )
      }
      {
        folders.length > 0 && (
          <div className='w-[230px] h-[50px] md:w-[300px] md:h-[70px] absolute top-[0] flex justify-center items-center md:gap-5 gap-3 rounded-b-2xl' style={{
            backgroundColor: 'white'
          }}>
            <input placeholder='Search' className='md:rounded-[8px] rounded-[10px] w-[160px] h-[30px] md:h-[40px] md:w-[200px] p-2.5' type="text" onChange={(e) => setSearch(e.target.value)} style={{
              backgroundColor: 'white',
              color: 'white',
              fontWeight: 'bold'
            }} />
            <button>
              <SearchIcon></SearchIcon>
            </button>
          </div>
        )
      }
      {
        search && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 row-auto md:w-[990px] w-auto lg:m-[100px] md:ml-[80px] md:mr-[80px]  mt-[100px] mb-[100px]" style={{
            display: 'grid',
            padding: '7px',
            // gridTemplateColumns: "repeat(3, 1fr)",
            justifyContent: 'center',
            alignItems: 'center',
            gap: '25px',
            overflow: 'auto',
            // margin: '100px',
          }}>
            {
              filteredFolders.map((folder, index) => (
                <React.Fragment key={index}>
                  <FolderCard folder={folder}></FolderCard>
                </React.Fragment>
              ))
            }
          </div>
        )
      }
      {/* {
        folders.length > 0 && !search && !importance &&(
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 row-auto md:w-[990px] w-auto lg:m-[100px] md:ml-[80px] md:mr-[80px]  mt-[100px] mb-[100px]" style={{
            display: 'grid',
            padding: '7px',
            // gridTemplateColumns: "repeat(3, 1fr)",
            justifyContent: 'center',
            alignItems: 'center',
            gap: '25px',
            overflow: 'auto',
            // margin: '100px',
          }}>
            {
              folders.map((folder, index) => (
                <React.Fragment key={index}>
                  < FolderCard folder={folder}></FolderCard>
                </React.Fragment>
              ))
            }
          </div>
        )  
      } */}
      {
        folders.length === 0 && !search && (
          <div className="absolute top-[40%] md:top-[65%] lg:top-[40%] md:left-[45%] left-[35%] flex justify-center items-center fade-in">
            <img className='w-[50px] h-[50px] md:w-[80px] md:h-[80px] md:mt-[190px] mt-[250px]' style={{
              transform: 'rotate(-110deg)',
            }} src={curveArrow} alt="arrow" />
            <div className="flex justify-center items-center md:mt-[100px] mt-[200px]">
              <h1 className='md:text-4xl text-[15px] font-bold text-white'>Make your day<br /><span className='md:text-2xl text-[12px]'>productive & disiplined</span></h1>
            </div>
          </div>
        )
      }
    </>
  )
}

export default FolderCards