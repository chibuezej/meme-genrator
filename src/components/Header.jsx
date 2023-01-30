import './App.css'
import trollFace from '../assets/Troll Face.png'
function Header () {
    return(
        <header className='header'>
            <img src={trollFace} alt="troll-face" className='header-image' />
            <h2 className='header-title'>Meme Generator</h2>
            <h3 className='header-project'>React Course - Project 3</h3>
        </header>
    )
}

export default Header;