import '../../Style/Footer/Footer.scss';
import GoogleMapReact from 'google-map-react';

export default function Footer(props) {

    const { homeLogo, about } = props;
    const { map, adress, mail, time, fb, ig } = about;
    
    // const center = {
    //     lat: 59.95,
    //     lng: 30.33
    // }
    // const zoom = 11
    // const AnyReactComponent = ({ text }) => <div>{text}</div>;
    
    return (
        <div className="footer-content">
            <div className="footer-content-width">

                <img src={homeLogo} />

                <div className="footer-contant">
                    <div>
                        <p className="footer-contant-p">{time}</p>
                        <p className="footer-contant-p">{mail}</p>
                        <p className="footer-contant-p">{adress}</p>
                        <p className="footer-contant-p">{map._lat}</p>
                        <p className="footer-contant-p">{map._long}</p>
                    </div>
                    <div className="footer-social-media-box">
                        <a href={fb} target="_blank" >fb</a>
                        <a href={ig} target="_blank" >ig</a>

                    </div>
                </div>

            </div>

            {/* <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key:  'AIzaSyDm0A5wQp_K7uvdSUBwDX6hrZL2xSB3W3Q'}}
                  
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div> */}

        </div>
    );
}