import './team.scss'
import { useEffect,  useState } from 'react';

type LoadingType = {
    setIsLoading?(flag: boolean): void;
};

export default function Team({ setIsLoading }: LoadingType) {
    const [imgCount, setImgCount] = useState(0)
    useEffect(() => {
        if (imgCount === 6) {
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);
        }
    }, [imgCount, setIsLoading]);
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }

    return (
        <div className="team" id='team'>
            <div className="content">
                <div className="title" data-aos="fade-right">
                    <h1 className='title1 text-shadow'><span>OUR</span></h1>
                    <h1 className='title2 '>TEAM<span>TEAM</span></h1>
                    <div className="line"></div>
                </div>
                <div className="wrapper">

                    <div className="team-item" data-aos="fade-right">
                        <div className="item_content">
                            <img src="/assets/imgs/Ellipse 834.png" alt="" onLoad={onLoad} />
                            <span>
                                <h3>RAny D.</h3>
                                <p>Everything can be done better than it has been done so far.</p>
                                <div className="line"></div>
                            </span>
                            <div className="socialLinks">
                                <a href="discord.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-discord"></i>
                                </a>

                                <a href="facebook.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="team-item" data-aos="fade-right">
                        <div className="item_content">
                            <img src="/assets/imgs/Ellipse 842 (1).png" alt="" onLoad={onLoad} />
                            <span>
                                <h3>GaRRy H.</h3>
                                <p>Everything can be done better than it has been done so far.</p>
                                <div className="line"></div>
                            </span>
                            <div className="socialLinks">
                                <a href="discord.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-discord"></i>
                                </a>

                                <a href="facebook.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="team-item" data-aos="fade-right">
                        <div className="item_content">
                            <img src="/assets/imgs/Ellipse 842 (2).png" alt="" onLoad={onLoad} />
                            <span>
                                <h3>Mary A.</h3>
                                <p>To succeed, you need to either change your dreams or improve your skills.</p>
                                <div className="line"></div>
                            </span>
                            <div className="socialLinks">
                                <a href="discord.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-discord"></i>
                                </a>

                                <a href="facebook.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="label">
                    <img src="/assets/icons/stars_03.svg" alt="" />
                </div>
            </div>

        </div>

    )
}

