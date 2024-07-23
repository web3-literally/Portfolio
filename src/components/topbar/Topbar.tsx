import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./topbar.scss";

type MenuType = {
  menuOpen?: boolean;
  setMenuOpen(flag: boolean): void;
};
export default function Topbar({ menuOpen, setMenuOpen }: MenuType) {

  const [navId, setNavId] = useState("");
  const search = useLocation();
  useEffect(() => {

    if (search.hash.includes("#")) {
      const hash = search.hash.replace("#", "");
      setNavId(hash);
    } else {
      const hash = search.pathname.replace("/", "");
      setNavId(hash);
    }

  }, [setNavId, search]);
  return (
    <div className="topbar">
      <div className="logo">
        <HashLink to="/">
          <img src="/assets/logo.png" alt="" />
        </HashLink>
      </div>

      <div className="navList">
        <ul>
          <li className={navId === "" ? "selected" : ""}>
            <HashLink to="/#home" smooth>Home</HashLink>
          </li>
          <li className={navId === "projects" ? "selected" : ""}>
            <HashLink to="/#projects" smooth>Projects</HashLink>
          </li>
          <li className={navId === "skills" ? "selected" : ""}>
            <HashLink to="/#skills" smooth>Skills</HashLink>
          </li>
          {/* <li className={navId === "portfolio" ? "selected" : ""}>
            <HashLink to="/#portfolio" smooth>Portfolio</HashLink>
          </li> */}
          <li className={navId === "team" ? "selected" : ""}>
            <HashLink to="/#team" smooth>Team</HashLink>
          </li>

          <li className={navId === "contact" ? "selected" : ""}>
            <HashLink to="/#contact" smooth>Contact</HashLink>
          </li>

        </ul>
      </div>
      {/* <div className="social_list">
        <a href="https://discord.gg/bKNq3KUzNS" className="" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
        <a href="https://x.com/snowleopard0809" className="" target="_blank" rel="noreferrer"><i className="fab fa-twitter"> </i></a>
        <a href="https://t.me/SnowBeautyLove" className="" target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>
        <a href="https://github.com/web3-literally" className="" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>

      </div> */}

      <div className={(menuOpen ? "hamburger active" : "hamburger")} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>

    </div>
  );
}
