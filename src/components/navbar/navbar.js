import './navbar.css'
import nameImg from '../../images/name.jpeg'

const NavbarComponent = () => {
    return (
        <div className="navbar">
           <div className="nav-container">
              <img className='logo' src={nameImg} alt="logo"/>
              <a className='nav-link no-background' href='https://www.google.com/'>WhiteList Game</a>
              <a className='nav-link no-background' href='https://www.google.com/'>Insta</a>
              <a className='nav-link background' href='https://www.google.com/'>Twitter</a>
              <a className='nav-link background' href='https://www.google.com/'>Discord</a>
              <a className='nav-link background' href='https://www.google.com/'>MetaMask</a>
           </div>
        </div>
    )
}

export default NavbarComponent