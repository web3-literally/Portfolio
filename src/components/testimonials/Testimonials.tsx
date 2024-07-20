import './testimonials.scss'

export default function Testimonials() {
    return (
        <div className="testimonials" >
            <div className="content">
                <div className="title" data-aos="fade-right">
                    <div className="line"></div>
                    <h1>Testimonials</h1>
                    <img src="/assets/icons/icon_star.svg" alt="" />
                </div>
                <div className="wrapper">
                    <div className="team-item" data-aos="fade-right">
                        <div className="item_content">
                            <img src="/assets/avatars/christoph-a-muller-160x160.png" alt="" />
                            <span>
                                <h3>Christoph A. Müller</h3>
                                <p>They really understood our needs and had a great work culture. They took care of their teams!</p>
                                <h4>Projects</h4>
                                <p>API Development, Web Development, DevOps Managed</p>
                            </span>
                            <div className="item_bottom">
                                <div className="line"></div>
                                <div className="stars">★★★★★</div>
                            </div>

                        </div>
                    </div>

                    <div className="team-item" data-aos="fade-right">
                        <div className="item_content">
                            <img src="/assets/avatars/marek-wojtaszek-160x160.png" alt="" />
                            <span>
                                <h3>Manos Koumandakis</h3>
                                <p>They were very responsive and reactive both in the planning and execution of the project. Thank you!</p>
                                <h4>Projects</h4>
                                <p>Web Development</p>
                            </span>
                            <div className="item_bottom">
                                <div className="line"></div>
                                <div className="stars">★★★★★</div>
                            </div>

                        </div>
                    </div>

                    <div className="team-item" data-aos="fade-right">
                        <div className="item_content">
                            <img src="/assets/avatars/rony-atoun-160x160.png" alt="" />
                            <span>
                                <h3>Rony Atoun</h3>
                                <p>They demonstrate a combination of responsiveness, proactivity, high-quality staff, and an overall can-do attitude.</p>
                                <h4>Projects</h4>
                                <p>DevOps Managed Services, IT Staff Augmentation</p>
                            </span>
                            <div className="item_bottom">
                                <div className="line"></div>
                                <div className="stars">★★★★★</div>
                            </div>

                        </div>
                    </div>

                    <div className="team-item" data-aos="fade-left">
                        <div className="item_content">
                            <img src="/assets/avatars/amer-attar-160x160.png" alt="" />
                            <span>
                                <h3>Amer Attar</h3>
                                <p>Their communication, flexibility, and ability to quickly adapt to scope changes was impressive.</p>
                                <h4>Projects</h4>
                                <p>UX/UI Design</p>
                            </span>
                            <div className="item_bottom">
                                <div className="line"></div>
                                <div className="stars">★★★★★</div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="label" data-aos="fade-left">

                    <img src="/assets/icons/stars_02.svg" alt="" />
                </div>
            </div>

        </div>

    )
}

