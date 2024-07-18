import './portfolio.scss'

export default function PortCard({ data }) {

    return (
        <div className="port_card">
            <div className="card_content">
                <div className="img_div">
                <img src={data.img} alt="" />

                </div>
            </div>
        </div>

    )
}

