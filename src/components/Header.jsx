import {  Typography } from "@mui/material";
import "../CSS/header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


function Header(){
    const navigate = useNavigate();
    const Logout = () => {
            navigate('/');
    }

    
    return(<div className=" text-light  text-lg-start " >

  <div className=" p-3 header-text" >
    <Typography style={{float:"left",textAlign:"left"}} variant="h5">Weather <span style={{fontSize:"24px",color:"rgb(70, 168, 255)"}}>ForYou</span> <span><FontAwesomeIcon icon={faCloudSunRain}></FontAwesomeIcon></span> </Typography>
    
    <button style={{float:"right" ,borderRadius:"10px"}} className='button' onClick={Logout}>Log out</button>
  </div>
  
</div>);
}

export default Header;