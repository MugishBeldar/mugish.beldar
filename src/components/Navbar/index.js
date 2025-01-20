import React, { useContext } from 'react'
import {Nav, NavLink, NavbarContainer, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink, ThemeButton} from './NavbarStyledComponent'
import {FaBars, FaLaptopCode} from 'react-icons/fa';
import {MdDarkMode} from 'react-icons/md'
import {Bio} from '../../data/constants';
import {ThemeContext} from '../../context/theme'
import {darkTheme, lightTheme} from '../../utils/Themes'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <Nav>
      <NavbarContainer style={{backgroundColor:`${theme==='lightTheme'?lightTheme.navBackgroundColor:''}`}}>
        <a style={{display: "flex", alignItems: "center", marginBottom: '20;', cursor: 'pointer', textDecoration: 'none'}} href='https://mugishbeldar.onrender.com/#about'>
          <FaLaptopCode size="2rem" />
        </a>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        <ThemeButton onClick={toggleTheme}><MdDarkMode size={'2rem'} /></ThemeButton>
        {
          isOpen &&
          <MobileMenu style={{backgroundColor:`${theme==='darkTheme'?darkTheme.card:lightTheme.card}`}} isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>


            <GitHubButton style={{padding: '10px 16px', backgroundColor: `${theme==='darkTheme'?darkTheme.primary:lightTheme.primary}`, color: 'white', width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar