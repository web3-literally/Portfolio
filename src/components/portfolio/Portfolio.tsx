import { useState } from 'react'
import './portfolio.scss'
import PortCard from './Card';


const nft_list = [
    {
        img: '/assets/portfolio/NFT/ArenaApes.jpg',
    },
    {
        img: '/assets/portfolio/NFT/GENKI-NFT.jpg',
    },
    {
        img: '/assets/portfolio/NFT/LCFC.png',
    },
    {
        img: '/assets/portfolio/NFT/MetaSnaks.jpg',
    },
    {
        img: '/assets/portfolio/NFT/MintedFingers.jpg',
    },
    {
        img: '/assets/portfolio/NFT/NFT-Mint-USNFT.jpg',
    },
    {
        img: '/assets/portfolio/NFT/NFT-Operation-Takeover.gif',
    },
    {
        img: '/assets/portfolio/NFT/Ponzi.jpg',
    },
    {
        img: '/assets/portfolio/NFT/Radiant-Robot-Design.png',
    },
    {
        img: '/assets/portfolio/NFT/Spike The Mutant.jpg',
    },
    {
        img: '/assets/portfolio/NFT/Street Brawler.jpeg',
    },
    {
        img: '/assets/portfolio/NFT/TAXHAVENINU-Staking.png',
    },
    {
        img: '/assets/portfolio/NFT/zombie banana.jpeg',
    },
]

const dapps_list = [
    {
        img: '/assets/portfolio/dApps/BankPad.jpg',
    },
    {
        img: '/assets/portfolio/dApps/hextoysmarketplace.jpg',
    },
    {
        img: '/assets/portfolio/dApps/ICO-Soul-Mate-AI.png',
    },
    {
        img: '/assets/portfolio/dApps/ICO-SwissCheese.png',
    },
    {
        img: '/assets/portfolio/dApps/physics-launchpad.jpg',
    },
    {
        img: '/assets/portfolio/dApps/Pitbull.jpg',
    },
    {
        img: '/assets/portfolio/dApps/QUINT.jpg',
    },
    {
        img: '/assets/portfolio/dApps/The Science DAO.jpg',
    },
    {
        img: '/assets/portfolio/dApps/TradeHub-ICO.png',
    },
    {
        img: '/assets/portfolio/dApps/Yasha DAO.jpg',
    },
    {
        img: '/assets/portfolio/dApps/zkSync-Purple-Electricity-ICO.png',
    },
]

const blockchain_list = [
    {
        img: '/assets/portfolio/blocchain_integration/BlowFish.jpg',
    },
    {
        img: '/assets/portfolio/blocchain_integration/BUSD-Empires.jpg',
    },
    {
        img: '/assets/portfolio/blocchain_integration/BUSD-PizzaTower.png',
    },
    {
        img: '/assets/portfolio/blocchain_integration/Carslider.jpg',
    },
    {
        img: '/assets/portfolio/blocchain_integration/Destream.jpg',
    },
    {
        img: '/assets/portfolio/blocchain_integration/HOLLANTA.png',
    },
    {
        img: '/assets/portfolio/blocchain_integration/KindomCash-BUSD.jpg',
    },
    {
        img: '/assets/portfolio/blocchain_integration/KingdomCash.jpg',
    },
    {
        img: '/assets/portfolio/blocchain_integration/previewImg.jpg',
    },
    {
        img: '/assets/portfolio/blocchain_integration/Speakr.jpg',
    },

]


export default function Portfolio() {
    const [tabId, setTabId] = useState(0)
    
    return (
        <div className="portfolio" id='portfolio'>
            <div className="content">
                <div className="title" data-aos="fade-left">
                    <div className="line"></div>
                    <h1>Porfolio</h1>
                </div>
                <div className="tab-list" data-aos="fade-left">
                    <div className={`tab ${tabId === 0 ? 'active' : ''}`} onClick={() => setTabId(0)}> <span>Digital Assset Platform</span> </div>
                    <div className={`tab ${tabId === 1 ? 'active' : ''}`} onClick={() => setTabId(1)}><span>Decentralized Application</span></div>
                    <div className={`tab ${tabId === 2 ? 'active' : ''}`} onClick={() => setTabId(2)}><span>Game Platform</span></div>
                </div>

                <div className="tab-content" data-aos="fade-up">
                    {tabId === 0 &&
                        <div className="item-container">
                            {nft_list.map((d, k) => (
                                <div className="card_wrap" key={k}>
                                    <PortCard data={d} />
                                </div>
                            ))}
                        </div>
                    }
                    {tabId === 1 &&
                        <div className="item-container">
                            {dapps_list.map((d, k) => (
                                <div className="card_wrap" key={k}>
                                    <PortCard data={d} />
                                </div>
                            ))}
                        </div>
                    }
                    {tabId === 2 &&
                        <div className="item-container">
                            {blockchain_list.map((d, k) => (
                                <div className="card_wrap" key={k}>
                                    <PortCard data={d} />
                                </div>
                            ))}
                        </div>
                    }
                </div>


                <div className="label" data-aos="fade-right">
                    <img src="/assets/icons/stars_01.svg" alt="" />
                </div>
            </div>

        </div>

    )
}

