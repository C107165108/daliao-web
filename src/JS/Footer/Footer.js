import '../../Style/Footer/Footer.scss';
import GoogleMapReact from 'google-map-react';
import map from '../../pic/map.png';
import fbwt from '../../pic/fbwt.png';
import igwt from '../../pic/igwt.png';


export default function Footer(props) {

    const { homeLogo, about } = props;
    const {  adress, mail, time, fb, ig } = about;

    // const center = {
    //     lat: 59.95,
    //     lng: 30.33
    // }
    // const zoom = 11
    // const AnyReactComponent = ({ text }) => <div>{text}</div>;

    return (
        <div className="footer-content">




            <div className="footer-contant">
                <img src={homeLogo} />

                <p >Time {time}</p>
                <p >Mail {mail}</p>
                <p >Adress {adress}</p>
                {/* <p className="footer-contant-p">{map._lat}</p>
                        <p className="footer-contant-p">{map._long}</p> */}

                <div className="footer-social-media-box">
                    <a href={fb} target="_blank" ><img src={fbwt}/></a>
                    <a href={ig} target="_blank" ><img src={igwt}/></a>

                </div>
            </div>

            <img src={map} style={{  width: 600 }}/>
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