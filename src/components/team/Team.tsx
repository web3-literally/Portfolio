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
                    <h1 className='title1 text-shadow'><span>Our</span></h1>
                    <h1 className='title2 '>Team<span>Team</span></h1>
                    <div className="line"></div>
                </div>
                <div className="wrapper">

                    <div className="team-item" data-aos="fade-right">
                        <div className="item_content">
                            <img src="/assets/avatars/team_02.jpg" alt="" onLoad={onLoad} />
                            <span>
                                <h3>TieLong Li.</h3>
                                <h4>Founder</h4>
                                <p>Turning ideas into full stack realities.</p>
                                <div className="line"></div>
                            </span>
                            {/* <div className="socialLinks">
                                <a href="discord.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-discord"></i>
                                </a>

                                <a href="facebook.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div> */}
                        </div>
                    </div>

                    <div className="team-item" data-aos="fade-right">
                        <div className="item_content">
                            <img src="/assets/avatars/team_03.jpg" alt="" onLoad={onLoad} />
                            <span>
                                <h3>GaRRy Wang.</h3>
                                <h4>Co-Founder</h4>
                                <p>Everything can be done better than it has been done so far.</p>
                                <div className="line"></div>
                            </span>
                            {/* <div className="socialLinks">
                                <a href="discord.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-discord"></i>
                                </a>

                                <a href="facebook.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div> */}
                        </div>
                    </div>

                    <div className="team-item" data-aos="fade-right">
                        <div className="item_content">
                            <img src="/assets/avatars/team_04.jpg" alt="" onLoad={onLoad} />
                            <span>
                                <h3>Manry Cheng.</h3>
                                <h4>Business Manager</h4>
                                <p>To succeed, you need to either change your dreams or improve your skills.</p>
                                <div className="line"></div>
                            </span>
                            {/* <div className="socialLinks">
                                <a href="discord.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-discord"></i>
                                </a>

                                <a href="facebook.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div> */}
                        </div>
                    </div>

                    <div className="team-item" data-aos="fade-right">
                        <div className="item_content">
                            <img src="/assets/avatars/team_05.jpg" alt="" onLoad={onLoad} />
                            <span>
                                <h3>Lucca Wang.</h3>
                                <h4>Full Stack Engineer</h4>
                                <p>Crafting solutions from frontend design to backend logic.</p>
                                <div className="line"></div>
                            </span>
                            {/* <div className="socialLinks">
                                <a href="discord.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-discord"></i>
                                </a>

                                <a href="facebook.com" target="_blank" className="iconBtn">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div> */}
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

