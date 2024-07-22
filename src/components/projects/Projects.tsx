/* eslint-disable */

import './projects.scss'
import CountUp from 'react-countup';
import { useMediaQuery } from 'react-responsive';

export default function Projects() {
    const isTabletOrMobile = useMediaQuery({ query: 'screen and (max-width: 768px) and (orientation:portrait)' })
    return (
        <div className="projects" id='projects' style={{ backgroundImage: `url(./assets/imgs/blog_bg.jpg)` }}>
            <div className="content">
                <h1></h1>
                <div className="title" data-aos="fade-up">
                    <div className="line"></div>
                    <h1>Projects</h1>
                </div>
                <div className="wrapper">
                    <div className="left" data-aos="fade-right">
                        <div className="logo">
                            <img src="/assets/logo_icon.png" alt="" />
                        </div>

                    </div>
                    <div className="center" data-aos="fade-up">
                        <div className="counter">
                            <div className="counter_content">
                                <div className="main_text">
                                <h2><CountUp end={50} duration={5} /> </h2>+
                                </div>
                                
                                <div className='sub'>
                                    <p>CUSTOM PROJECTS</p>
                                    <img src="/assets/imgs/zill-m1-line-a.png" alt="" />
                                </div>
                            </div>

                        </div>

                        {/* <div className="img_list">
                            <div className="card card1">
                                <div className="card_content">
                                    {isTabletOrMobile ?
                                        <img src="/assets/imgs/icon_binance_01.png" alt="" className='image icon1' /> :
                                        <img src="/assets/imgs/icon_binance.png" alt="" className='image icon1' />
                                    }
                                </div>
                            </div>
                            <div className="card card2">
                                <div className="card_content">

                                    <img src="/assets/imgs/icon_google.png" alt="" className='image icon2' />
                                </div>
                            </div>
                            <div className="card card2">
                                <div className="card_content">
                                    <img src="/assets/imgs/icon_apple.png" alt="" className='image icon2' />
                                </div>
                            </div>
                            <div className="card card1">
                                <div className="card_content">

                                    {isTabletOrMobile ?
                                        <img src="/assets/imgs/icon_upwork_01.png" alt="" className='image icon1' /> :
                                        <img src="/assets/imgs/icon_upwork.png" alt="" className='image icon1' />
                                    }
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="right" data-aos="fade-left">
                        <div className="label">
                            <img src="/assets/icons/stars.svg" alt="" />
                        </div>
                        <span>{(new Date().getFullYear())}</span>
                    </div>
                </div>


            </div>
            <img src="/assets/imgs/Landing-page-1-e1623240757885.png" alt="" className="ball2" />
            <img src="/assets/imgs/photo-1.png" alt="" className="ball1" />
            <img src="/assets/imgs/photo-1.png" alt="" className="ball3" />

        </div>

    )
}

