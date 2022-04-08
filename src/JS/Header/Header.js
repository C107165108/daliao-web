import { Link } from 'react-router-dom';
import '../../Style/Header/Header.scss';
import { pic } from '../../pic/pic';
import menu from '../../pic/menu.png';


import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';

export default function Header(props) {


    const { homeLogo, about } = props;
    const { fb, ig } = about;

    const [open, setOpen] = useState(false)

    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className='header'>
            <div className='header-content'>

                <Link to='/'><img src={homeLogo} /></Link>

                <div>

                    <img className='header-menu' src={menu} onClick={() => toggleDrawer()} />
                    <Drawer
                        className='header-link-drawer'
                        anchor='right'
                        open={isOpen}
                        onClose={() => toggleDrawer()}
                        sx={{ width: 250 }}
                    >
                        <div className='header-link-list'>
                            <Link className='header-link' style={{ textDecoration: 'none', color: '#aaa' }} to='/' ><p className='header-link-p'>首頁</p></Link>
                            <Link className='header-link' style={{ textDecoration: 'none', color: '#aaa' }} to='/travel'><p className='header-link-p'>小旅行</p></Link>
                            <Link className='header-link' style={{ textDecoration: 'none', color: '#aaa' }} to='/news'><p className='header-link-p'>最新消息</p></Link>
                            <Link className='header-link' style={{ textDecoration: 'none', color: '#aaa' }} to='/knowledge'><p className='header-link-p'>小知識</p></Link>
                        </div>
                    </Drawer>

                </div>

            </div>
            <div className='header-social'>
                <a href={fb} target="_blank" > <img src={pic.DNS + pic.fbIconBK} /></a>
                <a href={ig} target="_blank" > <img src={pic.DNS + pic.igIconBK} /></a>
            </div>
        </div >
    );
}