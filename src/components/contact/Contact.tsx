import './contact.scss'

export default function Contact() {

    return (
        <div className="contact">
            <div className="scroll" id='contact'></div>
            <div className="content">
                <div className="title" data-aos="fade-up">
                    <h1>Contact</h1>
                    <div className="line"></div>
                </div>
                <div className="wrapper">
                    <div className="connect_div">
                        <img src="/assets/imgs/crystall.png" alt="" />
                        <a href="discord.com" target="_blank" className="iconBtn">
                            Join Our Discord<i className="fab fa-discord"></i>
                        </a>
                    </div>


                </div>
                <div>
                    <img src="/assets/imgs/coin_01.png" alt="" className='coin1' />
                    <img src="/assets/imgs/coin_02.png" alt="" className='coin2' />
                    <img src="/assets/imgs/coin_03.png" alt="" className='coin3' />
                </div>


            </div>

        </div>

    )
}

