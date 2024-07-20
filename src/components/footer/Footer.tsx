import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import './footer.scss'
export default function Footer() {

    const [navId, setNavId] = useState("");
    const search = useLocation();
    useEffect(() => {
        const hash = search.hash.replace("#", "");
        setNavId(hash);
    }, [setNavId, search]);
    return (
        <div className="footer">
            <div className="content">
                <div className="wrapper">
                    {/* <div className="logo">
                        <HashLink to="#home"> <img src="/assets/logo.png" alt="" /></HashLink>
                    </div> */}
                    <div className="navList">
                            <ul>
                                <li className={navId === "" ? "selected" : ""}>
                                    <HashLink to="/" smooth>Home</HashLink>
                                </li>
                                <li className={navId === "projects" ? "selected" : ""}>
                                    <HashLink to="/#projects" smooth>Projects</HashLink>
                                </li>
                                <li className={navId === "skills" ? "selected" : ""}>
                                    <HashLink to="/#skills" smooth>Skills</HashLink>
                                </li>
                                <li className={navId === "portfolio" ? "selected" : ""}>
                                    <HashLink to="/#portfolio" smooth>Portfolio</HashLink>
                                </li>
                                <li className={navId === "team" ? "selected" : ""}>
                                    <HashLink to="/#team" smooth>Team</HashLink>
                                </li>
                                <li className={navId === "contact" ? "selected" : ""}>
                                    <HashLink to="/#contact" smooth>Contact</HashLink>
                                </li>

                            </ul>
                        </div>
                </div>
            </div>
        </div>

    )
}

