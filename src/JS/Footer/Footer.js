

import '../../Style/Footer/Footer.scss';
export default function Footer(props) {
    const { homeLogo } = props;
    return (
        <div className="footer-content">
            <div className="footer-content-width">
            
                <img src={homeLogo} />
                <div className="footer-contant">
                    <div>
                        <p className="footer-contant-p">07-786-1838 (10:00～17:30)</p>
                        <p className="footer-contant-p">ftnk0002@gmail.com</p>
                        <p className="footer-contant-p">831 高雄市大寮區力行路88-1號。</p>
                    </div>
                    <div className="footer-social-media-box">
                        <div>fb</div>
                        <div>ig</div>
                    </div>
                </div>
            </div>

        </div>
    );
}