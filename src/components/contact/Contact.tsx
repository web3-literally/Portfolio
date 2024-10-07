import './contact.scss'

export default function Contact() {

    return (
        <div className="contact">
            <img src="/assets/imgs/footer_bg_1.png" alt="" className='bg' />
            <div className="scroll" id='contact'></div>
            <div className="content">
                <div className="title" data-aos="fade-up">
                    <h1>Contact</h1>
                    <div className="line"></div>
                </div>
                <div className="wrapper">
                    <div className="connect_div">
                        <div className="logo">
                            <a href="#home"> <img src="/assets/logo.png" alt="" /></a>
                        </div>
                        <div className="socialLinks">
                        <a href="https://discord.gg/bKNq3KUzNS" className="" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
                        <a href="https://x.com/snowleopard0809" className="" target="_blank" rel="noreferrer"><i className="fab fa-twitter"> </i></a>
                        <a href="https://t.me/SnowBeautyLove" className="" target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>

                    </div>

                    </div>
                    

                </div>
                {/* <div>
                    <img src="/assets/imgs/coin_01.png" alt="" className='coin1' />
                    <img src="/assets/imgs/coin_02.png" alt="" className='coin2' />
                    <img src="/assets/imgs/coin_03.png" alt="" className='coin3' />
                </div> */}


            </div>

        </div>

    )
}

