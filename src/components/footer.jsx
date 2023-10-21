
  import 'bootstrap/dist/css/bootstrap.min.css';

 import facebook from '../assets/facebook.png';
 import github from '../assets/github.png';
 import linkedin from '../assets/linkedin.png';
import { Link } from 'react-router-dom';

function Footer(){
    return(<div>
<footer className=" text-light text-center text-lg-start mt-2" >
    <div className="footercon">
    <Link href='https://web.facebook.com/search/top?q=loons%20lab' target='_blank'><img alt='facebook' src={facebook} /></Link>
    <Link href='https://github.com/Kavinda-liyan' target='_blank'><img alt='github' src={github}/></Link>
    <Link href='https://www.linkedin.com/in/kavinda-liyanaarachchi-729b14262/' target='_blank'><img alt='linkedin' src={linkedin}/></Link>

    </div>

  <div className="text-center p-3" >
    © 2023 Copyright:
    <a className="text-light" style={{textDecoration:"none" , paddingLeft:"0.5rem", hover:{color:"black"}}} href="https://loonslab.com/">Loonslab.com</a>
  </div>
  
</footer>
    </div>);

}

export default Footer;