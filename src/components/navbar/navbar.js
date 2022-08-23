import './navbar.css'
import nameImg from '../../images/name.jpeg'

const NavbarComponent = () => {
    return (
        <div className="navbar">
           <div className="nav-container">
              <img className='logo' src={nameImg}/>
              <a className='nav-link no-background' href='#'>WhiteList Game</a>
              <a className='nav-link no-background' href='#'>Insta</a>
              <a className='nav-link background' href='#'>Twitter</a>
              <a className='nav-link background' href='#'>Discord</a>
              <a className='nav-link background' href='#'>MetaMask</a>
           </div>
        </div>
    )
}

export default NavbarComponent