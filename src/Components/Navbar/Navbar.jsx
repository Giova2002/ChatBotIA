import './Navbar.css'
import img1 from '../../assets/image/menu.png'
import img2 from '../../assets/image/logo.png'


function Navbar(){
    return(
        <div className='navbar'>
        <img className='menu' src={img1}></img>
        <img className='logo' src={img2}></img>
    </div>
    )
}

export default Navbar