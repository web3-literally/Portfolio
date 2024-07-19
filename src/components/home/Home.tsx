import './home.scss'
import MainButton from 'components/buttons/MainButton';
import { HashLink } from "react-router-hash-link";

export default function Home() {

    return (
        <div className="home" id='home' style={{ backgroundImage: `url(./assets/BG-14.jpg)` }}>
            <div className="content">
                <div className="title">
                    <h1>Build your Dream website</h1>
                    <img src="/assets/imgs/zill-m2-line-a.png" alt="" />
                </div>
                <div className="strok_titles">
                    <div className="strok_title1">WITH OUR TEAM</div>
                    <div className="strok_title2">WITH OUR TEAM</div>
                    <div className="no_strok">WITH OUR TEAM</div>
                </div>

                <div className="btns">
                        <HashLink to="#contact"><MainButton label={'Get A Quote'}/> </HashLink>
                    </div>
                {/* <div className="left" data-aos="fade-right">
                    
                    <h1 className='title1 text-shadow'>0xWeb3 Collective</h1>
                    <h1 className='title2 '>Blockchain Engineers<span>Blockchain Engineers</span></h1>
                    <div className="btns">
                        <HashLink to="#contact"><MainButton label={'Get A Quote'}/> </HashLink>
                    </div>
                </div> */}
                {/* <div className="right"data-aos="fade-left">
                    <img src="/assets/imgs/coin_01.png" alt="" className='coin1'/>
                    <img src="/assets/imgs/coin_02.png" alt="" className='coin2'/>
                    <img src="/assets/imgs/coin_03.png" alt="" className='coin3'/>
                </div> */}
            </div>
            <div className="desc">
                <img src="/assets/icons/icon_star.svg" alt="" />
            </div>

        </div>

    )
}

