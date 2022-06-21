import { Link } from 'react-router-dom';
import '../../Style/Header/Header.scss';

import menu from '../../pic/icon/menu.png';
import menuwt from '../../pic/icon/menuwt.png';
import fbwt from '../../pic/icon/fbwt.png';
import igwt from '../../pic/icon/igwt.png';
import fbbk from '../../pic/icon/fb.png';
import igbk from '../../pic/icon/ig.png';
import homeLogo from '../../pic/icon/homeLogo.png';

import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';

import { auth } from '../../firebase-config';
import { signOut } from 'firebase/auth';

export default function Header(props) {


    const { about, isLogin } = props;
    const { fb, ig } = about;

    const [open, setOpen] = useState(false)

    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    const logOut = async () => {
        await signOut(auth)
    }

    return (
        <div className='header' >
            <div className='header-content' >

                <Link to='/'><img src={homeLogo} /></Link>

                <div>

                    <img className='header-menu' src={window.location.pathname == "/" ? menuwt : menu} onClick={() => toggleDrawer()} />
                    <Drawer
                        className='header-link-drawer'
                        anchor='right'
                        open={isOpen}
                        onClose={() => toggleDrawer()}
                        sx={{ width: 250 }}
                    >
                        <div className='header-link-list'>
                            <Link className='header-link' style={{ textDecoration: 'none', color: '#aaa', textAlign: 'center' }} to='/' ><h3 className='header-link-p'>首頁</h3></Link>
                            <hr /><Link className='header-link' style={{ textDecoration: 'none', color: '#aaa', textAlign: 'center' }} to='/travel'><h3 className='header-link-p'>小旅行</h3></Link>
                            <hr /><Link className='header-link' style={{ textDecoration: 'none', color: '#aaa', textAlign: 'center' }} to='/news'><h3 className='header-link-p'>最新消息</h3></Link>
                            <hr /><Link className='header-link' style={{ textDecoration: 'none', color: '#aaa', textAlign: 'center' }} to='/knowledge'><h3 className='header-link-p'>小知識</h3></Link>
                            {isLogin ?
                                <>
                                    <hr /><Link className='header-link' style={{ textDecoration: 'none', color: '#aaa', textAlign: 'center' }} to='/edit'><h3 className='header-link-p'>編輯</h3></Link>
                                    <hr /><Link className='header-link' style={{ textDecoration: 'none', color: '#aaa', textAlign: 'center' }} to='/add'><h3 className='header-link-p'>新增</h3></Link>
                                    <div onClick={logOut}>登出</div>
                                </>
                                : ''}


                        </div>
                    </Drawer>

                </div>

            </div>
            <div className='header-social'>
                <a href={fb} target="_blank" > <img src={window.location.pathname == "/" ? fbwt : fbbk} /></a>
                <a href={ig} target="_blank" > <img src={window.location.pathname == "/" ? igwt : igbk} /></a>
            </div>
        </div >
    );
}