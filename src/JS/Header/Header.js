import { Link } from 'react-router-dom';
import '../../Style/Header/Header.scss';
import { pic } from '../../pic/pic';

export default function Header(props) {


    const { homeLogo, about } = props;
    const { fb, ig } = about;

    return (
        <div className='header'>
            <div className='header-content'>

                <Link to='/'><img src={homeLogo} /></Link>

                <div>
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to='/' >首頁</Link>
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to='/travel'>小旅行</Link>
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to='/news'>最新消息</Link>
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to='/knowledge'>小知識</Link>
                </div>

            </div>
            <div>
                <a href={fb} target="_blank" > <img src={pic.DNS + pic.fbIconBK} /></a>
                <a href={ig} target="_blank" > <img src={pic.DNS + pic.igIconBK} /></a>
            </div>
        </div>
    );
}