import React from 'react'
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { removeFolder } from '../data/DataSlice';
import { useDispatch } from 'react-redux';

function FolderCard({ folder }) {
  const dispatch = useDispatch()
  if (folder) {
    const { name, description, id, level } = folder
    console.log(folder)
    return (
      <div className="w-[300px] h-[230px] flex justify-center items-center rounded-[15px] " style={{
        backgroundColor: 'white',
        position: 'relative',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)'
      }}>
        <div className="m-2 flex flex-col w-[270px] h-[200px]">
          <div className=" basis-[80%] flex flex-col items-center justify-center gap-[8px] rounded-[13px]" style={{
            backgroundColor: 'white',
          }}>
            <button className=' w-[27px] h-[27px] rounded-[50%]' style={{
              backgroundColor: '#FF606C',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              left: '10px',
              top: '10px',
              boxShadow: '1px 1px 4px black'
            }} onClick={() => dispatch(removeFolder(id))}>
              <ClearIcon sx={{
                width: '15px',
                height: '15px'
              }}></ClearIcon>
            </button>
            <div className="w-[15px] h-[15px]" style={{
              position: 'absolute',
              borderRadius: '50%',
              right: '12px',
              top: '12px',
              // outline: '3px solid black',
              backgroundColor: level === 1 ? "#fc3a3a" : level === 2 ? "#fcc82b" : '#2bfc5c'
            }}>
            </div>
            <h2 style={{
              fontSize: '25px',
              fontWeight: 'bold',
              color: 'white'
            }}>{name}</h2>
            <h4>{description}</h4>
          </div>
          <div className="flex justify-between mt-5">
            <h3 className='font-bold text-white'>Explore</h3>
            <Link to={`${id}`}>
              <button style={{
                width: '30px',
                height: '30px',
                backgroundColor: 'white',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '1px 1px 4px black'
              }}>
                <KeyboardArrowRightIcon sx={{
                  backgroundColor: '',
                  color: ''
                }}></KeyboardArrowRightIcon>
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default FolderCard