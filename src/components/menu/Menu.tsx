import "./menu.scss"
import {HashLink} from 'react-router-hash-link'
type MenuType = {
    menuOpen : boolean;
    setMenuOpen(flag:boolean):void;
};

export default function Menu({menuOpen, setMenuOpen}:MenuType) {
    return (
        <div className={"sidebar " + (menuOpen && "active")}>
            <div className="close" onClick={()=>setMenuOpen(false)}>
                <img src="/assets/icons/icon_arrow_01.svg" alt="" />
            </div>
            <ul>

                <li onClick = {()=> setMenuOpen(false)} className = {"menuItem1 " + (menuOpen && "active")}>
                    <HashLink to="/" smooth>HOME</HashLink>
                </li>
                <li onClick = {()=> setMenuOpen(false)} className = {"menuItem2 " + (menuOpen && "active")}>
                    <HashLink to="/#projects" smooth>Projects</HashLink>
                </li>
                <li onClick = {()=> setMenuOpen(false)} className = {"menuItem3 " + (menuOpen && "active")}>
                    <HashLink to="/#skills" smooth>Skills</HashLink>
                </li>
                <li onClick = {()=> setMenuOpen(false)} className = {"menuItem4 " + (menuOpen && "active")}>
                    <HashLink to="/#portfolio" smooth>Portfolio</HashLink>
                </li>

                <li onClick = {()=> setMenuOpen(false)} className = {"menuItem5 " + (menuOpen && "active")}>
                    <HashLink to="/#team" smooth>Team</HashLink>
                </li>
                 <li onClick = {()=> setMenuOpen(false)} className = {"menuItem6 " + (menuOpen && "active")}>
                    <HashLink to="/#contact" smooth>Contact</HashLink>
                </li>
                
                <li onClick = {()=> setMenuOpen(false)} className = {"menuItem7 " + (menuOpen && "active")}>
                    <div className="socialLinks">
                        <a href="http://discord.gg/" className = "" target="_blank"rel="noreferrer"><i className="fab fa-discord"></i></a> 
                        <a href="https://twitter.com/" className = "" target="_blank"rel="noreferrer"><i className="fab fa-twitter"> </i></a> 
                        <a href="https://www.linkedin.com/" className = "" target="_blank"rel="noreferrer"><i className="fab fa-linkedin-in"></i></a> 
                        <a href="https://www.facebook.com/" className = "" target="_blank"rel="noreferrer"><i className="fab fa-facebook-f"></i></a> 
                        
                    </div>
                </li>
            </ul>
        </div>
    )
}

