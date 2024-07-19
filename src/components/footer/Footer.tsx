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
            <div className="content" data-aos="fade-up">
                <div className="wrapper">
                    <div className="left">
                        <div className="logo pc">
                            <HashLink to="#home"> <img src="/assets/logo.png" alt="" /> Full stack <span> Engineers</span></HashLink>
                        </div>



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
                        <div className="socialLinks">
                            <a href="https://discord.gg/" className="" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
                            <a href="https://twitter.com/" className="" target="_blank" rel="noreferrer"><i className="fab fa-twitter"> </i></a>
                            <a href="https://www.linkedin.com/" className="" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.facebook.com/" className="" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>

                        </div>
                        <div className="logo mob">
                            <HashLink to="#home"> <img src="/assets/logo.png" alt="" /></HashLink>
                        </div>
                    </div>
                    <div className="right">
                        <div className="col">
                            <h3>Company</h3>
                            <div className="links">
                                <HashLink to="/" smooth>About Us</HashLink>
                                <HashLink to="/referral_program" smooth>Referral Program</HashLink>
                                <a href="/" className="" target="_blank" rel="noreferrer">Whitepaper</a>
                            </div>
                        </div>
                        <div className="col">
                            <h3>Resources</h3>
                            <div className="links">
                                <a href="https://github.com/web3-literally" className="" target="_blank" rel="noreferrer">Github</a>
                                <a href="https://medium.com/" className="" target="_blank" rel="noreferrer">Blog</a>
                                <HashLink to="/faqs" smooth>FAQs</HashLink>
                            </div>
                        </div>
                        <div className="col">
                            <h3>Legal</h3>
                            <div className="links">
                                <a href="/" className="" target="_blank" rel="noreferrer">Terms of Service</a>
                                <a href="/" className="" target="_blank" rel="noreferrer">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

