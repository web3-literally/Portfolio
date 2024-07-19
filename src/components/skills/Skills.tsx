import MainButton from 'components/buttons/MainButton'
import { HashLink } from "react-router-hash-link";
import './skills.scss'
const skill_list = [
    {
        img : '/assets/imgs/skills_3d_img_01.png',
        txt : 'Full Stack'
    },
    {
        img : '/assets/imgs/skills_3d_img_02.png',
        txt : 'Business Analysis'
    },
    {
        img : '/assets/imgs/skills_3d_img_03.png',
        txt : 'Data Science'
    },
    {
        img : '/assets/imgs/skills_3d_img_04.png',
        txt : 'Applictaion'
    },
    {
        img : '/assets/imgs/skills_3d_img_05.png',
        txt : 'Development'
    }
]
export default function Skills() {
    
    return (
        <div className="skills" id = 'skills' style={{ backgroundImage: `url(./assets/imgs/skill_bg.png)` }}>
            <div className="content">
                <div className="title" data-aos="fade-up">
                    <div className="line"></div>
                    <h1>Skills &</h1>
                    <h3>Services</h3>
                </div>
                <div className="wrapper">
                    <div className="left" data-aos="fade-right">
                        <h2>Custom Technical Solutions</h2>
                        <p>Our team provides custom development solutions.</p>
                        <HashLink to="#contact"><MainButton label={'Get A Qoute'} /> </HashLink>
                    </div>
                    <div className="right" data-aos="fade-left">
                        <h2>Cloud Services</h2>
                        <p>Essential tools to launch your creation, all in one place. AWS (EC2, S3, Lambda), Azure, Google Cloud</p>
                        <div className="coming-soon">Coming Soon</div>
                    </div>
                </div>
                <div className="label"data-aos="fade-left">
                    <img src="/assets/icons/stars_03.svg" alt="" />
                </div>
                <div className="skill-list" data-aos="fade-up">
                    {skill_list.map((d, k)=>(
                        <div className={`item item${k + 1}`} key = {k}>
                            <img src={d.img} alt="" />
                            <p>{d.txt}</p>
                        </div>
                    ))}

                </div>
                
            </div>
                
        </div>

    )
}

