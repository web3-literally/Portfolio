import MainButton from 'components/buttons/MainButton'
import { HashLink } from "react-router-hash-link";
import './skills.scss'
const skill_list = [
    { img: '/assets/skills/react.svg', txt: 'React' },
    { img: '/assets/skills/webpack.png', txt: 'Webpack' },
    { img: '/assets/skills/docker.png', txt: 'Docker' },
    { img: '/assets/skills/github_action.png', txt: 'Github Actions' },
    { img: '/assets/skills/google-cloud.svg', txt: 'Google Cloud Platform' },
    { img: '/assets/skills/typescript.png', txt: 'Type script' },
    { img: '/assets/skills/insomnia.svg', txt: 'Insomnia' },
    { img: '/assets/skills/apollo_graph_ql.png', txt: 'Apollo Graph QL' },
    { img: '/assets/skills/heroku.png', txt: 'Heroku' },
    { img: '/assets/skills/redux-icon-2048x1945-ahvhunxp.png', txt: 'Redux' },
    { img: '/assets/skills/rxjs-1.svg', txt: 'RxJs' },
    { img: '/assets/skills/2048px-GraphQL_Logo.svg.png', txt: 'GraphQL' },
    { img: '/assets/skills/sass-icon-1024x1024-sxpvtqae.png', txt: 'Sass' },
    { img: '/assets/skills/styled_component.png', txt: 'Styled Components' },
    { img: '/assets/skills/Git_icon.svg.png', txt: 'Git' },
    { img: '/assets/skills/javascript.svg', txt: 'Javascript' },
    { img: '/assets/skills/nestjs.png', txt: 'NestJs' },
    { img: '/assets/skills/vue-js-1-1.svg', txt: 'Vuejs' },
    { img: '/assets/skills/angular-js.svg', txt: 'Angular' },
    { img: '/assets/skills/npm-icon.svg', txt: 'NPM' },
    { img: '/assets/skills/html-1.svg', txt: 'HTML5' },
    { img: '/assets/skills/brave-browser-icon-2048x2048-2d3r96ai.png', txt: 'Brave Browser' },
    { img: '/assets/skills/rollup.svg', txt: 'Rollup' },
    { img: '/assets/skills/d3js-plain-icon-512x485-5q3d7r1d.png', txt: 'D3.js' },
    { img: '/assets/skills/file_type_light_prettier_icon_130445.webp', txt: 'Prettier' },
    { img: '/assets/skills/mongodb.svg', txt: 'MongoDB' },
    { img: '/assets/skills/nodejs.svg', txt: 'Nodejs' },
]
export default function Skills() {

    return (
        <div className="skills" id='skills' style={{ backgroundImage: `url(./assets/imgs/skill_bg_1.png)` }}>
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
                        <HashLink to="#contact"><MainButton label={'Get A Quote'} /> </HashLink>
                    </div>
                    <div className="right" data-aos="fade-left">
                        <h2>Cloud Services</h2>
                        <p>Essential tools to launch your creation, all in one place. AWS (EC2, S3, Lambda), Azure, Google Cloud</p>
                        {/* <div className="coming-soon">Coming Soon</div> */}
                    </div>
                </div>
                <div className="label" data-aos="fade-left">
                    <img src="/assets/icons/stars_03.svg" alt="" />
                </div>
                <div className="skill_view">
                    <div className="skill-list" data-aos="fade-up">
                        {skill_list.map((d, k) => (
                            <div className={`item item${k + 1}`} key={k}>
                                <img src={d.img} alt="" />
                                <p>{d.txt}</p>
                            </div>
                        ))}
                        {skill_list.map((d, k) => (
                            <div className={`item item${k + 1}`} key={k}>
                                <img src={d.img} alt="" />
                                <p>{d.txt}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>

    )
}

