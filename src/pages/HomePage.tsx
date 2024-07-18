// import Loading from "components/loading/Loading";
import Loading from "components/loading/Loading";
import Topbar from "components/topbar/Topbar";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Home from "components/home/Home";
import Projects from "components/projects/Projects";
import Skills from "components/skills/Skills";
import Portfolio from "components/portfolio/Portfolio";
import Testimonials from "components/testimonials/Testimonials";
import Contact from "components/contact/Contact";
import Footer from "components/footer/Footer";
import { useMediaQuery } from 'react-responsive';
import Menu from "components/menu/Menu";
import Team from "components/team/Team";
export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  window.onload = () => {
    setIsLoading(false);
  };
  const isTabletOrMobile = useMediaQuery({ query: 'screen and (max-width: 768px) and (orientation:portrait)' })
  useEffect(() => {
    
    if (!isTabletOrMobile) {
        setMenuOpen(false);
    }
}, [isTabletOrMobile]);
    useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 500);
    }, [setIsLoading]);
  return (
    <>
      <Loading isLoading={isLoading} />
      
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="app" style={{backgroundImage : `url('/assets/bg_01.png')`}}>
          <Topbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
          <Home/>
          <Projects/>
          <Skills/>
          <Portfolio/>
          <Testimonials/>
          <Team/>
          <Contact/>
          <Footer/>
      </div>
    </>
  );
}

